import { session } from "./utils/session.js";
import { navbarController } from "./navbar/navbar-controller.js";
import { adCreationController } from "./ad-creation/ad-creation-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const { validateAuthentication } = session();
  validateAuthentication();

  const navbar = document.querySelector('#navbar');
  navbarController(navbar);

  const adCreation = document.querySelector('#ad-creation-form');
  adCreationController(adCreation);
});
