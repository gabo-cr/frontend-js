import { navbarController } from "./navbar/navbar-controller.js";
import { signupController } from "./signup/signup-controller.js";

document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('#navbar');
	navbarController(navbar);

	const signupForm = document.querySelector('#signup-form');
	signupController(signupForm);
});
