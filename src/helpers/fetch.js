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
					const res = {}
					for (let str in o[key]) {
						let newStr = str.split('. ')[1]
						res[newStr] = o[key][str]
					}

					res.date = key;

					return res;
				})
				return arr
			})
		return response
	}
	catch ({ message }) {
		console.log(message);
	}
}