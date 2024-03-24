import { navbarController } from "./navbar/navbar-controller.js";
import { adListController } from "./ad-list/ad-list-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('#navbar');
	navbarController(navbar);
	
	const adList = document.querySelector('.ad-list');

	const notifications = document.querySelector('#notifications');
	const { showNotification } = notificationController(notifications);
	adList.addEventListener('ad-list-notification', (event) => {
		event.stopPropagation();
		showNotification(event.detail.message, event.detail.type, event.detail.autoRemove);
	});

	adListController(adList);
});
