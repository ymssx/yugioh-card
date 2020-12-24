import commonStyle from './common.js';

export default {
  moldName: "jp-notation",
  moldUrl: "./mold/",
  fonts: {
    "jp-notation": {
      name: "jp_notation.otf",
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
    copyright: {
      name: "copyright.ttf",
      type: "relative",
    },
  },
  style: Object.assign(JSON.parse(commonStyle), {
    fontMap: {
      name: "jp-notation",
      desc: "jp-notation",
      race: "jp-notation",
      attack: "number",
      link: "link",
      password: "password",
      type: "jp-notation",
      lbNum: "number",
      copyright: "copyright, 微软雅黑",
    },
    race: {
      font: "race",
      fontSize: 26,
      position: [64, 915],
      maxWidth: 610,
    },
    type: {
      font: "type",
      fontSize: 48,
      position: [738, 187],
      icon: [667, 147],
      iconSize: [46, 46],
    },
  }),
  translate: {
    attribute: {
      light: "光",
      dark: "闇",
      wind: "風",
      water: "水",
      fire: "炎",
      earth: "地",
      divine: "神",
    },
    type: {
      tc: "通常",
      xg: "效果",
      ys: "儀式",
      rh: "融合",
      tk: "衍生物",
      tt: "シンクロ",
      cl: "エクシーズ",
      lb: "ペンデュラム",
      lj: "リンク",
      ec: "デュアル",
      tz: "チューナー",
      tm: "ユニオン",
      lh: "スピリット",
      fz: "リバース",
      kt: "トゥーン",
      ts: "特殊召喚",
      zb: "装备",
      sg: "速攻",
      cd: "场地",
      fj: "反击",
      yx: "永续",
    },
    raceList: [
      "龍族",
      "戰士族",
      "惡魔族",
      "魔法師族",
      "天使族",
      "不死族",
      "岩石族",
      "植物族",
      "昆蟲族",
      "水族",
      "炎族",
      "雷族",
      "魚族",
      "海龍族",
      "幻龍族",
      "恐龍族",
      "爬蟲类族",
      "機械族",
      "獸族",
      "鳥獸族",
      "獸戰士族",
      "念動力族",
      "電子界族",
      "幻神獸族",
      "創造神族",
    ],
    spell: "魔法カード",
    trap: "罠カード",
    brackets: ["【", "】"],
  },
};
