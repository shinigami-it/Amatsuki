import express from "express";
import discordClient from "./services/discord/client.js";
import discordRoutes from "./routes/discord.js";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/discord", discordRoutes);

app.listen(port, () => {
	console.log(chalk.green.bold(`API is listening on port ${port} ✅`));
});

discordClient.login(process.env.DISCORD_BOT_TOKEN);
