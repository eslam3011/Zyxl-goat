module.exports = {
  config: {
    name: "شراء",
    version: "1.0",
    author: "Eslam",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "đây là mô tả ngắn của lệnh",
      en: "شراء من المتجر"
    },
    longDescription: {
      vi: "đây là mô tả dài của lệnh",
      en: "شراء من المتجر"
    },
    category: "categoryName",
    guide: {
      vi: "đây là hướng dẫn sử dụng của lệnh",
      en: "اكتب شراء ونوع المنتج واسم المنتج مثال شراء لقب الجوكر او شراء شخصية تانجيرو"
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


  onStart: async function({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
    if (args[0] === 'لقب') {
      const nicknames = [
        {
          name: 'اقــنعهۂ مستعـارهۂ',
          price: 13
		 },
        {
          name: 'الحزن عنواني',
          price: 145
		 }, {
          name: 'حب وخداع',
          price: 12
		 },
        {
          name: 'ملامح مزيفة',
          price: 508
		 }, {
          name: 'وهم وانكسار',
          price: 37
		 },
        {
          name: 'لحظة خداع',
          price: 91
		 }, {
          name: 'صرخة حرمان',
          price: 36
		 },
        {
          name: 'صرخة ألم',
          price: 47
		 }, {
          name: 'دموع حائرة',
          price: 39
		 },
        {
          name: 'هجرت الروح',
          price: 38
		 }, {
          name: 'حياتي هَلْاكي',
          price: 200
		 },
        {
          name: 'ملكة العذاب',
          price: 500
		 }, {
          name: 'أميرة في دنيا حقيرة',
          price: 100
		 },
        {
          name: 'سنابل مكسورة',
          price: 12
		 }, {
          name: 'صمتي لغتي',
          price: 80
		 },
        {
          name: 'مذكرات محزنة',
          price: 8
		 }, {
          name: 'حروف صامتة',
          price: 42
		 },
        {
          name: 'أسيرة الأحزان',
          price: 1
		 }, {
          name: 'زهرة العذاب',
          price: 69
		 },
        {
          name: 'فقيدة القلب',
          price: 75
		 }, {
          name: 'سفينة بلا شراع',
          price: 57
		 },
        {
          name: 'غيومي غطت عيوني',
          price: 66
		 }, {
          name: 'دموع القمر',
          price: 97
		 },
        {
          name: 'الحامي الاعظم',
          price: 400
		 }, {
          name: 'ملك الوحوش',
          price: 500
		 },
        {
          name: 'سيد العناصر',
          price: 180
		 }, {
          name: 'الهوكاغي',
          price: 126
		 },
        {
          name: 'عين الصقر',
          price: 190
		 }, {
          name: 'المهرج الغاضب',
          price: 40
		 },
        {
          name: 'العنقاء الجارحة',
          price: 80
		 }, {
          name: 'جراح الموت',
          price: 29
		 },
        {
          name: 'سيف الجحيم',
          price: 40
		 }, {
          name: 'ملك الظلام',
          price: 120
		 },
        {
          name: 'الذئب الفضي',
          price: 90
		 }, {
          name: 'الثعلب الناري',
          price: 110
		 },
        {
          name: 'الجوكر',
          price: 100
		 }, {
          name: 'حاكم المسارات',
          price: 70
		 }

		 ]
      const userData = await usersData.get(event.senderID)
      if (userData.data && userData.data.games && userData.data.games.points) {
        let pointsCount = userData.data.games.points
        const product = args.slice(1).join(' ')
        let fi = -1;
        for (let i = 0; i < nicknames.length; i++) {
          if (nicknames[i].name === product) {

            fi = i;
            break;
          }
        }
        if (fi === -1) {
          return message.reply('هذا اللقب غير موجود 😐')
        }
        if (nicknames[fi].price <= pointsCount) {
          await usersData.set(event.senderID, { name: nicknames[fi].name }, "data.store.nick");
          pointsCount -= nicknames[fi].price
          await usersData.set(event.senderID, { points: pointsCount }, "data.games");
          message.reply('تم شراء اللقب بنجاح')
        } else {
          message.reply('عدد نقاطك لا يكفي العب لتجميع النقاط')
        }

      } else {
        message.reply('انت ليس لديك اي نقاط العب احد الالعاب لكي تحصل على نقاط 🎮')
      }

    } else if (args[0] === 'شخصية') {

      const characters = [
        {
          name: 'اكازا',
          price: 675,
          url: 'https://i.imgur.com/2GTA8wJ.jpg'
  },
        {
          name: 'مايكي',
          price: 458,
          url: 'https://i.imgur.com/yrOA4PX.jpg'
  },
        {
          name: 'هيسوكا',
          price: 680,
          url: 'https://i.imgur.com/AW49dmR.jpg'
  },
        {
          name: 'بوروتو',
          price: 10,
          url: 'https://i.imgur.com/btTRyvl.jpg'
  },
        {
          name: 'باين',
          price: 800,
          url: 'https://i.imgur.com/vY6aA76.jpg'
  },
        {
          name: 'بروك',
          price: 750,
          url: 'https://i.imgur.com/wmfsGLZ.jpg'
  },
        {
          name: 'ناروتو',
          price: 980,
          url: 'https://i.imgur.com/YAE5JF4.jpg'
  },
        {
          name: 'سانجي',
          price: 200,
          url: 'https://i.imgur.com/Brnxk6E.jpg'
  },
        {
          name: 'يامي',
          price: 300,
          url: 'https://i.imgur.com/1kZuOxU.jpg'
  },
        {
          name: 'غوجو',
          price: 700,
          url: 'https://i.imgur.com/tGtDaEX.jpg'
  },
        {
          name: 'تانجيرو',
          price: 960,
          url: 'https://i.imgur.com/850RKt2.jpg'
  },
        {
          name: 'كيلوا',
          price: 670,
          url: 'https://i.imgur.com/OxrOSjK.jpg'
  },
        {
          name: 'زورو',
          price: 600,
          url: 'https://i.imgur.com/30D0CRV.jpg'
  },
        {
          name: 'لوفي',
          price: 506,
          url: 'https://i.imgur.com/pQeOe7j.jpg'
  },
        {
          name: 'ايتادوري',
          price: 409,
          url: 'https://i.imgur.com/oYNfczy.jpg'
  },
        {
          name: 'ايتاشي',
          price: 1000,
          url: ' https://i.imgur.com/U927mC2.jpg'
  },
        {
          name: 'كاكاشي',
          price: 400,
          url: ' https://i.imgur.com/XgXVbEt.jpg'
  },
        {
          name: 'غوكو',
          price: 900,
          url: 'https://i.imgur.com/6TEExj6.jpg'
  },
        {
          name: 'لاو',
          price: 169,
          url: 'https://i.imgur.com/WewJHcS.jpg'
  },
        {
          name: 'ايرين',
          price: 580,
          url: 'https://i.imgur.com/uBL8YdE.jpg'
  }
]
      const userData = await usersData.get(event.senderID)
      if (userData.data && userData.data.games && userData.data.games.points) {
        let pointsCount = userData.data.games.points
        const product = args.slice(1).join(' ')
        let fi = -1;
        for (let i = 0; i < characters.length; i++) {
          if (characters[i].name === product) {

            fi = i;
            break;
          }
        }
        if (fi === -1) {
          return message.reply('هذه الشخصية غير موجودة 😐')
        }
        if (characters[fi].price <= pointsCount) {
          await usersData.set(event.senderID, { name: characters[fi].name, url: characters[fi].url }, "data.store.char");
          pointsCount -= characters[fi].price
          await usersData.set(event.senderID, { points: pointsCount }, "data.games");
          message.reply('تم شراء الشخصية بنجاح')
        } else {
          message.reply('عدد نقاطك لا يكفي العب لتجميع النقاط')
        }

      } else {
        message.reply('انت ليس لديك اي نقاط العب احد الالعاب لكي تحصل على نقاط 🎮')
      }


    } else if (args[0] === 'سلاح') {


      const weapons = [

        {
          name: 'سيف الجحيم',
          price: 306,
          url: 'https://i.imgur.com/4fvRGSG.jpg'
  }, {
          name: 'سيف البوابة',
          price: 350,
          url: 'https://i.imgur.com/xexeauJ.jpg'
  }, {
          name: 'سيف الهدوء',
          price: 769,
          url: 'https://i.imgur.com/JjAjyyX.jpg'
  }, {
          name: 'سيف الدماء',
          price: 670,
          url: 'https://i.imgur.com/GgMZYRP.jpg'
  }, {
          name: 'سيف الظلام',
          price: 505,
          url: 'https://i.imgur.com/8G3cknj.jpg'
  }, {
          name: 'سيف الجحيم الاسود',
          price: 700,
          url: 'https://i.imgur.com/DirPZlM.jpg'
  }, {
          name: 'شوركن الملوك',
          price: 76,
          url: 'https://i.imgur.com/kCZK97C.jpg'
  }, {
          name: 'شوريكن الهدوء',
          price: 39,
          url: 'https://i.imgur.com/1EodM0o.jpg'
  }, {
          name: 'شوريكن الجحيم',
          price: 800,
          url: 'https://i.imgur.com/R4AdD9S.jpg'
  }, {
          name: 'منجل الظلام',
          price: 769,
          url: 'https://i.imgur.com/9sGYLsK.jpg'
  }, {
          name: 'منجل الهيكل',
          price: 500,
          url: 'https://i.imgur.com/u9uJdXJ.jpg'
  }, {
          name: 'منجل القاطع',
          price: 76,
          url: 'https://i.imgur.com/KE1uEwl.jpg'
  }, {
          name: 'منجل الغراب',
          price: 46,
          url: 'https://i.imgur.com/uv7H8gD.jpg'
  }, {
          name: 'منجل الهدوء',
          price: 69,
          url: 'https://i.imgur.com/SJsw5zT.jpg'
  }, {
          name: 'منجل الكره',
          price: 370,
          url: 'https://i.imgur.com/smmMHPZ.jpg'
  }, {
          name: 'منجل الملوك',
          price: 1000,
          url: 'https://i.imgur.com/kTQHF0v.jpg'
  }, {
          name: 'منجل المدمر',
          price: 700,
          url: 'https://i.imgur.com/KUskege.jpg'
  }, {
          name: 'منجل المتلاعب',
          price: 97,
          url: 'https://i.imgur.com/CXtSy14.jpg'
  }, {
          name: 'سيف الموت',
          price: 400,
          url: 'https://i.imgur.com/97YNDPT.jpg'
  }, {
          name: 'سيف المحبة',
          price: 300,
          url: 'https://i.imgur.com/brQgSKU.jpg'
  }, {
          name: 'سيف العين',
          price: 600,
          url: 'https://i.imgur.com/Al7R1uq.jpg'
  }, {
          name: 'سيف الهلاك',
          price: 698,
          url: 'https://i.imgur.com/tRSlwJ3.jpg'
  }, {
          name: 'سيف النصر',
          price: 588,
          url: 'https://i.imgur.com/8CIBJ89.jpg'
  },
]
      const userData = await usersData.get(event.senderID)
      if (userData.data && userData.data.games && userData.data.games.points) {
        let pointsCount = userData.data.games.points
        const product = args.slice(1).join(' ')
        let fi = -1;
        for (let i = 0; i < weapons.length; i++) {
          if (weapons[i].name === product) {

            fi = i;
            break;
          }
        }
        if (fi === -1) {
          return message.reply('هذا السلاح غير موجود 😐')
        }
        if (weapons[fi].price <= pointsCount) {
          await usersData.set(event.senderID, { name: weapons[fi].name, url: weapons[fi].url }, "data.store.weapons");
          pointsCount -= weapons[fi].price
          await usersData.set(event.senderID, { points: pointsCount }, "data.games");
          message.reply('تم شراء السلاح بنجاح')
        } else {
          message.reply('عدد نقاطك لا يكفي العب لتجميع النقاط')
        }

      } else {
        message.reply('انت ليس لديك اي نقاط العب احد الالعاب لكي تحصل على نقاط 🎮')
      }



    }

  }
};