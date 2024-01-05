const axios = require('axios');
const google = require("googlethis");
const cloudscraper = require("cloudscraper");
const fs = require("fs");

module.exports = {
 config: {
 name: "صور",
 aliases: ["is"],
 version: "1.0",
 author: "Jun",
 countDown: 5,
 role: 0,
 shortDescription: "Search image",
 longDescription: "",
 category: "image",
 guide: "{pn}"
 },

 async onStart({ event, api, args }) {
 if (args.length === 0) {
 api.sendMessage("أدخل اسم الصور التي تريد البحث عنها.", event.threadID, event.messageID);
 return;
 }

 let query = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
 api.sendMessage(`🔎 جاري بحث عن صور ${query}...`, event.threadID, event.messageID);

 let result = await google.image(query, { safe: false });
 if (result.length === 0) {
 api.sendMessage(`⚠️ البحث عن الصور الخاص بك لم اجد أي نتيجة.`, event.threadID, event.messageID);
 return;
 }

 let streams = [];
 let counter = 0;

 console.log(result);

 for (let image of result) {
 // Only show 10 images
 if (counter >= 15) break;

 console.log(`${counter}: ${image.url}`);

 // Ignore urls that does not end with .jpg or .png
 let url = image.url;
 if (!url.endsWith(".jpg") && !url.endsWith(".png")) continue;

 let path = __dirname + `/cache/search-image-${counter}.jpg`;
 let hasError = false;
 await cloudscraper.get({ uri: url, encoding: null })
 .then((buffer) => fs.writeFileSync(path, buffer))
 .catch((error) => {
 console.log(error);
 hasError = true;
 });

 if (hasError) continue;

 console.log(`Pushed to streams: ${path}`);
 streams.push(fs.createReadStream(path).on("end", async () => {
 if (fs.existsSync(path)) {
 fs.unlink(path, (err) => {
 if (err) return console.log(err);
 console.log(`Deleted file: ${path}`);
 });
 }
 }));

 counter += 1;
 }

 //api.sendMessage("", event.threadID, event.messageID);

 let msg = {
 body: `\نتيجة البحث "${query}"\\وجدت: ${result.length} صورة${result.length > 1 ? 's' : ''}`,
 attachment: streams
 };

 api.sendMessage(msg, event.threadID, event.messageID);
 }
};