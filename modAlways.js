document.getElementById("render-button").addEventListener("click", function() {
  var text = document.getElementById("text-input").value;
  var outputText = document.getElementById("output-text");

  // Create a new empty string to hold the modified text
  var modifiedText = "";

  // Iterate over each character in the input text
  for (var i = 0; i < text.length; i++) {
    var char = text[i];

    // Check if the character is one of the specified uppercase letters
    if (char === "L") {
      // If the character is "L", wrap it in a span with the font for "Always"
      modifiedText += '<span style="font-family: Always;">' + char + '</span>';
    } else if (char === "F" || char === "G" || char === "S" || char === "T" || char === "I" || char === "&") {
      // If the character is "F", "G", "S", "T", "I", or "&", wrap it in a span with the font for "Pacifico"
      modifiedText += '<span style="font-family: Pacifico;">' + char + '</span>';
    } else {
      // If the character is any other character, just add it to the modified text as is
      modifiedText += char;
    }
  }

  // Set the output text to the modified text
  outputText.innerHTML = modifiedText;
});
