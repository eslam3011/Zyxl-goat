const axios = require("axios");

module.exports = {
config: {
		name: "لوجو",
    version: "1.0",
		author: "Samir",
		countDown: 5,
		role: 0,
		shortDescription: "space text edit Through textpro.me",
		longDescription: "space text edit Through textpro.me",
		category: "text",
		guide: {
      en: "{p}{n} query",
    }
	},

 onStart: async function ({ api, event, args, message }) {
 try { 
 const samir = args.join(' ');
 const response = `https://api.zahwazein.xyz/textpro/space?text=${samir}&apikey=zenzkey_92d341a7630e`;

 const form = {
      body: `انتظر دقيقه `
    };
    form.attachment = [];
    form.attachment[0] = await global.utils.getStreamFromURL(response);
    message.reply(form);
 } catch (error) {
 console.error(error);
 message.reply("حدث خطأ أثناء إحضار الاستجابة");
 }
 }
};