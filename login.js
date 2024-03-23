import { navbarController } from "./navbar/navbar-controller.js";
import { loginController } from "./login/login-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('#navbar');
  	navbarController(navbar);

	const loginForm = document.querySelector('#login-form');

	const notifications = document.querySelector('#notifications');
	const { showNotification } = notificationController(notifications);
	loginForm.addEventListener('login-notification', (event) => {
		event.stopPropagation();
		showNotification(event.detail.message, event.detail.type, event.detail.autoRemove);
	});

	loginController(loginForm);
});
