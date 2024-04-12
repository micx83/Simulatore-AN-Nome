var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var createScene = function() {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,0), scene);
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
    return scene;
}

var scene = createScene();

document.getElementById("render-button").addEventListener("click", function() {
    var text = document.getElementById("text-input").value;
    var font = document.getElementById("font-selector").value;
    var textTexture = new BABYLON.DynamicTexture("dynamic texture", {width:512, height:256}, scene);
    var textureContext = textTexture.getContext();
    textureContext.font = "bold 44px " + font;
    textureContext.fillStyle = "white";
    textureContext.fillText(text, 50, 50);
    textTexture.update();

    var points = [];
    for (var i = 0; i < 10; i++) {
        points.push(new BABYLON.Vector3(Math.cos(i * Math.PI / 5), Math.sin(i * Math.PI / 5), 0));
    }

    var ribbon = BABYLON.MeshBuilder.CreateRibbon("ribbon", {pathArray: [points]}, scene);
    ribbon.material = new BABYLON.StandardMaterial("textMat", scene);
    ribbon.material.diffuseTexture = textTexture;
});

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
});
