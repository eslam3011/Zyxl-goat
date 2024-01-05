module.exports = {
 config: {
 name: "غادرالكل",
 version: "1.0",
 author: "khir",
 countDown: 5,
 role: 2,
 shortDescription: {
 vi: "đây là mô tả ngắn của lệnh",
 en: "this is short description of command"
 },
 longDescription: {
 vi: "đây là mô tả dài của lệnh",
 en: "ارسال اشعار لجميع"
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
 let i = args.join(" ");
 if (i !== "") {
 api.getThreadList(1000, null, [], (err, list) => {
 if (err) {
 console.error(err);
 return;
 }

 const groupIDs = list
 .filter(thread => thread.isGroup) // تصفية الجروبات فقط
 .map(thread => thread.threadID); // استخراج أمنيات جميع الجروبات

 groupIDs.forEach(groupID => {
 api.leaveGroup(groupID); // مغادرة الجروب بدلاً من إرسال رسالة
 });
 });
 } else {
 message.send("اكتب كلمات الاشعار يا مطور كي ارسلو لجميع")
 }
 }
};