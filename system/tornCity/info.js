const { EmbedBuilder } = require('discord.js');

module.exports = async function(interaction) {
	const embed = new EmbedBuilder()
		.setColor(0x000000)
		.setTitle('Info')
		.setDescription('ELO-SYSTEM | version: 3.0')
		.setImage('https://torn.com/images/social/social.png')
		.addFields(
			{ name: 'Version:', value: 'TornCity Branch - 1.0.0B' },
			{ name: 'Creator:', value: '<@874115618746552330>', inline: false }
		)
		.setTimestamp()
		.setFooter({ text: 'ELO-SYSTEM | v3' });

	interaction.reply({ embeds: [embed] });	
}
