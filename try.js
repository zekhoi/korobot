const { Client } = require("discord.js");
const config = require("./config.json");
const data = require("./data.json");
const kalimat = require("./bacot.json");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('ready', client => {
    let code = client.channels.cache.get("899131952572014646")
    let spam = kalimat.kata_kata
    setInterval(() => {
        let bacot = spam[Math.floor(Math.random()*spam.length)]
        setTimeout(() => {
            code.sendTyping()
        }, 5000);
        code.send(bacot)
    },10000);
})

client.on('message', async message => {
    // if(message.guildId != 899131952106459167) return;
    if(message.channelId != 884370401659092992) return;
    let content = message.content.toLowerCase()
    console.log(content)

    try {
        if (message.mentions.has(client.user)) {
                let kata = data.kata_kata
                let rep = kata[Math.floor(Math.random()*kata.length)]
                message.reply(rep);
                return;
            }
    } catch (error) {
        message.channel.send(`**Astagfirullah error**`)
    }
})


client.login(config.BOT_TOKEN);