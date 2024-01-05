module.exports = {
  config: {
    name: "عرض",
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


  onStart: async function({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
    if (args[0] === 'شخصية') {
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
          const charUrl = characters[fi].url
          message.reply({
        body: 'اذا اعجبتك الشخصية العب لتجميع النقاط وشرائها 🙃',
        attachment: await global.utils.getStreamFromURL(charUrl)
      })
         

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
          const weaponUrl = weapons[fi].url
          message.reply({
        body: 'اذا اعجبك السلاح العب لتجميع النقاط وشرائه 🙃',
        attachment: await global.utils.getStreamFromURL(weaponUrl)
      })
         

    
    }

  }
};