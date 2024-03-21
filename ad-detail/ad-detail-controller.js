import { getAdDetail } from "./ad-detail-model.js";
import { buildAdDetail } from "./ad-detail-view.js";

export async function adDetailController(adDetail) {
	const params = new URLSearchParams(window.location.search);
	const adId = params.get('adId');
	if (!adId) {
		window.location.href = './index.html';
	}
	
	try {
		const ad = await getAdDetail(adId);
    	adDetail.innerHTML = buildAdDetail(ad);
	} catch (error) {
		alert(error);
	}
}