// system require
const mk_key = require('../../useful/mk_key.js')
// commands require
const profile = require('./profile.js')
const detailed = require('./detailed.js')

// system require
module.exports = async function(interaction) {
	var data = await mk_key(await interaction.options.getNumber('user-id') ?? 3028393, 0, "profile")
	// redirection to command
	if(interaction.options.getSubcommand() === "profile") {
		profile(await mk_key(data.job.company_id, 3, "profile"), interaction)
	}
	if(interaction.options.getSubcommand() === "detailed") {
		detailed(await mk_key(await data.job.company_id, 3, "detailed"), interaction)
	}
}