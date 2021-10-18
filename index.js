const { Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = "koro " || "koro!";

client.once('ready', () => {
    client.user.setPresence({
        status: 'available',
        activity: {
            name: 'with you',
            type: 'PLAYING',
        }
    });
    client.user.setActivity('Moncrot Server', { type: 'WATCHING' });
});

client.on('message', async message => {
    content = message.content.toLowerCase()

    if(message.mentions.everyone){
        message.reply(`Ada perlu apa ${message.author} ngemention semuanya?`);
    }

    if (!content.startsWith(prefix) || message.author.bot) return;
    
    const commandBody = content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    // console.log(args)
    try {

        if (message.mentions.has(client.user)) {
            message.reply('Kenapa? Ada yang mau gelud kah?');
        }

        switch (command) {

            case "jess":
                message.channel.send("Jess cuma punya Koro!");
                break;
    
            case "ls":
                let ls = [
                    "https://c.tenor.com/zWF-SI9SQdwAAAAC/cat-dancing.gif"
                ]; //fetches an URL from the API
                
                let lightstick = ls[Math.floor(Math.random()*ls.length)]
                message.channel.send(lightstick); //send the image URL
                break;
            
            case "ngeselin":
                message.reply("Aku dibuang terus"); //send the image URL
                break;

            case "gelud":
                let musuh = args
                message.channel.send("Mana yang ngajak gelud? Ayo gelud sini!"); //send the image URL
                break;

            case "nyengir":
                let images = ["https://media.discordapp.net/attachments/896402692925190167/899309006663847997/IMG_20211008_185048.jpg",
                    "https://i.pinimg.com/originals/90/1d/fc/901dfca7406689e2ba859bc7bda8c7b8.png",
                    "https://www.memesmonkey.com/images/memesmonkey/s_38/3880a4f9952272933965427934eb5b17.jpeg",
                    "https://c.tenor.com/rsoqDTrdsIUAAAAM/cat-smile.gif"
                ];
                let nyengir = images[Math.floor(Math.random()*images.length)]
                message.channel.send(nyengir); //send the image URL
                break;

            case "mandi":
                let mentioned = message.mentions.users.first()
                if (mentioned.id == 854548955269431297){
                    message.channel.send("**Hehe, gak bisa**");
                    break;
                }

                let bath = [
                    "https://c.tenor.com/KhNWlWQ9ST4AAAAM/shaptic-monk.gif",
                    "https://c.tenor.com/jMrp5EU-i2QAAAAd/water-monkey.gif",
                    "https://c.tenor.com/XlINniyLnowAAAAC/monkey-in.gif",
                    "https://c.tenor.com/I26DqtPNzyUAAAAC/animals-cute.gif",
                    "https://c.tenor.com/9rkrXs9nbNQAAAAd/monkey-monkeys.gif",
                ];
                let mandi = bath[Math.floor(Math.random()*bath.length)]
                let embed = new MessageEmbed()
                .setDescription(`:bathtub:  **${message.author.username}** mandiin **${mentioned.username}**`)
                .setImage(mandi)
                .setTimestamp()
                message.channel.send({ embeds: [embed] });
                break;

        }
    }

    catch(err) {
        message.channel.send(`**Astagfirullah error**`)
    }
    
})

client.login(config.BOT_TOKEN);