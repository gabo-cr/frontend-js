import { getAdDetail, getUserData, deleteAd } from "./ad-detail-model.js";
import { buildAdDetail } from "./ad-detail-view.js";

export async function adDetailController(adDetail) {
	const params = new URLSearchParams(window.location.search);
	const adId = params.get('adId');
	if (!adId) {
		window.location.href = 'index.html';
	}
	
	try {
		const ad = await getAdDetail(adId);
		handleRemoveAdButton(adDetail, ad);
		const container = adDetail.querySelector('.content');
    	container.innerHTML = buildAdDetail(ad);
	} catch (error) {
		alert(error);
	}

	async function handleRemoveAdButton(adDetail, ad) {
		const userData = await getUserData();
		console.log(ad.userId + ' ' + userData.id);
		if (ad.userId === userData.id) {
			const removeAdButton = adDetail.querySelector('#removeAdButton');
			removeAdButton.removeAttribute('disabled');
			removeAdButton.addEventListener('click', () => { removeAd(ad.id)})
		}
	}

	async function removeAd(adId) {
		if (window.confirm('¿Estás seguro de que quieres borrar el anuncio?')) {
			try {
				await deleteAd(adId);
				setTimeout(() => {
					window.location.href = 'index.html';
				}, 2000);
			} catch (error) {
				alert(error);
			}
		}
	}
}