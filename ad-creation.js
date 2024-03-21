import { adCreationController } from "./ad-creation/ad-creation-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const accessToken = localStorage.getItem('access-token');

  if (!accessToken) {
    window.location.href = 'index.html'
  }

  const adCreation = document.querySelector('#ad-creation');
  adCreationController(adCreation);
});
