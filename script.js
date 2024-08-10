const { TextTranslatorClient } = require('@azure/ai-translation-text');

// Replace with your subscription key and endpoint
const subscriptionKey = 'YOUR_SUBSCRIPTION_KEY';
const endpoint = 'YOUR_ENDPOINT';

const client = new TextTranslatorClient(subscriptionKey, endpoint);

async function translate() {
  const englishText = document.getElementById('englishText').value;
  const { translations } = await client.translateText([englishText], 'hi');
  document.getElementById('hindiText').value = translations[0].text;
}
