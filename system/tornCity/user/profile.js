const { EmbedBuilder } = require('discord.js')
const api = require('../keySystem/callAPI.js')

module.exports = async function(interaction, id) {
	const link = `https://api.torn.com/v2/user?selections=profile&id=${id}&striptags=false`
	await interaction.reply({ embeds: [await embedCreator(await api(link))] });
}

async function embedCreator(data) {
	const embed = new EmbedBuilder()
		.setColor(await status(data.status.color))
		.setTitle('Profile Informs | activity: '+ activity(data.last_action.status))
		.setAuthor({ name: '🔗 '+data.name+' | '+data.player_id, url: `https://www.torn.com/profiles.php?XID=${data.player_id}`})
		.setDescription('Yes, ma\'am!\nHere is all the relevant information for you about this user\'s profile')
		.setThumbnail(data.profile_image)
		.addFields(
			{ name: 'General:', value: 'Rank: '+data.rank+'\n Level & Age: '+data.level+' | '+data.age+' days\n SignUp: '+ data.signup+'\nFaE: '+data.friends+'/'+data.enemies, inline:true},
			{ name: 'Life-Style:', value: 'Propertie: '+data.property+'\nMarried: '+data.married.spouse_name+'\nRevivable:'+ data.revivable+'\nStatus:\n- '+data.last_action.status+'\n- '+data.status.description+'\n-'+data.status.details+'\nLast Action: '+data.last_action.relative, inline:true},
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Faction', value: 'Name: '+data.faction.faction_name+'\nJoined: '+data.faction.days_in_faction+' days ago\nPosition: '+data.faction.position, inline: true },
			{ name: 'Job', value: 'Name: '+data.job.company_name+'\nPosition: '+data.job.position, inline: true },
		)
		.setTimestamp()
	return embed

	function status(data) {
		if(data == "green") {return 0x06a103}
		else if(data == "blue") {return 0x0303a1}
		else {return 0xa1030b}
	}

	function activity(data) {
		if(data == "Online") {return ":green_circle:"}
		else if(data == "Idle") {return ":orange_circle:"}
		else {return ":red_circle:"}
	}
}
