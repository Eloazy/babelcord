const { EmbedBuilder } = require('discord.js')
module.exports = async function(data, interaction) {
	//var stars = " "
	//for(var i = 0; i < data.rating; i++)  {stars += ":star:"}
	const embed = new EmbedBuilder()	
		.setColor('#d4af37')
		.setTitle(':briefcase: Company Informs | '+data.company.name)
		.setDescription('Yes, ma\'am!\nHere is all informs i found about '+data.company.name)
		.addFields(
			{ name: 'Money: ', value: `Daily income: ${data.company.daily_income}\nWeekly income: ${data.company.weekly_income}\nDaily customers: ${data.company.daily_customers}\nWeekly customers: ${data.company.weekly_customers}`, inline:true },
			{ name: 'Employees: ', value: `${data.company.employees_hired} / ${data.company.employees_capacity}`, inline:true },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Stars: ', value: `${data.company.rating}`, inline:true },
			{ name: 'Age: ', value: `${data.company.days_old}`, inline:true },
		)
		.setTimestamp()
		.setFooter({ text: 'Elo\'s Slave 2.0.0' });
	interaction.reply({ embeds: [embed] });
}