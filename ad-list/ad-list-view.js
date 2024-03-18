export function buildAd(ad) {
	return `
	<div class="card ad">
		<img src="${ad.image}" class="card-img-top" alt="${ad.name}">
		<div class="card-body">
			<h5 class="card-title">${ad.name}</h5>
			<p class="card-text">${ad.description}</p>
			<p class="card-text">${ad.price}</p>
			<p class="card-text">${ad.sale ? 'Se vende' : 'Se compra'}</p>
			<a href="#" class="btn btn-primary">Ver más</a>
		</div>
	</div>
	`;
}

export function buildEmptyAdList() {
	return `<h3>Aún no tenemos anuncios disponibles.</h3>`;
}