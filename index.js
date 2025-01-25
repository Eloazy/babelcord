const { Client, GatewayIntentBits } = require('discord.js')
const manager = require('./system/manager.js')
require('dotenv').config()

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
	console.log("Babel started")
	console.log("by Eloazy [3028393]")
	console.log("---------------------")
})

client.on("interactionCreate", async (interaction) => {
	const client_data = client
	if(interaction.isCommand() && interaction.user.bot == false) {
		manager(interaction, client_data)
	}
})

if(process.env.devmode == "false" || process.env.devmode == false){client.login(process.env.token)}
else{client.login(process.env.tokendev).then(() => {console.log('devMode')})}