const axios = require("axios");
let answer = ['gfgdfdree', 'yytdgdgf']
module.exports = {
    config: {
        name: "ديموجي",
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
            en: "الاجابة تكون هكذا مثلا: 😀😋"
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

        const question = [
    { emoji1: "😐", emoji2: "🤨" },
    { emoji1: "🙂", emoji2: "☺" },
    { emoji1: "😚", emoji2: "😣" },
    { emoji1: "😫", emoji2: "😴" },
    { emoji1: "😲", emoji2: "😎" },
    { emoji1: "🤑", emoji2: "🤨" },
    { emoji1: "🐧", emoji2: "🦁" },
    { emoji1: "🐧", emoji2: "🐯" },
    { emoji1: "🐧", emoji2: "🐷" },
    { emoji1: "🐧", emoji2: "🐻" },
    { emoji1: "🐧", emoji2: "🐼" },
    { emoji1: "🐧", emoji2: "🐨" },
    { emoji1: "🦁", emoji2: "😬" },
    { emoji1: "🦁", emoji2: "😐" },
    { emoji1: "🐯", emoji2: "😐" },
    { emoji1: "🐷", emoji2: "😐" },
    { emoji1: "😈", emoji2: "🐧" },
    { emoji1: "🐧", emoji2: "🔥" },
    { emoji1: "🤓", emoji2: "🤫" },
    { emoji1: "🙂", emoji2: "😑" },
    { emoji1: "🐻", emoji2: "😐" },
    { emoji1: "🐼", emoji2: "🔥" },
    { emoji1: "🐨", emoji2: "🔥" },
    { emoji1: "🦁", emoji2: "🔥" },
    { emoji1: "🐻", emoji2: "🔥" },
    { emoji1: "🐷", emoji2: "🔥" },
    { emoji1: "😠", emoji2: "🤕" },
    { emoji1: "🤮", emoji2: "🤧" },
    { emoji1: "🤡", emoji2: "🔥" },
    { emoji1: "🧐", emoji2: "🤓" },
    { emoji1: "😰", emoji2: "🤒" },
    { emoji1: "😢", emoji2: "😠" },
    { emoji1: "😵", emoji2: "🧐" },
    { emoji1: "🤕", emoji2: "🤢" },
    { emoji1: "🤬", emoji2: "🤫" },
    { emoji1: "🤨", emoji2: "😎" },
    { emoji1: "😉", emoji2: "😎" }
]

        const ri = Math.floor(Math.random() * question.length)
        const readStream = [];
        const emoji1 = question[ri].emoji1;
        const emoji2 = question[ri].emoji2;

        if (!emoji1 || !emoji2)
            return message.SyntaxError();

        const generate1 = await generateEmojimix(emoji1, emoji2);
        const generate2 = await generateEmojimix(emoji2, emoji1);

        if (generate1)
            readStream.push(generate1);
        if (generate2)
            readStream.push(generate2);

        if (readStream.length == 0)
            return message.reply('حدث خطاء حاول مرة اخرى');

        message.reply({
            body: 'هذا الايموجي خليط بين؟',
            attachment: readStream
        });
        answer[0] = emoji1
        answer[1] = emoji2


    },
    onChat: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
      
        const text = event.body
        const tarr = text.split(' ')
        async function checkAnswer() {

            const userName = await usersData.getName(event.senderID);
            const userData = await usersData.get(event.senderID)

            if (userData.data && userData.data.games && userData.data.games.points) {

                let pointsCount = userData.data.games.points
                pointsCount += 5
                await usersData.set(event.senderID, { points: pointsCount }, "data.games");
                message.reply('قام ' + userName + ' بكتابة الاجابة الصحيحة وحصل علي 5 نقطة ')
                answer = ['gfgdfdree', 'yytdgdgf']

            } else {
                await usersData.set(event.senderID, { points: 5 }, "data.games");
                message.reply('قام ' + userName + ' بكتابة الاجابة الصحيحة وحصل علي 5 نقطة ')
                answer = ['gfgdfdree', 'yytdgdgf']
            }
        }

        if (tarr[0] === answer[0] && tarr[1] === answer[1]) {
            checkAnswer()
        } else if (tarr[0] === answer[1] && tarr[1] === answer[0]) {
            checkAnswer()
        }
    }
};

async function generateEmojimix(emoji1, emoji2) {
    try {
        const { data: response } = await axios.get("https://goatbotserver.onrender.com/taoanhdep/emojimix", {
            params: {
                emoji1,
                emoji2
            },
            responseType: "stream"
        });
        response.path = `emojimix${Date.now()}.png`;
        return response;
    }
    catch (e) {
        return null;
    }
}
