import { getAdDetail, getUserData, deleteAd } from "./ad-detail-model.js";
import { buildAdDetail } from "./ad-detail-view.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

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
		dispatchEvent('ad-detail-notification', {
			message: `${error}`,
			type: 'error'
		}, adDetail);
	}

	async function handleRemoveAdButton(adDetail, ad) {
		const userData = await getUserData();
		if (ad.userId === userData.id) {
			const removeAdButton = adDetail.querySelector('#removeAdButton');
			removeAdButton.removeAttribute('disabled');
			removeAdButton.addEventListener('click', () => { removeAd(adDetail, ad.id)})
		}
	}

	async function removeAd(adDetail, adId) {
		if (window.confirm('¿Estás seguro de que quieres borrar el anuncio?')) {
			try {
				await deleteAd(adId);
				
				dispatchEvent('ad-detail-notification', {
					message: 'El anuncio se ha eliminado exitosamente.',
					type: 'success',
					autoRemove: true
				}, adDetail);

				setTimeout(() => {
					window.location.href = 'index.html';
				}, 2000);
			} catch (error) {
				dispatchEvent('ad-detail-notification', {
					message: `${error}`,
					type: 'error',
					autoRemove: true
				}, adDetail);
			}
		}
	}
}