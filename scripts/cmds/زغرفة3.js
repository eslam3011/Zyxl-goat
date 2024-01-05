module.exports = {
	config: {
		name: "زغرفة3", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
	 const x = args.join(""); 
const replaceChars = {
"a": "𝑎",
"b": "𝑏",
"c": "𝑐",
"d": "𝑑",
"e": "𝑒",
"f": "𝑓",
"g": "𝑔",
"h": "ℎ",
"i": "𝑖",
"j": "𝑗",
"k": "𝑘",
"l": "𝑙",
"m": "𝑚",
"n": "𝑛",
"o": "𝑜",
"p": "𝑝",
"q": "𝑞",
"r": "𝑟",
"s": "𝑠",
"t": "𝑡",
"u": "𝑢",
"v": "𝑣",
"w": "𝑤",
"x": "𝑥",
"y": "𝑦",
"z": "̂𝑧", 
 
};

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