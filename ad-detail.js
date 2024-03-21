import { adDetailController } from "./ad-detail/ad-detail-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const adDetail = document.querySelector('.ad-detail .container .row');
  adDetailController(adDetail);
});
