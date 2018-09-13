var camera;
var scene;
var renderer;
var cubeMesh;

var clock;
var deltaTime;

var particleSystem;

init();
animate();

function init() {

    clock = new THREE.Clock(true);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 50;

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, -1, 1).normalize();
    scene.add(light);

    var geometry = new THREE.CubeGeometry(10, 10, 10);
    var material = new THREE.MeshPhongMaterial({ color: 0x0033ff, specular: 0x555555, shininess: 30 });

    cubeMesh = new THREE.Mesh(geometry, material);
    cubeMesh.position.z = -30;
    scene.add(cubeMesh);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    render();
}

function animate() {
    deltaTime = clock.getDelta();

    cubeMesh.rotation.x += 1 * deltaTime;
    cubeMesh.rotation.y += 2 * deltaTime;

    render();
    requestAnimationFrame(animate);
}


function render() {
    renderer.render(scene, camera);
}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}