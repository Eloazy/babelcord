import { Client, GatewayIntentBits } from 'discord.js'
import manager from './system/manager.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({intents: [GatewayIntentBits.MessageContent]})

client.on("ready", () => {
	console.log("Babel started")
	console.log("by Babel systems")
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
