const { EmbedBuilder } = require('discord.js')
module.exports = async function(data, interaction) {
	const embed = new EmbedBuilder()	
		.setColor('#ff0000')
		.setTitle(':drop_of_blood: Revives Informs :drop_of_blood:')
		.setDescription('Yes, ma\'am!\nHere is your entire revive history:')
		.addFields(
			{ name: 'Revived: ', value: Object.keys(data.revives).length+' revived (sucess and fail)', inline:true}
		)
		.setTimestamp()
		.setFooter({ text: 'Elo\'s Slave 2.0.0' });
	interaction.reply({ embeds: [embed] });
}