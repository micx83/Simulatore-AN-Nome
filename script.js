document.getElementById("simulate-button").addEventListener("click", function() {
  var text = document.getElementById("input-text").value;
  var outputDiv = document.getElementById("output-text");

  // Clear the output div
  outputDiv.innerHTML = '';
  outputDiv.style.marginTop = '20px'; // Add top margin to the outputDiv  
  
  var fonts = ['Always', 'Pacifico', 'Havana', 'Damion'/* other fonts */];

  fonts.forEach(function(font) {
    var fontDiv = document.createElement('div');
    fontDiv.style.display = 'flex';
    fontDiv.style.alignItems = 'center';
    fontDiv.style.marginBottom = '10px'; // Add bottom margin to each fontDiv

    var fontNameDiv = document.createElement('div');
    fontNameDiv.textContent = font + ': ';
    fontNameDiv.style.marginRight = '10px';
    fontDiv.appendChild(fontNameDiv);
    
    var modifiedText = "";

    // Iterate over each character in the input text
    for (var i = 0; i < text.length; i++) {
      var char = text[i];

      // Check if the character is one of the specified uppercase letters
      if (char === "L" && font === "Pacifico") {
        // If the character is "L" and the selected font is "Pacifico", wrap it in a span with the font for "Always"
        modifiedText += '<span style="font-family: Always;">' + char + '</span>';
      } else if ((char === "F" || char === "G" || char === "S" || char === "T" || char === "I" || char === "&") && font === "Always") {
        // If the character is "F", "G", "S", "T", "I", or "&" and the selected font is "Always", wrap it in a span with the font for "Pacifico"
        modifiedText += '<span style="font-family: Pacifico;">' + char + '</span>';
      } else if (char === "r" && font === "Damion") {
        // If the character is "r" and the selected font is "Damion", wrap it in a span with the font for "Lakesigh" and add the "lakesigh-r" class
        modifiedText += '<span class="lakesigh-r" style="font-family: Lakesigh;">' + char + '</span>';
      } else {
        // If the character is any other character, just add it to the modified text as is
        modifiedText += char;
      }
    }

    var textDiv = document.createElement('div');
    textDiv.innerHTML = modifiedText;
    textDiv.className = 'font-' + font.toLowerCase();
    if (font === 'Havana') {
      textDiv.style.fontWeight = '1000';// Make the font thicker
    }

    if (font === 'Damion') {
      textDiv.style.fontWeight = '800';// Make the font thicker
    }
    
    if (font === 'Pacifico') {
      textDiv.style.fontWeight = '700';// Make the font thicker
    }
    
    if (font === 'Always') {
      textDiv.style.fontWeight = '600';// Make the font thicker
    }
    
    fontDiv.appendChild(textDiv);

    outputDiv.appendChild(fontDiv);
  });
});
