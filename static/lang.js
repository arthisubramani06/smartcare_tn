// Language Toggle for Smart Care TN
// English and Tamil support

const translations = {
    en: {
        // Home Page
        'welcome': 'Welcome to Smart Care TN',
        'tagline': 'Early Disease Detection & Community Health Monitoring for Rural Tamil Nadu',
        'start-scan': 'Start Health Scan',
        'find-phc': 'Find Nearest PHC',
        'feature-1-title': 'Symptom Analysis',
        'feature-1-desc': 'Quick and accurate disease risk assessment based on symptoms, environmental factors, and community data',
        'feature-2-title': 'Community Monitoring',
        'feature-2-desc': 'Track disease patterns in your village to detect potential outbreaks early',
        'feature-3-title': 'PHC Locator',
        'feature-3-desc': 'Find the nearest Primary Health Center with contact information and directions',
        'feature-4-title': 'Bilingual Support',
        'feature-4-desc': 'Available in both English and Tamil for easy accessibility',
        'important-note': 'Important Note',
        'disclaimer': 'This tool is for preliminary assessment only. Always consult a doctor for proper diagnosis and treatment. In case of emergency, call 108 immediately.',
        
        // Input Page
        'health-scan-title': 'Community Health Scan',
        'health-scan-intro': 'Fill in the details below for an accurate risk assessment',
        'village-label': 'Village Name',
        'village-placeholder': 'Enter your village name',
        'district-label': 'District',
        'district-placeholder': 'Enter your district',
        'age-label': 'Age Group',
        'age-adult': 'Adult (18-60)',
        'age-elderly': 'Elderly (60+)',
        'age-child': 'Child (0-18)',
        'season-label': 'Current Season',
        'season-summer': 'Summer ☀️',
        'season-monsoon': 'Monsoon 🌧️',
        'season-winter': 'Winter 🌬️',
        'water-label': 'Primary Water Source',
        'water-pipe': 'Piped Supply 🚰',
        'water-well': 'Open Well 🪣',
        'water-borewell': 'Borewell ⛏️',
        'water-river': 'River/Canal 🌊',
        'water-tank': 'Village Tank 🏞️',
        'cases-label': 'Similar Cases in Village',
        'cases-1': 'Only me',
        'cases-2': '2–5 cases',
        'cases-3': '5–15 cases',
        'cases-4': '15+ cases',
        'symptoms-label': 'Select All Symptoms You Have',
        'symptom-fever': 'Fever',
        'symptom-high-fever': 'High Fever (103°F+)',
        'symptom-body-pain': 'Body Pain',
        'symptom-headache': 'Headache',
        'symptom-rash': 'Skin Rash',
        'symptom-chills': 'Chills',
        'symptom-sweating': 'Excessive Sweating',
        'symptom-fatigue': 'Fatigue/Weakness',
        'symptom-nausea': 'Nausea',
        'symptom-vomiting': 'Vomiting',
        'symptom-cough': 'Cough',
        'symptom-sore-throat': 'Sore Throat',
        'symptom-weight-loss': 'Weight Loss',
        'symptom-frequent-urination': 'Frequent Urination',
        'symptom-blurred-vision': 'Blurred Vision',
        'symptom-chest-pain': 'Chest Pain',
        'symptom-dizziness': 'Dizziness',
        'submit-scan': 'Analyze Risk',
        'cancel': 'Cancel',
        
        // Results Page
        'results-title': 'Risk Assessment Results',
        'risk-low': 'Low',
        'risk-medium': 'Medium',
        'risk-high': 'High',
        'context-title': 'Assessment Context',
        'location-label': 'Location:',
        'season-label': 'Season:',
        'water-source-label': 'Water Source:',
        'community-cases-label': 'Community Cases:',
        'symptoms-reported-label': 'Symptoms Reported:',
        'risk-score-label': 'Risk Score:',
        'advice-title': '🎯 Recommended Actions',
        'emergency-title': '🚨 Emergency Warning',
        'emergency-number': 'Emergency Number:',
        'new-scan': 'New Scan',
        'home': 'Home',
        'results-disclaimer': '<strong>Disclaimer:</strong> This is a preliminary risk assessment tool based on symptoms and community data. It is NOT a medical diagnosis. Please consult a qualified healthcare professional for proper diagnosis and treatment.',
        
        // PHC Page
        'phc-title': 'Primary Health Center (PHC) Locator',
        'phc-intro': 'Find the nearest Primary Health Center in your area',
        'phc-search-title': 'Search by Location',
        'search-phc': 'Search PHC',
        'phc-list-title': 'Common PHC Contacts',
        'phc-hours': 'Open 24/7',
        'important-contacts-title': 'Important Health Contacts',
        'emergency-ambulance': 'Emergency Ambulance',
        'health-helpline': 'Health Helpline',
        'tn-health-dept': 'TN Health Department',
        'vector-control': 'Vector Control',
        'phc-services-title': 'Services Available at PHC',
        'service-1': 'Free consultation with doctors',
        'service-2': 'Basic diagnostic tests (blood, urine)',
        'service-3': 'Free essential medicines',
        'service-4': 'Vaccination programs',
        'service-5': 'Maternal and child health services',
        'service-6': 'Family planning services',
        'service-7': 'Disease surveillance and outbreak management',
        'service-8': 'Health education and awareness programs',
        'health-scan': 'Start Health Scan',
    },
    ta: {
        // Home Page - Tamil
        'welcome': 'ஸ்மார்ட் கேர் TN-க்கு வரவேற்கிறோம்',
        'tagline': 'கிராமப்புற தமிழ்நாட்டிற்கான ஆரம்ப நோய் கண்டறிதல் மற்றும் சமூக சுகாதார கண்காணிப்பு',
        'start-scan': 'சுகாதார பரிசோதனை தொடங்கவும்',
        'find-phc': 'அருகிலுள்ள PHC ஐக் கண்டறியவும்',
        'feature-1-title': 'அறிகுறி பகுப்பாய்வு',
        'feature-1-desc': 'அறிகுறிகள், சுற்றுச்சூழல் காரணிகள் மற்றும் சமூக தரவுகளின் அடிப்படையில் விரைவான மற்றும் துல்லியமான நோய் அபாய மதிப்பீடு',
        'feature-2-title': 'சமூக கண்காணிப்பு',
        'feature-2-desc': 'சாத்தியமான வெடிப்புகளை ஆரம்பத்தில் கண்டறிய உங்கள் கிராமத்தில் நோய் வடிவங்களைக் கண்காணிக்கவும்',
        'feature-3-title': 'PHC கண்டுபிடிப்பாளர்',
        'feature-3-desc': 'தொடர்பு தகவல் மற்றும் வழிகளுடன் அருகிலுள்ள முதன்மை சுகாதார மையத்தைக் கண்டறியவும்',
        'feature-4-title': 'இருமொழி ஆதரவு',
        'feature-4-desc': 'எளிதான அணுகலுக்காக ஆங்கிலம் மற்றும் தமிழில் கிடைக்கிறது',
        'important-note': 'முக்கிய குறிப்பு',
        'disclaimer': 'இந்த கருவி ஆரம்ப மதிப்பீட்டிற்கு மட்டுமே. சரியான நோயறிதல் மற்றும் சிகிச்சைக்கு எப்போதும் மருத்துவரை அணுகவும். அவசரநிலையில், உடனடியாக 108 ஐ அழைக்கவும்.',
        
        // Input Page - Tamil
        'health-scan-title': 'சமூக சுகாதார பரிசோதனை',
        'health-scan-intro': 'துல்லியமான அபாய மதிப்பீட்டிற்கு கீழே விவரங்களை நிரப்பவும்',
        'village-label': 'கிராமத்தின் பெயர்',
        'village-placeholder': 'உங்கள் கிராமத்தின் பெயரை உள்ளிடவும்',
        'district-label': 'மாவட்டம்',
        'district-placeholder': 'உங்கள் மாவட்டத்தை உள்ளிடவும்',
        'age-label': 'வயது குழு',
        'age-adult': 'வயது வந்தோர் (18-60)',
        'age-elderly': 'முதியோர் (60+)',
        'age-child': 'குழந்தை (0-18)',
        'season-label': 'தற்போதைய பருவம்',
        'season-summer': 'கோடை ☀️',
        'season-monsoon': 'பருவமழை 🌧️',
        'season-winter': 'குளிர் 🌬️',
        'water-label': 'முதன்மை நீர் ஆதாரம்',
        'water-pipe': 'குழாய் வழங்கல் 🚰',
        'water-well': 'திறந்த கிணறு 🪣',
        'water-borewell': 'துளைக்கிணறு ⛏️',
        'water-river': 'ஆறு/கால்வாய் 🌊',
        'water-tank': 'கிராம தொட்டி 🏞️',
        'cases-label': 'கிராமத்தில் இதே போன்ற வழக்குகள்',
        'cases-1': 'நான் மட்டும்',
        'cases-2': '2–5 வழக்குகள்',
        'cases-3': '5–15 வழக்குகள்',
        'cases-4': '15+ வழக்குகள்',
        'symptoms-label': 'உங்களுக்கு உள்ள அனைத்து அறிகுறிகளையும் தேர்ந்தெடுக்கவும்',
        'symptom-fever': 'காய்ச்சல்',
        'symptom-high-fever': 'உயர் காய்ச்சல் (103°F+)',
        'symptom-body-pain': 'உடல் வலி',
        'symptom-headache': 'தலைவலி',
        'symptom-rash': 'தோல் சொறி',
        'symptom-chills': 'குளிர்',
        'symptom-sweating': 'அதிக வியர்வை',
        'symptom-fatigue': 'சோர்வு/பலவீனம்',
        'symptom-nausea': 'குமட்டல்',
        'symptom-vomiting': 'வாந்தி',
        'symptom-cough': 'இருமல்',
        'symptom-sore-throat': 'தொண்டை புண்',
        'symptom-weight-loss': 'எடை இழப்பு',
        'symptom-frequent-urination': 'அடிக்கடி சிறுநீர் கழித்தல்',
        'symptom-blurred-vision': 'மங்கலான பார்வை',
        'symptom-chest-pain': 'மார்பு வலி',
        'symptom-dizziness': 'தலைச்சுற்றல்',
        'submit-scan': 'அபாயத்தை பகுப்பாய்வு செய்யவும்',
        'cancel': 'ரத்து செய்',
        
        // Results Page - Tamil
        'results-title': 'அபாய மதிப்பீட்டு முடிவுகள்',
        'risk-low': 'குறைவான',
        'risk-medium': 'நடுத்தரம்',
        'risk-high': 'அதிக',
        'context-title': 'மதிப்பீட்டு சூழல்',
        'location-label': 'இடம்:',
        'season-label': 'பருவம்:',
        'water-source-label': 'நீர் ஆதாரம்:',
        'community-cases-label': 'சமூக வழக்குகள்:',
        'symptoms-reported-label': 'அறிவிக்கப்பட்ட அறிகுறிகள்:',
        'risk-score-label': 'அபாய மதிப்பெண்:',
        'advice-title': '🎯 பரிந்துரைக்கப்பட்ட நடவடிக்கைகள்',
        'emergency-title': '🚨 அவசர எச்சரிக்கை',
        'emergency-number': 'அவசர எண்:',
        'new-scan': 'புதிய பரிசோதனை',
        'home': 'முகப்பு',
        'results-disclaimer': '<strong>மறுப்பு:</strong> இது அறிகுறிகள் மற்றும் சமூக தரவுகளின் அடிப்படையில் ஒரு ஆரம்ப அபாய மதிப்பீட்டு கருவி. இது மருத்துவ நோயறிதல் அல்ல. சரியான நோயறிதல் மற்றும் சிகிச்சைக்கு தகுதியான சுகாதார நிபுணரை அணுகவும்.',
        
        // PHC Page - Tamil
        'phc-title': 'முதன்மை சுகாதார மையம் (PHC) கண்டுபிடிப்பாளர்',
        'phc-intro': 'உங்கள் பகுதியில் அருகிலுள்ள முதன்மை சுகாதார மையத்தைக் கண்டறியவும்',
        'phc-search-title': 'இடத்தின் அடிப்படையில் தேடுங்கள்',
        'search-phc': 'PHC தேடு',
        'phc-list-title': 'பொதுவான PHC தொடர்புகள்',
        'phc-hours': '24/7 திறந்திருக்கும்',
        'important-contacts-title': 'முக்கிய சுகாதார தொடர்புகள்',
        'emergency-ambulance': 'அவசர ஆம்புலன்ஸ்',
        'health-helpline': 'சுகாதார ஹெல்ப்லைன்',
        'tn-health-dept': 'TN சுகாதாரத் துறை',
        'vector-control': 'வெக்டர் கட்டுப்பாடு',
        'phc-services-title': 'PHC இல் கிடைக்கும் சேவைகள்',
        'service-1': 'மருத்துவர்களுடன் இலவச ஆலோசனை',
        'service-2': 'அடிப்படை நோயறிதல் சோதனைகள் (இரத்தம், சிறுநீர்)',
        'service-3': 'இலவச அத்தியாவசிய மருந்துகள்',
        'service-4': 'தடுப்பூசி திட்டங்கள்',
        'service-5': 'தாய் மற்றும் குழந்தை சுகாதார சேவைகள்',
        'service-6': 'குடும்பக் கட்டுப்பாடு சேவைகள்',
        'service-7': 'நோய் கண்காணிப்பு மற்றும் வெடிப்பு மேலாண்மை',
        'service-8': 'சுகாதார கல்வி மற்றும் விழிப்புணர்வு திட்டங்கள்',
        'health-scan': 'சுகாதார பரிசோதனை தொடங்கவும்',
    }
};

let currentLang = 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if language is stored
    const savedLang = localStorage.getItem('smartcare-lang');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage(currentLang);
    }
    
    // Set up language toggle buttons
    const enBtn = document.getElementById('lang-en');
    const taBtn = document.getElementById('lang-ta');
    
    if (enBtn && taBtn) {
        enBtn.addEventListener('click', function() {
            switchLanguage('en');
        });
        
        taBtn.addEventListener('click', function() {
            switchLanguage('ta');
        });
    }
});

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('smartcare-lang', lang);
    updateLanguage(lang);
    
    // Update active button
    const enBtn = document.getElementById('lang-en');
    const taBtn = document.getElementById('lang-ta');
    
    if (lang === 'en') {
        enBtn.classList.add('active');
        taBtn.classList.remove('active');
    } else {
        taBtn.classList.add('active');
        enBtn.classList.remove('active');
    }
}

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-lang-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}
