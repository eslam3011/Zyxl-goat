module.exports = {
	config: {
		name: "ارسم", 
		version: "1.0", 
		author: "khis", 
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

message.send("عملية الرسم من الممكن ان تأخذ بعض الوقت خدلك فشار 🍿👀")
	const axios = require('axios');

(async () => {
 try {
 const response = await axios.get(`https://2q2s4h-3000.csb.app/${args.join(' ')}`);
 const images = response.data;

 for (let i = 0; i < images.length; i++) {
 const img = images[i];
 if (img) {
 await message.send({
 attachment: await global.utils.getStreamFromURL(img),
 });
 }
 }
 } catch (error) {
 console.error(error);
 }
})();	

	}
};