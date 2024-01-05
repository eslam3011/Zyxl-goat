module.exports = {
	config: {
		name: "اين", 
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

	
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {if (args[0]==='ساسافر'){ 
const userName = await usersData.getName(event.senderID);

const countries = [
 "الأردن",
 "الإمارات العربية المتحدة",
 "البحرين",
 "الجزائر",
 "السعودية",
 "السودان",
 "الصومال",
 "العراق",
 "الكويت",
 "المغرب",
 "اليمن",
 "تونس",
 "جزر القمر",
 "جيبوتي",
 "سوريا",
 "عُمان",
 "فلسطين",
 "قطر",
 "لبنان",
 "ليبيا",
 "مصر",
 "موريتانيا"
];

const randomCountry = countries[Math.floor(Math.random() * countries.length)];

		 
const months = [
 "يناير",
 "فبراير",
 "مارس",
 "أبريل",
 "مايو",
 "يونيو",
 "يوليو",
 "أغسطس",
 "سبتمبر",
 "أكتوبر",
 "نوفمبر",
 "ديسمبر"
];

function getRandomDate() {
 const year = Math.floor(Math.random() * (2070 - 2023 + 1)) + 2023;
 const month = months[Math.floor(Math.random() * months.length)];
 const day = Math.floor(Math.random() * (31 - 1 + 1)) + 1;
 
 return `${day} ${month} ${year}`;
}

message.send(' سيسافر ɞ' +userName+'ɞ الي '+randomCountry+' في تاريخ '+getRandomDate());
} 
	}
};