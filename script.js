document.getElementById("render-button").addEventListener("click", function() {
  var text = document.getElementById("text-input").value;
  var font = document.getElementById("font-selector").value;
  var outputText = document.getElementById("output-text");
  outputText.textContent = text;
  outputText.style.fontFamily = font;
});
