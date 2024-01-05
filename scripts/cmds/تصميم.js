var dek = "Deku";
module.exports = {
	config: {
		name: "تصميم", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, 
		shortDescription: {
			vi: "đây là mô tả ngắn của lệnh",
			en: "this is short description of command"
		}, 
		longDescription: {
			vi: "đây là mô tả dài của lệnh",
			en: "this is long description of command"
		},
		category: "categoryName",
		guide: {
			vi: "đây là hướng dẫn sử dụng của lệnh",
			en: "this is guide of command"
		} 
	},

	langs: {
		vi: {
			hello: "xin chào",
			helloWithName: "xin chào, id facebook của bạn là %1"
		}, // Vietnamese language
		en: {
			hello: "hello world",
			helloWithName: "hello, your facebook id is %1"
		} // English language
	},

	
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
		let { senderID, threadID, messageID } = event;
 const request = require('request');
 const fs = require("fs-extra");
 const axios = require("axios");
 let pathImg = __dirname + `/cache/${event.threadID}_${event.senderID}.png`;
 let text = args.join(" ");
 if (!text) return api.sendMessage(`الاستخدام خاطئ\ح: ${global.config.PREFIX}${this.config.name} النص `, event.threadID, event.messageID);
 let getWanted = (
 await axios.get(`https://tanjiro-api.onrender.com/gfx1?name=${text}&api_key=tanjiro`, {
 responseType: "arraybuffer",
 })
 ).data;
 fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
 return api.sendMessage(
 { attachment: fs.createReadStream(pathImg) },
 threadID,
 () => fs.unlinkSync(pathImg),
 messageID
 ); 

	}
};