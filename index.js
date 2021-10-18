const { Client, MessageEmbed } = require("discord.js");
const BOT_TOKEN = "ODkzNDMxMjEzNDMwMjg4NDE0.YVbWqA.2xDf1RivgmcWzqSAmh62NWDw33Y";

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = "koro " || "koro!";

client.on("ready", () => {
    console.log("I am ready!");
});

client.login(BOT_TOKEN);