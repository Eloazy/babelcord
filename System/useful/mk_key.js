const pullData = require('./fetchData.js')
require('dotenv').config({ path: '../../.env' })

const key = {
	firstPart: "https://api.torn.com/",
	macroVariable: ["user/", "property/", "faction/", "company/", "market/", "torn/"],
	secondPart: "?selections=",
	thirthPart: "&key=",
	fourthPart: "&comment="
}
module.exports = async function(UserID, master, specific) {
	return pullData(await key.firstPart.concat(key.macroVariable[master] + UserID + key.secondPart + specific + key.thirthPart + process.env.tornkey + key.fourthPart + "Elo's Slave"))

}