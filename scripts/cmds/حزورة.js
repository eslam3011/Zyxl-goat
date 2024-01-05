let answer = 'gggfffddd';
module.exports = {
	config: {
		name: "حزورة", 
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
 let questions = [ {
 question: "ما هو الشيء الذي يمشي بلا أرجل؟ .",
 answer: "السحاب"
 },
 {
 question: "ما هو الشيء الذي لا يمكن أن تعطيه إلا بتلقائك؟ .",
 answer: "الثقة"
 },
 {
 question: "ما هو الشيء الذي يمشي بالرأس؟ .",
 answer: "المشط"
 },
 {
 question: "ما هو الشيء الذي يمشي بلا رجلين؟ .",
 answer: "الثعبان"
 },
 {
 question: "ما هو الشيء الذي يأتي دائمًا في النهاية ولكنه لا يأتي أبدًا في البداية؟ حرف الـ",
 answer: "حرف الياء"
 }
 , {
 question: "ما هو الشيء الذي يمشي بالرأس ولكن ليس له جسم؟ .",
 answer: "الشعر"
 }, {
 question: "ما هو الشيء الذي يأكل ولا يشبع؟ .",
 answer: "النار"
 }, {
 question: "ما هو الشيء الذي يستطيع الطيران دون أجنحة؟ .",
 answer: "الزمن"
 }, {
 question: "ما هو الشيء الذي يدوّر بلا توقّف ولا يحرك؟ .",
 answer: "الأرض"
 }, {
 question: "ما هو الشيء الذي يمشي بسرعة ولكنه لا يترك أثرًا؟ .",
 answer: "الصوت"
 }, {
 question: "ما هو الشيء الذي يأتي بسرعة عندما تدعوه ويختفي عندما تناديه؟ .",
 answer: "الصدى"
 }, {
 question: "ما هو الشيء الذي يتحرك دائمًا دون أن يتحرّك؟ .",
 answer: "الوقت"
 }, {
 question: "ما هو الشيء الذي يأتي ويترك ظلّه خلفه؟ .",
 answer: "الإنسان"
 }, {
 question: "ما هو الشيء الذي يمشي وليس له رأس؟ .",
 answer: "الساعة"
 }, {
 question: "ما هو الشيء الذي يوجد في السماء ويمكن رؤيته في الأرض؟ .",
 answer: "السحاب"
 }, {
 question: "ما هو الشيء الذي يمشي بثلاثة أرجل في الصباح وبأربعة أرجل في المساء؟ .",
 answer: "الإنسان"
 }, {
 question: "ما هو الشيء الذي ينمو ويتقلّص ولكنه لا يحرّك؟ ",
 answer: "الشعر"
 }, {
 question: "ما هو الشيء الذي تلمسه ولا تراه؟ .",
 answer: "الهواء"
 }, {
 question: "ما هو الشيء الذي يكبر كلما تقلص؟ .",
 answer: "الظل"
 }, {
 question: "ما هو الشيء الذي يخرج من التفاحة عندما تعصره؟ .",
 answer: "العصير"
 }, {
 question: "ما هو الشيء الذي يمكن أن يتحرك بلا رأس؟ .",
 answer: "المسمار"
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
 pointsCount += 5
		await usersData.set(event.senderID, { points: pointsCount }, "data.games");
 message.reply('قام '+userName+' بكتابة الاجابة الصحيحة وحصل علي 5 نقطة ')
 answer = 'gggfffddd'
 
 }else{
 await usersData.set(event.senderID, { points: 5 }, "data.games");
 message.reply('قام '+userName+' بكتابة الاجابة الصحيحة وحصل علي 5 نقطة ')
 answer = 'gggfffddd'
 }
 
 
}



	},
};