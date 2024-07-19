document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            home: "Home",
            matches: "Matches",
            training: "Training",
            community: "Community",
            contact: "Contact",
            welcome: "Welcome to SoccerGen",
            description: "Your ultimate soccer resource. Kick-start your journey with us!",
            "join-text": "Join us at SoccerGen, where passion meets expertise. As the leading platform for soccer enthusiasts, we strive to entertain and unite the global soccer community. Stay connected with the latest updates, insights, and events that matter to you.",
            "join-button": "Join us",
            "contact-email": "Contact us at info@soccergen.com",
            "contact-address": "75 Laurier Ave E, Ottawa, ON",
            "contact-phone": "Phone: (613) 562-5700",
            facebook: "Facebook",
            twitter: "Twitter",
            instagram: "Instagram"
        },
        fr: {
            home: "Accueil",
            matches: "Matchs",
            training: "Entraînement",
            community: "Communauté",
            contact: "Contact",
            welcome: "Bienvenue sur SoccerGen",
            description: "Votre ressource ultime pour le football. Commencez votre aventure avec nous !",
            "join-text": "Rejoignez-nous sur SoccerGen, où la passion rencontre l'expertise. En tant que plateforme de premier plan pour les passionnés de football, nous nous efforçons de divertir et d'unir la communauté mondiale du football. Restez connecté avec les dernières mises à jour, informations et événements qui comptent pour vous.",
            "join-button": "Rejoignez-nous",
            "contact-email": "Contactez-nous à info@soccergen.com",
            "contact-address": "75 Laurier Ave E, Ottawa, ON",
            "contact-phone": "Téléphone : (613) 562-5700",
            facebook: "Facebook",
            twitter: "Twitter",
            instagram: "Instagram"
        }
    };

    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = 'en'; // Default language

    function translatePage(language) {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    languageToggle.addEventListener('click', () => {
        currentLanguage = (currentLanguage === 'en') ? 'fr' : 'en';
        languageToggle.textContent = (currentLanguage === 'en') ? 'FR' : 'EN';
        translatePage(currentLanguage);
    });

    // Initialize with default language
    translatePage(currentLanguage);
});