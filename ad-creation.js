import { session } from "./utils/session.js";
import { navbarController } from "./navbar/navbar-controller.js";
import { adCreationController } from "./ad-creation/ad-creation-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const { validateAuthentication } = session();
  validateAuthentication();

  const navbar = document.querySelector('#navbar');
  navbarController(navbar);

  const adCreationForm = document.querySelector('#ad-creation-form');

  const notifications = document.querySelector('#notifications');
	const { showNotification } = notificationController(notifications);
	adCreationForm.addEventListener('ad-creation-notification', (event) => {
		event.stopPropagation();
		showNotification(event.detail.message, event.detail.type, event.detail.autoRemove);
	});

  adCreationController(adCreationForm);
});
