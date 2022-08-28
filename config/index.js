const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wxfebf67487fa90ad7",

  // 微信公众号的appsecret
  APP_SECRET: "d54e2e7423244c9457abcb79c5a016b4",

  // 微信公众号的模板ID
  TEMPLATE_ID: "HFqemskjZmFyAgAlUVuknm70wGP3GARUz_TtZVOBhsY",

  // 天行API的key
  TXApiKey: "7bc0a79ea6f18cfdf18f1ffacac47a11",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "小沐沐吖",
      // 用户列表的`微信号`
      userId: "os2d76Ib6JbNLg4S_VHsXl6YYAd4",
      // 星座
      star: "处女",
      // 生日 - 格式：08-22
      birthday: "01-28",
      // 城市 - 格式：支持省市县区
      city: "夏邑县",
    },
  ],

  // 计划旅游日 - 格式：2022-08-20
  tourism: "2022-08-30",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2022-05-20",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: true,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
