import b_babelaife from './babelaife/babelaife.js'

export default function(interaction, client) {
	if(interaction.commandName === "babelaife") {
		b_babelaife(interaction, interaction.options.getString('query') + ' (answer simply)')
	}
}
