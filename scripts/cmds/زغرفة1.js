module.exports = {
	config: {
		name: "زغرفة1", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
	 const x = args.join(""); 
const replaceChars = {
 "a": "𝐚",
"b": "𝐛",
"c": "𝐜",
"d": "𝐝",
"e": "𝐞",
"f": "𝐟",
"g": "𝐠",
"h": "𝐡",
"i": "𝐢",
"j": "𝐣",
"k": "𝐤",
"l": "𝐥",
"m": "𝐦",
"n": "𝐧",
"o": "𝐨",
"p": "𝐩",
"q": "𝐪",
"r": "𝐫",
"s": "𝐬",
"t": "𝐭",
"u": "𝐮",
"v": "𝐯",
"w": "𝐰",
"x": "𝐱",
"y": "𝐲",
"z":"𝐳",};

let result = "";
for (let i = 0; i < x.length; i++) {
 const char = x[i].toLowerCase(); 
 if (replaceChars[char]) { 
 result += replaceChars[char];
 } else {
 result += x[i];
 }
}
message.send(result);
	 
	}
};