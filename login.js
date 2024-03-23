import { navbarController } from "./navbar/navbar-controller.js";
import { loginController } from "./login/login-controller.js";

document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('#navbar');
  	navbarController(navbar);

	const loginForm = document.querySelector('#login-form');
	loginController(loginForm);
});
