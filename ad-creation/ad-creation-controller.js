import { createAd } from "./ad-creation-model.js";

export function adCreationController(adCreation) {
	
	adCreation.addEventListener('submit', async (event) => {
		event.preventDefault();
	
		const formData = new FormData(adCreation);
		const name = formData.get("name");
		const description = formData.get("description");
		const image = formData.get("image");
		const price = formData.get("price");
		const sale = formData.get("sale");
		
		try {
		  await createAd(name, description, image, price, sale === '1');
		  setTimeout(() => {
			window.location = "index.html";
		  }, 2000);
		} catch (error) {
		  alert(error);
		}
	});

}
