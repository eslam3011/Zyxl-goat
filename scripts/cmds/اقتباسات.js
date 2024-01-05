module.exports = {
	config: {
		name: "اقتباس", 
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
		const wordsArray = [`•الاوقات❣︎ الصعبة سوف تكشف دائما ♫︎عن الاصدقاء الحقيقيون👀💭
•𝐻𝑎𝑟𝑑 𝑡𝑖𝑚𝑒𝑠 𝑤𝑖𝑙𝑙 𝑎𝑙𝑤𝑎𝑦𝑠 𝑟𝑒𝑣𝑒𝑎𝑙 𝑡𝑟𝑢𝑒༆ 𝑓𝑟𝑖𝑒𝑛𝑑𝑠👀💭`,`لا يَعلَم ما في القُلوبِ إِلا خالِقُها ، فَــ يا رَّب فَرِج هُمومَاً أنْتَ تَعلمُها .!🤎🧸
ησ σηє кησωѕ ωнαт ιѕ ιη тнє нєαятѕ єχ¢єρт тнєιя ¢яєαтσя, ѕσ αℓℓαн, яєℓιєνє ωσяяιєѕ тнαт уσυ кησω .! 🤎🧸`,`"الحب لا يحتاج ان يكون رائعا هو فقط يكفيه أن يكون حقيقيا "🍂
ʟᴏᴠᴇ 𝑑𝑜𝑒𝑠𝑛'𝑡 𝑛𝑒𝑒𝑑 𝑡𝑜 𝑏𝑒 𝑝𝑒𝑟𝑓𝑒𝑐𝑡 .𝑖𝑡 𝑗𝑢𝑠𝑡 𝑛𝑒𝑒𝑑𝑠 𝑡𝑜 𝑏𝑒 𝑡𝑟𝑢𝑒🌠🖇️❤️`,`سَــأَضْحَــــكُ وَسَــــأَعِــــيشُــ هَــــذٍهِ حَيــــَاتــــِي فَـــــمـَـنْ 
أَنْــــتـــُمْ لـــِكَيْ أُوقٍــــفَـــهَـــا مٍن أَ جْـــلِكـــُمْ 🖤✨🥀 
𝑊𝑖𝑙𝑙 𝑙𝑎𝑢𝑔ℎ 𝑎𝑛𝑑 𝑙𝑖𝑣𝑒 𝑡ℎ𝑖𝑠 𝑚𝑦 𝑙𝑖𝑓𝑒.𝑦𝑜𝑢 𝑎𝑟𝑒 𝑚𝑖𝑛𝑒 𝑠𝑡𝑜𝑝 𝑖𝑡 
𝑓𝑜𝑟 𝑡ℎ𝑒𝑖𝑟 𝑠𝑎𝑘𝑒 🖤✨🥀`,`•🌫•
❥︎الجروح ليست سوىٰ هدايا★ من أشخاص لديهم ذوق ❤︎سيئ للغاية❤️‍🩹🌫🔥
•♡•
❥︎𝑊𝑜𝑢𝑛𝑑𝑠❤︎ 𝑎𝑟𝑒 𝑛𝑜𝑡ℎ𝑖𝑛𝑔 𝑏𝑢𝑡 𝑔𝑖𝑓𝑡𝑠 𝑓𝑟𝑜𝑚 𝑝𝑒𝑜𝑝𝑙𝑒 𝑤𝑖𝑡ℎ 𝑣𝑒𝑟𝑦★ 𝑏𝑎𝑑 𝑡𝑎𝑠𝑡𝑒 ❤️‍🩹🌫🔥`,`إبـــتـــســـم فــــأنـًــت عــــلـــى ديـــن مـــحـــمـــًد 🫀ﷺ
𝐒𝐦𝐢𝐥𝐞 , 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐨𝐧 𝐭𝐡𝐞 𝐫𝐞𝐥𝐢𝐠𝐢𝐨𝐧 𝐨𝐟 𝐦𝐮𝐡𝐚𝐦𝐦𝐚𝐝 ,𝐩𝐞𝐚𝐜𝐞 𝐛𝐞 𝐮𝐨𝐩𝐧 𝐡𝐢𝐦❤️‍🩹❤️‍🩹`,`" ‏كـن دائـمًـا مـبـتـسـم وقُـل الحـمـدلـلـه"🧸🌏 " 𝐴𝑙𝑤𝑎𝑦𝑠 𝑠𝑚𝑖𝑙𝑒 𝑎𝑛𝑑 𝑠𝑎𝑦 𝑡ℎ𝑎𝑛𝑘 𝐺𝑜𝑑 "‎...🥀🖤`,`قـد تڪـون ابتـسامـتي مـزيفـة ولڪن على الأقـل 
✨🤞🏽🥂 ٰشـخـصيتي ليـسـت ڪـذلك.🥂🤞🏽✨
𝑀𝑦 𝑠𝑚𝑖𝑙𝑒 𝑚𝑎𝑦 𝑏𝑒 𝑓𝑎𝑘𝑒 𝑏𝑢𝑡 𝑎𝑡 𝑙𝑒𝑎𝑠𝑡 𝑚𝑦
 ٰ 𝑝𝑒𝑟𝑠𝑜𝑛𝑎𝑙𝑖𝑡𝑦 𝑖𝑠𝑛'𝑡.`,`•♡
 توقف عن التظاهر بأن ڪل شيء على ما يرام ، أعلم أنه يقتلڪ من الداخل 🎻🖤✨
𝐒𝐭𝐨𝐩 𝐩𝐫𝐞𝐭𝐞𝐧𝐝𝐢𝐧𝐠 𝐭𝐡𝐚𝐭 𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠 𝐢𝐬 𝐨𝐤𝐚𝐲. 𝐈 𝐤𝐧𝐨𝐰 𝐢𝐭’𝐬 𝐤𝐢𝐥𝐥𝐢𝐧𝐠 𝐲𝐨𝐮 𝐢𝐧𝐬𝐢𝐝𝐞 🎻🖤✨...`,`"‏إنّ الرّوح إذا التَقت بمَن يُشبهُها ترمّمت، وتَعافت، واكتَملت.♥️✨
“𝓘𝓯 𝓽𝓱𝓮 𝓼𝓸𝓾𝓵 𝓶𝓮𝓮𝓽𝓼 𝓼𝓸𝓶𝓮𝓸𝓷𝓮 𝔀𝓱𝓸 𝓻𝓮𝓼𝓮𝓶𝓫𝓵𝓮𝓼 𝓲𝓽, 𝔀𝓲𝓵𝓵 𝓻𝓮𝓬𝓸𝓿𝓮𝓻,♥️✨"`,`𝓓𝓸 𝓷𝓸𝓽 𝓬𝓪𝓻𝓻𝔂 𝓽𝓱𝓮 𝓽𝔀𝓸 𝓔𝓵𝓲𝓶𝓪𝓷𝓽𝓮𝓼 𝓽𝓱𝓮 𝓑𝓮𝓪𝓾𝓽𝔂 𝓞𝓕 𝔂𝓞𝓾𝓻 𝓢𝓶𝓲𝓛𝓛𝓮🖤🥺
لا تـــــــحـــمـــــل هــــمــا يـــــزيــــل جـــــمــــال ابـــتـــســــامــــتــــك 🖤... ♪∞🦋🖇`,`اشتـــــقت لهـــــدوء القـــبور فضجــــيج الحــــياة اتــــ؏ــــبني
ɪ ᴍɪꜱꜱ ᴛʜᴇ ꜱɪʟᴇɴᴄᴇ ᴏꜰ ᴛʜᴇ ɢʀᴀᴠᴇꜱ, ꜱᴏ ᴛʜᴇ ɴᴏɪꜱᴇ ᴏꜰ ʟɪꜰᴇ ᴄᴏᴍᴇꜱ ᴛᴏ ᴍᴇ ☹️💔☝`,`تجاهل ، فليس كلُ شيء يستحق الانتباه.`,`صعـوبـة الـشرح تجبرنـا على الصـمت دائمـاً*..𝒯𝒽𝑒 𝒹𝒾𝒻𝒻𝒾𝒸𝓊𝓁𝓉𝓎 𝑜𝒻 𝑒𝓍𝓅𝓁𝒶𝒾𝓃𝒾𝓃𝑔 𝒻𝑜𝓇𝒸𝑒𝓈 𝓊𝓈 𝓉𝑜 𝓇𝑒𝓂𝒶𝒾𝓃 𝓈𝒾𝓁𝑒`,`لا تحرق نفسك من اجل الأخرين فالشمس تحرق نفسها من اجلنا ومازلنا نحب القمر 🌗 
𝑑𝑒 𝑛𝑜𝑡 𝑏𝑢𝑟𝑛 𝑦𝑜𝑢𝑠𝑒𝑙𝑓 𝑓𝑜𝑟 𝑜𝑡ℎ𝑒𝑟𝑠👌 .𝑓𝑜𝑟 𝑡ℎ𝑒 𝑠𝑢𝑛🌞 𝑏𝑢𝑟𝑛𝑠 𝑖𝑡𝑠𝑒𝑙𝑓 𝑓𝑜𝑟 𝑢.𝑏𝑢𝑡 𝑤𝑒 𝑠𝑡𝑖𝑙𝑙 𝑙𝑜𝑣𝑒 𝑡ℎ𝑒 𝑚𝑜𝑜𝑛 🌚💜🖤🖤`]; 
const randomIndex = Math.floor(Math.random() * wordsArray.length);
const randomWord = wordsArray[randomIndex];

var link = [,`https://i.imgur.com/tfAkF8b.jpg`,`https://i.imgur.c
/CV0g4t7.jpg`,`https://i.imgur.com/zhVyvL7.jpg`,`https://i.imgur.com/CV0g4t7.jpg`,`https://i.imgur.com/KTvLyex.jpg`,`https://i.imgur.com/KTvLyex.jpg`,`https://i.imgur.com/zhVyvL7.jpg`,`https://i.imgur.com/wJ1BEDq.jpg`,`https://i.imgur.com/57IhoZI.jpg`,]
let img = link[Math.floor(Math.random()*link.length)]
message.send({body:randomWord, attachment: await global.utils.getStreamFromURL(img)
}); 

	}
};