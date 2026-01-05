import * as Cesium from "https://cdn.jsdelivr.net/npm/cesium@1.121.0/+esm";

export function syncCamera(cesiumViewer, threeCamera) {
  if (!cesiumViewer || !threeCamera) return;

  const cesiumCamera = cesiumViewer.scene.camera;
  const { positionWC, directionWC, upWC } = cesiumCamera;

  const target = new Cesium.Cartesian3();
  Cesium.Cartesian3.add(positionWC, directionWC, target);

  threeCamera.position.set(positionWC.x, positionWC.y, positionWC.z);
  threeCamera.up.set(upWC.x, upWC.y, upWC.z);
  threeCamera.lookAt(target.x, target.y, target.z);
  threeCamera.updateMatrixWorld();
}
