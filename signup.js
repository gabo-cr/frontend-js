import { navbarController } from "./navbar/navbar-controller.js";
import { signupController } from "./signup/signup-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('#navbar');
	navbarController(navbar);

	const signupForm = document.querySelector('#signup-form');

	const notifications = document.querySelector('#notifications');
	const { showNotification } = notificationController(notifications);
	signupForm.addEventListener('signup-notification', (event) => {
		event.stopPropagation();
		showNotification(event.detail.message, event.detail.type, event.detail.autoRemove);
	});

	signupController(signupForm);
});
