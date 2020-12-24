// 简体中文模板

import commonStyle from './common.js';

export default {
  moldName: "cn-simplify",
  fonts: {
    "cn-simplify": {
      name: "cn_simplify.ttf",
      type: "relative",
    },
    number: {
      name: "number.ttf",
      type: "relative",
    },
    link: {
      name: "link.ttf",
      type: "relative",
    },
    password: {
      name: "password.ttf",
      type: "relative",
    },
  },
  style: Object.assign(JSON.parse(commonStyle), {
    fontMap: {
      name: "cn-simplify",
      desc: "cn-simplify",
      race: "cn-simplify",
      attack: "number",
      link: "link",
      password: "password",
      type: "cn-simplify",
      lbNum: "number",
      copyright: "password",
    },
    type: {
      font: "type",
      fontSize: 44,
      position: [753, 187],
      icon: [668, 147],
      iconSize: [46, 46],
    },
  }),
  translate: {
    attribute: {
      light: "光",
      dark: "暗",
      wind: "风",
      water: "水",
      fire: "炎",
      earth: "地",
      divine: "神",
    },
    type: {
      tc: "通常",
      xg: "效果",
      ys: "仪式",
      rh: "融合",
      tk: "衍生物",
      tt: "同调",
      cl: "超量",
      lb: "灵摆",
      lj: "连接",
      ec: "二重",
      tz: "调整",
      tm: "同盟",
      kt: "卡通",
      lh: "灵魂",
      fz: "反转",
      ts: "特殊召唤",
      zb: "装备",
      sg: "速攻",
      cd: "场地",
      fj: "反击",
      yx: "永续",
    },
    raceList: [
      "龙族",
      "战士族",
      "恶魔族",
      "魔法师族",
      "天使族",
      "不死族",
      "岩石族",
      "植物族",
      "昆虫族",
      "水族",
      "炎族",
      "雷族",
      "魚族",
      "海龙族",
      "幻龙族",
      "恐龙族",
      "爬虫类族",
      "机械族",
      "兽族",
      "鸟兽族",
      "兽战士族",
      "念动力族",
      "电子界族",
      "幻神兽族",
      "创造神族",
    ],
    spell: "魔法卡",
    trap: "陷阱卡",
    brackets: ["【", "】"],
  },
};
