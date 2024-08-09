const translateForm = document.getElementById('translate-form');
const hindiTranslationElement = document.getElementById('hindi-translation');

// Load Hindi translations from JSON file
const hindiTranslations = {};
fetch('lang/hi.json')
   .then(response => response.json())
   .then(data => hindiTranslations = data);

translateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const englishWord = document.getElementById('english-word').value;
    const hindiTranslation = hindiTranslations[englishWord];
    if (hindiTranslation) {
        hindiTranslationElement.innerText = hindiTranslation;
    } else {
        hindiTranslationElement.innerText = 'Translation not found';
    }
});

const translate = require('google-translate-api');

translate('Ik spreek Engels', {to: 'en'}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});
