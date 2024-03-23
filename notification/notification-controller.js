import { buildNotification } from "./notification-view.js";

export function notificationController(notificationContainer) {

	function showNotification(message, type = 'success', autoRemove = false) {
		const notification = document.createElement('div');
		notification.classList.add('notification');
		notification.innerHTML = buildNotification(message, type);
		notificationContainer.appendChild(notification);

		if (autoRemove) {
			setTimeout(() => {
				notification.remove()
			}, 4000);
		}
	}

	return {
		showNotification
	};
}
