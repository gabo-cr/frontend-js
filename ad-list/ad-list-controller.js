import { getAds } from './ad-list-model.js';
import { buildAd, buildEmptyAdList } from './ad-list-view.js';

export async function adListController(adList) {
	try {
		const ads = await getAds();
		if (ads.length > 0) {
			renderAds(ads, adList);
		} else {
			renderEmptyAdList(adList);
		}
	} catch (errorMessage) {
		
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
