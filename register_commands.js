const { REST, Routes } = require('discord.js');
require('dotenv').config()

const commands= [
	{
		"name": "info",
		"description": "get inform from BOT"
	},
	{
		"name": "user",
		"description": "pull data from the User system, using the player ID",
		"options": [
			{
				"name": "profile",
				"description": "get the user profile informs",
				"type":1,
				"options": [
					{
						"name":"user-id",
						"description": "input the user ID, stay blank to automaticaly trigger your",
						"type":10,
						"required":false
					}
				]
			},
			{
				"name": "discord",
				"description": "get the user discord inform",
				"type":1,
				"options": [
					{
						"name":"user-id",
						"description": "input the user ID, stay blank to automaticaly trigger your",
						"type":10,
						"required":true

					}
				]
			},
			{
				"name": "money",
				"description": "get your money inform (have private message security)",
				"type":1,
				"options": [
					{
						"name":"ephemeral",
						"description": "you want this message be secret? (default true)",
						"type":5,
						"required":false
					}
				]
			},
			{
				"name": "revives",
				"description": "get your revive historic",
				"type":1
			}
		]
	},
	{
		"name": "faction",
		"description": "get Faction Informs from yourself or user",
		"options": [
			{
				"name": "basic",
				"description": "get basic informs from a faction using user ID",
				"type": 1,
				"options": [
					{
						"name": "user-id",
						"description": "input the user ID, stay blank to automaticaly trigger your",
						"type": 5,
						"required": false
					}
				]
			}
		]
	},
	{
		"name": "company",
		"description": "get Company Informs from yourself or user",
		"options": [
			{
				"name": "profile",
				"description": "get profile informs from a company using user ID",
				"type": 1,
				"options": [
					{
						"name": "user-id",
						"description": "input the user ID, stay blank to automaticaly trigger your",
						"type": 5,
						"required": false
					}
				]
			},
			{
				"name": "detailed",
				"description": "get profile informs from a company using user ID",
				"type": 1
			}
		]
	}
]

const rest = new REST({ version: '10' }).setToken(process.env.devtoken)

async function reg() {
	try {
		if(process.env.devmode == false) {
			await rest.put(Routes.applicationCommands(process.env.botid), { body: commands })
			console.log('commands registered')
		}
		else {
			await rest.put(Routes.applicationGuildCommands(process.env.devbotid, process.env.testguildid), { body: commands })
			console.log('commands registered | In development environment, only local changes')
		}
	}catch(err) {console.log(err)}		
}
reg()