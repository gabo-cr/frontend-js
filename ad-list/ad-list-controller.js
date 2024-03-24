import { getAds } from './ad-list-model.js';
import { buildAd, buildEmptyAdList } from './ad-list-view.js';
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { loaderController } from '../loader/loader-controller.js';

export async function adListController(adList) {
	const loader = adList.querySelector('#loader');
	const { showLoader, hideLoader } = loaderController(loader);

	try {
		showLoader();

		const ads = await getAds();
		
		const container = adList.querySelector('.content');
		if (ads.length > 0) {
			renderAds(ads, container);
		} else {
			renderEmptyAdList(container);
		}
	} catch (error) {
		dispatchEvent('ad-list-notification', {
			message: error,
			type: 'error'
		}, adList);
	} finally {
		hideLoader();
	}
}

function renderAds(ads, adList) {
	ads.forEach(ad => {
		const adItem = document.createElement('div');
		adItem.className ='col-sm-12 col-md-6 col-lg-3';
		adItem.innerHTML = buildAd(ad);
		adList.appendChild(adItem);
	});
}

function renderEmptyAdList(adList) {
	adList.innerHTML = buildEmptyAdList();
}
