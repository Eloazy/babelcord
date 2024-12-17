const { REST, Routes } = require('discord.js');
require('dotenv').config()
const rest = new REST().setToken(process.env.token);

// ...

// for global commands
rest.put(Routes.applicationCommands(process.env.botid), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);