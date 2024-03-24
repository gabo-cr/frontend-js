function buildImage(ad) {
	let imageElement = '';
	if (ad.image) {
		imageElement = `<img src="${ad.image}" class="card-img-top" alt="${ad.name}">`;
	} else {
		imageElement = '<div class="default-img">sin imagen</div>';
	}
	return imageElement;
}

export function buildAdDetail(ad) {
	const image = buildImage(ad);

	return `
	<div class="card mt-2 mb-4 p-0">
		<div class="img">
			${image}
		</div>
		<div class="card-body py-3 px-4">
			<h1 class="title">${ad.name}</h1>
			<div class="content">
				<p class="description">${ad.description}</p>
			</div>
			<div class="footer">
				<span class="price">${ad.price} €</span>
				<span class="sale">${ad.sale ? 'Se vende' : 'Se compra'}</span>
			</div>
		</div>
	</div>
	`;
}

export function buildAdDetailActions() {
	return `<button disabled id="removeAdButton" class="btn btn-danger">Eliminar el anuncio</button>`;
}
