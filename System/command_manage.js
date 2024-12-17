// management modules
const user = require('./commands/user/user_manage.js')
const faction = require('./commands/faction/faction_manage.js')
const company = require('./commands/company/company_manage.js')
module.exports = async function(interaction) {
	// redirection to command
	if(interaction.commandName === "user") {user(interaction)}
	else if(interaction.commandName === "faction") {faction(interaction)}
	else if(interaction.commandName === "company") {company(interaction)}
	else {return -1} // exception
}