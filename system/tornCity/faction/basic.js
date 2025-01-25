const { EmbedBuilder } = require('discord.js')
const api = require('../keySystem/callAPI.js')

module.exports = async function(interaction, id) {
	const link = `https://api.torn.com/v2/faction/${id}/basic`
	await interaction.reply({ embeds: [await embedCreator(await api(link))] });
}
function embedCreator(data) {
	const embed = new EmbedBuilder()	
		.setColor(0xbf1d11)
		.setTitle(`${data.basic.name} | ${data.basic.tag}`)
		.setDescription('Yes, ma\'am!\nHere is the basic infos from this faction')
		.addFields(
			{ name: 'Respect:', value: `${data.basic.respect}`, inline:false},
			{ name: 'Days_old:', value: `${data.basic.days_old}`, inline:false},
			{ name: 'Members:', value: `${data.basic.members}/${data.basic.capacity}`, inline:false},
			{ name: 'Enlisted?:', value: `${data.basic.is_enlisted}`, inline:false},
			{ name: 'Rank:', value: `${data.basic.rank.name}`, inline:false},
			{ name: 'Wins:', value: `${data.basic.rank.wins}`, inline:false},
			{ name: 'Best chain:', value: `${data.basic.best_chain}`, inline:false}
		)
		.setTimestamp()
	return embed
}