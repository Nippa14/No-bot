require("./database/module")

//================OWNER'S NAME AND PHONE NUMBER=============\
global.owner = "234814082xxxx" //replace with your actual phone number
global.botName = "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝙑3" //name of the bot
global.creatorName = "𝑩𝑨𝑫𝑩𝑶𝑰" //name of the creator
global.ownernumber = '2348140××××××'  //creator number
global.location = "Nigeria, Ogun-state, ilese"
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.autoJoin = false //DO NOT CHANGE
global.antiLink = false //DO NOT CHANGE
global.version = 'V.3.0' //DO NOT CHANGE
global.inviteCode = "CswK4kvQD1u7SfSmsYfMHZ"
//================LINKS AND IMAGES=============\
global.imageUrl = 'https://i.imgur.com/Bhex1tf.jpeg' //replace with your Telegra.ph image link
global.idsaluran = "120363344211897809@newsletter"
global.imageUrl2 = 'https://i.imgur.com/TX1sfjs.jpeg' //replace with your Telegra.ph image link
global.link = 'https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x' //any link you want
global.thumb = fs.readFileSync("./thumb.png") //DO NOT CHANGE
global.author = "king Badboi" //CHANGE TO YOUR NAME
// DELAY JPM
global.delayjpm = 5500


//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story


//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.imgur.com/nOkcYbM.jpeg'
global.isLink = 'https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x'
global.packname = "𝑩𝑨𝑫𝑩𝑶𝑰"
global.author = "𝑩𝑨𝑫𝑩𝑶𝑰"
global.jumlah = "5"
global.database = `\`[ 👑 ] 𝐒𝐂𝐀𝐑𝐋𝐄𝐓-𝐕3 \` \n*

    🚫 *Access Denied!* 🚫

    Sorry, you don't have the necessary permissions to use this command.

    *Only users in our database can access.* 😎
*contact king pussy or king badboi for database* 
*Whatsapp contact* : *@2348140825959*
*Whatsapp contact* : *@2349136616989*
*Whatsapp Channel* : *https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x*
  *THANK FOR USING SCARLET-V3-CRASHER*`
  
//MESS
global.mess = {
    success: '✔ Done My gee! 😂',
    admin: '_*🤟This command can only be used by group admins or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    botAdmin: '_*💀This command can only be used when the bot is a group admin or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    OnlyOwner: '_*💀This command can only be used by the owner or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    OnlyGrup: '_*💀This command can only be used in group chats or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    private: '_This command can only be used in private chat or by 𝐊𝐈𝐍𝐆 𝐁𝐀𝐃𝐁𝐎𝑰!*_',
    wait: '_*Please Wait, Your Request Is Being Proceed*_',
    notregist: '_*You are not yet registered in the bot database, please register first or meet KINGS DOMAIN!*_',
    premium: '_*Premium only! Buy Prem Chat Owner at +2348140825959 or type .owner*_',
    endLimit: '_*Your Daily Limit Has Expired!\nLimit Will Be Reset Every Time 00:00 WIB or By Buying Premium and Get Unlimited Limit\nBuy Prem? Chat +2348140825959*_',
    maintenance: '_*Sorry my gee, this feature is currently under construction*_',
    wait: 'Wait a minute, bro...',
    error: 'Wow, this is an error'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})