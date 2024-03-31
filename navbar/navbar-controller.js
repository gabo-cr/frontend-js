import { buildAuthenticatedNavbar, buildNavbar } from "./navbar-view.js";
import { session } from "../utils/session.js";

export const navbarController = (navbar) => {
	const { isUserLoggedIn, logout } = session();

	try {
		if (isUserLoggedIn()) {
			navbar.innerHTML = buildAuthenticatedNavbar();

			const logoutButton = navbar.querySelector('#btn-logout');
			logoutButton.addEventListener('click', () => {
				logout();
				navbarController(navbar);
				setTimeout(() => {
					window.location = 'index.html';
				}, 2000);
			});
		} else {
			navbar.innerHTML = buildNavbar();
		}
	} catch (error) {
		alert(error);
	}
}
