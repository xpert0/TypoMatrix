const englishText = document.getElementById('englishText');
const hindiText = document.getElementById('hindiText');
const translateBtn = document.getElementById('translateBtn');

const apiKey = '395fd6e90529421ebb3a4c99486e77f7'; // Replace with your actual API key
const endpoint = 'https://api.cognitive.microsofttranslator.com'; // Replace with your actual endpoint

translateBtn.addEventListener('click', () => {
    const textToTranslate = englishText.value;
    
    fetch(`${endpoint}/translate?api-version=3.0&from=en&to=hi`, {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{ Text: textToTranslate }])
    })
    .then(response => response.json())
    .then(data => {
        hindiText.value = data[0].translations[0].text;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
