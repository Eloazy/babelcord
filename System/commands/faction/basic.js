const { EmbedBuilder } = require('discord.js')
module.exports = async function(data, interaction) {
	const embed = new EmbedBuilder()	
		.setColor('#ff9999')
		.setTitle(':crossed_swords: Faction Informs | '+data.name)
		.setDescription('Yes, ma\'am!\nHere is all informs i found about '+data.name)
		.addFields(
			{ name: 'General: ', value: 'Respect: '+data.respect+'\nAge: '+data.age+'\nMembers: '+Object.keys(data.members).length+'/'+data.capacity, inline:true },
			{ name: 'WarRank: ', value: 'Rank: '+data.rank.name+'\nWins: '+data.rank.wins +'\nCurrecy treaties: (working on it)'+'\nCurrecy Wars (raid) : (working on it)', inline:true },
		)
		.setTimestamp()
		.setFooter({ text: 'Elo\'s Slave 2.0.0' });
	interaction.reply({ embeds: [embed] });
}