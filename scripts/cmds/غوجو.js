module.exports = {
	config: {
		name: "غوجو",
		aliases: ["غوجو"],
		version: "1.0",
		author: "همم",
		countDown: 2,
		role: 0,
		shortDescription: "صور أنمي ",
		longDescription: "",
		category: "",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = ["https://i.ibb.co/Z8RCBLh/xva213.jpg","https://i.ibb.co/2ZvmN6v/xva213.jpg","https://i.ibb.co/54kWdmd/xva213.jpg","https://i.ibb.co/6sR4Lp6/xva213.jpg","https://i.ibb.co/tHdLLDz/xva213.jpg","https://i.ibb.co/HPzVtQs/xva213.jpg","https://i.ibb.co/tHdLLDz/xva213.jpg","https://i.ibb.co/GvhwsFS/xva213.jpg","https://i.ibb.co/PM6byST/xva213.jpg","https://i.ibb.co/KjwSs3x/xva213.jpg","https://i.ibb.co/jbnjf5L/xva213.jpg","https://i.ibb.co/MBPb5JH/xva213.jpg","https://i.ibb.co/W2rygVp/xva213.jpg","https://i.ibb.co/ng8k9Ds/xva213.jpg","https://i.ibb.co/W2rygVp/xva213.jpg","https://i.ibb.co/sRb11MN/xva213.jpg","https://i.ibb.co/XZqzJVk/xva213.jpg","https://i.ibb.co/njsw4Jx/xva213.jpg","https://i.ibb.co/sVzVkYq/xva213.jpg","https://i.ibb.co/WD3Yt95/xva213.jpg","https://i.ibb.co/ng8k9Ds/xva213.jpg","https://i.ibb.co/72QMjPd/xva213.jpg","https://i.ibb.co/G0qQ9rz/xva213.jpg","https://i.ibb.co/hmth9F6/xva213.jpg","https://i.ibb.co/T86RYyK/xva213.jpg","https://i.ibb.co/cY7RMQs/xva213.jpg","https://i.ibb.co/59g7372/xva213.jpg",]

let img = link[Math.floor(Math.random()*link.length)]
message.send({
 attachment: await global.utils.getStreamFromURL(img)
})
}
}