import { buildAuthenticatedNavbar, buildNavbar } from "./navbar-view.js";
import { sessionController } from "../session/session-controller.js";

export const navbarController = (navbar) => {
	const { isUserLoggedIn, logout } = sessionController();

	try {
		if (isUserLoggedIn()) {
			navbar.innerHTML = buildAuthenticatedNavbar();

			const logoutButton = navbar.querySelector('#btn-logout');
			logoutButton.addEventListener('click', () => {
				logout();
				navbarController(navbar);
			})
		} else {
			navbar.innerHTML = buildNavbar();
		}
	} catch (error) {
		alert(error);
	}
}
