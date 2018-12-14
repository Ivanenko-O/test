export const getData = async (api) => {
	try {
		const response = await fetch(api)
			.then((response) => {
				if (response.status !== 200) {
					throw new Error('posts fetch failed')
				}
				return response.json()
			})
			.then((data) => {
				const o = data['Time Series (Daily)']

				const arr = Object.keys(o).map(function (key) {
						o[key].date = key;
						return o[key];
					})
				return arr
			})
		return response
	}
	catch ({ message }) {
		console.log(message);
	}	
}