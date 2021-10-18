const { Client, MessageEmbed } = require("discord.js");
const BOT_TOKEN = "ODkzNDMxMjEzNDMwMjg4NDE0.YVbWqA.2xDf1RivgmcWzqSAmh62NWDw33Y";

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = "koro " || "koro!";

client.once('ready', () => {
    console.log("We are online!")
    client.user.setPresence({
        status: 'available',
        activity: {
            name: 'with you',
            type: 'PLAYING',
        }
    });
    client.user.setActivity('Moncrot Server', { type: 'WATCHING' });
});

client.login(BOT_TOKEN);