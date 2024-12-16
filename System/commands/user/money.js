const { EmbedBuilder } = require('discord.js')
module.exports = async function(data, interaction, ephemeral) {
	console.log(data.daily_networth)
	console.log(typeof data.daily_networth)
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
		.setFooter({ text: 'Elo\'s Slave 2.0.0'});
	interaction.reply({ embeds: [embed], ephemeral: ephemeral });
}