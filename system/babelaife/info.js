const { EmbedBuilder } = require('discord.js');

module.exports = async function(interaction) {
	const embed = new EmbedBuilder()
		.setColor(0x000000)
		.setTitle('Info')
		.setDescription('BABEL-SYSTEM | version: 3.0')
		.addFields(
			{ name: 'Version:', value: 'Babelaife Branch - 1.0.0B' },
			{ name: 'Creator:', value: '<@874115618746552330>', inline: false }
		)
		.setTimestamp()
	interaction.reply({ embeds: [embed] });	
}
