function translate() {
  const englishText = document.getElementById("englishText").value;
  const hindiTextDiv = document.getElementById("hindiText");

  // Create a form to submit to Google Translate
  const form = document.createElement("form");
  form.method = "GET";
  form.action = "https://translate.google.com/translate_a/single?client=t&sl=en&tl=hi&text=" + encodeURIComponent(englishText);
  form.target = "_blank"; // Open in a new tab

  // Submit the form
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
