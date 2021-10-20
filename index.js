const { Client, MessageEmbed } = require("discord.js");
const { getQuote, getNeko, getWaifu } = require("./function.js");
const config = require("./config.json");
const data = require("./data.json");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = config.PREFIX;

client.on('ready', () => {
    console.log("We are online!");
    setInterval(() => {
        let status = [
            {
                name : "HATI DAEM",
                type : "LISTENING"
            },
            {
                name : "PERASAANMU",
                type : "PLAYING"
            },
            {
                name : "MONCROT SERVER",
                type : "WATCHING"
            }
        ]
        let current = status[Math.floor(Math.random()*status.length)]
        client.user.setActivity(current.name, { type: current.type });
    },10000);
});


client.on('message', async message => {
    if(message.channelId == 884370401659092992) return;

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
        if(filter.includes("loli") || filter.includes("loliku")  || filter.includes("istriku") || filter.includes("fbi")){
            message.channel.sendTyping()
            setTimeout(() => {
                let department = data.department
                let agent = department[Math.floor(Math.random()*department.length)]
                let fbi = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:man_police_officer: **${agent.halo}**`)
                .setImage(agent.image)
                message.channel.send({ embeds: [fbi] });
                return;
            }, 2000);
        }

        if(filter.includes("coklat") || filter.includes("cokelat") || filter.includes("chocolate")){
            message.channel.sendTyping()
            setTimeout(() => {
                let coklat = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:chocolate_bar:  **Ada yang bilang coklat?**`)
                .setImage("https://i.pinimg.com/originals/68/d9/fc/68d9fcbcc7cc1d8c1c1015b3dbc5c4ee.gif")
                message.channel.send({ embeds: [coklat] });
                return;
            }, 2000);
        }

        if(content == "pagi" || content == "selamat pagi" || content == "pagii" || content == "pagiii" || content == "pagi.." || content == "pagi..."){
            message.channel.sendTyping()
            setTimeout(() => {
                let greets = data.greets
                let pagi = greets[Math.floor(Math.random()*greets.length)]
                message.reply(pagi)
                return;
            }, 2000);
        }

        if(message.mentions.everyone){
            message.reply(`Ada perlu apa ${message.author} manggil semua orang? Mau tawuran kah?`);
            return;
        }

        // if (message.mentions.has(client.user)) {
        //     let kata = data.kata_kata
        //     let rep = kata[Math.floor(Math.random()*kata.length)]
        //     message.reply(rep);
        //     return;
        // }

        if (!content.startsWith(prefix) || message.author.bot) return;

        switch (command) {
            case "help":
                let helper = new MessageEmbed()
                .setColor("#ff00dd")
                .setAuthor("Command List", "https://cdn.discordapp.com/attachments/896402692925190167/899665193037099058/attachment_126736972.jpeg")
                .setDescription("Gak ada fitur apa-apa, cuma gabut aja.")
                .addFields(
                    { name: '**Quote**', value: '`koro quote`', inline: true },
                    { name: '**Gelud**', value: '`koro gelud`', inline: true },
                    { name: '**Nyengir**', value: '`koro nyengir`', inline: true },
                    { name: '**Garing**', value: '`koro garing`', inline: true },
                    { name: '**Malu**', value: '`koro malu`', inline: true },
                    { name: '**Genit**', value: '`koro genit`', inline: true },
                    { name: '**Ntah**', value: '`koro ntah`', inline: true },
                    { name: '**Nangis**', value: '`koro nangis`', inline: true },
                    { name: '**Bingung**', value: '`koro bingung`', inline: true },
                    { name: '**Mantap**', value: '`koro mantap`', inline: true },
                    { name: '**Bosen**', value: '`koro bosen`', inline: true },
                    { name: '**Mutung**', value: '`koro mutung`', inline: true },
                    { name: '**Tidur**', value: '`koro tidur`', inline: true },
                    { name: '**Lightstick**', value: '`koro ls`', inline: true },
                    { name: '**Mandi**', value: '`koro mandi <mention>`', inline: true },
                    { name: '**Yeet**', value: '`koro yeet <mention>`', inline: true },
                    { name: '**Tendang**', value: '`koro tendang <mention>`', inline: true },
                    { name: '**Tampar**', value: '`koro tampar <mention>`', inline: true },
                    { name: '**Bully**', value: '`koro bully <mention>`', inline: true },
                    { name: '**Bonk**', value: '`koro bonk <mention>`', inline: true },
                    { name: '**Jilat**', value: '`koro jilat <mention>`', inline: true },
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

            case "gelud":
                message.channel.sendTyping()
                setTimeout(() => {
                    let gelud = [
                        "Mana yang ngajak gelud? Ayo gelud sini!",
                        "Sini bawa bapakmu kita tarung!",
                        "Ayo by one!",
                        "Jagoan kah bos?",
                        "Omong doang lo, beraninya kagak",
                        "Talenta sini kalo berani!",
                    ]
                    let gelut = gelud[Math.floor(Math.random()*gelud.length)]
                    message.channel.send(gelut); //send the image URL
                }, 2000);
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
                
            case "malu":
                let malu = await getWaifu("blush")
                message.channel.send(malu); //send the image URL
                break;
                
            case "genit":
                let genit = await getWaifu("wink")
                message.channel.send(genit); //send the image URL
                break;
                
                
            case "ntah":
                let ntah = await getNeko("shrug")
                message.channel.send(ntah); //send the image URL
                break;

            case "nangis":
                let nangis = await getNeko("cry")
                message.channel.send(nangis); //send the image URL
                break;

            case "bingung":
                let bingung = await getNeko("think")
                message.channel.send(bingung); //send the image URL
                break;
            
            case "mantap":
                let mantap = await getNeko("thumbsup")
                message.channel.send(mantap); //send the image URL
                break;
                
            case "bosen":
                let bosen = await getNeko("bored")
                message.channel.send(bosen); //send the image URL
                break;

            case "mutung":
                let mutung = await getNeko("pout")
                message.channel.send(mutung); //send the image URL
                break;
    
            case "tidur":
                let tidur = await getNeko("sleep")
                message.channel.send(tidur); //send the image URL
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
                message.channel.send({ embeds: [bonk] });
                break;
                
            case "quote":
                message.channel.sendTyping()
                let qdata = await getQuote()
                setTimeout(() => {
                    let quote = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setAuthor(`${qdata.character}`, "https://cdn.discordapp.com/attachments/896402692925190167/899665193037099058/attachment_126736972.jpeg")
                    .setDescription(`${qdata.quote}`)
                    .setFooter(`Anime : ${qdata.anime}`);
                    message.channel.send({ embeds: [quote] });
                }, 2000);
                break;
        }
    }

    catch(err) {
        // message.channel.send(`**Astagfirullah error : ${err}**`)
        message.channel.send(`**Astagfirullah error**`)
    }
    
})

client.login(config.BOT_TOKEN);