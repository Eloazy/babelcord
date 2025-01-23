const { EmbedBuilder } = require('discord.js');

module.exports = async function(interaction, client) {
	const embed = new EmbedBuilder()
		.setColor(0x000000)
		.setTitle('Info')
		.setDescription('ELO-SYSTEM | version: 3.0 - re-worked\nOld source in github release 2.0')
		.setThumbnail(client.user.displayAvatarURL())
		.addFields(
			{ name: 'Version:', value: '3.0.0' },
			{ name: 'Creator:', value: '<@874115618746552330>', inline: false },
			{ name: 'Dependencies', value: 'discord.js\ndotenv', inline: false },
			{ name: 'System:', value: 'private bot, personal use, localHost-autostart', inline: false }
		)
		.setTimestamp()
		.setFooter({ text: 'ELO-SYSTEM | v3' });

	interaction.reply({ embeds: [embed] });	
}
