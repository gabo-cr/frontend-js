import { adCreationController } from "./ad-creation/ad-creation-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const adCreation = document.querySelector('#ad-creation');
  adCreationController(adCreation);
});
