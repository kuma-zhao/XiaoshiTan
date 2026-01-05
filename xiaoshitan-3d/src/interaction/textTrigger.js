export function bindTextTriggers(mappingData, controllers) {
  if (!mappingData || !controllers) return;

  const triggerAction = (entry) => {
    if (entry.camera === "path_start") {
      controllers.camera?.enterOverview?.();
    } else if (entry.camera === "overlook") {
      controllers.camera?.focusOn?.("water");
    }

    if (entry.action === "walk") {
      controllers.path?.flyAlongPath?.();
    } else if (entry.action === "focus_water") {
      controllers.camera?.focusOn?.("water");
    } else if (entry.action === "focus_vegetation") {
      controllers.camera?.focusOn?.("vegetation");
    }
  };

  const availableKeys = Object.keys(mappingData);
  availableKeys.forEach((key) => {
    const entry = mappingData[key];
    if (entry) {
      // Expose triggers for UI or external scripts.
      window[`trigger_${key}`] = () => triggerAction(entry);
    }
  });

  // Apply the first section automatically to present an initial state.
  const firstEntry = mappingData[availableKeys[0]];
  if (firstEntry) {
    triggerAction(firstEntry);
  }
}
