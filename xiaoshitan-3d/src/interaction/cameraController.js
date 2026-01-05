import * as Cesium from "https://cdn.jsdelivr.net/npm/cesium@1.121.0/+esm";

let viewerRef = null;

export function setCameraContext(viewer) {
  viewerRef = viewer;
}

export function focusOn(target) {
  if (!viewerRef) return;

  const presets = {
    water: {
      destination: Cesium.Cartesian3.fromDegrees(112.985, 28.1924, 260),
      orientation: {
        heading: Cesium.Math.toRadians(240),
        pitch: Cesium.Math.toRadians(-35),
      },
    },
    vegetation: {
      destination: Cesium.Cartesian3.fromDegrees(112.9858, 28.1916, 240),
      orientation: {
        heading: Cesium.Math.toRadians(200),
        pitch: Cesium.Math.toRadians(-25),
      },
    },
  };

  const preset = presets[target];
  if (!preset) return;

  viewerRef.camera.flyTo({
    destination: preset.destination,
    duration: 2,
    orientation: {
      heading: preset.orientation.heading,
      pitch: preset.orientation.pitch,
      roll: 0,
    },
  });
}

export function enterOverview() {
  if (!viewerRef) return;

  viewerRef.camera.flyHome(1.5);
}
