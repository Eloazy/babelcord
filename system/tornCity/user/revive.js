const { EmbedBuilder } = require('discord.js')
const api = require('../keySystem/callAPI.js')

module.exports = async function(interaction, id) {
	const link = `https://api.torn.com/v2/user?selections=revives&id=${id}&striptags=false`
	await interaction.reply({ embeds: [await embedCreator(await api(link))] });
}

function embedCreator(data) {
	const embed = new EmbedBuilder()	
		.setColor(0xff0000)
		.setTitle(':drop_of_blood: Revives Informs :drop_of_blood:')
		.setDescription('Yes, ma\'am!\nHere is your entire revive history:')
		.addFields(
			{ name: 'Revived: ', value: Object.keys(data.revives).length+' revived (sucess and fail)', inline:true}
		)
		.setTimestamp()
		.setFooter({ text: 'Elo\'s Slave 2.0.0' });
	return embed;
}