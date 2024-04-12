var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);

var createScene = function() {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 10, new BABYLON.Vector3(0,0,0), scene);
    camera.attachControl(canvas, false); // Disable user control
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
    light.intensity = 0.7;
    return scene;
}

var scene = createScene();
var text3D;

document.getElementById("render-button").addEventListener("click", function() {
    var text = document.getElementById("text-input").value;
    var font = document.getElementById("font-selector").value;

    var options = {
        text: text,
        height: 0.5,
        size: 1,
        font: font
    };

    text3D = BABYLON.MeshBuilder.CreateText("text3D", options, scene);
    text3D.position = new BABYLON.Vector3(0, 0, -2);

    var material = new BABYLON.StandardMaterial("textMat", scene);
    material.diffuseColor = new BABYLON.Color3(0.75, 0.75, 0.75); // Silver color
    text3D.material = material;
});

engine.runRenderLoop(function() {
    if (text3D) {
        text3D.rotation.y += 0.01; // Rotate the text
    }
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
});
