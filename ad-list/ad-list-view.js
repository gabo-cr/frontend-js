function buildImage(ad) {
	let imageElement = '';
	if (ad.image) {
		imageElement = `<img src="${ad.image}" class="card-img-top" alt="${ad.name}">`;
	} else {
		imageElement = '<div class="default-img">sin imagen</div>';
	}
	return imageElement;
}

export function buildAd(ad) {
	const image = buildImage(ad);

	return `
	<div class="card mb-4">
		<a href="/ad-detail.html?adId=${ad.id}">
			<div class="img">
				${image}
			</div>
			<div class="card-body">
				<div class="header">
					<h5 class="title">${ad.name}</h5>
					<p class="description">${ad.description}</p>
				</div>
				<div class="footer">
					<span class="price">${ad.price} €</span>
					<span class="sale">${ad.sale ? 'Se vende' : 'Se compra'}</span>
				</div>
			</div>
		</a>
	</div>
	`;
}

export function buildEmptyAdList() {
	return `<h3>Aún no tenemos anuncios disponibles.</h3>`;
}