var scene, camera, renderer, textMesh;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('output').appendChild(renderer.domElement);
}

function animate() {
    requestAnimationFrame(animate);
    if (textMesh) {
        textMesh.rotation.x += 0.01;
        textMesh.rotation.y += 0.02;
    }
    renderer.render(scene, camera);
}

function createRing() {
    var text = document.getElementById('inputText').value;
    var font = document.getElementById('fontSelect').value;

    if (textMesh) {
        scene.remove(textMesh);
    }

    textMesh = new troika_three_text.Text();
    textMesh.text = text;
    textMesh.font = font;
    textMesh.fontSize = 6;
    textMesh.color = 0x777777;
    textMesh.curveRadius = 100;
    scene.add(textMesh);

    textMesh.sync();
}

init();
animate();