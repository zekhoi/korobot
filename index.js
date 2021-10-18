const { Client, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const data = require("./data.json");

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

client.on('message', async message => {
    let content = message.content.toLowerCase()
    let filter = content.split(' ');
    const commandBody = content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    // console.log(content)
    // console.log(message)
    try {

        if(filter.includes("loli") || filter.includes("fbi")){
            let department = data.department
            let agent = department[Math.floor(Math.random()*department.length)]
            let fbi = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:man_police_officer: **${agent.halo}**`)
                .setImage(agent.image)
                message.channel.send({ embeds: [fbi] });
        }

        // if(message.author.id == 878634991620345887){
        //     let kalimat = [
        //         "Iya maaf kak",
        //         "Aku dibuang mulu sih kak",
        //         "Jangan tsundere mulu dong kak",
        //         "Lagi ngapain kak?",
        //         "Iri ya kak?",
        //         "Udah makan belom kak?",
        //         "Lagi galau ya kak?",
        //         "Marah-marah mulu",
        //         "Mau seblak?",
        //     ]
        //     let ngeselin = kalimat[Math.floor(Math.random()*kalimat.length)]
        //     message.reply(ngeselin);
        //     return;
        // }

        if(message.mentions.everyone){
            message.reply(`Ada perlu apa ${message.author} manggil semua orang? Mau tawuran kah?`);
            return;
        }

        if (message.mentions.has(client.user)) {
             //fetches an URL from the API
            let kata = data.kata_kata
            let rep = kata[Math.floor(Math.random()*kata.length)]
            message.reply(rep);
            return;
        }

        if (!content.startsWith(prefix) || message.author.bot) return;

        switch (command) {

            case "help":
                let helper = new MessageEmbed()
                .setColor("#ff00dd")
                .setAuthor("Command List", "https://cdn.discordapp.com/attachments/896402692925190167/899665193037099058/attachment_126736972.jpeg")
                .setDescription("Gak ada fitur apa-apa, cuma gabut aja mageran.")
                .addFields(
                    { name: '**Mandi**', value: '`koro mandi <mention>`' },
                    { name: '**Nyengir**', value: '`koro nyengir`' },
                    { name: '**Yeet**', value: '`koro yeet`' },
                    { name: '**Lightstick**', value: '`koro ls`' },
                )
                .setFooter('Made by koro', 'https://cdn.discordapp.com/attachments/896402692925190167/899665193037099058/attachment_126736972.jpeg');
                message.channel.send({ embeds: [helper] });
                break;


            case "yeet":
                let yeet = "https://c.tenor.com/jSx1KiL3L2UAAAAC/yeet-lion-king.gif"
                message.channel.send(yeet);
                break;
    
            case "jess":
                message.channel.send("Jess cuma punya Koro!");
                break;

            case "rana":
                message.reply("Hmmmm");
                break;

            case "ls":
                let ls = [
                    "https://c.tenor.com/zWF-SI9SQdwAAAAC/cat-dancing.gif"
                ]; //fetches an URL from the API
                
                let lightstick = ls[Math.floor(Math.random()*ls.length)]
                message.channel.send(lightstick); //send the image URL
                break;
            
            case "ngeselin":
                message.reply("Iya kak maaf :("); //send the image URL
                break;

            case "gelud":
                let musuh = args
                message.channel.send("Mana yang ngajak gelud? Ayo gelud sini!"); //send the image URL
                break;

            case "nyengir":
                let images = data.nyengir
                let nyengir = images[Math.floor(Math.random()*images.length)]
                message.channel.send(nyengir); //send the image URL
                break;

            case "mandi":
                let mentioned = message.mentions.users.first()
                if (mentioned.id == 854548955269431297){
                    message.channel.send("**Hehe, gak bisa**");
                    break;
                }

                let bath = data.mandi
                let mandi = bath[Math.floor(Math.random()*bath.length)]
                let embed = new MessageEmbed()
                .setColor("#ff00dd")
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