function parseAd(ad) {
	return {
		id: ad.id,
		image: ad.image,
		name: ad.name,
		description: ad.description,
		price: ad.price,
		sale: ad.sale
	};
}

export async function getAdDetail(adId) {
	const url = `http://localhost:8000/api/ads/${adId}`;
  
	try {
	  const response = await fetch(url);
	  const data = await response.json();
	  const ad = parseAd(data);
	  return ad;
	} catch (error) {
	  throw new Error('Error obteniendo el anuncio')
	}
  
}
