const { EmbedBuilder } = require('discord.js')
module.exports = async function(data, interaction) {
	const embed = new EmbedBuilder()	
		.setColor("#FFA6C9")
		.setTitle('Discord Informs')
		.setDescription('Yes, ma\'am!\nI searched in Torn DB and i found this\nDiscord User: <@'+data.discord.discordID+'>')
		.setTimestamp()
		.setFooter({ text: 'Elo\'s Slave 2.0.0' });
	interaction.reply({ embeds: [embed] });
}