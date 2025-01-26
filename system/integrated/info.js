const { EmbedBuilder } = require('discord.js');

module.exports = async function(interaction, client) {
	const embed = new EmbedBuilder()
		.setColor(0x000000)
		.setTitle('Info')
		.setDescription('BABEL-SYSTEM')
		.setThumbnail(client.user.displayAvatarURL())
		.addFields(
			{ name: 'Version:', value: '3.1.0' },
			{ name: 'Creator:', value: '<@874115618746552330>', inline: false },
			{ name: 'Dependencies', value: 'discord.js\ndotenv\n@google/generative-ai', inline: false },
			{ name: 'System:', value: 'private bot, personal use, localHost-autostart', inline: false }
		)
		.setTimestamp()
	interaction.reply({ embeds: [embed] });
}
