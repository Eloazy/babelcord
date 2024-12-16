const { EmbedBuilder } = require('discord.js')
module.exports = async function(data, interaction) {
	const embed = new EmbedBuilder()	
		.setColor(await status(data.status.color))
		.setTitle('Profile Informs | activity: '+ activity(data.last_action.status))
		.setAuthor({ name: data.name })
		.setDescription('Yes, ma\'am!\nHere is all the relevant information for you about this user\'s profile')
		.setThumbnail(data.profile_image)
		.addFields(
			{ name: 'General:', value: 'Rank: '+data.rank+'\n Level & Age: '+data.level+' | '+data.age+' days\n SignUp: '+ data.signup+'\nFaE: '+data.friends+'/'+data.enemies, inline:true},
			{ name: 'Life-Style:', value: 'Propertie: '+data.property+'\nMarried: '+data.married.spouse_name+'\nRevivable:'+ data.revivable+'\nStatus:\n- '+data.last_action.status+'\n- '+data.status.description+'\nLast Action: '+data.last_action.relative, inline:true},
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Faction', value: 'Name: '+data.faction.faction_name+'\nJoined: '+data.faction.days_in_faction+' days ago\nPosition: '+data.faction.position, inline: true },
			{ name: 'Job', value: 'Name: '+data.job.company_name+'\nPosition: '+data.job.position, inline: true },
		)
		.addFields({ name: 'caption: ', value: 'bar color = status (fly, hospital, ok)\nCircle: = activity (online, idle, offline)', inline: false })
		.setTimestamp()
		.setFooter({ text: 'Elo\'s Slave 2.0.0' });
	interaction.reply({ embeds: [embed] });
}

function status(data) {
	if(data == "green") {return "#06a103"}
	else if(data == "blue") {return "#0303a1"}
	else {return "#a1030b"}
}

function activity(data) {
	if(data == "Online") {return ":green_circle:"}
	else if(data == "Idle") {return ":orange_circle:"}
	else {return ":red_circle:"}
}