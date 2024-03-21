export function buildAdDetail(ad) {
	return `
	<div class="card ad">
		<div class="card-header">
			<div class="title">
				<h1>${ad.name}</h1>
			</div>
			<div class="actions">
			</div>
		</div>
		<div class="card-body">
			<div class="image">
				<img src="${ad.image}" class="card-img-top" alt="${ad.name}">
			</div>
			<div class="content">
				<p class="card-text">${ad.description}</p>
				<p class="card-text">${ad.price}</p>
				<p class="card-text">${ad.sale ? 'Se vende' : 'Se compra'}</p>
			</div>
		</div>
	</div>
	`;
}
