module.exports = async function(link) {
	var Data = null
	await fetch(link).then(response => {
		if(!response.ok) {return -1}
		return response.json()
	}).then(data => {Data = data})
	return Data
}