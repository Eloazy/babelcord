const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config()

const command_manage = require('./system/command_manage.js')

const client = new Client(
	{ 
		intents:
		[
			GatewayIntentBits.Guilds, 
			GatewayIntentBits.GuildMembers, 
			GatewayIntentBits.GuildMessages, 
			GatewayIntentBits.MessageContent
		] 
	})

client.on("ready", () => {
	console.log("SlaveBOT started")
	console.log("by Eloazy [3028393]")
	console.log("---------------------")
})

client.on("interactionCreate", async (interaction) => {
	if(interaction.isCommand() && interaction.user.bot == false) {
		if(interaction.user.id !== "874115618746552330") {return interaction.reply('you are not my misstres, get out here')}
		command_manage(interaction)
	}
})

if(process.env.devmode==false){client.login(process.env.token)}
else{client.login(process.env.devtoken).then(console.log('in development environment, only local changes'))}