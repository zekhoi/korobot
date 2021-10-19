const { Client, MessageEmbed } = require("discord.js");
const { getQuote, getNeko, getWaifu } = require("./function.js");
const config = require("./config.json");
const data = require("./data.json");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = "koro " || "koro!";


client.on('message', async message => {

    let content = message.content.toLowerCase()
    let filter = content.split(' ');
    const commandBody = content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    let mentioned = message.mentions.users.first()
    let time = new Date().toLocaleTimeString('en-GB', { timeZone: "Asia/Jakarta" });
    console.log(`[${time}] ${content}`);
    // console.log(content)
    // console.log(message)
    try {
        if(filter.includes("loli") || filter.includes("loliku") || filter.includes("fbi")){
            let department = data.department
            let agent = department[Math.floor(Math.random()*department.length)]
            let fbi = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:man_police_officer: **${agent.halo}**`)
                .setImage(agent.image)
                message.channel.send({ embeds: [fbi] });
            return;
        }

        if(message.mentions.everyone){
            message.reply(`Ada perlu apa ${message.author} manggil semua orang? Mau tawuran kah?`);
            return;
        }

        if (message.mentions.has(client.user)) {
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
                .setDescription("Gak ada fitur apa-apa, cuma gabut aja.")
                .addFields(
                    { name: '**Quote**', value: '`koro quote`' },
                    { name: '**Gelud**', value: '`koro gelud`' },
                    { name: '**Nyengir**', value: '`koro nyengir`' },
                    { name: '**Garing**', value: '`koro garing`' },
                    { name: '**Ntah**', value: '`koro ntah`' },
                    { name: '**Lightstick**', value: '`koro ls`' },
                    { name: '**Mandi**', value: '`koro mandi <mention>`' },
                    { name: '**Yeet**', value: '`koro yeet <mention>`' },
                    { name: '**Tendang**', value: '`koro tendang <mention>`' },
                    { name: '**Tampar**', value: '`koro tampar <mention>`' },
                    { name: '**Bully**', value: '`koro bully <mention>`' },
                    { name: '**Bonk**', value: '`koro bonk <mention>`' },
                    { name: '**Jilat**', value: '`koro jilat <mention>`' },
                )
                .setFooter('Made by koro', 'https://cdn.discordapp.com/attachments/896402692925190167/899665193037099058/attachment_126736972.jpeg');
                message.channel.send({ embeds: [helper] });
                break;
    
            case "jess":
                message.channel.send("Jess cuma punya Koro!");
                break;
            
            case "ngeselin":
                message.reply("Iya kak maaf :("); //send the image URL
                break;

            case "gelud":
                let musuh = args
                message.channel.send("Mana yang ngajak gelud? Ayo gelud sini!"); //send the image URL
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

            case "nyengir":
                let images = data.nyengir
                let nyengir = images[Math.floor(Math.random()*images.length)]
                message.channel.send(nyengir); //send the image URL
                break;
                
            case "garing":
                let garing = await getWaifu("cringe")
                message.channel.send(garing); //send the image URL
                break;
                
            case "ntah":
                let ntah = await getNeko("shrug")
                message.channel.send(ntah); //send the image URL
                break;

            case "nangis":
                let nangis = await getNeko("cry")
                message.channel.send(nangis); //send the image URL
                break;
    
            case "mandi":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
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

            case "yeet":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                let yeet_img = await getWaifu("yeet")
                let yeet = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:raised_hands: **${message.author.username}** ngelempar **${mentioned.username}**`)
                .setImage(yeet_img)
                .setTimestamp()
                message.channel.send({ embeds: [yeet] });
                break;
                
            case "tendang":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                let tendang_img = await getWaifu("kick")
                let tendang = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:raised_hands: **${message.author.username}** nendang **${mentioned.username}**`)
                .setImage(tendang_img)
                .setTimestamp()
                message.channel.send({ embeds: [tendang] });
                break;

            case "tampar":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                let tampar_img = await getWaifu("slap")
                let tampar = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:raised_hands: **${message.author.username}** nampar **${mentioned.username}**`)
                .setImage(tampar_img)
                .setTimestamp()
                message.channel.send({ embeds: [tampar] });
                break;
            
            case "jilat":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                let jilat_img = await getWaifu("lick")
                let jilat = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:tongue: **${message.author.username}** ngejilat **${mentioned.username}**`)
                .setImage(jilat_img)
                .setTimestamp()
                message.channel.send({ embeds: [jilat] });
                break;
                
            case "bully":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                let bully_img = await getWaifu("bully")
                let bully = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:pinching_hand: **${message.author.username}** ngebully **${mentioned.username}**`)
                .setImage(bully_img)
                .setTimestamp()
                message.channel.send({ embeds: [bully] });
                break;

            case "bonk":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                let bonk_img = await getWaifu("bonk")
                let bonk = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:field_hockey: **${message.author.username}** ngebonk **${mentioned.username}**`)
                .setImage(bonk_img)
                .setTimestamp()
                message.channel.send({ embeds: [bonk] });
                break;
                
            case "quote":
                let qdata = await getQuote()
                let quote = new MessageEmbed()
                .setColor("#ff00dd")
                .setAuthor(`${qdata.character}`, "https://cdn.discordapp.com/attachments/896402692925190167/899665193037099058/attachment_126736972.jpeg")
                .setDescription(`${qdata.quote}`)
                .setFooter(`Anime : ${qdata.anime}`);
                message.channel.send({ embeds: [quote] });
                break;
        }
    }

    catch(err) {
        // message.channel.send(`**Astagfirullah error : ${err}**`)
        message.channel.send(`**Astagfirullah error**`)
    }
    
})


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

client.login(config.BOT_TOKEN);