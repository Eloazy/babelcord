//integrated
import info from './integrated/info.js'
import random from './integrated/randomNumber.js'
//torncity
import t_info from './tornCity/info.js'
//user
import t_profile from './tornCity/user/profile.js'
import t_money from './tornCity/user/money.js'
import t_revives from './tornCity/user/revive.js'
//faction
import f_basic from './tornCity/faction/basic.js'
//useful
import us_investment from './tornCity/useful/investment.js'
//babelaife
import b_info from './babelaife/info.js'
import b_babelaife from './babelaife/babelaife.js'

export default function(interaction, client) {
	if(interaction.commandName === "integrated") {
		if(interaction.options._subcommand === "info") {info(interaction, client)}
		if(interaction.options._subcommand === "random") {random(interaction, interaction.options.getNumber('max') ?? 2)}
	}
	if(interaction.commandName === "babelaife") {
		if(interaction.options._subcommand === "info") {b_info(interaction)}
		if(interaction.options._subcommand === "chat") {b_babelaife(interaction, interaction.options.getString('query'))}
	}
	if(interaction.commandName === "torncity") {
		if(interaction.options._subcommand === "info") {t_info(interaction)}
		
		if(interaction.options._group === "user") {
			if(interaction.options._subcommand === "profile") {t_profile(interaction, interaction.options.getNumber("id") ?? 3028393)}
			if(interaction.options._subcommand === "money") {t_money(interaction, 3028393, interaction.options.getBoolean("ephemeral") ?? true)}
				if(interaction.options._subcommand === "revives") {t_revives(interaction, 3028393)}
		}
		if(interaction.options._group === "faction") {
			if(interaction.options._subcommand === "basic") {
				f_basic(interaction, interaction.options.getNumber('id') ?? 53051)
			}
		}
		if(interaction.options._group === "useful") {
			if(interaction.options._subcommand === "investment") {
				us_investment(interaction, interaction.options.getNumber('value'), interaction.options.getNumber('percentage'))
			}
		}
	}
}