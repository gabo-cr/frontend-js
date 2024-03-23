import { getAdDetail } from "./ad-detail-model.js";
import { buildAdDetail } from "./ad-detail-view.js";
import { session } from "../utils/session.js";

const { getAccessToken } = session();

export async function adDetailController(adDetail) {
	const params = new URLSearchParams(window.location.search);
	const adId = params.get('adId');
	if (!adId) {
		window.location.href = './index.html';
	}
	
	try {
		const ad = await getAdDetail(adId);
		handleRemoveAdButton(adDetail, ad);
    	adDetail.innerHTML = buildAdDetail(ad);
	} catch (error) {
		alert(error);
	}

	async function handleRemoveAdButton(adDetail, ad) {
		const token = getAccessToken();
		const userData = await getUserData(token);
	
		if (tweet.userId === userData.id) {
			const removeTweetButton = tweetDetail.querySelector('#removeTweetButton')
			removeTweetButton.removeAttribute('disabled');
			removeTweetButton.addEventListener('click', () => { removeTweet(tweet.id, token)})
		}
	}
}