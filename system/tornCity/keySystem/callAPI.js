require('dotenv').config({ path: '../../.env' })
module.exports = async function(link) {
	var Data = null
    await fetch(link, {
        headers: {
            accept: 'application/json',
            Authorization: `ApiKey ${process.env.tornkey}`
        }
    }).then(response => {
        if(!response.ok) {key_valid = false; return}
        return response.json()
    }).then(data => {
        Data = data
    })
    return Data
}