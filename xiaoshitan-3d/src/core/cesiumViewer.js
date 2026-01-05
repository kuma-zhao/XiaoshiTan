import * as Cesium from "https://cdn.jsdelivr.net/npm/cesium@1.121.0/+esm";

export function initCesiumViewer(containerId) {
  Cesium.Ion.defaultAccessToken = Cesium.Ion.defaultAccessToken || "";

  const viewer = new Cesium.Viewer(containerId, {
    terrainProvider: new Cesium.EllipsoidTerrainProvider(),
    animation: false,
    timeline: false,
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    selectionIndicator: false,
  });

  viewer.scene.globe.depthTestAgainstTerrain = true;

  Cesium.createWorldTerrainAsync({
    requestWaterMask: true,
    requestVertexNormals: true,
  })
    .then((terrainProvider) => {
      viewer.terrainProvider = terrainProvider;
    })
    .catch(() => {
      // Fallback to ellipsoid terrain when world terrain is unavailable.
    });

  return viewer;
}
