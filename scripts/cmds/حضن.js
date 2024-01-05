const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
 config: {
 name: "حضن",
 aliases: ["hug2","hugv2" ,"hugtwo"],
 version: "1.0",
 author: "\4c\45\41\52\4e\20\54\4f\20\45\41\54\20\4c\45\41\52\4e\20\54\4f\20\53\50\45\41\4b\20\42\55\54\20\44\4f\4e\\54\20\54\52\59\20\54\4f\20\43\48\41\4e\47\45\20\54\48\45\20\43\52\45\44\49\54\20\41\4b\41\53\48",
 countDown: 5,
 role: 0,
 shortDescription: "mention someone",
 longDescription: "mention your love",
 category: "love",
 guide: "{pn}"
 },



 onStart: async function ({ message, event, args }) {
 const mention = Object.keys(event.mentions);
 if (mention.length == 0) return message.reply("منشن شخص");
 else {
 const one = event.senderID, two = mention[0];
 bal(one, two).then(ptth => { message.reply({ body: "احلى حظن في الدنيا 🥰", attachment: fs.createReadStream(ptth) }) })
 }
 }


};

async function bal(one, two) {

 let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
 avone.circle()
 let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
 avtwo.circle()
 let pth = "hugv2.png"
 let img = await jimp.read("https://i.ibb.co/YB2HGZP/FB-IMG-16843164044100469-removebg-preview.png")

 img.resize(720, 696).composite(avone.resize(120, 120), 240, 300).composite(avtwo.resize(120, 120), 280, 130);

 await img.writeAsync(pth)
 return pth
 }