module.exports = {
	config: {
		name: "ممنوع",
		aliases: ["ممنوعين"],
		version: "1.0",
		author: "همم",
		countDown: 2,
		role: 2,
		shortDescription: "صور أنمي ",
		longDescription: "",
		category: "",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [
"https://i.postimg.cc/nLTYtNx7/gsapmq496sv81.gif", "https://i.postimg.cc/rwW1f2qf/detail-3.gif", "https://i.postimg.cc/dQLWc1v1/detail-2.gif", "https://i.postimg.cc/3RWZhLs6/detail-1.gif", "https://i.postimg.cc/T2zc8JC7/detail.gif", "https://i.postimg.cc/y8VcBQ9P/7F1.gif", "https://i.postimg.cc/j5Krk7BL/19.gif",
 ];

let img = link[Math.floor(Math.random()*link.length)]
message.send({
 attachment: await global.utils.getStreamFromURL(img)
})
}
}