module.exports = {
	config: {
		name: "زغرفة4", 
		version: "1.0", 
		author: "khir", 
		countDown: 5, 
		role: 0, },

	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }){
	 const x = args.join(""); 
const replaceChars = {

"a": "𝔸",
"b": "𝔹",
"c": "ℂ",
"d": "𝔻",
"e": "𝔼",
"f": "𝔽",
"g": "𝔾",
"h": "ℍ",
"i": "𝕀",
"j": "𝕁",
"k": "𝕂",
"l": "𝕃",
"m": "𝕄",
"n": "ℕ",
"o": "𝕆",
"p": "ℙ",
"q": "ℚ",
"r": "ℝ",
"s": "𝕊",
"t": "𝕋",
"u": "𝕌",
"v": "𝕍",
"w": "𝕎",
"x": "𝕏",
"y": "𝕐",
"z": "ℤ",
 
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