import { EmbedBuilder } from 'discord.js'
import api from '../keySystem/callAPI.js'

export default async function(interaction, id, ephemeral) {
	const link = `https://api.torn.com/v2/user?selections=money&id=${id}&striptags=false`
	await interaction.reply({ embeds: [await embedCreator(await api(link))], ephemeral: ephemeral });
}
function embedCreator(data) {
	const embed = new EmbedBuilder()	
		.setColor("#85bb65")
		.setTitle('Money Inform')
		.setDescription('Yes, ma\'am!\nHere is everything and where is your dear money')
		.addFields(
			{ name: 'Points:', value: `${data.points}`, inline:false},
			{ name: 'On Hand:', value: `${data.money_onhand}`, inline:false},
			{ name: 'Cayman:', value: `${data.cayman_bank}`, inline:false},
			{ name: 'House Vault:', value: `${data.vault_amount}`, inline:false},
			{ name: 'Company:', value: `${data.company_funds}`, inline:false},
			{ name: 'Torn Bank:', value: `${data.city_bank.amount}`, inline:false},
			{ name: 'Networth:', value: `${data.daily_networth}`, inline:false}
		)
		.setTimestamp()
	return embed
}