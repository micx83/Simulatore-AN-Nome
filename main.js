<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
</head>
<body>
    <input id="text-input" type="text" placeholder="Enter your text here">
    <button id="render-button">Render</button>
    <canvas id="renderCanvas"></canvas>
    <script>
        var canvas = document.getElementById("renderCanvas");
        var engine = new BABYLON.Engine(canvas, true);

        var createScene = function() {
            var scene = new BABYLON.Scene(engine);
            var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());
            camera.attachControl(canvas, false);
            var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
            return scene;
        }

        var scene = createScene();

        document.getElementById("render-button").addEventListener("click", function() {
            var text = document.getElementById("text-input").value;
            var textTexture = new BABYLON.DynamicTexture("dynamic texture", {width:512, height:256}, scene);
            var textureContext = textTexture.getContext();
            textureContext.font = "bold 44px monospace";
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
    </script>
</body>
</html>
