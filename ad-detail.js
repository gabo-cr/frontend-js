import { navbarController } from "./navbar/navbar-controller.js";
import { adDetailController } from "./ad-detail/ad-detail-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('#navbar');
  navbarController(navbar);

  const adDetail = document.querySelector('.ad-detail');
  adDetailController(adDetail);
});
