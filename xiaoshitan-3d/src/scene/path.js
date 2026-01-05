import * as Cesium from "https://cdn.jsdelivr.net/npm/cesium@1.121.0/+esm";

const walkWaypoints = [
  Cesium.Cartesian3.fromDegrees(112.9834, 28.1941, 250),
  Cesium.Cartesian3.fromDegrees(112.9845, 28.193, 230),
  Cesium.Cartesian3.fromDegrees(112.9853, 28.192, 210),
  Cesium.Cartesian3.fromDegrees(112.986, 28.1912, 220),
];

export function createPath(viewer) {
  if (!viewer) return null;

  const pathEntity = viewer.entities.add({
    name: "Narrative Path",
    polyline: {
      positions: walkWaypoints,
      width: 3,
      material: Cesium.Color.DARKSLATEGRAY.withAlpha(0.6),
      clampToGround: true,
    },
  });

  return pathEntity;
}

export function flyAlongPath(viewer) {
  if (!viewer) return;

  let index = 0;
  const flyToNext = () => {
    if (index >= walkWaypoints.length) return;

    const destination = walkWaypoints[index];
    index += 1;

    viewer.camera.flyTo({
      destination,
      duration: 2.5,
      orientation: {
        heading: Cesium.Math.toRadians(260),
        pitch: Cesium.Math.toRadians(-25),
        roll: 0.0,
      },
      complete: flyToNext,
    });
  };

  flyToNext();
}
