import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";

export function createVegetation(scene) {
  if (!scene) return null;

  const group = new THREE.Group();
  const bambooMaterial = new THREE.MeshStandardMaterial({ color: 0x6b8e23 });

  const placements = [
    { x: -40, z: -30, scale: 1.2 },
    { x: -20, z: -45, scale: 1.0 },
    { x: 25, z: -35, scale: 1.4 },
    { x: 40, z: -15, scale: 1.1 },
  ];

  placements.forEach((placement, index) => {
    const stalk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 0.8, 18 * placement.scale, 8),
      bambooMaterial
    );
    stalk.position.set(placement.x, 9 * placement.scale, placement.z);

    const leaves = new THREE.Mesh(
      new THREE.ConeGeometry(6 * placement.scale, 10 * placement.scale, 8),
      new THREE.MeshStandardMaterial({ color: 0x3d6b35 })
    );
    leaves.position.set(placement.x, 18 * placement.scale, placement.z);

    const marker = new THREE.Group();
    marker.add(stalk);
    marker.add(leaves);
    marker.name = `Bamboo_${index + 1}`;

    group.add(marker);
  });

  scene.add(group);
  return group;
}
