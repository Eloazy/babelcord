const { EmbedBuilder } = require('discord.js')
module.exports = async function(interaction) {
	const embed = new EmbedBuilder()	
		.setColor("#000000")
		.setTitle('ELO-INFORM')
		.setDescription('ELO-SYSTEM | BASE version: 2.0 - re-worked\nOld source code not found')
		.addFields(
			{ name: 'Version:', value: `2.0.0`, inline:false},
			{ name: 'Creator:', value: `<@874115618746552330>`, inline:false},
			{ name: 'Dependencies:', value: `Discord.js\ndotenv`, inline:false},
			{ name: 'Public? :', value: `private, only Eloazy and authorized persons`, inline:false}
		)
		.setTimestamp()
		.setFooter({ text: 'Elo\'s Slave 2.0.0'});
	interaction.reply({ embeds: [embed] });
}
