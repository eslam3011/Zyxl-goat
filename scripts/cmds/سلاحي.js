module.exports = {
 config: {
 name: "سلاحي",
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


 onStart: async function({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
 const userData = await usersData.get(event.senderID)
 if (userData.data && userData.data.store && userData.data.store.weapons) {
 const weaponName = userData.data.store.weapons.name
 const weaponUrl = userData.data.store.weapons.url
 const body = `❥ــــــــــــــــ♭ــــــــــــــــ❥

❀❀ سلاحك هو ❀❀

 ×××{ ${weaponName} }×××
❥ـــــــــــــــ♭ـــــــــــــــــ❥
❥ـــــــــــــــ♭ـــــــــــــــــ❥`
 message.reply({
 body: body ,
 attachment: await global.utils.getStreamFromURL(weaponUrl)
 })
 }else{
 message.reply('انت لا تملك اي سلاح العب الالعاب لشراء اسلحة')
 }


 }
};