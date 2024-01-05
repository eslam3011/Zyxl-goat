module.exports = {
	config: {
		name: "سؤال", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
i = args.join(' ') 
const axios = require('axios');


function connectArabicLetters(text) {
    // You can improve this function based on your needs
    const connectedText = text.split('').join('');
    return connectedText;
}

const url = "https://chatgot-ai.chatgot.io/sql";
const headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJpc2xhbWFobWVkMDA4QGdtYWlsLmNvbSIsImV4cGlyZSI6MTcwMzU0ODgwMDAwMCwicmFuZG9tIjoiODdjMjYzNDMwOWRhMWQ0YzZmOTIxMDUwYWRkNzg1M2YifQ==.tZ5WgPrYXN/lwkuXTpb4RYLJxrLSxK/F9+LvQwae61k=",
    "Content-Type": "application/json"
};

const data = {
    "model": {
        "id": "openai/gpt-4",
        "name": "openai/gpt-4-1106-preview",
        "title": "GPT-4",
        "icon": "/assets/imgs/icon/4.jpg",
        "extra": {
            "title": "128k",
            "bgColor": "#000"
        },
        "placeholder": "",
        "description": "The latest GPT-4 model, which is currently the world's most outstanding large language model, provided by OpenAI, can offer you high-quality answers in various aspects. It can return up to 4,096 output tokens and has a maximum context window of 128,000 tokens.",
        "order": 0,
        "isActived": true,
        "x": 62,
        "y": 46.9488639831543,
        "value": "GPT-4 128k",
        "isReplying": true
    },
    "messages": [
        {
            "role": "user",
            "content": i
        }
    ]
};

axios.post(url, data, { headers })
    .then(response => {
        if (response.status === 200) {
            try {
                const dataBlocks = response.data;
                const sentences = [];

                const contentList = dataBlocks.match(/"content":"([^"]*)"/g);

                contentList.forEach(content => {
                    const extractedContent = content.match(/"content":"([^"]*)"/);
                    if (extractedContent[1]) {
                        const connectedContent = connectArabicLetters(extractedContent[1]);
                        sentences.push(connectedContent);
                    }
                });

                const resultSentence = sentences.join('');
                message.send(resultSentence);
            } catch (error) {
                message.send(`An error occurred: ${error}`);
            }
        } else {
            message.send(`Error: ${response.status}`);
        }
    })
    .catch(error => console.log(`Error: ${error.response.status}`));



}
};