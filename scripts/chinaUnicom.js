const _0x473183 = _0x3f1673("中国联通"),
  _0x111d70 = require("got"),
  _0x1c4152 = require("crypto-js"),
  {
    CookieJar: _0x103ffe
  } = require("tough-cookie"),
  _0x10cc17 = "chinaUnicom",
  _0x1f100a = ["\n", "&", "@"],
  _0x38e245 = [_0x10cc17 + "Cookie"],
  _0x48f157 = 50000,
  _0x2b866d = 3;
const _0x3afb60 = 1.12,
  _0x1612dd = "chinaUnicom",
  _0x437d5f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x1f6cac = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x1612dd + ".json",
  _0x56f9c7 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@10.0300}",
  _0x49391d = 5,
  _0x59125e = 13,
  _0x435828 = 1000,
  _0x1f4c96 = 3600000,
  _0x511e08 = 100,
  _0x2a54a1 = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x3047ab = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x233ff0 = "10000002",
  _0x2a484f = "7k1HcDL8RKvc",
  _0x2004f4 = "update!@#1234567",
  _0xd2903c = "16-Bytes--String",
  _0x51e2c0 = "225",
  _0x172ae7 = "225",
  _0x12d517 = "party",
  _0xbf394d = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x21d9da = "0123456789",
  _0x5192df = "qwertyuiopasdfghjklzxcvbnm",
  _0x31a2cd = process.env[_0x10cc17 + "Uuid"] || _0x473183.randomUuid(),
  _0x25479b = [9, 10, 11, 12, 13],
  _0x3aa919 = 1000,
  _0x4e3cbe = 5000,
  _0x2395cd = "1001000003",
  _0x3dfd7a = "100002",
  _0x2dc5b2 = "";
let _0x1045cc = ["mcGM6BOC2/XPOJnsZQYjNw==", "6"],
  _0x117e7f = [],
  _0x492f02 = 14,
  _0x4a0787 = [6640, 6641];
const _0xc55fa4 = 7;
function _0x547bed(_0x26deca, _0x2e14a0, _0x24a41b, _0x310a6b, _0x45d823, _0x103554) {
  return _0x1c4152[_0x26deca].encrypt(_0x1c4152.enc.Utf8.parse(_0x310a6b), _0x1c4152.enc.Utf8.parse(_0x45d823), {
    mode: _0x1c4152.mode[_0x2e14a0],
    padding: _0x1c4152.pad[_0x24a41b],
    iv: _0x1c4152.enc.Utf8.parse(_0x103554)
  }).ciphertext.toString(_0x1c4152.enc.Hex);
}
function _0x182347(_0x2ca5e7, _0x23f7b9, _0x61d007, _0x52e50f, _0x3a99ba, _0x3f8200) {
  return _0x1c4152[_0x2ca5e7].decrypt({
    ciphertext: _0x1c4152.enc.Hex.parse(_0x52e50f)
  }, _0x1c4152.enc.Utf8.parse(_0x3a99ba), {
    mode: _0x1c4152.mode[_0x23f7b9],
    padding: _0x1c4152.pad[_0x61d007],
    iv: _0x1c4152.enc.Utf8.parse(_0x3f8200)
  }).toString(_0x1c4152.enc.Utf8);
}
class _0x4be77f {
  constructor() {
    this.index = _0x473183.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x535a3e = {
      limit: 0
    };
    const _0x3c06fd = {
      Connection: "keep-alive"
    };
    const _0x1f9e1b = {
      retry: _0x535a3e,
      timeout: _0x48f157,
      followRedirect: false,
      headers: _0x3c06fd
    };
    this.got = _0x111d70.extend(_0x1f9e1b);
  }
  log(_0x53d442, _0x4c208e = {}) {
    var _0x47f4a9 = "",
      _0x2c239e = _0x473183.userCount.toString().length;
    if (this.index) {
      _0x47f4a9 += "账号[" + _0x473183.padStr(this.index, _0x2c239e) + "]";
    }
    if (this.name) {
      _0x47f4a9 += "[" + this.name + "]";
    }
    _0x473183.log(_0x47f4a9 + _0x53d442, _0x4c208e);
  }
  set_cookie(_0x3b3ec6, _0x1428f3, _0x329fe0, _0x22ae26, _0x2edd35 = {}) {
    this.cookieJar.setCookieSync(_0x3b3ec6 + "=" + _0x1428f3 + "; Domain=" + _0x329fe0 + ";", "" + _0x22ae26);
  }
  async request(_0x184746) {
    const _0x49e8c5 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x276ad9 = ["TimeoutError"];
    var _0x47cdf5 = null,
      _0x3898b8 = 0,
      _0x159bef = _0x184746.fn || _0x184746.url;
    _0x184746.method = _0x184746?.["method"]?.["toUpperCase"]() || "GET";
    let _0x4160b5;
    while (_0x3898b8 < _0x2b866d) {
      try {
        _0x3898b8++;
        _0x4160b5 = null;
        let _0x488039 = null,
          _0x2c7e26 = _0x184746?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x48f157,
          _0x452777 = false;
        await new Promise(async _0x181f2a => {
          setTimeout(() => {
            _0x452777 = true;
            _0x181f2a();
          }, _0x2c7e26);
          await this.got(_0x184746).then(_0x4a467c => {
            _0x47cdf5 = _0x4a467c;
          }, _0x292f21 => {
            _0x488039 = _0x292f21;
            _0x47cdf5 = _0x292f21.response;
            _0x4160b5 = _0x488039?.["code"];
          });
          _0x181f2a();
        });
        if (_0x452777) {
          this.log("[" + _0x159bef + "]请求超时(" + _0x2c7e26 / 1000 + "秒)，重试第" + _0x3898b8 + "次");
        } else {
          if (_0x276ad9.includes(_0x488039?.["name"])) {
            this.log("[" + _0x159bef + "]请求超时(" + _0x488039.code + ")，重试第" + _0x3898b8 + "次");
          } else {
            if (_0x49e8c5.includes(_0x488039?.["code"])) {
              this.log("[" + _0x159bef + "]请求错误(" + _0x488039.code + ")，重试第" + _0x3898b8 + "次");
            } else {
              let _0x536478 = _0x47cdf5?.["statusCode"] || 999,
                _0x1d9475 = _0x536478 / 100 | 0;
              if (_0x1d9475 > 3) {
                this.log("请求[" + _0x159bef + "]返回[" + _0x536478 + "]");
              }
              if (_0x1d9475 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x275a8c) {
        _0x275a8c.name == "TimeoutError" ? this.log("[" + _0x159bef + "]请求超时，重试第" + _0x3898b8 + "次") : this.log("[" + _0x159bef + "]请求错误(" + _0x275a8c.message + ")，重试第" + _0x3898b8 + "次");
      }
    }
    if (_0x47cdf5 == null) {
      return Promise.resolve({
        statusCode: _0x4160b5 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x3b8d91,
      headers: _0x3e1fdb,
      body: _0x4804b4
    } = _0x47cdf5;
    if (_0x4804b4) {
      try {
        _0x4804b4 = JSON.parse(_0x4804b4);
      } catch {}
    }
    const _0x2164e4 = {
      statusCode: _0x3b8d91,
      headers: _0x3e1fdb,
      result: _0x4804b4
    };
    return Promise.resolve(_0x2164e4);
  }
}
let _0x80845b = new _0x4be77f();
class _0x244555 extends _0x4be77f {
  constructor(_0x22a2e7) {
    super();
    this.cookieJar = new _0x103ffe();
    const _0x2fe5e0 = {
      "User-Agent": _0x56f9c7
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x2fe5e0
    });
    let _0x27b59d = _0x22a2e7.split("#");
    this.token_online = _0x27b59d[0];
    this.unicomTokenId = _0x473183.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x473183.randomString(32, _0x21d9da + _0x5192df).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.need_read_moonbox = false;
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x184fd4, _0xcb8301, _0x14a17b = {}) {
    let _0x4a8488 = _0x14a17b?.["domain"] || "10010.com",
      _0x3dd713 = _0x14a17b?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x184fd4, _0xcb8301, _0x4a8488, _0x3dd713, _0x14a17b);
  }
  get_bizchannelinfo() {
    const _0x425304 = {
      bizChannelCode: _0x172ae7,
      disriBiz: _0x12d517,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x5e8f2c = JSON.stringify(_0x425304);
    return _0x5e8f2c;
  }
  get_epay_authinfo() {
    const _0x3d4d1f = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x3d4d1f);
  }
  get_flmf_data(_0x2c6bc2 = "welfareCenter") {
    const _0x1bde23 = {
      sid: this.flmf_sid,
      actcode: _0x2c6bc2
    };
    return _0x1bde23;
  }
  encode_woread(_0x51ff44) {
    let _0x4d1926 = _0x547bed("AES", "CBC", "Pkcs7", JSON.stringify(_0x51ff44), _0x2004f4, _0xd2903c);
    return Buffer.from(_0x4d1926, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x473183.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_ltyp_sign_header(_0x4307b0) {
    let _0x3c8213 = Date.now(),
      _0x5008aa = Math.floor(89999 * Math.random()) + 100000,
      _0x225dfa = _0x3dfd7a,
      _0x2284be = _0x2dc5b2,
      _0x3b8e70 = _0x1c4152.MD5(_0x4307b0 + _0x3c8213 + _0x5008aa + _0x225dfa + _0x2284be).toString();
    const _0x14d978 = {
      key: _0x4307b0,
      resTime: _0x3c8213,
      reqSeq: _0x5008aa,
      channel: _0x225dfa,
      version: _0x2284be,
      sign: _0x3b8e70
    };
    return _0x14d978;
  }
  async onLine(_0x45ee81 = {}) {
    let _0x56a588 = false;
    try {
      let _0x5b497a = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x473183.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x2a54a1,
            version: "iphone_c@10.0300",
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x2e17f8,
          statusCode: _0x496dc8
        } = await this.request(_0x5b497a),
        _0x335619 = _0x473183.get(_0x2e17f8, "code", _0x496dc8);
      _0x335619 == 0 ? (_0x56a588 = true, this.valid = true, this.mobile = _0x2e17f8?.["desmobile"], 
      // this.name = _0x2e17f8?.["desmobile"],
       this.ecs_token = _0x2e17f8?.["ecs_token"], this.city = _0x2e17f8?.["list"], this.log("登录成功")) : (this.valid = false, this.log("登录失败[" + _0x335619 + "]"));
    } catch (_0x21c451) {
      console.log(_0x21c451);
    } finally {
      return _0x56a588;
    }
  }
  async openPlatLineNew(_0x67f0b1, _0x440bac = {}) {
    const _0x3127c8 = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x1efe85 = _0x3127c8;
    try {
      const _0x315e18 = {
        to_url: _0x67f0b1
      };
      const _0x3ab58c = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x315e18
      };
      let {
        headers: _0x2e53d2,
        statusCode: _0xc9bef3
      } = await this.request(_0x3ab58c);
      if (_0x2e53d2?.["location"]) {
        let _0x5c1c17 = new URL(_0x2e53d2.location),
          _0x320ed1 = _0x5c1c17.searchParams.get("type") || "02",
          _0x301b80 = _0x5c1c17.searchParams.get("ticket");
        !_0x301b80 && this.log("获取ticket失败");
        const _0x39e557 = {
          loc: _0x2e53d2.location,
          ticket: _0x301b80,
          type: _0x320ed1
        };
        _0x1efe85 = _0x39e557;
      } else {
        this.log("获取ticket失败[" + _0xc9bef3 + "]");
      }
    } catch (_0x1ad196) {
      console.log(_0x1ad196);
    } finally {
      return _0x1efe85;
    }
  }
  async gettaskip(_0x1baaf4 = {}) {
    let _0x57b465 = _0x473183.randomString(32).toUpperCase();
    try {
      const _0x303fb1 = {
        mobile: this.mobile,
        orderId: _0x57b465
      };
      const _0x486fb5 = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x303fb1
      };
      await this.request(_0x486fb5);
    } catch (_0x1e4941) {
      console.log(_0x1e4941);
    } finally {
      return _0x57b465;
    }
  }
  async draw_28_queryChance(_0x15f789 = {}) {
    try {
      const _0x359cb5 = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x24b1ef,
          statusCode: _0x135e0f
        } = await this.request(_0x359cb5),
        _0x28a35e = _0x473183.get(_0x24b1ef, "status", _0x135e0f);
      if (_0x28a35e == "0000") {
        let _0x3e7df0 = parseInt(_0x24b1ef?.["data"]?.["allRemainTimes"] || 0);
        this.log("28日五折日可以抽奖" + _0x3e7df0 + "次");
        let _0x9fdaae = false;
        while (_0x3e7df0-- > 0) {
          if (_0x9fdaae) {
            await _0x473183.wait(8000);
          }
          _0x9fdaae = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x5f0ad2 = _0x24b1ef?.["message"] || _0x24b1ef?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x28a35e + "]: " + _0x5f0ad2);
      }
    } catch (_0x217f30) {
      console.log(_0x217f30);
    }
  }
  async draw_28_lottery(_0x25736c = {}) {
    try {
      const _0x5d901b = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x1f0a5b,
          statusCode: _0x5b78eb
        } = await this.request(_0x5d901b),
        _0x5a45fe = _0x473183.get(_0x1f0a5b, "status", _0x5b78eb);
      if (_0x5a45fe == "0000") {
        let _0x2e5ced = _0x473183.get(_0x1f0a5b?.["data"], "code", -1);
        if (_0x1f0a5b?.["data"]?.["uuid"]) {
          await _0x473183.wait(2000);
          await this.draw_28_winningRecord(_0x1f0a5b.data.uuid);
        } else {
          let _0x5ee980 = _0x1f0a5b?.["data"]?.["message"] || _0x1f0a5b?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x2e5ced + "]: " + _0x5ee980);
        }
      } else {
        let _0xe7ef8a = _0x1f0a5b?.["message"] || _0x1f0a5b?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x5a45fe + "]: " + _0xe7ef8a);
      }
    } catch (_0x3d3493) {
      console.log(_0x3d3493);
    }
  }
  async draw_28_winningRecord(_0x2577a1, _0x58824c = {}) {
    try {
      const _0x40e81f = {
        requestId: _0x2577a1
      };
      const _0x2305c2 = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x40e81f
      };
      let {
          result: _0x40da5d,
          statusCode: _0x1008da
        } = await this.request(_0x2305c2),
        _0xfcf083 = _0x473183.get(_0x40da5d, "status", _0x1008da);
      if (_0xfcf083 == "0000") {
        let _0x167901 = _0x473183.get(_0x40da5d?.["data"], "code", -1);
        if (_0x167901 == "0000") {
          const _0x5eff2f = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x40da5d?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x5eff2f);
        } else {
          let _0x217601 = _0x40da5d?.["data"]?.["message"] || _0x40da5d?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x167901 + "]: " + _0x217601);
        }
      } else {
        let _0x4a4611 = _0x40da5d?.["message"] || _0x40da5d?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0xfcf083 + "]: " + _0x4a4611);
      }
    } catch (_0x4c9df8) {
      console.log(_0x4c9df8);
    }
  }
  async ttlxj_authorize(_0x55ea7a, _0x516954, _0x230c53, _0x5e3a33 = {}) {
    try {
      let _0xfe1fad = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x230c53
          },
          json: {
            response_type: "rptid",
            client_id: _0x3047ab,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x55ea7a,
              st_type: _0x516954,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x473183.randomString(13),
              trace_id: _0x473183.randomString(32)
            }
          }
        },
        {
          result: _0x11cc57
        } = await this.request(_0xfe1fad),
        _0x691e29 = _0x473183.get(_0x11cc57, "status", -1);
      if (_0x691e29 == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x3cac97 = _0x11cc57?.["message"] || _0x11cc57?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x691e29 + "]: " + _0x3cac97);
      }
    } catch (_0x56b119) {
      console.log(_0x56b119);
    }
  }
  async ttlxj_authCheck(_0x2913da = {}) {
    try {
      let _0x1f4911 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x490b24
        } = await this.request(_0x1f4911),
        _0x24b67d = _0x473183.get(_0x490b24, "code", -1);
      if (_0x24b67d == "0000") {
        let {
          mobile: _0x24d385,
          sessionId: _0x27c8bc,
          tokenId: _0x1e4cca,
          userId: _0x439c22
        } = _0x490b24?.["data"]?.["authInfo"];
        const _0x43bfcd = {
          sessionId: _0x27c8bc,
          tokenId: _0x1e4cca,
          userId: _0x439c22
        };
        Object.assign(this, _0x43bfcd);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x24b67d == "2101000100") {
          let _0x357a02 = _0x490b24?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x357a02);
        } else {
          let _0x4ca1ab = _0x490b24?.["msgInside"] || _0x490b24?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x24b67d + "]: " + _0x4ca1ab);
        }
      }
    } catch (_0x8bbe87) {
      console.log(_0x8bbe87);
    }
  }
  async ttlxj_login(_0x1cd643, _0x172994 = {}) {
    try {
      _0x1cd643 += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x51e2c0 + "&bizChannelCode=" + _0x172ae7;
      const _0x34959d = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x1cd643
      };
      let {
        headers: _0x4b838d,
        statusCode: _0x4b98ee
      } = await this.request(_0x34959d);
      if (_0x4b838d?.["location"]) {
        let _0x39ff77 = new URL(_0x4b838d.location);
        this.rptId = _0x39ff77.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x4b98ee + "]");
      }
    } catch (_0x58f0f6) {
      console.log(_0x58f0f6);
    }
  }
  async ttlxj_userDrawInfo(_0x50e280 = {}) {
    try {
      let _0x50768d = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x1c7f1e
        } = await this.request(_0x50768d),
        _0x39664a = _0x473183.get(_0x1c7f1e, "code", -1);
      if (_0x39664a == "0000") {
        let _0x3335bc = _0x1c7f1e?.["data"]?.["dayOfWeek"],
          _0x1dfc9b = "day" + _0x3335bc,
          _0x3f0314 = _0x1c7f1e?.["data"]?.[_0x1dfc9b] == "1";
        const _0x3ad3b2 = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x3f0314 ? "未" : "已") + "打卡", _0x3ad3b2);
        if (_0x3f0314) {
          let _0x164ef6 = new Date().getDay();
          _0x164ef6 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x17b9ee = _0x1c7f1e?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x39664a + "]: " + _0x17b9ee);
      }
    } catch (_0x42ac70) {
      console.log(_0x42ac70);
    }
  }
  async ttlxj_unifyDrawNew(_0x1fc27b, _0x37bed1 = {}) {
    try {
      let _0x2b20a1 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            drawType: _0x1fc27b,
            bizFrom: _0x51e2c0,
            activityId: "TTLXJ20210330"
          }
        },
        {
          result: _0x56e1bc
        } = await this.request(_0x2b20a1),
        _0x6098a1 = _0x473183.get(_0x56e1bc, "code", -1);
      if (_0x6098a1 == "0000" && _0x56e1bc?.["data"]?.["returnCode"] == 0) {
        let _0x24a104 = _0x56e1bc?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x56e1bc?.["data"]?.["amount"]);
        const _0x34f51a = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x24a104, _0x34f51a);
      } else {
        let _0x1c1864 = _0x56e1bc?.["data"]?.["returnMsg"] || _0x56e1bc?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x56e1bc?.["data"]?.["returnCode"] || _0x6098a1) + "]: " + _0x1c1864);
      }
    } catch (_0x20765d) {
      console.log(_0x20765d);
    }
  }
  async ttlxj_h(_0x2559c0 = {}) {
    try {
      let _0x2925fa = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x51e2c0,
          activityId: "TTLXJ20210330",
          uid: _0xbf394d
        }
      };
      await this.request(_0x2925fa);
    } catch (_0x4556ba) {
      console.log(_0x4556ba);
    }
  }
  async ttlxj_queryAvailable(_0x78373f = {}) {
    try {
      let _0x2842f3 = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x284680
        } = await this.request(_0x2842f3),
        _0x44ea94 = _0x473183.get(_0x284680, "code", -1);
      if (_0x44ea94 == "0000" && _0x284680?.["data"]?.["returnCode"] == 0) {
        let _0x2676c4 = _0x284680?.["data"]?.["availableAmount"] || 0;
        const _0x1e0008 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x2676c4 / 100).toFixed(2) + "元", _0x1e0008);
        let _0x228f4c = [],
          _0x1f47b8 = Date.now();
        for (let _0x49b591 of _0x284680?.["data"]?.["prizeList"]?.["filter"](_0x54a72b => _0x54a72b.status == "A")) {
          let _0x243947 = _0x49b591.endTime,
            _0x460771 = new Date(_0x243947.slice(0, 4) + "-" + _0x243947.slice(4, 6) + "-" + _0x243947.slice(6, 8) + " 00:00:00"),
            _0x3df0f3 = _0x460771.getTime();
          if (_0x3df0f3 - _0x1f47b8 < _0xc55fa4 * 24 * 60 * 60 * 1000) {
            let _0x1fdf83 = _0x473183.time("yyyy-MM-dd", _0x3df0f3);
            const _0x26c54f = {
              timestamp: _0x3df0f3,
              date: _0x1fdf83,
              amount: _0x49b591.amount
            };
            _0x228f4c.push(_0x26c54f);
          }
        }
        if (_0x228f4c.length) {
          const _0xb748fa = {
            timestamp: 0
          };
          let _0x48c13b = _0xb748fa,
            _0x5e5d52 = _0x228f4c.reduce(function (_0x4a4917, _0x106280) {
              (_0x48c13b.timestamp == 0 || _0x106280.timestamp < _0x48c13b.timestamp) && (_0x48c13b = _0x106280);
              return _0x4a4917 + parseFloat(_0x106280.amount);
            }, 0);
          const _0x5eab1e = {
            notify: true
          };
          this.log(_0xc55fa4 + "天内过期立减金: " + _0x5e5d52.toFixed(2) + "元", _0x5eab1e);
          const _0x8af6e3 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x48c13b.amount + "元 -- " + _0x48c13b.date + "过期", _0x8af6e3);
        } else {
          const _0x4b15d3 = {
            notify: true
          };
          this.log(_0xc55fa4 + "天内没有过期的立减金", _0x4b15d3);
        }
      } else {
        let _0x2cf42b = _0x284680?.["data"]?.["returnMsg"] || _0x284680?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x284680?.["data"]?.["returnCode"] || _0x44ea94) + "]: " + _0x2cf42b);
      }
    } catch (_0x55f813) {
      console.log(_0x55f813);
    }
  }
  async epay_28_authCheck(_0xdc0df2 = {}) {
    try {
      let _0x5b5fc9 = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x470146
        } = await this.request(_0x5b5fc9),
        _0x3b0050 = _0x473183.get(_0x470146, "code", -1);
      if (_0x3b0050 == "0000") {
        let {
          mobile: _0x2a75c4,
          sessionId: _0x50fb6a,
          tokenId: _0x13810e,
          userId: _0x4e66fa
        } = _0x470146?.["data"]?.["authInfo"];
        const _0x469ea2 = {
          sessionId: _0x50fb6a,
          tokenId: _0x13810e,
          userId: _0x4e66fa
        };
        Object.assign(this, _0x469ea2);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x3b0050 == "2101000100") {
          let _0x110e5d = _0x470146?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x110e5d);
        } else {
          let _0xd0310e = _0x470146?.["msgInside"] || _0x470146?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x3b0050 + "]: " + _0xd0310e);
        }
      }
    } catch (_0x2c027a) {
      console.log(_0x2c027a);
    }
  }
  async epay_28_login(_0x42eb49, _0x595864 = {}) {
    try {
      let _0x121fc0 = _0x473183.time("yyyyMM") + "28ZFR";
      _0x42eb49 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x121fc0 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x440cbd = {
        fn: "epay_28_login",
        method: "get",
        url: _0x42eb49
      };
      let {
        headers: _0x163e72,
        statusCode: _0x37479f
      } = await this.request(_0x440cbd);
      if (_0x163e72?.["location"]) {
        let _0x280565 = new URL(_0x163e72.location);
        this.rptId = _0x280565.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x37479f + "]");
      }
    } catch (_0x582287) {
      console.log(_0x582287);
    }
  }
  async epay_28_queryUserPage(_0x58351b = {}) {
    try {
      let _0xaad73c = _0x473183.time("yyyyMM") + "28ZFR";
      const _0x1cb6f6 = {
        templateName: _0xaad73c
      };
      let _0x25e434 = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x1cb6f6
        },
        {
          result: _0x59f570
        } = await this.request(_0x25e434),
        _0x2119db = _0x473183.get(_0x59f570, "code", -1);
      if (_0x2119db == "0000" && _0x59f570?.["data"]?.["returnCode"] == 0) {
        for (let _0x4a9f1d of _0x59f570?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          _0x4a9f1d?.["rainbowUnitInfos"]?.[0]?.["unitActivityId"] && (await this.epay_28_unifyDraw(_0x4a9f1d.rainbowUnitInfos[0]));
          if (_0x4a9f1d?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0xaad73c, _0x4a9f1d.mouldName);
            break;
          }
        }
      } else {
        let _0x155a34 = _0x59f570?.["message"] || _0x59f570?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x2119db + "]: " + _0x155a34);
      }
    } catch (_0x4635e0) {
      console.log(_0x4635e0);
    }
  }
  async epay_28_queryMiddleUnit(_0x4cf8cf, _0x4417be, _0x305976 = {}) {
    try {
      const _0xb8eb13 = {
        activityId: _0x4cf8cf,
        mouldName: _0x4417be
      };
      let _0x529dac = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0xb8eb13
        },
        {
          result: _0x48522a
        } = await this.request(_0x529dac),
        _0x1012dc = _0x473183.get(_0x48522a, "code", -1);
      if (_0x1012dc == "0000") {
        let _0x3622c7 = _0x473183.time("dd");
        _0x48522a?.["data"]?.[_0x3622c7] == "1" ? this.log("联通支付日今日(" + _0x3622c7 + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x4cf8cf, _0x4417be);
      } else {
        let _0x96067 = _0x48522a?.["message"] || _0x48522a?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x1012dc + "]: " + _0x96067);
      }
    } catch (_0x1b5cdf) {
      console.log(_0x1b5cdf);
    }
  }
  async epay_28_unifyDrawNew(_0x47ded6, _0xb05255, _0x464ae4 = {}) {
    try {
      const _0x21a05b = {
        bizFrom: _0x51e2c0,
        activityId: _0x47ded6,
        mouldName: _0xb05255
      };
      let _0x22fb83 = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x21a05b
        },
        {
          result: _0x4fdaf3
        } = await this.request(_0x22fb83),
        _0x53355e = _0x473183.get(_0x4fdaf3, "code", -1);
      if (_0x53355e == "0000" && _0x4fdaf3?.["data"]?.["returnCode"] == 0) {
        let _0x25a439 = _0x4fdaf3?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x4fdaf3?.["data"]?.["amount"]);
        const _0x4d8605 = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x25a439, _0x4d8605);
      } else {
        let _0x149223 = _0x4fdaf3?.["data"]?.["returnMsg"] || _0x4fdaf3?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x4fdaf3?.["data"]?.["returnCode"] || _0x53355e) + "]: " + _0x149223);
      }
    } catch (_0x1d470d) {
      console.log(_0x1d470d);
    }
  }
  async epay_28_unifyDraw(_0x7cea21, _0xda8b95 = {}) {
    try {
      const _0x5afe03 = {
        activityId: _0x7cea21.unitActivityId,
        isBigActivity: _0x7cea21.isBigActivity,
        bigActivityId: _0x7cea21.bigActivityId,
        bizFrom: _0x51e2c0
      };
      let _0x1c5f2b = {
          fn: "epay_28_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x5afe03
        },
        {
          result: _0x405ad5
        } = await this.request(_0x1c5f2b),
        _0x59460d = _0x473183.get(_0x405ad5, "code", -1);
      if (_0x59460d == "0000" && _0x405ad5?.["data"]?.["returnCode"] == 0) {
        const _0x47270d = {
          notify: true
        };
        this.log("联通支付日抽奖: " + (_0x405ad5?.["data"]?.["prizeName"] || ""), _0x47270d);
      } else {
        let _0x5d38d5 = _0x405ad5?.["data"]?.["returnMsg"] || _0x405ad5?.["msg"] || "";
        this.log("联通支付日抽奖失败[" + (_0x405ad5?.["data"]?.["returnCode"] || _0x59460d) + "]: " + _0x5d38d5);
      }
    } catch (_0x2e621c) {
      console.log(_0x2e621c);
    }
  }
  async appMonth_28_bind(_0x25f272, _0x105a55 = {}) {
    try {
      const _0x3ec4e0 = {
        fn: "appMonth_28_bind",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/bind",
        form: {}
      };
      _0x3ec4e0.form.shareCode = _0x25f272;
      _0x3ec4e0.form.cl = "WeChat";
      let {
        result: _0x41a8fd
      } = await this.request(_0x3ec4e0);
    } catch (_0x335e2d) {
      console.log(_0x335e2d);
    }
  }
  async appMonth_28_queryChance(_0x417ebc = {}) {
    try {
      const _0x2e59af = {
        fn: "appMonth_28_queryChance",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x3da070
        } = await this.request(_0x2e59af),
        _0x5c5561 = _0x473183.get(_0x3da070, "status", -1);
      if (_0x5c5561 == "0000") {
        let {
          allRemainTimes: _0x6f226f,
          isUnicom: _0x58acc0
        } = _0x3da070?.["data"];
        if (_0x58acc0) {
          this.log("联通支付日可以开宝箱" + _0x6f226f + "次");
          while (_0x6f226f-- > 0) {
            await this.appMonth_28_lottery();
          }
        }
      } else {
        let _0x3f07cd = _0x3da070?.["msg"] || "";
        this.log("联通支付日查询开宝箱次数失败[" + _0x5c5561 + "]: " + _0x3f07cd);
      }
    } catch (_0x6f6fb) {
      console.log(_0x6f6fb);
    }
  }
  async appMonth_28_lottery(_0x3f6b18 = {}) {
    try {
      const _0x3aa28b = {
        fn: "appMonth_28_lottery",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x2890ca
        } = await this.request(_0x3aa28b),
        _0x1a8128 = _0x473183.get(_0x2890ca, "status", -1);
      if (_0x1a8128 == "0000") {
        let {
          code: _0x1cbdbb,
          uuid: _0x3084f8
        } = _0x2890ca?.["data"];
        _0x3084f8 ? await this.appMonth_28_winningRecord(_0x3084f8) : this.log("联通支付日开宝箱失败[" + _0x1cbdbb + "]");
      } else {
        let _0x2d254b = _0x2890ca?.["msg"] || "";
        this.log("联通支付日开宝箱失败[" + _0x1a8128 + "]: " + _0x2d254b);
      }
    } catch (_0x340381) {
      console.log(_0x340381);
    }
  }
  async appMonth_28_winningRecord(_0x3e4c9f, _0x44aa2c = {}) {
    try {
      const _0x5acd61 = {
        requestId: _0x3e4c9f
      };
      const _0x3931f6 = {
        fn: "appMonth_28_winningRecord",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x5acd61
      };
      let {
          result: _0x504578
        } = await this.request(_0x3931f6),
        _0x8e4c55 = _0x473183.get(_0x504578, "status", -1);
      if (_0x8e4c55 == "0000") {
        let {
          code: _0xd9d29f,
          prizeName: _0x1f21dc
        } = _0x504578?.["data"];
        if (_0xd9d29f == "0000") {
          const _0xaeda27 = {
            notify: true
          };
          this.log("联通支付日开宝箱: " + _0x1f21dc, _0xaeda27);
        } else {
          let _0x792556 = _0x504578?.["data"]?.["message"] || "";
          this.log("联通支付日查询中奖奖品失败[" + _0xd9d29f + "]: " + _0x792556);
        }
      } else {
        let _0x43fd90 = _0x504578?.["msg"] || "";
        this.log("联通支付日查询中奖奖品错误[" + _0x8e4c55 + "]: " + _0x43fd90);
      }
    } catch (_0x3b5d9b) {
      console.log(_0x3b5d9b);
    }
  }
  async sign_getContinuous(_0x55bda7 = {}) {
    try {
      const _0x2b7e77 = {
        taskId: "",
        channel: ""
      };
      const _0x2f8b28 = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x2b7e77
      };
      let {
          result: _0x154371
        } = await this.request(_0x2f8b28),
        _0x10763c = _0x473183.get(_0x154371, "status", -1);
      if (_0x10763c == "0000") {
        let _0x24a679 = _0x154371?.["data"]?.["todaySigned"] || 0;
        const _0x4ad109 = {
          notify: true
        };
        this.log("签到区今天" + (_0x24a679 == "1" ? "未" : "已") + "签到", _0x4ad109);
        if (_0x24a679 == "1") {
          await this.sign_daySign();
        }
      } else {
        let _0x1b7f5f = _0x154371?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x10763c + "]: " + _0x1b7f5f);
      }
    } catch (_0x5a4e08) {
      console.log(_0x5a4e08);
    }
  }
  async sign_daySign(_0x3b5e0b = {}) {
    try {
      const _0x581a94 = {
        shareCl: "",
        shareCode: ""
      };
      const _0x5b5d54 = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x581a94
      };
      let {
          result: _0x11162f
        } = await this.request(_0x5b5d54),
        _0x107bf0 = _0x473183.get(_0x11162f, "status", -1);
      if (_0x107bf0 == "0000") {
        const _0x9ce43a = {
          notify: true
        };
        this.log("签到区签到成功: " + _0x11162f?.["data"]?.["signMessage"], _0x9ce43a);
      } else {
        let _0xd2a710 = _0x11162f?.["msg"] || "";
        this.log("签到区签到失败[" + _0x107bf0 + "]: " + _0xd2a710);
      }
    } catch (_0x515203) {
      console.log(_0x515203);
    }
  }
  async sign_queryBubbleTask(_0x283b41 = {}) {
    try {
      const _0x57c5d4 = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x46c51c
        } = await this.request(_0x57c5d4),
        _0x3d6001 = _0x473183.get(_0x46c51c, "status", -1);
      if (_0x3d6001 == "0000") {
        for (let _0x3c2d40 of _0x46c51c?.["data"]?.["paramsList"]?.["filter"](_0x2fdbb8 => _0x2fdbb8.taskState == 1)) {
          let _0x4fcce2 = await this.gettaskip();
          await this.sign_doTask(_0x3c2d40, _0x4fcce2);
        }
      } else {
        let _0x1d3847 = _0x46c51c?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x3d6001 + "]: " + _0x1d3847);
      }
    } catch (_0x55026b) {
      console.log(_0x55026b);
    }
  }
  async sign_doTask(_0x3e84d4, _0x1b7dac, _0x4e32d4 = {}) {
    try {
      const _0x359a63 = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: {}
      };
      _0x359a63.form.id = _0x3e84d4.id;
      _0x359a63.form.orderId = _0x1b7dac;
      _0x359a63.form.imei = "BB97982E-3F03-46D3-B904-819D626DF478";
      _0x359a63.form.prizeType = _0x3e84d4.rewardType;
      _0x359a63.form.positionFlag = 0;
      let {
          result: _0x84aeb4
        } = await this.request(_0x359a63),
        _0x29cffa = _0x473183.get(_0x84aeb4, "status", -1);
      if (_0x29cffa == "0000") {
        this.log("完成任务[" + _0x3e84d4.actName + "]获得: " + _0x84aeb4?.["data"]?.["prizeCount"] + _0x84aeb4?.["data"]?.["prizeName"]);
      } else {
        let _0x5a08a9 = _0x84aeb4?.["msg"] || "";
        this.log("完成任务[" + _0x3e84d4.actName + "]失败[" + _0x29cffa + "]: " + _0x5a08a9);
      }
    } catch (_0x37bb43) {
      console.log(_0x37bb43);
    }
  }
  async game_login(_0x293430, _0x3c9a97 = {}) {
    try {
      const _0x3ddc1a = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: {},
        json: {}
      };
      _0x3ddc1a.headers.channelid = "GAMELTAPP_90005";
      _0x3ddc1a.json.identityType = "esToken";
      _0x3ddc1a.json.code = this.ecs_token;
      _0x3ddc1a.json.ticket = _0x293430;
      _0x3ddc1a.json.uuid = _0x31a2cd;
      let {
          result: _0x169407
        } = await this.request(_0x3ddc1a),
        _0x5369c5 = _0x473183.get(_0x169407, "code", -1);
      if (_0x5369c5 == 200) {
        this.game_token = _0x169407?.["data"]?.["access_token"];
        this.got = this.got.extend({
          headers: {
            Authorization: this.game_token
          }
        });
        await this.game_getMemberInfo();
        await this.game_signRecord();
        await this.game_lottery();
        await this.game_playSave();
        await this.game_taskList();
        await this.game_getMemberInfo();
        const _0x53aa13 = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x53aa13);
      } else {
        let _0x3130f5 = _0x169407?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0x5369c5 + "]: " + _0x3130f5);
      }
    } catch (_0x26f977) {
      console.log(_0x26f977);
    }
  }
  async game_getMemberInfo(_0x3d0ef7 = {}) {
    try {
      const _0x5998f9 = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x20ff21
        } = await this.request(_0x5998f9),
        _0x3cff36 = _0x473183.get(_0x20ff21, "code", -1);
      if (_0x3cff36 == 200) {
        this.point = _0x20ff21?.["data"]?.["userIntegral"];
      } else {
        let _0x1baa35 = _0x20ff21?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x3cff36 + "]: " + _0x1baa35);
      }
    } catch (_0x2d10ec) {
      console.log(_0x2d10ec);
    }
  }
  async game_signRecord(_0x1a0467 = {}) {
    try {
      const _0x529c5d = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x4af41b
        } = await this.request(_0x529c5d),
        _0x3af6aa = _0x473183.get(_0x4af41b, "code", -1);
      if (_0x3af6aa == 200) {
        for (let _0x5e63c1 of _0x4af41b?.["data"]) {
          if (_0x5e63c1.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x5e63c1.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x5e63c1.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x5711a8 = _0x4af41b?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x3af6aa + "]: " + _0x5711a8);
      }
    } catch (_0x29dfab) {
      console.log(_0x29dfab);
    }
  }
  async game_signIn(_0x1a6e44 = {}) {
    try {
      const _0x591af4 = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x220eca
        } = await this.request(_0x591af4),
        _0x4ce812 = _0x473183.get(_0x220eca, "code", -1);
      if (_0x4ce812 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x58eeb7 = _0x220eca?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x4ce812 + "]: " + _0x58eeb7);
      }
    } catch (_0x310ecf) {
      console.log(_0x310ecf);
    }
  }
  async game_checkSlider(_0x55756e = {}) {
    let _0x5054fa = false;
    try {
      const _0xebb9ec = {
        xPos: 234
      };
      const _0x3f8925 = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0xebb9ec
      };
      let {
          result: _0x3206b1
        } = await this.request(_0x3f8925),
        _0x5d7407 = _0x473183.get(_0x3206b1, "code", -1);
      if (_0x5d7407 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x270254 = _0x3206b1?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x5d7407 + "]: " + _0x270254);
      }
    } catch (_0x5b67c) {
      console.log(_0x5b67c);
    } finally {
      return _0x5054fa;
    }
  }
  async game_lottery(_0x355efd = {}) {
    try {
      let _0x139c8a = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x473183.get(_0x355efd, "id", 1)
          }
        },
        {
          result: _0x3ac305
        } = await this.request(_0x139c8a),
        _0xb56abd = _0x473183.get(_0x3ac305, "code", -1);
      if (_0xb56abd == 200) {
        const _0x3b874f = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x3ac305?.["data"]?.["productName"], _0x3b874f);
      } else {
        let _0x48194d = _0x3ac305?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0xb56abd + "]: " + _0x48194d);
      }
    } catch (_0x178bbf) {
      console.log(_0x178bbf);
    }
  }
  async game_taskList(_0x32b306 = {}) {
    try {
      const _0x437409 = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0xa5a390
        } = await this.request(_0x437409),
        _0x8481c6 = _0x473183.get(_0xa5a390, "code", -1);
      if (_0x8481c6 == 200) {
        for (let _0x165d5e of _0xa5a390?.["data"]) {
          switch (_0x165d5e.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x165d5e);
              break;
            case 2:
              break;
            default:
              _0x473183.log("任务[" + _0x165d5e.taskName + "]未知状态[" + _0x165d5e.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x2ea113 = _0xa5a390?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x8481c6 + "]: " + _0x2ea113);
      }
    } catch (_0x3bfe05) {
      console.log(_0x3bfe05);
    }
  }
  async game_taskReceive(_0x30b094, _0x1892e9 = {}) {
    try {
      const _0x3bc90f = {
        productId: _0x30b094.productId,
        taskId: _0x30b094.id
      };
      const _0x15ccfe = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x3bc90f
      };
      let {
          result: _0x5c9915
        } = await this.request(_0x15ccfe),
        _0x583663 = _0x473183.get(_0x5c9915, "code", -1);
      if (_0x583663 == 200) {
        this.log("领取任务[" + _0x30b094.taskName + "]奖励成功");
      } else {
        let _0x4e610d = _0x5c9915?.["msg"] || "";
        this.log("领取任务[" + _0x30b094.taskName + "]奖励失败[" + _0x583663 + "]: " + _0x4e610d);
      }
    } catch (_0x317db3) {
      console.log(_0x317db3);
    }
  }
  async game_playSave(_0x43fc06 = {}) {
    try {
      let _0x1401b6 = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x473183.randomString(2, "0123456789")
          }
        },
        {
          result: _0x504c22
        } = await this.request(_0x1401b6),
        _0x1f113e = _0x473183.get(_0x504c22, "code", -1);
      if (!(_0x1f113e == 200)) {
        let _0x383659 = _0x504c22?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x1f113e + "]: " + _0x383659);
      }
    } catch (_0x3784bd) {
      console.log(_0x3784bd);
    }
  }
  async flmf_login(_0x539c0e, _0xf59850 = {}) {
    try {
      const _0x125ee5 = {
        fn: "flmf_login",
        method: "get",
        url: _0x539c0e
      };
      let {
        headers: _0x1da6c1,
        statusCode: _0x341cad
      } = await this.request(_0x125ee5);
      if (_0x1da6c1?.["location"]) {
        let _0x1f62f2 = new URL(_0x1da6c1.location);
        this.flmf_sid = _0x1f62f2.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x341cad + "]");
      }
    } catch (_0x543196) {
      console.log(_0x543196);
    }
  }
  async flmf_signInInit(_0x35e867 = {}) {
    try {
      let _0x31938c = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x35a4c0
        } = await this.request(_0x31938c),
        _0x51ac78 = _0x473183.get(_0x35a4c0, "resultCode", -1);
      if (_0x51ac78 == "0000") {
        this.log("福利魔方今天" + (_0x35a4c0?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x35a4c0?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x35a4c0?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0xeb1d25 = _0x35a4c0?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x51ac78 + "]: " + _0xeb1d25);
      }
    } catch (_0x33b84f) {
      console.log(_0x33b84f);
    }
  }
  async flmf_signIn(_0x580b7d = {}) {
    try {
      let _0x254374 = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x4e0bf7
        } = await this.request(_0x254374),
        _0x3fdf90 = _0x473183.get(_0x4e0bf7, "resultCode", -1);
      if (_0x3fdf90 == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x5bf804 = _0x4e0bf7?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x3fdf90 + "]: " + _0x5bf804);
      }
    } catch (_0xf3259b) {
      console.log(_0xf3259b);
    }
  }
  async flmf_taskList(_0x833434 = {}) {
    try {
      let _0x278e72 = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x26123f
        } = await this.request(_0x278e72),
        _0x195d76 = _0x473183.get(_0x26123f, "resultCode", -1);
      if (_0x195d76 == "0000") {
        for (let _0x38041d of _0x26123f?.["data"]?.["taskInfoList"]) {
          for (let _0x3b911a of _0x38041d.taskInfoList.filter(_0x43b8d7 => !_0x43b8d7.done)) {
            for (let _0x51b7cb = _0x3b911a.hascount; _0x51b7cb < _0x3b911a.count; _0x51b7cb++) {
              await this.flmf_gogLance(_0x3b911a.id);
            }
          }
        }
      } else {
        let _0x679ec3 = _0x26123f?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x195d76 + "]: " + _0x679ec3);
      }
    } catch (_0x4f73cc) {
      console.log(_0x4f73cc);
    }
  }
  async flmf_scanTask() {
    for (let _0x4fdaef of _0x25479b) {
      await this.flmf_gogLance(_0x4fdaef);
    }
  }
  async flmf_gogLance(_0x1f6412, _0x2ac412 = {}) {
    try {
      let _0x14e3b0 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x1f6412,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x237d62
        } = await this.request(_0x14e3b0);
      await _0x473183.wait_gap_interval(this.t_flmf_task, _0x3aa919);
      let _0x4c1c6b = _0x473183.get(_0x237d62, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x4c1c6b == "0000") {
        this.log("完成任务[" + _0x1f6412 + "]成功");
      } else {
        let _0x53e04 = _0x237d62?.["resultMsg"] || "";
        this.log("完成任务[" + _0x1f6412 + "]失败[" + _0x4c1c6b + "]: " + _0x53e04);
      }
    } catch (_0x2f474e) {
      console.log(_0x2f474e);
    }
  }
  async woread_api(_0xd5f357) {
    let _0x38fc65 = await this.request(_0x473183.copy(_0xd5f357)),
      _0xb4b301 = _0x38fc65?.["result"]?.["message"] || "";
    _0xb4b301?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x38fc65 = await this.request(_0x473183.copy(_0xd5f357)));
    return _0x38fc65;
  }
  async woread_auth(_0x152c99 = {}) {
    let _0x42b80d = false;
    try {
      let _0x4f7700 = _0x473183.time("yyyyMMddhhmmss");
      const _0x43b80e = {
        timestamp: _0x4f7700
      };
      let _0x52639a = this.encode_woread(_0x43b80e),
        _0x2c4213 = Date.now().toString(),
        _0x7f1fa0 = _0x1c4152.MD5(_0x233ff0 + _0x2a484f + _0x2c4213).toString();
      const _0x235f30 = {
        sign: _0x52639a
      };
      const _0x4557ac = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x233ff0 + "/" + _0x2c4213 + "/" + _0x7f1fa0,
        json: _0x235f30
      };
      let {
          result: _0xf83770
        } = await this.request(_0x4557ac),
        _0xfbd3d8 = _0x473183.get(_0xf83770, "code", -1);
      if (_0xfbd3d8 == "0000") {
        _0x42b80d = true;
        this.woread_accesstoken = _0xf83770?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x24fa68 = _0xf83770?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0xfbd3d8 + "]: " + _0x24fa68);
      }
    } catch (_0x2641d7) {
      console.log(_0x2641d7);
    } finally {
      return _0x42b80d;
    }
  }
  async woread_login(_0x382510 = {}) {
    let _0x4047d9 = false;
    try {
      let _0x36a7fa = {
          phone: this.mobile,
          timestamp: _0x473183.time("yyyyMMddhhmmss")
        },
        _0x4e6a58 = this.encode_woread(_0x36a7fa);
      const _0x4cb443 = {
        sign: _0x4e6a58
      };
      const _0x5e8a61 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x4cb443
      };
      let {
          result: _0x5e772e
        } = await this.request(_0x5e8a61),
        _0x2d4d35 = _0x473183.get(_0x5e772e, "code", -1);
      if (_0x2d4d35 == "0000") {
        _0x4047d9 = true;
        let {
          userid: _0x10cd29,
          userindex: _0x5999f6,
          token: _0x302722,
          verifycode: _0x5f17aa
        } = _0x5e772e?.["data"];
        this.woread_token = _0x302722;
        this.woread_verifycode = _0x5f17aa;
        const _0x5a0612 = {
          woread_userid: _0x10cd29,
          woread_userindex: _0x5999f6,
          woread_token: _0x302722,
          woread_verifycode: _0x5f17aa
        };
        Object.assign(this, _0x5a0612);
      } else {
        let _0x3daa10 = _0x5e772e?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x2d4d35 + "]: " + _0x3daa10);
      }
    } catch (_0x34708f) {
      console.log(_0x34708f);
    } finally {
      return _0x4047d9;
    }
  }
  async woread_getSeeVideoAddNumber(_0x4e3686, _0x2c239a = {}) {
    try {
      let _0x545f97 = {
          activityIndex: _0x4e3686,
          ...this.get_woread_param()
        },
        _0x15cce5 = this.encode_woread(_0x545f97);
      const _0x27caca = {
        sign: _0x15cce5
      };
      const _0x25f486 = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0x27caca
      };
      let {
          result: _0x3cb2bf
        } = await this.woread_api(_0x25f486),
        _0x540d42 = _0x473183.get(_0x3cb2bf, "code", -1);
      if (_0x540d42 == "0000") {
        _0x3cb2bf?.["data"] == -1 && (await this.woread_addUserSeeVideo(_0x4e3686));
      } else {
        let _0x41ef6d = _0x3cb2bf?.["message"] || "";
        this.log("阅读活动[" + _0x4e3686 + "]查询抽奖视频失败[" + _0x540d42 + "]: " + _0x41ef6d);
      }
    } catch (_0x4a7acf) {
      console.log(_0x4a7acf);
    }
  }
  async woread_addUserSeeVideo(_0x4ea424, _0x545bb9 = {}) {
    try {
      let _0xec6fe = _0x545bb9.num || 5,
        _0x30cbfd = {
          activityIndex: _0x4ea424,
          num: _0xec6fe,
          ...this.get_woread_param()
        },
        _0x602a0a = this.encode_woread(_0x30cbfd);
      const _0x5e78ac = {
        sign: _0x602a0a
      };
      const _0x37dc40 = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x5e78ac
      };
      let {
          result: _0x51eceb
        } = await this.woread_api(_0x37dc40),
        _0x497a2d = _0x473183.get(_0x51eceb, "code", -1);
      if (_0x497a2d == "0000") {
        this.log("阅读活动[" + _0x4ea424 + "]看视频增加抽奖次数成功");
      } else {
        let _0x3467d4 = _0x51eceb?.["message"] || "";
        this.log("阅读活动[" + _0x4ea424 + "]看视频增加抽奖次数失败[" + _0x497a2d + "]: " + _0x3467d4);
      }
    } catch (_0x30ff9f) {
      console.log(_0x30ff9f);
    }
  }
  async woread_getActivityNumber(_0xdf9a3f, _0x424a08 = {}) {
    try {
      let _0x4d80e6 = {
          activeIndex: _0xdf9a3f,
          ...this.get_woread_param()
        },
        _0x43e2a2 = this.encode_woread(_0x4d80e6);
      const _0xf67443 = {
        sign: _0x43e2a2
      };
      const _0x22d6d5 = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0xf67443
      };
      let {
          result: _0x263f50
        } = await this.woread_api(_0x22d6d5),
        _0x1e785b = _0x473183.get(_0x263f50, "code", -1);
      if (_0x1e785b == "0000") {
        let _0x224418 = _0x263f50?.["data"] || 0;
        this.log("阅读活动[" + _0xdf9a3f + "]可以抽奖" + _0x224418 + "次");
        while (_0x224418-- > 0) {
          await this.woread_doDraw(_0xdf9a3f);
        }
      } else {
        let _0x4d1400 = _0x263f50?.["message"] || "";
        this.log("阅读活动[" + _0xdf9a3f + "]查询抽奖次数失败[" + _0x1e785b + "]: " + _0x4d1400);
      }
    } catch (_0x43f7b3) {
      console.log(_0x43f7b3);
    }
  }
  async woread_addDrawTimes(_0x3a5f59, _0x350aa9 = {}) {
    try {
      let _0x52ef98 = {
          activetyindex: _0x3a5f59,
          ...this.get_woread_param()
        },
        _0x22f2f6 = this.encode_woread(_0x52ef98);
      const _0x224bc0 = {
        sign: _0x22f2f6
      };
      const _0x7ca7fa = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0x224bc0
      };
      await _0x473183.wait_gap_interval(this.t_woread_draw, _0x4e3cbe);
      let {
        result: _0x28305e
      } = await this.woread_api(_0x7ca7fa);
      this.t_woread_draw = Date.now();
      let _0x5af266 = _0x473183.get(_0x28305e, "code", -1);
      if (_0x5af266 == "0000") {
        this.log("阅读活动[" + _0x3a5f59 + "]打卡增加抽奖次数成功");
      } else {
        if (_0x5af266 != "9999") {
          let _0x4a1b27 = _0x28305e?.["message"] || "";
          this.log("阅读活动[" + _0x3a5f59 + "]打卡增加抽奖次数失败[" + _0x5af266 + "]: " + _0x4a1b27);
        }
      }
    } catch (_0x2d957e) {
      console.log(_0x2d957e);
    }
  }
  async woread_doDraw(_0x3f9a24, _0x1ab9bd = {}) {
    try {
      let _0x5d57b2 = {
          activeindex: _0x3f9a24,
          ...this.get_woread_param()
        },
        _0x283e7a = this.encode_woread(_0x5d57b2);
      const _0x3acc78 = {
        sign: _0x283e7a
      };
      const _0x3cc4fa = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x3acc78
      };
      await _0x473183.wait_gap_interval(this.t_woread_draw, _0x4e3cbe);
      let {
        result: _0x123c4f
      } = await this.woread_api(_0x3cc4fa);
      this.t_woread_draw = Date.now();
      let _0xd9aed0 = _0x473183.get(_0x123c4f, "code", -1);
      if (_0xd9aed0 == "0000") {
        const _0x1d1f59 = {
          notify: true
        };
        this.log("阅读活动[" + _0x3f9a24 + "]抽奖: " + (_0x123c4f?.["data"]?.["prizedesc"] || "空气"), _0x1d1f59);
      } else {
        let _0x53d783 = _0x123c4f?.["message"] || "";
        this.log("阅读活动[" + _0x3f9a24 + "]抽奖失败[" + _0xd9aed0 + "]: " + _0x53d783);
      }
    } catch (_0x63f363) {
      console.log(_0x63f363);
    }
  }
  async woread_queryTicketAccount(_0x4381f7 = {}) {
    try {
      let _0x4b17b9 = this.get_woread_param(),
        _0x39fa7f = this.encode_woread(_0x4b17b9);
      const _0x30da7e = {
        sign: _0x39fa7f
      };
      const _0x4d5c56 = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x30da7e
      };
      let {
          result: _0xb6e2de
        } = await this.woread_api(_0x4d5c56),
        _0x434ffd = _0x473183.get(_0xb6e2de, "code", -1);
      if (_0x434ffd == "0000") {
        let _0x3f2d6d = (_0xb6e2de?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x5e8c50 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x3f2d6d, _0x5e8c50);
      } else {
        let _0x30b8b3 = _0xb6e2de?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x434ffd + "]: " + _0x30b8b3);
      }
    } catch (_0x5b5749) {
      console.log(_0x5b5749);
    }
  }
  async woread_addReadTime(_0x24298c = {}) {
    try {
      let {
          readTime = 2,
          cntindex = "409672",
          cntIndex = "409672",
          cnttype = "1",
          cntType = 1,
          cardid = "11891",
          catid = "118411",
          pageIndex = "10683",
          chapterseno = 1,
          channelid = "",
          chapterid = "-1",
          readtype = 1,
          isend = "0"
        } = _0x24298c,
        _0x23b8a5 = {
          readTime: readTime,
          cntindex: cntindex,
          cntIndex: cntIndex,
          cnttype: cnttype,
          cntType: cntType,
          catid: catid,
          cardid: cardid,
          pageIndex: pageIndex,
          chapterseno: chapterseno,
          channelid: channelid,
          chapterid: chapterid,
          readtype: readtype,
          isend: isend,
          ...this.get_woread_param()
        },
        _0x12b1c1 = this.encode_woread(_0x23b8a5);
      const _0x44915c = {
        sign: _0x12b1c1
      };
      const _0x112d0d = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x44915c
      };
      let {
          result: _0x4d57dd
        } = await this.request(_0x112d0d),
        _0x3357a2 = _0x473183.get(_0x4d57dd, "code", -1);
      if (_0x3357a2 == "0000") {
        this.log("刷新读小说时间: " + _0x4d57dd?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x4d57dd?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x2df974 = _0x4d57dd?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x3357a2 + "]: " + _0x2df974);
      }
    } catch (_0x394686) {
      console.log(_0x394686);
    }
  }
  async rabblit_queryActivityData(_0x4aecf5 = {}) {
    try {
      let _0x4a4da3 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x37f794 = this.encode_woread(_0x4a4da3);
      const _0x50d8ef = {
        sign: _0x37f794
      };
      const _0x47dd07 = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0x50d8ef
      };
      let {
          result: _0x14844c
        } = await this.woread_api(_0x47dd07),
        _0xb3852a = _0x473183.get(_0x14844c, "code", -1);
      if (_0xb3852a == "0000") {
        let {
          totalcharpternums: _0x578846,
          totalreadnums: _0x2d1858,
          status: _0x1e7cc1,
          activitystatus: _0x24f81c
        } = _0x14844c?.["data"];
        if (_0x24f81c == 1) {
          this.need_read_rabbit = false;
          const _0x4cd145 = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x4cd145);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x2d1858 + "/" + _0x578846 + "分钟");
        if (_0x1e7cc1 == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x2d1858 >= _0x578846) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x5b8b26 = _0x14844c?.["message"] || "";
        _0x5b8b26?.["includes"]("未参加") && !_0x4aecf5.join_retry && (await this.rabblit_joinRuning()) ? (_0x4aecf5.join_retry = true, await this.rabblit_queryActivityData(_0x4aecf5)) : this.log("龟兔赛跑查询状态失败[" + _0xb3852a + "]: " + _0x5b8b26);
      }
    } catch (_0x1725d9) {
      console.log(_0x1725d9);
    }
  }
  async rabblit_joinRuning(_0x22fbe1 = {}) {
    let _0x1552dc = false;
    try {
      let _0x3e2200 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x3b2a3e = this.encode_woread(_0x3e2200);
      const _0x1f9aac = {
        sign: _0x3b2a3e
      };
      const _0x31e9e0 = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x1f9aac
      };
      let {
          result: _0x41bcbf
        } = await this.woread_api(_0x31e9e0),
        _0x44fb6e = _0x473183.get(_0x41bcbf, "code", -1);
      if (_0x44fb6e == "0000") {
        _0x1552dc = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0x51c54d = _0x41bcbf?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x44fb6e + "]: " + _0x51c54d);
      }
    } catch (_0x28741e) {
      console.log(_0x28741e);
    } finally {
      return _0x1552dc;
    }
  }
  async rabblit_wakeRabbit(_0x4e103d = {}) {
    try {
      let _0x2573fa = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x506eee = this.encode_woread(_0x2573fa);
      const _0x54aef2 = {
        sign: _0x506eee
      };
      const _0x2471ef = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x54aef2
      };
      await _0x473183.wait_gap_interval(this.t_woread_draw, _0x4e3cbe);
      let {
        result: _0x2a0a1e
      } = await this.woread_api(_0x2471ef);
      this.t_woread_draw = Date.now();
      let _0x346d4b = _0x473183.get(_0x2a0a1e, "code", -1);
      if (_0x346d4b == "0000") {
        const _0x3b6815 = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x2a0a1e?.["data"]?.["prizedesc"] || "空气"), _0x3b6815);
      } else {
        let _0x319e58 = _0x2a0a1e?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x346d4b + "]: " + _0x319e58);
      }
    } catch (_0x5f2699) {
      console.log(_0x5f2699);
    }
  }
  async rabblit_finishActivity(_0x352dfc = {}) {
    try {
      let _0x5912db = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x314fe0 = this.encode_woread(_0x5912db);
      const _0x42cfcc = {
        sign: _0x314fe0
      };
      const _0x2d2a60 = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x42cfcc
      };
      await _0x473183.wait_gap_interval(this.t_woread_draw, _0x4e3cbe);
      let {
        result: _0x43cb6b
      } = await this.woread_api(_0x2d2a60);
      this.t_woread_draw = Date.now();
      let _0x107d4f = _0x473183.get(_0x43cb6b, "code", -1);
      if (_0x107d4f == "0000") {
        this.need_read_rabbit = false;
        const _0x4c325d = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x43cb6b?.["data"]?.["prizedesc"] || "空气"), _0x4c325d);
      } else {
        let _0x1c91d9 = _0x43cb6b?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x107d4f + "]: " + _0x1c91d9);
      }
    } catch (_0x143194) {
      console.log(_0x143194);
    }
  }
  async moonbox_queryCurTaskStatus(_0x23f4d6 = {}) {
    try {
      let _0xaba87b = {
          activeIndex: _0x492f02,
          ...this.get_woread_param()
        },
        _0x55e6c3 = this.encode_woread(_0xaba87b);
      const _0x539468 = {
        sign: _0x55e6c3
      };
      const _0x1e8902 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x539468
      };
      let {
          result: _0x30cab4
        } = await this.woread_api(_0x1e8902),
        _0x17bb1d = _0x473183.get(_0x30cab4, "code", -1);
      if (_0x17bb1d == "0000") {
        for (let _0x327798 of _0x30cab4?.["data"] || []) {
          let {
            taskName: _0x21779a,
            currentValue: _0x99bbf4,
            taskValue: _0x5bb2bc
          } = _0x327798?.["taskDetail"];
          switch (_0x327798.taskStatus) {
            case 0:
              this.need_read_moonbox = true;
              this.log("阅光宝盒[" + _0x21779a + "]进度: " + parseInt(_0x99bbf4) + "/" + _0x5bb2bc + "分钟");
              break;
            case 2:
              await this.moonbox_completeActiveTask(_0x327798);
            case 1:
              this.need_read_moonbox = false;
              const _0x3a7531 = {
                notify: true
              };
              this.log("阅光宝盒任务[" + _0x21779a + "]已完成", _0x3a7531);
              break;
          }
        }
      } else {
        let _0x5af209 = _0x30cab4?.["message"] || "";
        _0x5af209?.["includes"]("未领取") && !_0x23f4d6.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x23f4d6.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x23f4d6)) : this.log("阅光宝盒查询任务状态失败[" + _0x17bb1d + "]: " + _0x5af209);
      }
    } catch (_0x18e0ba) {
      console.log(_0x18e0ba);
    }
  }
  async moonbox_completeActiveTask(_0x329af2, _0x2338ae = {}) {
    try {
      let _0x150493 = {
          taskId: _0x329af2.id,
          ...this.get_woread_param()
        },
        _0x7a8d4a = this.encode_woread(_0x150493);
      const _0x329901 = {
        sign: _0x7a8d4a
      };
      const _0x8b5910 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x329901
      };
      let {
          result: _0x5063bf
        } = await this.woread_api(_0x8b5910),
        _0xac4b52 = _0x473183.get(_0x5063bf, "code", -1);
      if (_0xac4b52 == "0000") {
        const _0x302529 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x5063bf?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x5063bf?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x302529);
      } else {
        let _0x48ace2 = _0x5063bf?.["message"] || "";
        this.log("阅光宝盒[" + _0x329af2?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0xac4b52 + "]: " + _0x48ace2);
      }
    } catch (_0x549aeb) {
      console.log(_0x549aeb);
    }
  }
  async moonbox_queryActiveTaskList(_0xcf97b9 = {}) {
    try {
      let _0xcb5194 = {
          activeIndex: _0x492f02,
          ...this.get_woread_param()
        },
        _0x2d570e = this.encode_woread(_0xcb5194);
      const _0x43ddd2 = {
        sign: _0x2d570e
      };
      const _0x29b27c = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x43ddd2
      };
      let {
          result: _0xe007ec
        } = await this.woread_api(_0x29b27c),
        _0x3d5bbd = _0x473183.get(_0xe007ec, "code", -1);
      if (_0x3d5bbd == "0000") {
        let _0x42dc51 = _0xe007ec?.["data"]?.["sort"](function (_0x3d0a60, _0x1c2cfa) {
            let _0x4eb2e9 = parseInt(_0x1c2cfa.taskDetail.taskValue),
              _0x53366a = parseInt(_0x3d0a60.taskDetail.taskValue);
            return _0x4eb2e9 - _0x53366a;
          }),
          _0x269e28 = _0x42dc51.filter(_0x2ab373 => _0x2ab373.maxNum - _0x2ab373.receiveNum > 0 && _0x2ab373.taskDetail.materialGroup.groupName.includes("红包"));
        _0x269e28?.["length"] ? await this.moonbox_receiveActiveTask(_0x269e28) : (this.log("没有可领取的阅光宝盒红包任务了"), this.need_read_moonbox = false);
      } else {
        let _0x178b8e = _0xe007ec?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x3d5bbd + "]: " + _0x178b8e);
      }
    } catch (_0x4d2ace) {
      console.log(_0x4d2ace);
    }
  }
  async moonbox_receiveActiveTask(_0x52eeb6, _0x3326de = 0, _0x478555 = {}) {
    try {
      let _0x5c86ba = {
          activeId: _0x492f02,
          taskId: _0x52eeb6[_0x3326de].secondTaskId,
          ...this.get_woread_param()
        },
        _0x24b87f = this.encode_woread(_0x5c86ba);
      const _0x36a9d7 = {
        sign: _0x24b87f
      };
      const _0x222101 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x36a9d7
      };
      let {
          result: _0x474407
        } = await this.woread_api(_0x222101),
        _0x57b642 = _0x473183.get(_0x474407, "code", -1);
      if (_0x57b642 == "0000") {
        this.need_read_moonbox = true;
        this.log("领取阅光宝盒任务[" + _0x52eeb6?.[_0x3326de]?.["taskDetail"]?.["taskName"] + "]成功");
      } else {
        let _0x36df59 = _0x474407?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x52eeb6?.[_0x3326de]?.["taskDetail"]?.["taskName"] + "]失败[" + _0x57b642 + "]: " + _0x36df59);
        _0x36df59?.["includes"]("今天无法完成") && _0x52eeb6?.["length"] > _0x3326de + 1 && (await this.moonbox_receiveActiveTask(_0x52eeb6, _0x3326de + 1, _0x478555));
      }
    } catch (_0x40fddc) {
      console.log(_0x40fddc);
    }
  }
  async moonbox_queryReadStatus(_0x53242a = {}) {
    try {
      let _0x4f53f9 = {
          activeIndex: _0x492f02,
          ...this.get_woread_param()
        },
        _0x263af0 = this.encode_woread(_0x4f53f9);
      const _0x4fa7f5 = {
        sign: _0x263af0
      };
      const _0x34d7d2 = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x4fa7f5
      };
      let {
          result: _0x164cab
        } = await this.woread_api(_0x34d7d2),
        _0x3f95b7 = _0x473183.get(_0x164cab, "code", -1);
      if (_0x3f95b7 == "0000") {
        switch (_0x164cab?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x318752 = {
                readTime: 2
              };
              await this.woread_addReadTime(_0x318752);
              await this.moonbox_drawReadActivePrize();
              break;
            }
          case "3":
            {
              this.log("阅光宝盒今天已抽奖");
              break;
            }
          case "4":
            {
              this.log("阅光宝盒今天可以抽奖");
              await this.moonbox_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x164cab?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x280bb3 = _0x164cab?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x3f95b7 + "]: " + _0x280bb3);
      }
    } catch (_0x4d4b0e) {
      console.log(_0x4d4b0e);
    }
  }
  async moonbox_drawReadActivePrize(_0x2eec72 = {}) {
    try {
      let _0x4558c9 = {
          activeIndex: _0x492f02,
          ...this.get_woread_param()
        },
        _0x2e62e0 = this.encode_woread(_0x4558c9);
      const _0x50b530 = {
        sign: _0x2e62e0
      };
      const _0xf5936a = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x50b530
      };
      let {
          result: _0x127afb
        } = await this.woread_api(_0xf5936a),
        _0x4f7f03 = _0x473183.get(_0x127afb, "code", -1);
      if (_0x4f7f03 == "0000") {
        const _0x20cd9d = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x127afb?.["data"]?.["prizedesc"] || JSON.stringify(_0x127afb)), _0x20cd9d);
      } else {
        let _0x15b66a = _0x127afb?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x4f7f03 + "]: " + _0x15b66a);
      }
    } catch (_0x2fb358) {
      console.log(_0x2fb358);
    }
  }
  async ltyp_login(_0x2da72a, _0x18cdc7 = {}) {
    try {
      const _0x42fcfc = {
        "client-Id": _0x2395cd,
        accessToken: ""
      };
      const _0x102291 = {
        clientId: _0x2395cd,
        ticket: _0x2da72a
      };
      let _0x315172 = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x42fcfc,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x102291
          }
        },
        {
          result: _0x1639ca
        } = await this.request(_0x315172),
        _0x195e9d = _0x473183.get(_0x1639ca, "STATUS", -1);
      if (_0x195e9d == 200) {
        this.ltyp_token = _0x1639ca?.["RSP"]?.["DATA"]?.["token"];
        for (let _0xb5eaf9 of _0x1045cc) {
          await this.ltyp_incentiveTimes(_0xb5eaf9);
          await this.ltyp_lottery(_0xb5eaf9);
        }
      } else {
        let _0x12108c = _0x1639ca?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x195e9d + "]: " + _0x12108c);
      }
    } catch (_0x314493) {
      console.log(_0x314493);
    }
  }
  async ltyp_incentiveTimes(_0x1de278, _0x14bd9f = {}) {
    try {
      const _0x45b4eb = {
        "client-Id": _0x2395cd,
        "Access-Token": this.ltyp_token
      };
      const _0x59c5a2 = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x45b4eb,
        searchParams: {}
      };
      _0x59c5a2.searchParams.bizKey = "incentiveTimesPipeline";
      _0x59c5a2.searchParams.activityId = _0x1de278;
      let {
          result: _0x5680e8
        } = await this.request(_0x59c5a2),
        _0x52aaf7 = _0x473183.get(_0x5680e8?.["meta"], "code", -1);
      if (_0x52aaf7 == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0x5680e8?.["result"];
        if (isIncentiveTask) {
          for (let _0x52771c = incentiveTimeDone; _0x52771c < incentiveTimeTotal; _0x52771c++) {
            await this.ltyp_incentiveTask(_0x1de278);
          }
        }
      } else {
        let _0x19735a = _0x5680e8?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x52aaf7 + "]: " + _0x19735a);
      }
    } catch (_0x454b87) {
      console.log(_0x454b87);
    }
  }
  async ltyp_incentiveTask(_0x12f149, _0x31482d = {}) {
    try {
      const _0x11f76e = {
        "client-Id": _0x2395cd,
        "Access-Token": this.ltyp_token
      };
      const _0x3c4a17 = {
        activityId: _0x12f149
      };
      const _0x469d93 = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x11f76e,
        json: {}
      };
      _0x469d93.json.bizKey = "incentiveTaskPipeline";
      _0x469d93.json.bizObject = _0x3c4a17;
      let {
          result: _0x4f4c6e
        } = await this.request(_0x469d93),
        _0x585bb6 = _0x473183.get(_0x4f4c6e?.["meta"], "code", -1);
      if (_0x585bb6 == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0x4f4c6e?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x4c419a = _0x4f4c6e?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x585bb6 + "]: " + _0x4c419a);
      }
    } catch (_0x6031e4) {
      console.log(_0x6031e4);
    }
  }
  async ltyp_lottery_times(_0xa4cd30, _0x1bb487 = {}) {
    try {
      const _0x4922c3 = {
        "client-Id": _0x2395cd,
        token: this.ltyp_token
      };
      const _0x3e722b = {
        activityId: _0xa4cd30
      };
      const _0x3d30cd = {
        fn: "ltyp_lottery_times",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/times",
        headers: _0x4922c3,
        searchParams: _0x3e722b
      };
      let {
          result: _0x53eec4
        } = await this.request(_0x3d30cd),
        _0x3c737f = _0x473183.get(_0x53eec4, "RSP_CODE", -1);
      if (_0x3c737f == 0) {
        let {
          times = 0
        } = _0x53eec4?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await this.ltyp_lottery(_0xa4cd30);
        }
      } else {
        let _0x45e8ec = _0x53eec4?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x3c737f + "]: " + _0x45e8ec);
      }
    } catch (_0x181483) {
      console.log(_0x181483);
    }
  }
  async ltyp_lottery(_0x4f5fb4, _0x1c714d = {}) {
    try {
      const _0x2906f7 = {
        "client-Id": _0x2395cd,
        "Access-Token": this.ltyp_token
      };
      const _0x3e8315 = {
        activityId: _0x4f5fb4,
        type: 3
      };
      const _0x4b1768 = {
        lottery: _0x3e8315
      };
      const _0x112cb2 = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0x2906f7,
        json: {}
      };
      _0x112cb2.json.bizKey = "newLottery";
      _0x112cb2.json.bizObject = _0x4b1768;
      let {
          result: _0x221c41
        } = await this.request(_0x112cb2),
        _0x11edac = _0x473183.get(_0x221c41?.["meta"], "code", -1);
      if (_0x11edac == 0) {
        let {
          prizeName = ""
        } = _0x221c41?.["result"];
        if (prizeName) {
          const _0x4e1362 = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x4e1362);
          await this.ltyp_lottery(_0x4f5fb4, _0x1c714d);
        }
      } else {
        let _0x139885 = _0x221c41?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x11edac + "]: " + _0x139885);
      }
    } catch (_0x1f2b8f) {
      console.log(_0x1f2b8f);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x4f897d = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x2b79b9
      } = await this.openPlatLineNew(_0x4f897d);
    if (!_0x2b79b9) {
      return;
    }
    await this.game_login(_0x2b79b9);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x235282 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x3db260,
        type: _0x26ff60,
        loc: _0x2329e5
      } = await this.openPlatLineNew(_0x235282);
    if (!_0x3db260) {
      return;
    }
    await this.ttlxj_authorize(_0x3db260, _0x26ff60, _0x2329e5);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x20deb5 = new Date().getDate();
    if (_0x20deb5 >= 26 && _0x20deb5 <= 28) {
      await this.epay_28_authCheck();
      if (_0x117e7f.length) {
        let _0x3bf1da = _0x473183.randomList(_0x117e7f);
        await this.appMonth_28_bind(_0x3bf1da);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x5e6b18 = new Date().getDate();
    _0x5e6b18 == 28 && (await this.draw_28_queryChance());
  }
  async flmf_task() {
    if (this.city.filter(_0x26706d => _0x26706d.proCode == "091").length == 0) {
      return;
    }
    let _0xa09585 = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x2fa33c
      } = await this.openPlatLineNew(_0xa09585);
    if (!_0x2fa33c) {
      return;
    }
    await this.flmf_login(_0x2fa33c);
  }
  async ltyp_task() {
    let _0x145942 = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x4ba53e
      } = await this.openPlatLineNew(_0x145942);
    if (!_0x4ba53e) {
      return;
    }
    await this.ltyp_login(_0x4ba53e);
  }
  async woread_draw_task(_0x19c79b) {
    await this.woread_getSeeVideoAddNumber(_0x19c79b);
    await this.woread_addDrawTimes(_0x19c79b);
    await this.woread_getActivityNumber(_0x19c79b);
  }
  async woread_task() {
    for (let _0x1e24da of _0x4a0787) {
      await this.woread_draw_task(_0x1e24da);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    while (this.need_read_rabbit || this.need_read_moonbox) {
      let _0x125ac2 = 2;
      const _0x560b54 = {
        readTime: _0x125ac2
      };
      await this.woread_addReadTime(_0x560b54);
      if (this.need_read_moonbox) {
        await this.moonbox_queryCurTaskStatus();
      }
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      (this.need_read_rabbit || this.need_read_moonbox) && (this.log("等待2分钟..."), await _0x473183.wait(125000));
    }
  }
  async userLoginTask() {
    if (!(await this.onLine())) {
      return;
    }
    if (!(await this.woread_auth())) {
      return;
    }
    if (!(await this.woread_login())) {
      return;
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x473183.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x473183.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  // if (!(await _0x1d5dea())) {
  //   return;
  // }
  await _0x30140e();
  _0x473183.read_env(_0x244555);
  for (let _0x2f4fd0 of _0x473183.userList) {
    await _0x2f4fd0.userLoginTask();
  }
  for (let _0x55e597 of _0x473183.userList.filter(_0xb5055b => _0xb5055b.valid)) {
    await _0x55e597.userTask();
  }
  let _0x26277b = _0x473183.userList.filter(_0x3a18bd => _0x3a18bd.valid && _0x3a18bd.woread_verifycode && (_0x3a18bd.need_read_rabbit || _0x3a18bd.need_read_moonbox));
  // if (_0x26277b.length) {
  //   let _0x56ec96 = [];
  //   _0x473183.log("\n============ 开始刷阅读时长 ============");
  //   for (let _0x144430 of _0x26277b) {
  //     _0x56ec96.push(_0x144430.woread_reading_task());
  //   }
  //   await Promise.all(_0x56ec96);
  // }
})().catch(_0x55db6b => _0x473183.log(_0x55db6b)).finally(() => _0x473183.exitNow());
async function _0x1d5dea(_0x326b95 = 0) {
  let _0x2b3bd3 = false;
  try {
    const _0x27fd68 = {
      fn: "auth",
      method: "get",
      url: _0x437d5f,
      timeout: 20000
    };
    let {
      statusCode: _0x3b0b80,
      result: _0x7dfc46
    } = await _0x80845b.request(_0x27fd68);
    if (_0x3b0b80 != 200) {
      _0x326b95++ < _0x49391d && (_0x2b3bd3 = await _0x1d5dea(_0x326b95));
      return _0x2b3bd3;
    }
    if (_0x7dfc46?.["code"] == 0) {
      _0x7dfc46 = JSON.parse(_0x7dfc46.data.file.data);
      if (_0x7dfc46?.["commonNotify"] && _0x7dfc46.commonNotify.length > 0) {
        const _0x169afc = {
          notify: true
        };
        _0x473183.log(_0x7dfc46.commonNotify.join("\n") + "\n", _0x169afc);
      }
      _0x7dfc46?.["commonMsg"] && _0x7dfc46.commonMsg.length > 0 && _0x473183.log(_0x7dfc46.commonMsg.join("\n") + "\n");
      if (_0x7dfc46[_0x1612dd]) {
        let _0x3e292e = _0x7dfc46[_0x1612dd];
        _0x3e292e.status == 0 ? _0x3afb60 >= _0x3e292e.version ? (_0x2b3bd3 = true, _0x473183.log(_0x3e292e.msg[_0x3e292e.status]), _0x473183.log(_0x3e292e.updateMsg), _0x473183.log("现在运行的脚本版本是：" + _0x3afb60 + "，最新脚本版本：" + _0x3e292e.latestVersion)) : _0x473183.log(_0x3e292e.versionMsg) : _0x473183.log(_0x3e292e.msg[_0x3e292e.status]);
      } else {
        _0x473183.log(_0x7dfc46.errorMsg);
      }
    } else {
      _0x326b95++ < _0x49391d && (_0x2b3bd3 = await _0x1d5dea(_0x326b95));
    }
  } catch (_0x36b481) {
    _0x473183.log(_0x36b481);
  } finally {
    return _0x2b3bd3;
  }
}
async function _0x30140e() {
  let _0x39b31a = false;
  try {
    const _0x441605 = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x1f6cac
    };
    let {
      statusCode: _0x1a6124,
      result: _0x151259
    } = await _0x80845b.request(_0x441605);
    if (_0x1a6124 != 200) {
      return Promise.resolve();
    }
    if (_0x151259?.["code"] == 0) {
      _0x151259 = JSON.parse(_0x151259.data.file.data);
      if (_0x151259?.["moonbox"]) {
        _0x492f02 = _0x151259?.["moonbox"];
      }
      if (_0x151259?.["ltyp_lottery"]) {
        _0x1045cc = _0x151259?.["ltyp_lottery"];
      }
      if (_0x151259?.["woread_draw_id"]) {
        _0x4a0787 = _0x151259?.["woread_draw_id"];
      }
      if (_0x151259?.["appMonth_28_share"]) {
        _0x117e7f = _0x151259?.["appMonth_28_share"];
      }
    }
  } catch (_0x201dd7) {
    _0x473183.log(_0x201dd7);
  } finally {
    return _0x39b31a;
  }
}
function _0x3f1673(_0x4f3a6b) {
  return new class {
    constructor(_0x480d17) {
      this.name = _0x480d17;
      this.startTime = Date.now();
      const _0x2f4b92 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x2f4b92);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x11eb01, _0x267188 = {}) {
      const _0x52e76a = {
        console: true
      };
      Object.assign(_0x52e76a, _0x267188);
      if (_0x52e76a.time) {
        let _0x22ec79 = _0x52e76a.fmt || "hh:mm:ss";
        _0x11eb01 = "[" + this.time(_0x22ec79) + "]" + _0x11eb01;
      }
      if (_0x52e76a.notify) {
        this.notifyStr.push(_0x11eb01);
      }
      if (_0x52e76a.console) {
        console.log(_0x11eb01);
      }
    }
    get(_0x55d4b9, _0x58e5ee, _0xf9d427 = "") {
      let _0x1dd59d = _0xf9d427;
      _0x55d4b9?.["hasOwnProperty"](_0x58e5ee) && (_0x1dd59d = _0x55d4b9[_0x58e5ee]);
      return _0x1dd59d;
    }
    pop(_0x31d445, _0x30becb, _0x46ed9d = "") {
      let _0x210592 = _0x46ed9d;
      _0x31d445?.["hasOwnProperty"](_0x30becb) && (_0x210592 = _0x31d445[_0x30becb], delete _0x31d445[_0x30becb]);
      return _0x210592;
    }
    copy(_0x4ae44f) {
      return Object.assign({}, _0x4ae44f);
    }
    read_env(_0x3e38e7) {
      let _0x370898 = _0x38e245.map(_0x58baea => process.env[_0x58baea]);
      for (let _0x2bb191 of _0x370898.filter(_0xa1c386 => !!_0xa1c386)) {
        let _0x48092c = _0x1f100a.filter(_0x209891 => _0x2bb191.includes(_0x209891)),
          _0x317c56 = _0x48092c.length > 0 ? _0x48092c[0] : _0x1f100a[0];
        for (let _0xc504e2 of _0x2bb191.split(_0x317c56).filter(_0xeab922 => !!_0xeab922)) {
          this.userList.push(new _0x3e38e7(_0xc504e2));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x20765f = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x38e245.map(_0x3041d0 => "[" + _0x3041d0 + "]").join("或"), _0x20765f);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x3744e5, _0x52a4a2, _0x12f649 = {}) {
      while (_0x52a4a2.idx < _0x473183.userList.length) {
        let _0x4d118c = _0x473183.userList[_0x52a4a2.idx++];
        if (!_0x4d118c.valid) {
          continue;
        }
        await _0x4d118c[_0x3744e5](_0x12f649);
      }
    }
    async threadTask(_0x3d3bb8, _0x4edd82) {
      let _0x49bcd9 = [];
      const _0x3ef133 = {
        idx: 0
      };
      while (_0x4edd82--) {
        _0x49bcd9.push(this.threads(_0x3d3bb8, _0x3ef133));
      }
      await Promise.all(_0x49bcd9);
    }
    time(_0x54e4a3, _0x181c14 = null) {
      let _0x5b7182 = _0x181c14 ? new Date(_0x181c14) : new Date(),
        _0x3bcb1c = {
          "M+": _0x5b7182.getMonth() + 1,
          "d+": _0x5b7182.getDate(),
          "h+": _0x5b7182.getHours(),
          "m+": _0x5b7182.getMinutes(),
          "s+": _0x5b7182.getSeconds(),
          "q+": Math.floor((_0x5b7182.getMonth() + 3) / 3),
          S: this.padStr(_0x5b7182.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x54e4a3) && (_0x54e4a3 = _0x54e4a3.replace(RegExp.$1, (_0x5b7182.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x111f59 in _0x3bcb1c) new RegExp("(" + _0x111f59 + ")").test(_0x54e4a3) && (_0x54e4a3 = _0x54e4a3.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3bcb1c[_0x111f59] : ("00" + _0x3bcb1c[_0x111f59]).substr(("" + _0x3bcb1c[_0x111f59]).length)));
      return _0x54e4a3;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x4f180e = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x4f180e.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x5ed456, _0x27f3b2, _0x582892 = {}) {
      let _0x1370ea = _0x582892.padding || "0",
        _0x1c80da = _0x582892.mode || "l",
        _0x416b29 = String(_0x5ed456),
        _0x10ef65 = _0x27f3b2 > _0x416b29.length ? _0x27f3b2 - _0x416b29.length : 0,
        _0x273cec = "";
      for (let _0x318bb2 = 0; _0x318bb2 < _0x10ef65; _0x318bb2++) {
        _0x273cec += _0x1370ea;
      }
      _0x1c80da == "r" ? _0x416b29 = _0x416b29 + _0x273cec : _0x416b29 = _0x273cec + _0x416b29;
      return _0x416b29;
    }
    json2str(_0x543081, _0x1f9a2, _0x137721 = false) {
      let _0x1c746a = [];
      for (let _0x54d0d3 of Object.keys(_0x543081).sort()) {
        let _0x57c4a8 = _0x543081[_0x54d0d3];
        if (_0x57c4a8 && _0x137721) {
          _0x57c4a8 = encodeURIComponent(_0x57c4a8);
        }
        _0x1c746a.push(_0x54d0d3 + "=" + _0x57c4a8);
      }
      return _0x1c746a.join(_0x1f9a2);
    }
    str2json(_0x115d1f, _0x2ce17e = false) {
      let _0x2a0120 = {};
      for (let _0x46c4e5 of _0x115d1f.split("&")) {
        if (!_0x46c4e5) {
          continue;
        }
        let _0x5aea2b = _0x46c4e5.indexOf("=");
        if (_0x5aea2b == -1) {
          continue;
        }
        let _0x2b36c5 = _0x46c4e5.substr(0, _0x5aea2b),
          _0x1ced8a = _0x46c4e5.substr(_0x5aea2b + 1);
        if (_0x2ce17e) {
          _0x1ced8a = decodeURIComponent(_0x1ced8a);
        }
        _0x2a0120[_0x2b36c5] = _0x1ced8a;
      }
      return _0x2a0120;
    }
    randomPattern(_0x2b9ef0, _0x3b8103 = "abcdef0123456789") {
      let _0x186bb6 = "";
      for (let _0x1267a6 of _0x2b9ef0) {
        if (_0x1267a6 == "x") {
          _0x186bb6 += _0x3b8103.charAt(Math.floor(Math.random() * _0x3b8103.length));
        } else {
          _0x1267a6 == "X" ? _0x186bb6 += _0x3b8103.charAt(Math.floor(Math.random() * _0x3b8103.length)).toUpperCase() : _0x186bb6 += _0x1267a6;
        }
      }
      return _0x186bb6;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x50c18c, _0x32fa03 = "abcdef0123456789") {
      let _0x5be1af = "";
      for (let _0x4a1b37 = 0; _0x4a1b37 < _0x50c18c; _0x4a1b37++) {
        _0x5be1af += _0x32fa03.charAt(Math.floor(Math.random() * _0x32fa03.length));
      }
      return _0x5be1af;
    }
    randomList(_0x578359) {
      let _0x871f35 = Math.floor(Math.random() * _0x578359.length);
      return _0x578359[_0x871f35];
    }
    wait(_0x31a4f5) {
      return new Promise(_0x4f4889 => setTimeout(_0x4f4889, _0x31a4f5));
    }
    async exitNow() {
      await this.showmsg();
      let _0x167f16 = Date.now(),
        _0x521f4a = (_0x167f16 - this.startTime) / 1000;
      this.log("");
      const _0x597c7c = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x521f4a + "秒", _0x597c7c);
      process.exit(0);
    }
    normalize_time(_0x19836d, _0x4febcc = {}) {
      let _0x51a77b = _0x4febcc.len || _0x59125e;
      _0x19836d = _0x19836d.toString();
      let _0x287328 = _0x19836d.length;
      while (_0x287328 < _0x51a77b) {
        _0x19836d += "0";
      }
      _0x287328 > _0x51a77b && (_0x19836d = _0x19836d.slice(0, 13));
      return parseInt(_0x19836d);
    }
    async wait_until(_0x310408, _0x5f2793 = {}) {
      let _0x30cf8e = _0x5f2793.logger || this,
        _0x44df3c = _0x5f2793.interval || _0x435828,
        _0x48d801 = _0x5f2793.limit || _0x1f4c96,
        _0x2d9d79 = _0x5f2793.ahead || _0x511e08;
      if (typeof _0x310408 == "string" && _0x310408.includes(":")) {
        if (_0x310408.includes("-")) {
          _0x310408 = new Date(_0x310408).getTime();
        } else {
          let _0x261afc = this.time("yyyy-MM-dd ");
          _0x310408 = new Date(_0x261afc + _0x310408).getTime();
        }
      }
      let _0xa098c1 = this.normalize_time(_0x310408) - _0x2d9d79,
        _0x1d2283 = this.time("hh:mm:ss.S", _0xa098c1),
        _0x29ceeb = Date.now();
      _0x29ceeb > _0xa098c1 && (_0xa098c1 += 86400000);
      let _0xca37cf = _0xa098c1 - _0x29ceeb;
      if (_0xca37cf > _0x48d801) {
        const _0x18f784 = {
          time: true
        };
        _0x30cf8e.log("离目标时间[" + _0x1d2283 + "]大于" + _0x48d801 / 1000 + "秒,不等待", _0x18f784);
      } else {
        const _0x3f011b = {
          time: true
        };
        _0x30cf8e.log("离目标时间[" + _0x1d2283 + "]还有" + _0xca37cf / 1000 + "秒,开始等待", _0x3f011b);
        while (_0xca37cf > 0) {
          let _0x347a17 = Math.min(_0xca37cf, _0x44df3c);
          await this.wait(_0x347a17);
          _0x29ceeb = Date.now();
          _0xca37cf = _0xa098c1 - _0x29ceeb;
        }
        const _0x3a6a26 = {
          time: true
        };
        _0x30cf8e.log("已完成等待", _0x3a6a26);
      }
    }
    async wait_gap_interval(_0x4f2774, _0x4b8a84) {
      let _0x3383f5 = Date.now() - _0x4f2774;
      _0x3383f5 < _0x4b8a84 && (await this.wait(_0x4b8a84 - _0x3383f5));
    }
  }(_0x4f3a6b);
}