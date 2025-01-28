import { EmbedBuilder } from 'discord.js'

export default async function(interaction) {
	const embed = new EmbedBuilder()
		.setColor(0x000000)
		.setTitle('Info')
		.setDescription('BABEL-SYSTEM | version: 3.0')
		.setImage('https://torn.com/images/social/social.png')
		.addFields(
			{ name: 'Version:', value: 'TornCity Branch - 1.0.0B' },
			{ name: 'Creator:', value: '<@874115618746552330>', inline: false }
		)
		.setTimestamp()
		.setFooter({ text: 'Babel\'s Torn-3.0.0' });

	interaction.reply({ embeds: [embed] });	
}
