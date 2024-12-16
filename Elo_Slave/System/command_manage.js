// management modules
const user = require('./commands/user/user_manage.js')
module.exports = async function(interaction) {
	if(interaction.commandName === "user") {user(interaction)}
}