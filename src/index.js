const express = require("express");
const discordClient = require("./services/discord/client.js");
const discordRoutes = require("./routes/discord.js");
const dotenv = require("dotenv");
const chalkImport = require("chalk");
const chalk = chalkImport.default || chalkImport;

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/discord", discordRoutes);

app.listen(port, () => {
	console.log(chalk.green.bold(`API is listening on port ${port} ✅`));
});

discordClient.login(process.env.DISCORD_BOT_TOKEN);
