import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";

export function createWater(scene) {
  if (!scene) return null;

  const geometry = new THREE.PlaneGeometry(120, 120, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    color: 0x8ec5e8,
    transparent: true,
    opacity: 0.65,
    shininess: 80,
    side: THREE.DoubleSide,
  });

  const waterMesh = new THREE.Mesh(geometry, material);
  waterMesh.rotation.x = -Math.PI / 2;
  waterMesh.position.set(0, 0, 0);

  // Simple time-based ripple hook for future refinement.
  waterMesh.tick = (elapsed) => {
    waterMesh.material.opacity = 0.6 + 0.05 * Math.sin(elapsed * 0.8);
  };

  scene.add(waterMesh);
  return waterMesh;
}
