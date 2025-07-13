import { Client, GatewayIntentBits, GatewayIntents } from "discord.js";

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
		chalk.green.bold(`Discord Bot logged in as ${client.user.tag} ✅`)
	);
});

export default client;
