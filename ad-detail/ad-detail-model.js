import { session } from "../utils/session.js";

const { getAccessToken } = session();

function parseAd(ad) {
	return {
		id: ad.id,
		image: ad.image,
		name: ad.name,
		description: ad.description,
		price: ad.price,
		sale: ad.sale,
		userId: ad.userId
	};
}

function parseUser(user) {
	return {
		id: user.id
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

export async function getUserData() {
	const url = 'http://localhost:8000/auth/me';
	const accessToken = getAccessToken();
  
	try {
		const response = await fetch(url, {
			headers: {
				'Authorization': `Bearer ${accessToken}`
			}
		});
		const data = await response.json();
		return parseUser(data);
	} catch (error) {
	  	throw new Error('Ocurrió un error al traer los datos del usuario.');
	}
}

export async function deleteAd(adId) {
	const url = `http://localhost:8000/api/ads/${adId}`;
	const accessToken = getAccessToken();
  
	try {
	  const response = await fetch(url, {
		method: 'DELETE',
		headers: {
		  'Authorization': `Bearer ${accessToken}`
		}
	  });
	  if (!response.ok) {
		const data = await response.json();
		throw new Error(data.message);
	  }
	} catch (error) {
	  throw new Error('Ocurrió un error eliminando el anuncio.');
	}
}
