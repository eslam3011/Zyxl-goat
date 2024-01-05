module.exports = {
	config: {
		name: "جوكر", 
		version: "1", 
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
		const wordsArray =[`❥━──➸➽❥❂❥━──➸➽ 
﴿ تكون سعيداً جداً في أبريل ثم تزول سعادتك في مايو .. هكذا هي الحياة.
توقفنا عن البحث عن الوحوش تحت السرير ، عندما أدركنا أنهم كانوا بداخلنا. ﴾
 
❥━──➸➽❥❂❥━──➸➽`,`❥━──➸➽❥❂❥━──➸➽ 
﴿ لا يمكنك الاعتماد على أي شخص هذه الأيام، فلابد أن تفعل كل شيء بنفسك، أليس كذلك؟. ﴾
 
❥━──➸➽❥❂❥━──➸➽`,`❥━──➸➽❥❂❥━──➸➽ 
﴿ اشاعة ان الصين يأكلون الكلاب وهذا الكلام غير حقيقي أصدقائي ذهبوا الي هناك ولم يأكلوهم ﴾
 
❥━──➸➽❥❂❥━──➸➽`,`❥━──➸➽❥❂❥━──➸➽ 
﴿ هؤلاء الحمقى الغوغاء يريدون أن تذهبوا. حتى يتمكنوا من العودة إلى ما كانت عليه الأمور. لكنني أعرف الحقيقة، لا عودة. لقد غيرت الأشياء … إلى الأبد. ﴾
 
❥━──➸➽❥❂❥━──➸➽`,`❥━──➸➽❥❂❥━──➸➽ 
﴿ يضحكون في وجهي لأنّني مختلف. أما أنا فأضحك في وجوههم لأنهم جميعًا متشابهون. ﴾
 
❥━──➸➽❥❂❥━──➸➽`,`❥━──➸➽❥❂❥━──➸➽ 
﴿ احترم من يكرهك فهو الوحيد الذي يظن انك افضل منه. ﴾
 
❥━──➸➽❥❂❥━──➸➽`,,`❥━──➸➽❥❂❥━──➸➽ 
﴿ لن أعرف ماذا أفعل بأحد إذا اشتعلت! أنت تعرف، أنا فقط… أفعل الأشياء. ﴾
 
❥━──➸➽❥❂❥━──➸➽`,`❥━──➸➽❥❂❥━──➸➽ 
﴿ هل أبدو حقا كرجل لديه خطة؟ أنت تعرف ما أنا؟ أنا كلب يطارد السيارات. ﴾
 
❥━──➸➽❥❂❥━──➸➽`]
const randomIndex = Math.floor(Math.random() * wordsArray.length);
const randomWord = wordsArray[randomIndex];

var link =["https://i.ibb.co/MPRwTPt/xva213.jpg","https://i.ibb.co/RcHBq4K/xva213.jpg","https://i.ibb.co/pR1578D/xva213.jpg","https://i.ibb.co/Xt2GQ5v/xva213.jpg","https://i.ibb.co/R2PjdvB/xva213.jpg","https://i.ibb.co/h7Mm1Gs/xva213.jpg","https://i.ibb.co/ZcGqvYY/xva213.jpg","https://i.ibb.co/7VxcsgX/xva213.jpg","https://i.ibb.co/26Rbd7G/xva213.jpg","https://i.ibb.co/9nHKD04/xva213.jpg","https://i.ibb.co/wCWXH1g/xva213.jpg","https://i.ibb.co/3pbJS8y/xva213.jpg","https://i.ibb.co/Cv29tMj/xva213.jpg","https://i.ibb.co/N6Vwxz2/xva213.jpg","https://i.ibb.co/zJ3cSq7/xva213.jpg","https://i.ibb.co/xCBCrrg/xva213.jpg","https://i.ibb.co/cb02xyk/xva213.jpg","https://i.ibb.co/n6sPNf2/xva213.jpg","https://i.ibb.co/xhGg8WY/xva213.jpg","https://i.ibb.co/vVBJh57/xva213.jpg","https://i.ibb.co/JjqgSdx/xva213.jpg","https://i.ibb.co/VQbFtVm/xva213.jpg","https://i.ibb.co/ZNpn0WS/xva213.jpg","https://i.ibb.co/TcfdcPS/xva213.jpg",]
let img = link[Math.floor(Math.random()*link.length)]
message.send({body:randomWord, attachment: await global.utils.getStreamFromURL(img)
}); 

	}
};