module.exports = {
	config: {
		name: "لو", 
		version: "1.0", 
		author: "NTKhang", 
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
			en: "this is guide of command"
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

	
	onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) { const userName = await usersData.getName(event.senderID);

if (args[0]==="كنت"){
if (args[1]==="شخصية"){
if (args[2]==='كرة'){
var link = ["https://i.ibb.co/NSH93qp/xva213.jpg","https://i.ibb.co/YNL08tP/xva213.jpg","https://i.ibb.co/MhZrVzh/xva213.jpg","https://i.ibb.co/42PpDQq/xva213.jpg","https://i.ibb.co/Hhrbrhj/xva213.jpg","https://i.ibb.co/rywFPkn/xva213.jpg","https://i.ibb.co/rywFPkn/xva213.jpg","https://i.ibb.co/sgW6nf3/xva213.jpg","https://i.ibb.co/svf6kg0/xva213.jpg","https://i.ibb.co/VDGPwx5/xva213.jpg","https://i.ibb.co/gM61XC9/xva213.jpg","https://i.ibb.co/VV"]

let img = link[Math.floor(Math.random()*link.length)]
message.send({body: ' لو كان ɞ'+ userName +' ɞشخصية كرة قضم كنت لتكون ↪️ ', attachment: await global.utils.getStreamFromURL(img)
}); 
}
if (args[2]==="انمي"){
var link = ["https://i.imgur.com/72UYGI3.jpg",
"https://i.imgur.com/c6NwUje.jpg",
"https://i.imgur.com/mZMa4Fj.jpg",
"https://i.imgur.com/RHUIrHU.jpg",
"https://i.imgur.com/zPSurUw.jpg",
"https://i.imgur.com/Y7szmB8.jpg",
"https://i.imgur.com/Kbe8Bqp.jpg",
"https://i.imgur.com/wkAo07R.jpg",
"https://i.imgur.com/DIWtOYm.jpg",
"https://i.imgur.com/Sdoom63.jpg",
"https://i.imgur.com/B92OLSz.jpg",
"https://i.imgur.com/bwogAyR.jpg",
"https://i.imgur.com/c79JoOC.jpg",
"https://i.imgur.com/LtH8hG1.jpg",
"https://i.imgur.com/42lhm0a.jpg",
"https://i.imgur.com/vkE8lQe.jpg",
"https://i.imgur.com/9BbHCP2.jpg",
"https://i.imgur.com/OfE3Yqz.jpg",
"https://i.imgur.com/q9n8E5g.jpg",
"https://i.imgur.com/JFuYxMM.jpg",
"https://i.imgur.com/VlIGbTn.jpg",
"https://i.imgur.com/rP6XR6x.jpg",
"https://i.imgur.com/AZS7FD9.jpg",
"https://i.imgur.com/CKX4wK4.jpg",
"https://i.imgur.com/facyYlk.jpg",
"https://i.imgur.com/e0tmasp.jpg",
"https://i.imgur.com/nz6LPgp.jpg",
"https://i.imgur.com/hsf3IKh.jpg",
"https://i.imgur.com/0GgHNBv.jpg",
"https://i.imgur.com/WMPCYzR.jpg",
"https://i.imgur.com/KmpvSna.jpg",
"https://i.imgur.com/iaexTGb.jpg",
"https://i.imgur.com/divQPMT.jpg",
"https://i.imgur.com/elwwQqH.jpg",
"https://i.imgur.com/ByGb1S4.jpg",
"https://i.imgur.com/J6HFj2Y.jpg",
"https://i.imgur.com/gAnYCxo.jpg",
"https://i.imgur.com/zmzQaQs.jpg",
"https://i.imgur.com/MZhBoTa.jpg",
"https://i.imgur.com/ctb5EGr.jpg",
"https://i.imgur.com/9rHIjdA.jpg",
"https://i.imgur.com/2OrvMyG.jpg",
"https://i.imgur.com/G9IQfVE.jpg",
"https://i.imgur.com/Bo9sYsE.jpg",
"https://i.imgur.com/9bOLYY1.jpg",
"https://i.imgur.com/Pu3blC3.jpg",
"https://i.imgur.com/L3Ae7fP.jpg",
"https://i.imgur.com/8fT9TZn.jpg",
"https://i.imgur.com/l9Vans7.jpg",
"https://i.imgur.com/DIUaEXq.jpg",
"https://i.imgur.com/cCCkWKm.jpg",
"https://i.imgur.com/0l4VrgL.jpg",
"https://i.imgur.com/AC2ywmg.jpg",
"https://i.imgur.com/nU8hCMe.jpg",
"https://i.imgur.com/abgyjPw.jpg",
"https://i.imgur.com/P5sDCfN.jpg",
"https://i.imgur.com/dyQX44D.jpg",
"https://i.imgur.com/j1oB7P2.jpg",
"https://i.imgur.com/MhTMfYr.jpg",
"https://i.imgur.com/JxnKzAB.jpg",
"https://i.imgur.com/A5Nk86m.jpg",
"https://i.imgur.com/kVGleEP.jpg",
"https://i.imgur.com/jMfFd3I.jpg",
"https://i.imgur.com/ARmNHxw.jpg",
"https://i.imgur.com/Ho4xa1s.jpg",
"https://i.imgur.com/UgMfdbf.jpg",
"https://i.imgur.com/Wu1aRXD.jpg",
"https://i.imgur.com/Chfusnp.jpg",
"https://i.imgur.com/2VwJbZg.jpg",
"https://i.imgur.com/BZTivE6.jpg",
"https://i.imgur.com/SNk6M88.jpg",
"https://i.imgur.com/e0OXKdQ.jpg",
"https://i.imgur.com/J2XGzpE.jpg",
"https://i.imgur.com/KxU7Zbf.jpg",
"https://i.imgur.com/bzjW6CK.jpg",
"https://i.imgur.com/kMZNz8o.jpg",
"https://i.imgur.com/LlRFOFv.jpg",
"https://i.imgur.com/rr10fgG.jpg",
"https://i.imgur.com/UWyRY8W.jpg",
"https://i.imgur.com/czusqtb.jpg",
"https://i.imgur.com/WRCWzit.jpg"]


let img = link[Math.floor(Math.random()*link.length)]
message.send({body: ' لو كان ɞ'+ userName +' ɞشخصية انمي كنت لتكون ↪️ ', attachment: await global.utils.getStreamFromURL(img)
}); 
} 
 if (args[2]==="حيوان"){var link = ["https://i.ibb.co/sKkBQDm/xva213.jpg","https://i.ibb.co/B2NRtt0/xva213.jpg","https://i.ibb.co/T8LjHrQ/xva213.jpg","https://i.ibb.co/tb0cBt8/xva213.jpg","https://i.ibb.co/YQKjKgH/xva213.jpg","https://i.ibb.co/9sgtT92/xva213.jpg","https://i.ibb.co/Xp3txW3/xva213.jpg","https://i.ibb.co/x5TpJJP/xva213.jpg","https://i.ibb.co/khCRCnK/xva213.jpg","https://i.ibb.co/j3SG7YT/xva213.jpg","https://i.ibb.co/6NCRR8G/xva213.jpg","https://i.ibb.co/6NCRR8G/xva213.jpg","https://i.ibb.co/Wy6L19q/xva213.jpg","https://i.ibb.co/Wy6L19q/xva213.jpg","https://i.ibb.co/7bpGvND/xva213.jpg","https://i.ibb.co/SJ7RWD4/xva213.jpg","https://i.ibb.co/bNgnnPL/xva213.jpg","https://i.ibb.co/7XL1wBS/xva213.jpg","https://i.ibb.co/QYGggZP/xva213.jpg","https://i.ibb.co/wz86dWX/xva213.jpg"," https://i.ibb.co/71PZMtS/xva213.jpg","https://i.ibb.co/71PZMtS/xva213.jpg","https://i.ibb.co/0fhQG5j/xva213.jpg","",  "https://i.ibb.co/0fhQG5j/xva213.jpg","https://i.ibb.co/cJvBnYV/xva213.jpg","https://i.ibb.co/gRwGr61/xva213.jpg","https://i.ibb.co/jy0R3Ff/xva213.jpg","https://i.ibb.co/JCksQCK/xva213.jpg","https://i.ibb.co/Nt6QxnB/xva213.jpg","https://i.ibb.co/zrR0dVb/xva213.jpg","https://i.ibb.co/zrR0dVb/xva213.jpg","https://i.ibb.co/CQSnDhj/xva213.jpg","https://i.ibb.co/znJYxmy/xva213.jpg","https://i.ibb.co/zh6PcRd/xva213.jpg","https://i.ibb.co/SPyHDcN/xva213.jpg"]

let img = link[Math.floor(Math.random()*link.length)]
message.send({body: ' لو كان ɞ'+ userName +' ɞحيوان كنت لتكون ↪️ ', attachment: await global.utils.getStreamFromURL(img)
});
}
}

};
}
};