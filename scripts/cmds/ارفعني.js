module.exports = {
	config: {
		name: "ارفعني",
		version: "1.1",
		author: "Eslam",
		countDown: 5,
		role: 2,
		shortDescription: {
			vi: "Kick thành viên",
			en: "رفع المطور ادمن"
		},
		longDescription: {
			vi: "Kick thành viên khỏi box chat",
			en: "يرفع المطور ادمن لو هو مش ادمن 😠"
		},
		category: "المجموعة",
		guide: {
			vi: "{pn} @tags: dùng để kick những người được tag",
			en: "قول ارفعني والبوت هيظبطك"
		}
	},

	langs: {
		vi: {
			needAdmin: "Vui lòng thêm quản trị viên cho bot trước khi sử dụng tính năng này"
		},
		en: {
			needAdmin: "أضف البوت أدمن ثم اعد المحاولة ✅"
		}
	},

	onStart: async function ({ message, event, args, threadsData, api, getLang }) {
		const adminIDs = await threadsData.get(event.threadID, "adminIDs");
		if (!adminIDs.includes(api.getCurrentUserID())){
		 return message.reply('لما انا ابقى الادمن الاول 😑');
		}else if (adminIDs.includes(event.senderID)) {
		 return message.reply('انت بالفعل ادمن 💪✨')
		}
			api.changeAdminStatus(event.threadID, event.senderID, true);
			
		
	}
};