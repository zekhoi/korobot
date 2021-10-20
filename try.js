const { Client } = require("discord.js");
const config = require("./config.json");
const data = require("./data.json");
const kalimat = require("./bacot.json");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

client.on('ready', client => {
    let code = client.channels.cache.get("884370401659092992")
    let spam = kalimat.kata_kata
    setInterval(() => {
        code.sendTyping()
        setTimeout(() => {
            let bacot = spam[Math.floor(Math.random()*spam.length)]
            code.send(bacot)
        }, 3000);
    },60000);
})

client.on('message', async message => {
    // if(message.guildId != 899131952106459167) return;
    if(message.channelId != 884370401659092992) return;
    let content = message.content.toLowerCase()
    console.log(content)

    try {
        if (message.mentions.has(client.user)) {
                message.channel.sendTyping()
                setTimeout(() => {
                    let kata = data.kata_kata
                    let rep = kata[Math.floor(Math.random()*kata.length)]
                    message.reply(rep);
                }, 3000);
                
                return;
            }
    } catch (error) {
        // message.channel.send(`**Astagfirullah error : ${error}**`)
        message.channel.send(`**Astagfirullah error**`)
    }
})


client.login(config.BOT_TOKEN);