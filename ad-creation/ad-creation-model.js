export const createAd = async (name, description, image, price, sale) => {
	const url = "http://localhost:8000/api/ads";
	
	const body = {
		name: name,
		description: description,
		image: image,
		price: price,
		sale: sale
	};
  
	let response;
	try {
	  response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
		  'Content-type': 'application/json'
		}
	  });
	  
	  if (!response.ok) {
		const data = await response.json()
		throw new Error(data.message);
	  }
	} catch (error) {
	  if (error.message) {
		throw error.message;
	  } else {
		throw error;
	  }
	}
  }
  