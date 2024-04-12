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

    var options = {
        text: text,
        height: 0.5,
        size: 1,
        font: font
    };

    var text3D = BABYLON.MeshBuilder.CreateText("text3D", options, scene);

    var material = new BABYLON.StandardMaterial("textMat", scene);
    material.diffuseColor = new BABYLON.Color3(0.75, 0.75, 0.75); // Silver color
    text3D.material = material;
});

engine.runRenderLoop(function() {
    scene.render();
});

window.addEventListener('resize', function() {
    engine.resize();
});
