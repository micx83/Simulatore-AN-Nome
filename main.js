var camera, scene, renderer;
var textMesh;

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.z = 1;

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    document.getElementById('render-button').addEventListener('click', renderText);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function renderText() {
    var text = document.getElementById('text-input').value;
    var fontName = document.getElementById('font-select').value;

    var loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/' + fontName + '_regular.typeface.json', function(font) {
        var geometry = new THREE.TextGeometry(text, {
            font: font,
            size: 0.07, // altezza dell'iniziale di 7 mm
            height: 0.012, // spessore delle lettere di 1.2 mm
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.01,
            bevelSize: 0.01,
            bevelOffset: 0,
            bevelSegments: 5
        });

        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        textMesh = new THREE.Mesh(geometry, material);
        scene.add(textMesh);
    });
}
