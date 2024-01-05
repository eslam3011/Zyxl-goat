const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs")


module.exports = {
    config: {
        name: "فشخ",
        aliases: ["fak"],
        version: "1.0",
        author: "zach",
        countDown: 5,
        role: 2,
        shortDescription: "+18",
        longDescription: "+18",
        category: "صور",
        guide: ""
    },



    onStart: async function ({ message, event, args }) {
        const mention = Object.keys(event.mentions);
        if (mention.length == 0) return message.reply("ضع تاغ لمن تريد فشخو يا مطور" );
        else if (mention.length == 1) {
            const one = event.senderID, two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: "تتم فشخ العضو يا مطور 😂 احححححح", attachment: fs.createReadStream(ptth) }) })
        } else {
            const one = mention[1], two = mention[0];
            bal(one, two).then(ptth => { message.reply({ body: " 😈❌❌", attachment: fs.createReadStream(ptth) }) })
        }
    }


};

async function bal(one, two) {

    let avone = await jimp.read(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avone.circle()
    let avtwo = await jimp.read(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)
    avtwo.circle()
    let pth = "fak.png"
    let img = await jimp.read("https://i.ibb.co/YTmY7ts/xva213.jpg")

    img.resize(651, 987).composite(avone.resize(170, 170), 290, 150).composite(avtwo.resize(150, 150), 45, 320);

    await img.writeAsync(pth)
    return pth
}
