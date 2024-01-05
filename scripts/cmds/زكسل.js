module.exports = {
	config: {
		name: "زكسل", 
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
		const https = require('https');

let i = args.join(" ")

if ( i !== '' ){
const url = 
`https://gptzaid.zaidbot.repl.co/1/text=${i}`;

https.get(url, (response) => {
 let data = '';

 response.on('data', (chunk) => {
 data += chunk;
 });

 response.on('end', () => {
 message.send(data);
 });
}).on('error', (error) => {
 console.error(`حدث خطأ: ${error.message}`);
});
}
else {
console.log("hi")
}
	}
};