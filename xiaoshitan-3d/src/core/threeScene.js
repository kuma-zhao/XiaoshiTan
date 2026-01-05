import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";

let threeContext = null;

export function initThreeScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf2f4f7);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.set(0, 50, 120);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  const directional = new THREE.DirectionalLight(0xffffff, 0.6);
  directional.position.set(50, 100, 80);

  scene.add(ambient);
  scene.add(directional);

  threeContext = { scene, camera, renderer };
  return threeContext;
}

export function getThreeContext() {
  return threeContext;
}
