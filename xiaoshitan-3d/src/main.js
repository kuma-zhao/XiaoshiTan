import { initCesiumViewer } from "./core/cesiumViewer.js";
import { initThreeScene, getThreeContext } from "./core/threeScene.js";
import { syncCamera } from "./core/syncCesiumThree.js";
import { createPath, flyAlongPath } from "./scene/path.js";
import { createWater } from "./scene/water.js";
import { createVegetation } from "./scene/vegetation.js";
import { bindTextTriggers } from "./interaction/textTrigger.js";
import { focusOn, enterOverview, setCameraContext } from "./interaction/cameraController.js";

async function loadMappingData() {
  const response = await fetch("./src/data/textMapping.json");
  return response.json();
}

async function bootstrap() {
  const viewer = initCesiumViewer("cesiumContainer");
  const three = initThreeScene();
  setCameraContext(viewer);

  createPath(viewer);
  const water = createWater(three.scene);
  const vegetation = createVegetation(three.scene);

  viewer.scene.postRender.addEventListener(() => {
    syncCamera(viewer, three.camera);

    const elapsed = performance.now() / 1000;
    water?.tick?.(elapsed);
  });

  const mappingData = await loadMappingData();
  bindTextTriggers(mappingData, {
    camera: { focusOn, enterOverview },
    path: { flyAlongPath: () => flyAlongPath(viewer) },
    scene: { water, vegetation },
  });
}

bootstrap();
