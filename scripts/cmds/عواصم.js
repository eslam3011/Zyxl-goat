let answer = "gggfffddd";
module.exports = {
	config: {
		name: "عواصم", 
		version: "1.0", 
		author: "Eslam", 
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
 let questions = [
 {
 question: "افغانستان ",
 answer: "كابول"
 }, {
 question: "البانيا",
 answer: "تيرانا"
 },
 {
 question: "الجزائر ",
 answer: "الجزائر"
 }, {
 question: "اندورا",
 answer: "فيلا"
 }, {
 question: "انجولا",
 answer: "لواندا"
 }, {
 question: "انتيجوا",
 answer: "سان جونز"
 }, {
 question: "الارجنتين",
 answer: "بوينس"
 }, {
 question: "ارمينيا",
 answer: "يريفان"
 }, {
 question: "النمسا",
 answer: "فيينا"
 }, {
 question: "اليمن",
 answer: "صنعاء"
 }, {
 question: "مصر",
 answer: "القاهرة"
 },
 
 ];
 let randomIndex = Math.floor(Math.random() * questions.length);
 let randomQuestion = questions[randomIndex].question;
 let ans = questions[randomIndex].answer;


 
		answer = ans
 message.reply(randomQuestion)

	},


 onChat: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {

		if (event.body === answer){
 const userName = await usersData.getName(event.senderID);
 const userData = await usersData.get(event.senderID)
 
 if (userData.data && userData.data.games && userData.data.games.points) {
 
 let pointsCount = userData.data.games.points
 pointsCount += 1
		await usersData.set(event.senderID, { points: pointsCount }, "data.games");
 message.reply('قام '+userName+' بكتابة الاجابة الصحيحة وحصل علي 1 نقطة ')
 answer = 'gggfffddd'
 
 }else{
 await usersData.set(event.senderID, { points: 1 }, "data.games");
 message.reply('قام '+userName+' بكتابة الاجابة الصحيحة وحصل علي 1 نقطة ')
 answer = 'gggfffddd'
 }
 
 
}



	},
};