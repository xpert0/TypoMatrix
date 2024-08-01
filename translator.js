const englishToHindiDictionary = {
  "hello": "नमस्ते",
  "world": "दुनिया",
  // Add more words and phrases as needed
};

function translate() {
  const englishText = document.getElementById("englishText").value;
  const hindiText = document.getElementById("hindiText");

  let translatedText = "";
  const words = englishText.split(" ");

  for (const word of words) {
    const hindiWord = englishToHindiDictionary[word.toLowerCase()] || word;
    translatedText += hindiWord + " ";
  }

  hindiText.value = translatedText.trim();
}
