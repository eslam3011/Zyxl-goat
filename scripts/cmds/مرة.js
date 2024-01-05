const fs = require('fs');
module.exports = {
 config: {
 name: "مرة",
 version: "1.0",
 author: "otineeeey",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 },
 onStart: async function(){},
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "ومين") {
 return message.reply({
 body: "ومين ☕",
 attachment: fs.createReadStream("women.mp4"),
 });
 }
 }
};