// system require
const mk_key = require('../../useful/mk_key.js')
// commands require
const basic = require('./basic.js')

// system require
module.exports = async function(interaction) {
	var data = await mk_key(await interaction.options.getNumber('user-id') ?? 3028393, 0, "profile")
	// redirection to command
	if(interaction.options.getSubcommand() === "basic") {
		basic(await mk_key(data.faction.faction_id, 2, "basic"), interaction)
	}/*
	if(interaction.options.getSubcommand() === "discord") {
		discord(await mk_key(await interaction.options.getNumber('user-id'), 0, "discord"), interaction)
	}
	if(interaction.options.getSubcommand() === "money") {
		money(await mk_key(3028393, 0, "money"), interaction, interaction.options.getBoolean('ephemeral') ?? true)
	}
	if(interaction.options.getSubcommand() === "revives") {
		revives(await mk_key(3028393, 0, "revives"), interaction)
	}
	*/
}