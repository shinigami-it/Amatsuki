const chalkImport = require("chalk");
const chalk = chalkImport.default || chalkImport;
const { Client, GatewayIntentBits, GatewayIntents } = require("discord.js");

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.DirectMessageReactions,
		GatewayIntentBits.GuildVoiceStates,
	],
});

client.once("ready", () => {
	console.log(
		chalk.magenta.bold.underline(`Logged in as ${client.user.tag} ✅`)
	);
});

module.exports = client;
