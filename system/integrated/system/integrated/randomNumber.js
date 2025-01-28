export default function(interaction, maxNumber) {
	interaction.reply(`the random number returned is: ${Math.floor(Math.random() * Math.abs(maxNumber+1))}`)
}