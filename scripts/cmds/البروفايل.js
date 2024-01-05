module.exports = {
 config: {
 name: "بروفايل",
 version: "1.0",
 author: "khir",
 countDown: 5,
 role: 0,
 },

 onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
 if (event.type === 'message_reply') {
 const i = event.messageReply.senderID;
 const { getStreamFromURL } = global.utils;
 const avatarUrl = await usersData.getAvatarUrl(i);
 message.reply({
 body: '',
 attachment: await getStreamFromURL(avatarUrl),
 });
 } else {
 const { getStreamFromURL } = global.utils;
 const avatarUrl = await usersData.getAvatarUrl(event.senderID);
 message.reply({
 body: '',
 attachment: await getStreamFromURL(avatarUrl),
 });
 }
 }
};