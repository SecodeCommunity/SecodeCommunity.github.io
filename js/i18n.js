document.addEventListener('DOMContentLoaded', () => {
    // Get user's preferred language from localStorage or default to Turkish
    const currentLang = localStorage.getItem('language') || 'tr';
    
    // Set initial language
    document.documentElement.lang = currentLang;
    document.getElementById('language-selector').value = currentLang;
    updateContent(currentLang);

    // Add event listener for language selection
    document.getElementById('language-selector').addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('language', selectedLang);
        document.documentElement.lang = selectedLang;
        updateContent(selectedLang);
    });
});

function updateContent(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update meta tags
    document.title = lang === 'tr' ? 'SECODE - Teknoloji Topluluğu' : 'SECODE - Technology Community';
    document.querySelector('meta[name="description"]').content = translations[lang].hero_description;
} 