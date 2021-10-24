const { Client, MessageEmbed } = require("discord.js");
const { getQuote, getNeko, getWaifu } = require("./function.js");
const config = require("./config.json");
const data = require("./data.json");
const kalimat = require("./bacot.json");

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const prefix = config.PREFIX;

client.on('ready', () => {
    console.log("We are online!");
        let code = client.channels.cache.get("884370401659092992")
        let spam = kalimat.kata_kata
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

        setInterval(() => {
            code.sendTyping()
            setTimeout(() => {
                let bacot = spam[Math.floor(Math.random()*spam.length)]
                code.send(bacot)
            }, 3000);
        },1800000);
});


client.on('message', async message => {
    // if(message.channelId != 884370401659092992) return;

    let content = message.content.toLowerCase()
    let filter = content.split(' ');
    const commandBody = content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    let mentioned = message.mentions.users.first()
    let time = new Date().toLocaleTimeString('en-GB', { timeZone: "Asia/Jakarta" });
    console.log(`[${time}] ${content}`);
    // console.log(content)
    // console.log(message.mentions.users)
    try {

        if (message.mentions.has(client.user)) {
            if(message.channelId != 884370401659092992) return;
            message.channel.sendTyping()
            setTimeout(() => {
                let kata = data.kata_kata
                let rep = kata[Math.floor(Math.random()*kata.length)]
                message.reply(rep);
            }, 3000);
            
            return;
        }
        
        if(filter.includes("loli") || filter.includes("loliku") || filter.includes("ngarungin")  || filter.includes("istriku") || filter.includes("fbi") || filter.includes("karungin")){
            message.channel.sendTyping()
            setTimeout(() => {
                let department = data.department
                let agent = department[Math.floor(Math.random()*department.length)]
                let fbi = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:man_police_officer: **${agent.halo}**`)
                .setImage(agent.image)
                message.channel.send({ embeds: [fbi] });
            }, 2000);
            return;
        }

        if(filter.includes("coklat") || filter.includes("coklat?") ||filter.includes("cokelat")  ||filter.includes("cokelat?") || filter.includes("chocolate") || filter.includes("chocolate?")){
            message.channel.sendTyping()
            setTimeout(() => {
                let coklat = new MessageEmbed()
                .setColor("#ff00dd")
                .setDescription(`:chocolate_bar:  **Ada yang bilang coklat?**`)
                .setImage("https://i.pinimg.com/originals/68/d9/fc/68d9fcbcc7cc1d8c1c1015b3dbc5c4ee.gif")
                message.channel.send({ embeds: [coklat] });
            }, 2000);
            return;
        }

        if(content == "pagi" || content == "pagii" || content == "pagiii" || content == "pagi.." || content == "pagi..." || content == "selamat pagi" || content == "selamat pagi.." || content == "selamat pagi..." || content == "selamat pagi...."){
            message.channel.sendTyping()
            setTimeout(() => {
                let greets = data.greets
                let pagi = greets[Math.floor(Math.random()*greets.length)]
                message.reply(pagi)
            }, 2000);
            return;
        }

        if(message.mentions.everyone){
            message.reply(`Ada perlu apa ${message.author} manggil semua orang? Mau tawuran kah?`);
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
                    { name: '**Ngakak**', value: '`koro ngakak`', inline: true },
                    { name: '**Lightstick**', value: '`koro ls`', inline: true },
                    { name: '**Mandi**', value: '`koro mandi <mention>`', inline: true },
                    { name: '**Yeet**', value: '`koro yeet <mention>`', inline: true },
                    { name: '**Tendang**', value: '`koro tendang <mention>`', inline: true },
                    { name: '**Tampar**', value: '`koro tampar <mention>`', inline: true },
                    { name: '**Bully**', value: '`koro bully <mention>`', inline: true },
                    { name: '**Bonk**', value: '`koro bonk <mention>`', inline: true },
                    { name: '**Jilat**', value: '`koro jilat <mention>`', inline: true },
                    { name: '**Suap**', value: '`koro suap <mention>`', inline: true },
                    { name: '**Peluk**', value: '`koro peluk <mention>`', inline: true },
                    { name: '**Gigit**', value: '`koro gigit <mention>`', inline: true },
                    { name: '**Bunuh**', value: '`koro bunuh <mention>`', inline: true },
                )
                .setFooter('Made by koro', 'https://cdn.discordapp.com/attachments/896402692925190167/899665193037099058/attachment_126736972.jpeg');
                message.channel.send({ embeds: [helper] });
                break;
    
            case "jess":
                setTimeout(() => {
                    message.channel.send("Jess cuma punya Koro!");
                }, 2000);
                break;
            
            case "ngeselin":
                setTimeout(() => {
                    message.reply("Iya kak maaf :(");
                }, 2000); //send the image URL
                break;

            case "rana":
                setTimeout(() => {
                    message.reply("Hmmmm");
                }, 5000);
                break;

            case "stgf":
                setTimeout(() => {
                    message.channel.send("Astaghfirullah hal'adzim");
                }, 2000);
                break;

            case "ls":
                let ls = [
                    "https://c.tenor.com/zWF-SI9SQdwAAAAC/cat-dancing.gif"
                ]; //fetches an URL from the API
                
                message.channel.sendTyping()
                setTimeout(async () => {
                    let lightstick_image = ls[Math.floor(Math.random()*ls.length)]
                    let lightstick = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:clap: **KYYAAAAHHHH WANGY WANGY WANGY**`)
                    .setImage(lightstick_image)
                    message.channel.send({ embeds: [lightstick] });
                }, 100);
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
                message.channel.sendTyping()
                setTimeout(() => {
                    let nyengir_data = data.nyengir
                    let nyengir_img = nyengir_data[Math.floor(Math.random()*nyengir_data.length)]
                    let nyengir = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:grin: **${message.author.username}** : Muhehehehehe `)
                    .setImage(nyengir_img)
                    message.channel.send({ embeds: [nyengir] });
                }, 100);
                break;
                
            case "garing":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let garing_img = await getWaifu("cringe")
                    let garing = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:neutral_face: **${message.author.username}** : cringe beut iyuh`)
                    .setImage(garing_img)
                    message.channel.send({ embeds: [garing] });
                }, 100);
                break;
                
            case "malu":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let malu_img = await getWaifu("blush")
                    let malu = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:blush: **${message.author.username}** malu-malu`)
                    .setImage(malu_img)
                    message.channel.send({ embeds: [malu] });
                }, 100);
                break;
                
            case "genit":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let genit_img = await getWaifu("wink")
                    let genit = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:kissing_closed_eyes: **${message.author.username}** genit banget`)
                    .setImage(genit_img)
                    message.channel.send({ embeds: [genit] });
                }, 100);
                break;
                
                
            case "ntah":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let ntah_img = await getNeko("shrug")
                    let ntah = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:thinking: **${message.author.username}** gak tau`)
                    .setImage(ntah_img)
                    message.channel.send({ embeds: [ntah] });
                }, 100);
                break;

            case "nangis":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let nangis_img = await getNeko("cry")
                    let nangis = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:sob: **${message.author.username}** sedih gara-gara kamu`)
                    .setImage(nangis_img)
                    message.channel.send({ embeds: [nangis] });
                }, 100);
                break;

            case "bingung":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let bingung_img = await getNeko("think")
                    let bingung = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:confused: **${message.author.username}** kebingungan`)
                    .setImage(bingung_img)
                    message.channel.send({ embeds: [bingung] });    
                }, 100);
                break;
            
            case "mantap":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let mantap_img = await getNeko("thumbsup")
                    let mantap = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:thumbsup: **${message.author.username}** bilang kamu mantap`)
                    .setImage(mantap_img)
                    message.channel.send({ embeds: [mantap] });
                }, 100);
                break;
                
            case "bosen":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let bosen_img = await getNeko("bored")
                    let bosen = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:disappointed: **${message.author.username}** bosen nih`)
                    .setImage(bosen_img)
                    message.channel.send({ embeds: [bosen] });
                }, 100);
                break;

            case "mutung":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let mutung_img = await getNeko("pout")
                    let mutung = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:triumph: **${message.author.username}** ngambek gara-gara kamu`)
                    .setImage(mutung_img)
                    message.channel.send({ embeds: [mutung] });
                }, 100);
                break;
    
            case "tidur":
                message.channel.sendTyping()
                setTimeout(async () => {
                    let tidur_img = await getNeko("sleep")
                    let tidur = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:sleeping: **${message.author.username}** lagi bobo`)
                    .setImage(tidur_img)
                    message.channel.send({ embeds: [tidur] });
                }, 100);
                break;

            case "ngakak":
                    message.channel.sendTyping()
                    setTimeout(async () => {
                        let ngakak_img = await getNeko("laugh")
                        let ngakak = new MessageEmbed()
                        .setColor("#ff00dd")
                        .setDescription(`:laughing: **${message.author.username}** ngakak betul`)
                        .setImage(ngakak_img)
                        message.channel.send({ embeds: [ngakak] });
                    }, 100);
                    break;

            case "mandi":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let bath_data = data.mandi
                    let mandi_img = bath_data[Math.floor(Math.random()*bath_data.length)]
                    let mandi = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:bathtub:  **${message.author.username}** mandiin **${mentioned.username}**`)
                    .setImage(mandi_img)
                    message.channel.send({ embeds: [mandi] });
                }, 100);
                break;

            case "yeet":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let yeet_img = await getWaifu("yeet")
                    let yeet = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:raised_hands: **${message.author.username}** ngelempar **${mentioned.username}**`)
                    .setImage(yeet_img)
                    message.channel.send({ embeds: [yeet] });
                }, 100);
                break;
                
            case "tendang":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let tendang_img = await getWaifu("kick")
                    let tendang = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:foot: **${message.author.username}** nendang **${mentioned.username}**`)
                    .setImage(tendang_img)
                    message.channel.send({ embeds: [tendang] });
                }, 100);
                break;

            case "tampar":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let tampar_img = await getWaifu("slap")
                    let tampar = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:hand_splayed: **${message.author.username}** nampar **${mentioned.username}**`)
                    .setImage(tampar_img)
                    message.channel.send({ embeds: [tampar] });
                }, 100);
                break;
            
            case "jilat":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let jilat_img = await getWaifu("lick")
                    let jilat = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:tongue: **${message.author.username}** ngejilat **${mentioned.username}**`)
                    .setImage(jilat_img)
                    message.channel.send({ embeds: [jilat] });
                }, 100);
                break;
                
            case "bully":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let bully_img = await getWaifu("bully")
                    let bully = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:pinching_hand: **${message.author.username}** ngebully **${mentioned.username}**`)
                    .setImage(bully_img)
                    message.channel.send({ embeds: [bully] });
                }, 100);
                break;

            case "bonk":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let bonk_img = await getWaifu("bonk")
                    let bonk = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:field_hockey: **${message.author.username}** ngebonk **${mentioned.username}**`)
                    .setImage(bonk_img)
                    message.channel.send({ embeds: [bonk] });
                }, 100);
                break;
            
            case "suap":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let suap_img = await getNeko("feed")
                    let suap = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:pie: **${message.author.username}** nyuapin **${mentioned.username}**`)
                    .setImage(suap_img)
                    message.channel.send({ embeds: [suap] });
                }, 100);
                break;
                
            case "gigit":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let gigit_img = await getNeko("bite")
                    let gigit = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:smiley_cat: **${message.author.username}** ngegigit **${mentioned.username}**`)
                    .setImage(gigit_img)
                    message.channel.send({ embeds: [gigit] });
                }, 100);
                break;

            case "peluk":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let peluk_img = await getNeko("hug")
                    let peluk = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:people_hugging: **${message.author.username}** meluk **${mentioned.username}**`)
                    .setImage(peluk_img)
                    message.channel.send({ embeds: [peluk] });
                }, 100);
                break;
            
            case "bunuh":
                if (!mentioned) return;
                if(message.author.id == mentioned.id){
                    message.reply("Astagfirullah, istigfar. . .");
                    return;
                }
                message.channel.sendTyping()
                setTimeout(async () => {
                    let bunuh_img = await getWaifu("kill")
                    let bunuh = new MessageEmbed()
                    .setColor("#ff00dd")
                    .setDescription(`:drop_of_blood: Inna lillahi wainna ilaihi roji'un, **${mentioned.username}** dibunuh **${message.author.username}**`)
                    .setImage(bunuh_img)
                    message.channel.send({ embeds: [bunuh] });
                }, 100);
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