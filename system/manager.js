//integrated
const info = require('./integrated/info.js')
const random = require('./integrated/randomNumber.js')
//torncity
const t_info = require('./tornCity/info.js')
//user
const t_profile = require('./tornCity/user/profile.js')
const t_money = require('./tornCity/user/money.js')
const t_revives = require('./tornCity/user/revive.js')

module.exports = function(interaction, client) {
	if(interaction.commandName === "integrated") {
		if(interaction.options._subcommand === "info") {info(interaction, client)}
		if(interaction.options._subcommand === "random") {random(interaction, interaction.options.getNumber('max') ?? 2)}
	}
	if(interaction.commandName === "torncity") {
		if(interaction.options._subcommand === "info") {t_info(interaction)}
		if(interaction.options._group === "user") {
			if(interaction.options._subcommand === "profile") {t_profile(interaction, interaction.options.getNumber("id") ?? 3028393)}
			if(interaction.options._subcommand === "money") {t_money(interaction, 3028393, interaction.options.getBoolean("ephemeral") ?? true)}
				if(interaction.options._subcommand === "revives") {t_revives(interaction, 3028393)}
		}
	}
}