document.getElementById("render-button").addEventListener("click", function() {
  var text = document.getElementById("text-input").value;
  var font = document.getElementById("font-selector").value;
  var text3D = document.getElementById("text3D");
  text3D.setAttribute('value', text);
  text3D.setAttribute('color', '#C0C0C0'); // Silver color
  text3D.setAttribute('font', font);
  text3D.setAttribute('height', '7'); // Maximum height of 7
});
