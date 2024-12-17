const { EmbedBuilder } = require('discord.js')
module.exports = async function(data, interaction) {
	const embed = new EmbedBuilder()	
		.setColor('#d4af37')
		.setTitle(':briefcase: Company Detailed Informs')
		.setDescription('Yes, ma\'am!\nHere is all informs detailed i found about your company')
		.addFields(
			{ name: 'Company Funds: ', value: `${data.company_detailed.company_funds}`, inline:false },
			{ name: 'Popularity: ', value: `${data.company_detailed.popularity}%`, inline:false },
			{ name: 'Efficiency: ', value: `${data.company_detailed.efficiency}%`, inline:false },
			{ name: 'Environment: ', value: `${data.company_detailed.environment}%`, inline:false },
			{ name: 'Trains available: ', value: `${data.company_detailed.trains_available}`, inline:false },
			{ name: 'Advertising budget: ', value: `${data.company_detailed.advertising_budget}`, inline:true },
			{ name: 'Value: ', value: `${data.company_detailed.value}`, inline:true },
		)
		.setTimestamp()
		.setFooter({ text: 'Elo\'s Slave 2.0.0' });
	interaction.reply({ embeds: [embed] });
}