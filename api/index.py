from flask import Flask, render_template, request, redirect, url_for, session
import csv, os

app = Flask(__name__)
app.secret_key = 'smartcare_tn_secret_2024'

# ── All 17 symptoms from CSV ──
ALL_SYMPTOMS = [
    'fever', 'high_fever', 'body_pain', 'headache', 'rash',
    'chills', 'sweating', 'fatigue', 'nausea', 'vomiting',
    'cough', 'sore_throat', 'weight_loss', 'frequent_urination',
    'blurred_vision', 'chest_pain', 'dizziness',
]

# ── Core symptom tags per disease (based on CSV analysis: 50/50 = definitive, high = strong) ──
SYMPTOM_TAGS = {
    'fever':              ['Dengue', 'Malaria', 'Typhoid', 'Flu'],
    'high_fever':         ['Dengue', 'Malaria', 'Typhoid'],
    'body_pain':          ['Dengue', 'Malaria'],
    'headache':           ['Dengue', 'Malaria', 'Typhoid', 'Hypertension'],
    'rash':               ['Dengue'],
    'chills':             ['Malaria'],
    'sweating':           ['Malaria'],
    'fatigue':            ['Diabetes', 'Typhoid', 'Flu'],
    'nausea':             ['Typhoid', 'Hypertension'],
    'vomiting':           ['Typhoid', 'Hypertension'],
    'cough':              ['Flu'],
    'sore_throat':        ['Flu'],
    'weight_loss':        ['Diabetes'],
    'frequent_urination': ['Diabetes'],
    'blurred_vision':     ['Diabetes'],
    'chest_pain':         ['Hypertension'],
    'dizziness':          ['Hypertension'],
}

DISEASE_INFO = {
    'Dengue': {
        'icon': '🦟',
        'advice': [
            'Remove stagnant water from containers, tyres, and pots near home.',
            'Use mosquito nets and repellents especially at dawn and dusk.',
            'Wear full-sleeve clothing to prevent mosquito bites.',
            'Monitor platelet count if fever persists beyond 2 days.',
            'Drink ORS and stay hydrated throughout the day.',
            'Notify your Village Health Nurse (VHN) immediately.',
        ],
        'emergency': 'Seek emergency care if bleeding from gums, nose or skin, severe stomach pain, or platelet count drops below 1 lakh.',
    },
    'Malaria': {
        'icon': '🦠',
        'advice': [
            'Use insecticide-treated bed nets every night.',
            'Apply mosquito repellent cream on exposed skin.',
            'Drain stagnant water bodies and puddles near village.',
            'Take full course of anti-malarial medication as prescribed.',
            'Get a Rapid Diagnostic Test (RDT) at nearest PHC.',
            'Inform ASHA/VHN worker for community spray program.',
        ],
        'emergency': 'Go to hospital immediately if fever comes with severe chills repeatedly, patient becomes unconscious, or urine turns dark.',
    },
    'Typhoid': {
        'icon': '🧫',
        'advice': [
            'Drink only boiled or purified water at all times.',
            'Eat freshly cooked hot food — avoid street food and raw vegetables.',
            'Wash hands thoroughly with soap before meals and after toilet.',
            'Complete the full antibiotic course prescribed by the doctor.',
            'Isolate the patient and disinfect shared utensils and toilets.',
            'Report to nearest PHC for Widal test and treatment.',
        ],
        'emergency': 'Rush to hospital if there is severe abdominal pain, high fever above 104°F, extreme weakness, or signs of intestinal bleeding (dark stools).',
    },
    'Flu': {
        'icon': '🤧',
        'advice': [
            'Rest at home and avoid contact with others to prevent spread.',
            'Drink plenty of warm fluids — water, soup, herbal tea.',
            'Take paracetamol for fever and body pain as directed.',
            'Wear a mask to prevent spreading infection in the household.',
            'Wash hands frequently with soap, especially after coughing.',
            'Visit PHC if symptoms worsen or do not improve in 5 days.',
        ],
        'emergency': 'Seek immediate care if breathing becomes difficult, chest pain develops, lips or face turn bluish, or high fever does not reduce with medication.',
    },
    'Diabetes': {
        'icon': '🩸',
        'advice': [
            'Check blood sugar levels regularly — fasting and post-meal.',
            'Avoid sugary foods, white rice, maida, and sweetened drinks.',
            'Take prescribed medication or insulin at regular timings.',
            'Walk at least 30 minutes daily and maintain healthy weight.',
            'Inspect feet daily for wounds — even small cuts can be serious.',
            'Visit PHC regularly for HbA1c test and BP monitoring.',
        ],
        'emergency': 'Call 108 immediately if blood sugar drops very low (shivering, confusion, unconsciousness) or rises very high (excessive thirst, vomiting, fruity breath).',
    },
    'Hypertension': {
        'icon': '💉',
        'advice': [
            'Reduce salt intake — avoid pickles, papads, processed food.',
            'Take blood pressure medication exactly as prescribed — never skip.',
            'Avoid smoking, alcohol, and high-stress situations.',
            'Exercise moderately daily — walking, yoga, breathing exercises.',
            'Monitor BP at home or at PHC at least twice a week.',
            'Report persistent headaches or dizziness to doctor immediately.',
        ],
        'emergency': 'Call 108 immediately if BP exceeds 180/120 mmHg, there is sudden severe headache, vision loss, chest pain, or weakness on one side of the body.',
    },
}

SEASON_BOOSTS = {
    'monsoon': {'Dengue': 3, 'Malaria': 3, 'Typhoid': 2},
    'summer':  {'Dengue': 1, 'Flu': -1},
    'winter':  {'Flu': 2},
}

WATER_BOOSTS = {
    'well':  {'Typhoid': 2},
    'river': {'Typhoid': 3, 'Malaria': 1},
    'tank':  {'Typhoid': 1},
}

RISK_CFG = {
    'low':    {'pill': '🟢 LOW RISK',    'meter': 22, 'alert_icon': 'ℹ️',
               'alert_msg': 'Low community risk detected. Monitor symptoms and follow preventive measures.'},
    'medium': {'pill': '🟡 MEDIUM RISK', 'meter': 58, 'alert_icon': '⚠️',
               'alert_msg': 'Moderate risk detected. Take immediate action to prevent spread in your community.'},
    'high':   {'pill': '🔴 HIGH RISK',   'meter': 92, 'alert_icon': '🚨',
               'alert_msg': 'HIGH RISK ALERT! Possible outbreak detected. Notify health authorities immediately.'},
}

SEASON_LABELS  = {'summer': 'Summer ☀️', 'monsoon': 'Monsoon 🌧️', 'winter': 'Winter 🌬️'}
WATER_LABELS   = {'well': 'Open Well 🪣', 'river': 'River/Canal 🌊', 'tank': 'Village Tank 🏞️',
                   'pipe': 'Piped Supply 🚰', 'borewell': 'Borewell ⛏️'}
CASES_LABELS   = ['Only me', '2–5 cases', '5–15 cases', '15+ cases']


def analyse_risk(form):
    village  = form.get('village', 'Unknown Village').strip() or 'Unknown Village'
    district = form.get('district', '')
    age      = form.get('age', 'adult')
    season   = form.get('season', '')
    water    = form.get('water', '')
    cases    = int(form.get('cases', '1'))
    lang     = form.get('lang', 'en')
    symptoms = form.getlist('symptoms')

    scores = {d: 0 for d in DISEASE_INFO}

    # Symptom scoring
    for sym in symptoms:
        for disease in SYMPTOM_TAGS.get(sym, []):
            scores[disease] += 1

    # Environmental boosts
    for disease, boost in SEASON_BOOSTS.get(season, {}).items():
        scores[disease] += boost
    for disease, boost in WATER_BOOSTS.get(water, {}).items():
        scores[disease] += boost

    # Age vulnerability
    if age in ('elderly', 'child'):
        for d in scores:
            scores[d] += 1

    # Community cases
    if cases >= 3:
        scores['Dengue']    += cases
        scores['Malaria']   += cases
        scores['Typhoid']   += cases
        scores['Flu']       += cases - 1
    elif cases == 2:
        scores['Dengue']    += 1
        scores['Malaria']   += 1
        scores['Typhoid']   += 1
        scores['Flu']       += 1

    top_disease, score = sorted(scores.items(), key=lambda x: -x[1])[0]
    risk_level = 'high' if score >= 7 else 'medium' if score >= 4 else 'low'

    cfg = RISK_CFG[risk_level]
    info = DISEASE_INFO[top_disease]

    return {
        'disease':      top_disease,
        'disease_icon': info['icon'],
        'disease_name': top_disease,
        'risk_level':   risk_level,
        'pill':         cfg['pill'],
        'meter_pct':    cfg['meter'],
        'alert_icon':   cfg['alert_icon'],
        'alert_msg':    cfg['alert_msg'],
        'advice':       info['advice'],
        'emergency':    info['emergency'],
        'village':      village,
        'district':     district,
        'age':          age,
        'season_label': SEASON_LABELS.get(season, season or '—'),
        'water_label':  WATER_LABELS.get(water, water or '—'),
        'cases_label':  CASES_LABELS[cases - 1] if 1 <= cases <= 4 else '—',
        'sym_count':    len(symptoms),
        'score':        score,
        'lang':         lang,
    }


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/input')
def input_page():
    return render_template('input.html')

@app.route('/analyse', methods=['POST'])
def analyse():
    result = analyse_risk(request.form)
    session['result'] = result
    return redirect(url_for('results'))

@app.route('/results')
def results():
    result = session.get('result')
    if not result:
        return redirect(url_for('input_page'))
    return render_template('results.html', result=result)

@app.route('/phc')
def phc():
    return render_template('phc.html')
handler=app


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
