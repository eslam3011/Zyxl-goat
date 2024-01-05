module.exports = {
	config: {
		name: "بارد", 
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

	
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {const axios = require('axios');

const apiUrl = `https://api-bard.eslam3011.repl.co/khir/${args.join(" ")}`;

axios.get(apiUrl)
 .then(response => {
 const data = response.data.answer;
const sentence = data;
const word1 = "بارد";
const word2 = "Bard";
const word3 = "Google";
const replacement1 = "زكسل";
const replacement2 = "zexel";
const replacement3 = "zexel";

const newSentence = sentence
 .replace(word1, replacement1)
 .replace(word2, replacement2)
 .replace(word3, replacement3);
 message.reply(newSentence);
 })
 .catch(error => {
 console.error(' API:', error.message);
 });
		

	}
};