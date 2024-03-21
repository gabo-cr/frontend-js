function parseAds(data) {
	return data.map(data => ({
		id: data.id,
		image: data.image,
		name: data.name,
		description: data.description,
		price: data.price,
		sale: data.sale
	}));
}

export async function getAds() {
	const url = 'http://localhost:8000/api/ads';
	let ads = [];

	try {
		const response = await fetch(url);
		const data = await response.json();
		ads = parseAds(data);
	} catch (error) {
		throw new Error('Error obteniendo los anuncios');
	}

	return ads;
}
