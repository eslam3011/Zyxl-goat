module.exports = {
	config: {
		name: "نقاطي", 
		version: "1.0", 
		author: "🙂", 
		countDown: 5, 
		role: 0, 
		shortDescription: {
			vi: "đây là mô tả ngắn của lệnh",
			en: "عرض نقاط المستخدم"
		}, 
		longDescription: {
			vi: "đây là mô tả dài của lệnh",
			en: "اكتب نقاطي"
		},
		category: "categoryName",
		guide: {
			vi: "đây là hướng dẫn sử dụng của lệnh",
			en: "نقاطي"
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



		 const userData = await usersData.get(event.senderID)
		 if (userData.data && userData.data.games && userData.data.games.points){
		 let pointsCount = userData.data.games.points
message.reply(`❥ــــــــــــــــ♭ــــــــــــــــ❥
❀❀ `+userName+` ❀❀
❥ـــــــــــــــ♭ـــــــــــــــــ❥

♬♬عدد نقاطك هو♬♬
:::::::::::::✦`+pointsCount.toString()+`✦::::::::::::::

❥ــــــــــــــــ♭ــــــــــــــــ❥`)

		 }else{
		 message.reply('انت ليس لديك اي نقاط العب احد الالعاب لكي تحصل على نقاط 🎮')
		 }

	}
};