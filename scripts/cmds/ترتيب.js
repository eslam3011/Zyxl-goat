let answer = 'gggfffddd';
module.exports = {
	config: {
		name: "ترتيب", 
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
 let questions = [{
 question: "ط ق ة",
 answer: "قطة"
 }, {
 question: "ط ب ل ",
 answer: "بطل"
 }, {
 question: " ب ط خ ا",
 answer: "طباخ"
 }, {
 question: "ك م ل ",
 answer: "ملك"
 }, {
 question: "ل ح ب ا ",
 answer: "الحب"
 }, {
 question: "ي ا ش ل ط ",
 answer: "الشرطي"
 },{
 question: " ب ح ي س ",
 answer: "يسبح"
},
{
 question: "ئ ة ي ف ا ض ",
 answer: "فضائية"
},
{
 question: "ب ت ك ا ",
 answer: "كتاب"
},
{
 question: "ا ب ر غ ",
 answer: "غراب"
},
{
 question: "ر م ا ح ",
 answer: "حمار"
},
{
 question: "ل ب ك",
 answer: "كلب"
},
{
 question: "س ا د",
 answer: "اسد"
},{
 question: "ح ص ا ن",
 answer: "نصح"
},
{
 question: "ش م س",
 answer: "شمس"
},
{
 question: "ق م ر",
 answer: "قمر"
},
{
 question: "ع ص ف ة",
 answer: "صفة"
},
{
 question: "ص د ر",
 answer: "درص"
},
{
 question: "ض ح ك",
 answer: "ضحك"
},
{
 question: "ن و م",
 answer: "يوم"
},
{
 question: "م ق ص د",
 answer: "قصد"
},
{
 question: "ر ص ا ص",
 answer: "صاروخ"
},
{
 question: "و ض ح",
 answer: "حوض"
}
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
 await usersData.set(event.senderID, { points: 1 }, "data.games");
 message.reply('قام '+userName+' بكتابة الاجابة الصحيحة وحصل علي 5 نقطة ')
 answer = 'gggfffddd'
 }
 
 
}



	},
};