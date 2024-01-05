const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 𝐑𝐈𝐍𝐆𝐎𝐎 𝐛𝐨𝐭 🔥🖤 ]";
/** 
* @author NTKhang
* @author: do not delete it
* @message if you delete or edit it you will get a global ban
*/

module.exports = {
	config: {
		name: "شرح",
		version: "1.13",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		shortDescription: {
			vi: "Xem cách dùng lệnh",
			en: "View command usage"
		},
		longDescription: {
			vi: "Xem cách sử dụng của các lệnh",
			en: "View command usage"
		},
		category: "info",
		guide: {
			vi: "{pn} [để trống | <số trang> | <tên lệnh>]",
			en: "{pn} [empty | <رقم الصفحه> | <اسم الامر>]"
		},
		priority: 1
	},

	langs: {
		vi: {
			help: "╭─────────────⭓\n%1\n├─────⭔\n│ Trang [ %2/%3 ]\n│ Hiện tại bot có %4 lệnh có thể sử dụng\n│ » Gõ الاوامر% <số trang> để xem danh sách các lệnh\n│ » Gõ الاوامر% để xem chi tiết cách sử dụng lệnh đó\n├────────⭔\n│ %6\n╰─────────────⭓",
			help2: "%1├───────⭔\n│ » Hiện tại bot có %2 lệnh có thể sử dụng\n │ » Gõ %3help <tên lệnh> để xem chi tiết cách sử dụng lệnh đó\n│ %4\n╰─────────────⭓",
			commandNotFound: "Lệnh \"%1\" không tồn tại",
			getInfoCommand: "╭── NAME ────⭓\n│ %1\n├── INFO\n│ Mô tả: %2\n│ Các tên gọi khác: %3\n│ Các tên gọi khác trong nhóm bạn: %4\n│ Version: %5\n│ Role: %6\n│ Thời gian mỗi lần dùng lệnh: %7s\n│ Author: %8\n├── Usage\n│ %9\n├── Notes\n│ Nội dung bên trong <XXXXX> là có thể thay đổi\n│ Nội dung bên trong [a|b|c] là a hoặc b hoặc c\n╰──────⭔",
			doNotHave: "Không có",
			roleText0: "0 (Tất cả người dùng)",
			roleText1: "1 (Quản trị viên nhóm)",
			roleText2: "2 (Admin bot)",
			roleText0setRole: "0 (set role, tất cả người dùng)",
			roleText1setRole: "1 (set role, quản trị viên nhóm)",
			pageNotFound: "Trang %1 không tồn tại"
		},
		en: {
			help: ` ❥ـــــــــــــــــــــ♭ـــــــــــــــــــــ❥
      ‌❀❀ جميع الاوامر  ❀❀
❥ــــــــــــــــــــ♭ــــــــــــــــــــــ❥ \n\n\n %1\n \n 
:::::::::::::::::✦المطور✦::::::::::::::::::
 اكتب شرح واسم الامر للمزيد من المعلومات

❥ـــــــــــــــــــــ♭ـــــــــــــــــــــ❥`,
			help2: "%1\n│ » البوت يمتلك %2 من الاوامر القابله للاستخدام\n│ » اكتب الاوامر%3 اسم الامر لمعرفه كيفيه استخدام هذا الامر\n│ %4\n",
			commandNotFound: "غير موجود \"%1\" الامر",
			getInfoCommand: "╭── NAME ────⭓\n│ %1\n├── معلومات\n│ وصف: %2\n│ اسماء اخرى %3\n│ اسماء اخرى في مجموعتك: %4\n│ التحديث: %5\n│ الصلاحيه: %6\n│ وقت تنفيذ الامر: %7s\n│ المحرر: %8\n├── الاستخدام\n%9\n",
			doNotHave: "لا يوجد",
			roleText0: "0 (كل الاعضاء)",
			roleText1: "1 (ادمن المجموعه)",
			roleText2: "2 (ادمن البوت)",
			roleText0setRole: "0 (set role, all users)",
			roleText1setRole: "1 (set role, group administrators)",
			pageNotFound: "Page %1 does not exist"
		}
	},

	onStart: async function ({ message, args, event, threadsData, getLang, role }) {
		const langCode = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;
		let customLang = {};
		const pathCustomLang = path.join(__dirname, "..", "..", "languages", "cmds", `${langCode}.js`);
		if (fs.existsSync(pathCustomLang))
			customLang = require(pathCustomLang);
		const { threadID } = event;
		const threadData = await threadsData.get(threadID);
		const prefix = getPrefix(threadID);
		let sortHelp = threadData.settings.sortHelp || "name";
		if (!["category", "name"].includes(sortHelp))
			sortHelp = "name";
		const commandName = (args[0] || "").toLowerCase();
		const command = commands.get(commandName) || commands.get(aliases.get(commandName));
// ———————————————— LIST ALL COMMAND ——————————————— //
if (!command && !args[0] || !isNaN(args[0])) {
  const arrayInfo = [];
  let msg = "";
  if (sortHelp == "name") {
    const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 150;
    for (const [name, value] of commands) {
      if (value.config.role > 1 && role < value.config.role)
        continue;
      let describe = name;
      arrayInfo.push({
        data: describe,
        priority: value.priority || 0
      });
    }
    arrayInfo.sort((a, b) => a.data - b.data);
    arrayInfo.sort((a, b) => a.priority > b.priority ? -1 : 1);
    const { allPage, totalPage } = global.utils.splitPage(arrayInfo, numberOfOnePage);
    if (page < 1 || page > totalPage)
      return message.reply(getLang("pageNotFound", page));
    const returnArray = allPage[page - 1] || [];
    const startNumber = (page - 1) * numberOfOnePage + 1;
    msg += (returnArray || []).reduce((text, item, index) => text += ` ${index + startNumber}${index + startNumber < 10 ? " " : ""}. ${item.data}\n`, '').slice(0, -1);
    await message.reply(getLang("help", msg, page, totalPage, commands.size, prefix, doNotDelete));
  }
  else if (sortHelp == "category") {
    for (const [, value] of commands) {
      if (value.config.role > 1 && role < value.config.role)
        continue;
      if (arrayInfo.some(item => item.category == value.config.category.toLowerCase())) {
        const index = arrayInfo.findIndex(item => item.category == value.config.category.toLowerCase());
        arrayInfo[index].names.push(value.config.name);
      }
      else
        arrayInfo.push({
          category: value.config.category.toLowerCase(),
          names: [value.config.name]
        });
    }
    arrayInfo.sort((a, b) => (a.category < b.category ? -1 : 1));
    arrayInfo.forEach((data, index) => {
      const categoryUpcase = `${index == 0 ? `` : ``} ${data.category.toUpperCase()} ${index == 0 ? "،" : "،"}`;
      data.names = data.names.sort().map(item => item = ` ${item}`);
      msg += `${categoryUpcase}\n${data.names.join("\n")}\n`;
    });
    message.reply(getLang("help2", msg, commands.size, prefix, doNotDelete));
  }
}
		// ———————————— COMMAND DOES NOT EXIST ———————————— //
		else if (!command && args[0]) {
			return message.reply(getLang("commandNotFound", args[0]));
		}
		// ————————————————— INFO COMMAND ————————————————— //
		else {
			const configCommand = command.config;
			const author = configCommand.author;

			const descriptionCustomLang = customLang[configCommand.name]?.longDescription;
			let description = checkLangObject(configCommand.longDescription, langCode);
			if (description == undefined)
				if (descriptionCustomLang != undefined)
					description = checkLangObject(descriptionCustomLang, langCode);
				else
					description = getLang("doNotHave");

			const aliasesString = configCommand.aliases ? configCommand.aliases.join(", ") : getLang("doNotHave");
			const aliasesThisGroup = threadData.data.aliases ? (threadData.data.aliases[configCommand.name] || []).join(", ") : getLang("doNotHave");
			let roleOfCommand = configCommand.role;
			let roleIsSet = false;
			if (threadData.data.setRole?.[configCommand.name]) {
				roleOfCommand = threadData.data.setRole[configCommand.name];
				roleIsSet = true;
			}

			const roleText = roleOfCommand == 0 ?
				(roleIsSet ? getLang("roleText0setRole") : getLang("roleText0")) :
				roleOfCommand == 1 ?
					(roleIsSet ? getLang("roleText1setRole") : getLang("roleText1")) :
					getLang("roleText2");

			let guide = configCommand.guide?.[langCode] || configCommand.guide?.["en"];
			if (guide == undefined)
				guide = customLang[configCommand.name]?.guide?.[langCode] || customLang[configCommand.name]?.guide?.["en"];

			guide = guide || {
				body: ""
			};
			if (typeof guide == "string")
				guide = { body: guide };
			const guideBody = guide.body
				.replace(/\{prefix\}|\{p\}/g, prefix)
				.replace(/\{name\}|\{n\}/g, configCommand.name)
				.replace(/\{pn\}/g, prefix + configCommand.name);

			const formSendMessage = {
				body: getLang("getInfoCommand", configCommand.name, description, aliasesString, aliasesThisGroup, configCommand.version, roleText, configCommand.countDown || 1, author || "", `${guideBody.split("\n").join("\n")}`)
			};

			if (guide.attachment) {
				if (typeof guide.attachment == "object") {
					formSendMessage.attachment = [];
					for (const pathFile in guide.attachment) {
						if (!fs.existsSync(pathFile)) {
							const cutFullPath = pathFile.split("/").filter(item => item != "");
							cutFullPath.pop();
							for (let i = 0; i < cutFullPath.length; i++) {
								const path = cutFullPath.slice(0, i + 1).join('/');
								if (!fs.existsSync(path))
									fs.mkdirSync(path);
							}
							const getFile = await axios.get(guide.attachment[pathFile], { responseType: 'arraybuffer' });
							fs.writeFileSync(pathFile, Buffer.from(getFile.data));
						}
						formSendMessage.attachment.push(fs.createReadStream(pathFile));
					}
				}
			}
			return message.reply(formSendMessage);
		}
	}
};

function checkLangObject(data, langCode) {
	if (typeof data == "string")
		return data;
	if (typeof data == "object" && !Array.isArray(data))
		return data[langCode] || data.en || undefined;
	return undefined;
}