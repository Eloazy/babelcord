const { Client, GatewayIntentBits, ActivityType } = require('discord.js')
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
	console.log("SlaveBOT started")
	console.log("by Eloazy [3028393]")
	console.log("---------------------")
	client.user.setActivity({
		name: 'the creator making something',
		type: ActivityType.Watching
	})
})

client.on("interactionCreate", async (interaction) => {
	const client_data = client
	if(interaction.isCommand() && interaction.user.bot == false) {
		manager(interaction, client_data)
	}
})

client.login("MTMzMTAwODc2ODEzMzE3MzI5OA.GJMl28.-ES651iebyjhfYaP9H_n2nzS8Q5KuLFYhPZFno")
//client.login(process.env.token)