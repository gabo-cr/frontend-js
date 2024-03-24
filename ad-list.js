import { navbarController } from "./navbar/navbar-controller.js";
import { adListController } from "./ad-list/ad-list-controller.js";

document.addEventListener('DOMContentLoaded', () => {
	const navbar = document.querySelector('#navbar');
	navbarController(navbar);
	
	const adList = document.querySelector('.ad-list .container-fluid .row');
	adListController(adList);
});
