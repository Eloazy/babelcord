import { EmbedBuilder } from 'discord.js'

export default async function(interaction) {
	const embed = new EmbedBuilder()
		.setColor(0x000000)
		.setTitle('Info')
		.setDescription('BABEL-SYSTEM | version: 3.0')
		.addFields(
			{ name: 'Version:', value: 'Babelaife Branch - 1.0.0B' },
			{ name: 'Babelaife Mode:', value: 'gemini-2.0-flash-thinking-exp-01-21' },
			{ name: 'Creator:', value: '<@874115618746552330>', inline: false }
		)
		.setTimestamp()
	interaction.reply({ embeds: [embed] });	
}
