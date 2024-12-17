// system require
const mk_key = require('../../useful/mk_key.js')
// commands require
const profile = require('./profile.js')
const discord = require('./discord.js')
const money = require('./money.js')
const revives = require('./revives.js')
module.exports = async function(interaction) {
	// redirection to command
	if(interaction.options.getSubcommand() === "profile") {
		profile(await mk_key(await interaction.options.getNumber('user-id') ?? 3028393, 0, "profile"), interaction)
	}
	if(interaction.options.getSubcommand() === "discord") {
		discord(await mk_key(await interaction.options.getNumber('user-id'), 0, "discord"), interaction)
	}
	if(interaction.options.getSubcommand() === "money") {
		money(await mk_key(3028393, 0, "money"), interaction, interaction.options.getBoolean('ephemeral') ?? true)
	}
	if(interaction.options.getSubcommand() === "revives") {
		revives(await mk_key(3028393, 0, "revives"), interaction)
	}
}