import { EmbedBuilder } from 'discord.js'
import api from '../keySystem/callAPI.js'

export default async function(interaction, money, percent) {
	await interaction.reply({ embeds: [await embedCreator(money, percent)] });
}
async function embedCreator(money, percent) {
	const embed = new EmbedBuilder()	
		.setColor(0xffaa17)
		.setTitle('Investment inform')
		.setDescription('Yes, ma\'am!\nHere is the profit account :bank:')
		.addFields(
			{ name: 'your money input:', value: `${money.toLocaleString()}`, inline:false},
			{ name: 'percent:', value: `${percent}`, inline:false},
			{ name: 'total: ', value: await Math.round((money*(100+percent))/100).toLocaleString(), inline:false},
			{ name: 'profit: ', value: await Math.round(((money*(100+percent))/100)-money).toLocaleString(), inline:false}
		)
		.setTimestamp()
	return embed
}