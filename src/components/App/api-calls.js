const fetchData = {
	getTricks() {
		return fetch('http://localhost:3001/api/v1/tricks').then((response) =>
			response.json()
		)
	},
	postTrick(newTrick) {
		return fetch('http://localhost:3001/api/v1/tricks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTrick),
		}).then((response) => {
			if (!response.ok) {
				throw new Error('Failed to send trick data')
			} else {
				return response.json()
			}
		})
	},
}

export default fetchData
