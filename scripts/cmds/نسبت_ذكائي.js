module.exports = {
	config: {
		name: "نسبة", 
		version: "1.0", 
		author: "NTKhang", 
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
const userName = await usersData.getName(event.senderID);

 if (args[0] === "ذكائي"){
if (role === 2){message.reply("انت هوا "+userName+" المطور العظيم اكيد نسبة ذكائك ∞🤓🧠")}else{ 
const numbers = [
 "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
 "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
 "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
 "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
 "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
 "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
 "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
 "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
 "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
 "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
];

const randomIndex = Math.floor(Math.random() * numbers.length);
const randomNumber = numbers[randomIndex];

message.send("يا "+userName+" نسبة ذكائك هيا "+randomNumber+"🤓🧠");}

}if (args[0] ==="جمالي"){
 const numbers1 = [
 "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
 "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
 "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
 "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
 "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
 "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
 "61", "62", "63", "64", "65", "66", "67", "68", "69", "70",
 "71", "72", "73", "74", "75", "76", "77", "78", "79", "80",
 "81", "82", "83", "84", "85", "86", "87", "88", "89", "90",
 "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"
];

const randomIndex = Math.floor(Math.random() * numbers1.length);
const randomNumber1 = numbers1[randomIndex];

 message.send("يا "+userName+" نسبة جمالك هيا "+randomNumber1+"🗿😚😍");} 
		

	}
};