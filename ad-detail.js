import { navbarController } from "./navbar/navbar-controller.js";
import { adDetailController } from "./ad-detail/ad-detail-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('#navbar');
  navbarController(navbar);

  const adDetail = document.querySelector('.ad-detail');

  const notifications = document.querySelector('#notifications');
	const { showNotification } = notificationController(notifications);
	adDetail.addEventListener('ad-detail-notification', (event) => {
		event.stopPropagation();
		showNotification(event.detail.message, event.detail.type, event.detail.autoRemove);
	});

  adDetailController(adDetail);
});
