import { createAd } from "./ad-creation-model.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { loaderController } from "../loader/loader-controller.js";

export function adCreationController(adCreationForm) {
	const loader = adCreationForm.querySelector('#loader');
	const { showLoader, hideLoader } = loaderController(loader);
	
	adCreationForm.addEventListener('submit', async (event) => {
		event.preventDefault();
	
		const formData = new FormData(adCreationForm);
		const name = formData.get("name");
		const description = formData.get("description");
		const image = formData.get("image");
		const price = formData.get("price");
		const sale = formData.get("sale");
		
		try {
			showLoader();

			await createAd(name, description, image, price, sale === '1');
			
			dispatchEvent('ad-creation-notification', {
				message: 'El anuncio se creó correctamente.',
				type: 'success',
				autoRemove: true
			}, adCreationForm);

			setTimeout(() => {
				window.location = "index.html";
			}, 2000);
		} catch (error) {
			dispatchEvent('ad-creation-notification', {
				message: error,
				type: 'error',
				autoRemove: true
			}, adCreationForm);
		} finally {
			hideLoader();
		}
	});

}
