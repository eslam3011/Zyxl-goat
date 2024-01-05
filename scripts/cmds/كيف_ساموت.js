module.exports = {
	config: {
		name: "كيف", 
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

	
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {if (args[0]==='ساموت'){ 
const userName = await usersData.getName(event.senderID);

const countries = [" سكتة قلبية", " شرب الخمر"," حببتك هتقتلك"," الملل"," لانك غبي "," الضرب بشبش"," طلقة نارية"," فيل يفعصك "," كلب يعضك","مش عارف "," افعا تلدغك "," برص يخوفك "," فشخ الاب"," طيارة تقع عليك "," طعنة بسكين "," زلزال "," بركان 🌋"," ذئب ياكلك"," الانتحار"," حببت تتركك "
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

message.send(' سيموت ɞ' +userName+"ɞ بسبب"+randomCountry+' في تاريخ '+getRandomDate());
} 
	}
};