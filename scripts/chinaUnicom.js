const _0x4bcdd6 = _0x59ca20("中国联通"),
  _0x2d144c = require("got"),
  _0x53715 = require("path"),
  {
    exec: _0x3aab22
  } = require("child_process"),
  _0x481d2f = require("crypto-js"),
  {
    CookieJar: _0x44ba2b
  } = require("tough-cookie"),
  _0x3759b8 = "chinaUnicom",
  _0x45c89b = ["\n", "&", "@"],
  _0x174adf = [_0x3759b8 + "Cookie"],
  _0x5d8afc = process.env[_0x3759b8 + "Sign"] === "false",
  _0x41455e = process.env[_0x3759b8 + "Ltzf"] === "false",
  _0x4c09fa = 50000,
  _0x3f5382 = 3;
const _0x33bff1 = 2.05,
  _0x466772 = "chinaUnicom",
  _0x326b7c = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x4843f6 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x466772 + ".json",
  _0xf2ada5 = 5,
  _0x147043 = "iphone_c@11.0503",
  _0x43e37f = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:" + _0x147043 + "}",
  _0x4d012f = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x276684 = "10000002",
  _0x5a5cd2 = "7k1HcDL8RKvc",
  _0x369b83 = "woreadst^&*12345",
  _0x55dd02 = "10000006",
  _0x3f3ace = "yQsp9gUqv7qX",
  _0x48e277 = "QzUzOUM2QTQ2MTc4",
  _0x1f5272 = "16-Bytes--String",
  _0x6f8b1b = "225",
  _0x2746b6 = "225",
  _0x18f668 = "party",
  _0x5cb4b4 = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x230769 = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x33a726 = "7cb46449-3b11-4414-bb49-cbd15525fb88",
  _0x20602e = "9",
  _0xecd3b7 = "1",
  _0x245632 = "wocareMBHServiceLife1",
  _0x4f7e86 = "beea1c7edf7c4989b2d3621c4255132f",
  _0x12ea5b = "f4cd4ffeb5554586acf65ba7110534f5",
  _0x345675 = "0123456789",
  _0x13aa96 = "qwertyuiopasdfghjklzxcvbnm",
  _0x343550 = process.env[_0x3759b8 + "Uuid"] || _0x4bcdd6.randomUuid(),
  _0x17a236 = [9, 10, 11, 12, 13],
  _0x17c786 = 1000,
  _0x3e05b1 = 5000,
  _0x366e1a = "1001000003",
  _0x298725 = "100002",
  _0x45e951 = "";
let _0x2d86db = [],
  _0x73a8f = [],
  _0x8daf81 = [],
  _0x4d42f0 = null,
  _0x2c3946 = [6640, 6641];
const _0x479873 = 7,
  _0x5170bd = 5,
  _0x330995 = 5,
  _0x80da4f = {
    ttlxj: "TTLXJ20210330",
    card_618: "NZJK618CJHD"
  };
const _0x35e734 = {
  name: "星座配对",
  id: 2
};
const _0x1893a7 = {
  name: "大转盘",
  id: 3
};
const _0x5c1d27 = {
  name: "盲盒抽奖",
  id: 4
};
const _0x40a751 = [_0x35e734, _0x1893a7, _0x5c1d27],
  _0x3c9e28 = {
    ZFGJBXXCY1: "空气",
    GJBNZJK19: "[6]",
    GJBNZJK20: "[1]",
    GJBNZJK21: "[8]",
    GJBNZJK22: "[狂]",
    GJBNZJK23: "[欢]"
  };
const _0x4c930c = {
  "抽奖": "01",
  "首次进入": "02",
  "卡片合成": "03",
  "瓜分奖励": "04"
};
function _0x3639b4(_0xcf21b7, _0x4ccf75, _0x5239f0, _0x31b443, _0x3efa31, _0x4c8d24) {
  return _0x481d2f[_0xcf21b7].encrypt(_0x481d2f.enc.Utf8.parse(_0x31b443), _0x481d2f.enc.Utf8.parse(_0x3efa31), {
    mode: _0x481d2f.mode[_0x4ccf75],
    padding: _0x481d2f.pad[_0x5239f0],
    iv: _0x481d2f.enc.Utf8.parse(_0x4c8d24)
  }).ciphertext.toString(_0x481d2f.enc.Hex);
}
function _0x3a0700(_0x65e2de, _0x4ab4b3, _0x2d1bfa, _0x21cc39, _0x3743f1, _0x57263c) {
  return _0x481d2f[_0x65e2de].decrypt({
    ciphertext: _0x481d2f.enc.Hex.parse(_0x21cc39)
  }, _0x481d2f.enc.Utf8.parse(_0x3743f1), {
    mode: _0x481d2f.mode[_0x4ab4b3],
    padding: _0x481d2f.pad[_0x2d1bfa],
    iv: _0x481d2f.enc.Utf8.parse(_0x57263c)
  }).toString(_0x481d2f.enc.Utf8);
}
let _0x50d86e = 0,
  _0x387fcb = 0;
function _0x53dda0() {
  _0x387fcb = 1;
  process.on("SIGTERM", () => {
    _0x387fcb = 2;
    process.exit(0);
  });
  const _0x422c42 = _0x53715.basename(process.argv[1]),
    _0x19a9d9 = ["bash", "timeout", "grep"];
  let _0x1c97c2 = ["ps afx"];
  _0x1c97c2.push("grep " + _0x422c42);
  _0x1c97c2 = _0x1c97c2.concat(_0x19a9d9.map(_0xaebf77 => "grep -v \"" + _0xaebf77 + " \""));
  _0x1c97c2.push("wc -l");
  const _0x24f882 = _0x1c97c2.join("|"),
    _0x29536e = () => {
      _0x3aab22(_0x24f882, (_0x5e80d6, _0x39d303, _0x4b83d4) => {
        if (_0x5e80d6 || _0x4b83d4) {
          return;
        }
        _0x50d86e = parseInt(_0x39d303.trim(), 10);
      });
      if (_0x387fcb == 1) {
        setTimeout(_0x29536e, 2000);
      }
    };
  _0x29536e();
}
class _0x20b48d {
  constructor() {
    this.index = _0x4bcdd6.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x347307 = {
      limit: 0
    };
    const _0x1826b9 = {
      Connection: "keep-alive"
    };
    const _0x393ddf = {
      retry: _0x347307,
      timeout: _0x4c09fa,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x1826b9
    };
    this.got = _0x2d144c.extend(_0x393ddf);
    if (_0x387fcb == 0) {
      _0x53dda0();
    }
  }
  log(_0x11f8ec, _0x5b89eb = {}) {
    var _0x123d44 = "",
      _0x218216 = _0x4bcdd6.userCount.toString().length;
    if (this.index) {
      _0x123d44 += "账号[" + _0x4bcdd6.padStr(this.index, _0x218216) + "]";
    }
    if (this.name) {
      _0x123d44 += "[" + this.name + "]";
    }
    _0x4bcdd6.log(_0x123d44 + _0x11f8ec, _0x5b89eb);
  }
  set_cookie(_0x4be387, _0x2224b9, _0x50fdf3, _0x2da1a3, _0x1c18e0 = {}) {
    this.cookieJar.setCookieSync(_0x4be387 + "=" + _0x2224b9 + "; Domain=" + _0x50fdf3 + ";", "" + _0x2da1a3);
  }
  async request(_0x29ec61) {
    const _0x4b958e = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x2187a4 = ["TimeoutError"],
      _0x28b89b = ["EPROTO"],
      _0x5489c0 = [];
    var _0x8ce1c7 = null,
      _0x3e55de = 0,
      _0x32a37e = _0x29ec61.fn || _0x29ec61.url;
    let _0xd86c13 = _0x4bcdd6.get(_0x29ec61, "valid_code", _0x5489c0);
    _0x29ec61.method = _0x29ec61?.["method"]?.["toUpperCase"]() || "GET";
    let _0xc938b8, _0x7c5964;
    while (_0x3e55de < _0x3f5382) {
      try {
        _0x3e55de++;
        _0xc938b8 = "";
        _0x7c5964 = "";
        let _0x35a8de = null,
          _0xe1c4f8 = _0x29ec61?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x4c09fa,
          _0x776a0a = false,
          _0x5afa41 = Math.max(this.index - 2, 0),
          _0x19dd40 = Math.min(Math.max(this.index - 3, 1), 3),
          _0x3c1a54 = Math.min(Math.max(this.index - 4, 1), 3),
          _0x19fd67 = _0x5afa41 * _0x19dd40 * _0x3c1a54 * _0x3c1a54 * 500,
          _0x52e2eb = _0x5afa41 * _0x19dd40 * _0x3c1a54 * _0x3c1a54 * 2000,
          _0x3943f9 = _0x19fd67 + Math.floor(Math.random() * _0x52e2eb),
          _0x54c0b9 = _0x50d86e * (_0x50d86e - 1) * 2000,
          _0x41a8d7 = (_0x50d86e - 1) * (_0x50d86e - 1) * 2000,
          _0x4a9253 = _0x54c0b9 + Math.floor(Math.random() * _0x41a8d7),
          _0x373083 = Math.max(_0x4bcdd6.userCount - 2, 0),
          _0x89b167 = Math.max(_0x4bcdd6.userCount - 3, 0),
          _0x53a74f = _0x373083 * 200,
          _0x3c8a3b = _0x89b167 * 400,
          _0x2baa0a = _0x53a74f + Math.floor(Math.random() * _0x3c8a3b),
          _0x22f89c = _0x3943f9 + _0x4a9253 + _0x2baa0a;
        await _0x4bcdd6.wait(_0x22f89c);
        await new Promise(async _0x153196 => {
          setTimeout(() => {
            _0x776a0a = true;
            _0x153196();
          }, _0xe1c4f8);
          await this.got(_0x29ec61).then(_0x3ba3ed => {
            _0x8ce1c7 = _0x3ba3ed;
          }, _0x57d4ca => {
            _0x35a8de = _0x57d4ca;
            _0x8ce1c7 = _0x57d4ca.response;
            _0xc938b8 = _0x35a8de?.["code"] || "";
            _0x7c5964 = _0x35a8de?.["name"] || "";
          });
          _0x153196();
        });
        if (_0x776a0a) {
          this.log("[" + _0x32a37e + "]请求超时(" + _0xe1c4f8 / 1000 + "秒)，重试第" + _0x3e55de + "次");
        } else {
          if (_0x28b89b.includes(_0xc938b8)) {
            this.log("[" + _0x32a37e + "]请求错误[" + _0xc938b8 + "][" + _0x7c5964 + "]");
            if (_0x35a8de?.["message"]) {
              console.log(_0x35a8de.message);
            }
            break;
          } else {
            if (_0x2187a4.includes(_0x7c5964)) {
              this.log("[" + _0x32a37e + "]请求错误[" + _0xc938b8 + "][" + _0x7c5964 + "]，重试第" + _0x3e55de + "次");
            } else {
              if (_0x4b958e.includes(_0xc938b8)) {
                this.log("[" + _0x32a37e + "]请求错误[" + _0xc938b8 + "][" + _0x7c5964 + "]，重试第" + _0x3e55de + "次");
              } else {
                let _0x57423f = _0x8ce1c7?.["statusCode"] || "",
                  _0x53e721 = _0x57423f / 100 | 0;
                if (_0x57423f) {
                  _0x53e721 > 3 && !_0xd86c13.includes(_0x57423f) && (_0x57423f ? this.log("请求[" + _0x32a37e + "]返回[" + _0x57423f + "]") : this.log("请求[" + _0x32a37e + "]错误[" + _0xc938b8 + "][" + _0x7c5964 + "]"));
                  if (_0x53e721 <= 4) {
                    break;
                  }
                } else {
                  this.log("请求[" + _0x32a37e + "]错误[" + _0xc938b8 + "][" + _0x7c5964 + "]");
                }
              }
            }
          }
        }
      } catch (_0x23fc34) {
        _0x23fc34.name == "TimeoutError" ? this.log("[" + _0x32a37e + "]请求超时，重试第" + _0x3e55de + "次") : this.log("[" + _0x32a37e + "]请求错误(" + _0x23fc34.message + ")，重试第" + _0x3e55de + "次");
      }
    }
    if (_0x8ce1c7 == null) {
      return Promise.resolve({
        statusCode: _0xc938b8 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x2142af,
      headers: _0x4aaaa5,
      body: _0x3594c3
    } = _0x8ce1c7;
    if (_0x3594c3) {
      try {
        _0x3594c3 = JSON.parse(_0x3594c3);
      } catch {}
    }
    const _0x2c3e7d = {
      statusCode: _0x2142af,
      headers: _0x4aaaa5,
      result: _0x3594c3
    };
    return Promise.resolve(_0x2c3e7d);
  }
}
let _0x455b01 = _0x20b48d;
try {
  let _0x106fc1 = require("./LocalBasic");
  _0x455b01 = _0x106fc1;
} catch {}
let _0x42a83a = new _0x455b01(_0x4bcdd6);
class _0x3ef7fd extends _0x455b01 {
  constructor(_0x3870f9) {
    super(_0x4bcdd6);
    this.cookieJar = new _0x44ba2b();
    const _0xcb8fb0 = {
      "User-Agent": _0x43e37f
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0xcb8fb0
    });
    let _0x2d6f11 = _0x3870f9.split("#");
    this.token_online = _0x2d6f11[0];
    this.unicomTokenId = _0x4bcdd6.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x4bcdd6.randomString(32, _0x345675 + _0x13aa96).toUpperCase();
    this.rptId = "";
    this.city = [];
    this.t_flmf_task = 0;
    this.t_woread_draw = 0;
    this.need_read_rabbit = false;
    this.moonbox_task_record = {};
    this.moonbox_notified = [];
    this.set_cookie("TOKENID_COOKIE", this.tokenId_cookie);
    this.set_cookie("UNICOM_TOKENID", this.unicomTokenId);
    this.set_cookie("sdkuuid", this.unicomTokenId);
  }
  set_cookie(_0x40e49b, _0x3a0ff2, _0x1c5756 = {}) {
    let _0x4e2d22 = _0x1c5756?.["domain"] || "10010.com",
      _0x37386a = _0x1c5756?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x40e49b, _0x3a0ff2, _0x4e2d22, _0x37386a, _0x1c5756);
  }
  get_bizchannelinfo() {
    const _0x2960fd = {
      bizChannelCode: _0x2746b6,
      disriBiz: _0x18f668,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x53bd5c = JSON.stringify(_0x2960fd);
    return _0x53bd5c;
  }
  get_epay_authinfo() {
    const _0x16d29a = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x16d29a);
  }
  get_flmf_data(_0x132a4a = "welfareCenter") {
    const _0x5d92a2 = {
      sid: this.flmf_sid,
      actcode: _0x132a4a
    };
    return _0x5d92a2;
  }
  encode_woread(_0x462a71, _0x39861b = _0x369b83) {
    let _0x11fff0 = _0x3639b4("AES", "CBC", "Pkcs7", JSON.stringify(_0x462a71), _0x39861b, _0x1f5272);
    return Buffer.from(_0x11fff0, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x4bcdd6.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_woread_m_param() {
    return {
      timestamp: _0x4bcdd6.time("yyyyMMddhhmmss"),
      signtimestamp: Date.now(),
      source: _0x20602e,
      token: this.woread_token
    };
  }
  get_ltyp_sign_header(_0x33c62b) {
    let _0xda9423 = Date.now(),
      _0xa5d068 = Math.floor(89999 * Math.random()) + 100000,
      _0x325270 = _0x298725,
      _0x38e54c = _0x45e951,
      _0x2a519d = _0x481d2f.MD5(_0x33c62b + _0xda9423 + _0xa5d068 + _0x325270 + _0x38e54c).toString();
    const _0x30e6c3 = {
      key: _0x33c62b,
      resTime: _0xda9423,
      reqSeq: _0xa5d068,
      channel: _0x325270,
      version: _0x38e54c,
      sign: _0x2a519d
    };
    return _0x30e6c3;
  }
  async onLine(_0x49b339 = {}) {
    let _0x37e4ad = false;
    try {
      let _0x2e1fd4 = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x4bcdd6.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x4d012f,
            version: _0x147043,
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x1afa25,
          statusCode: _0x486a2f
        } = await this.request(_0x2e1fd4),
        _0x2de5c3 = _0x4bcdd6.get(_0x1afa25, "code", _0x486a2f);
      if (_0x2de5c3 == 0) {
        _0x37e4ad = true;
        this.valid = true;
        this.mobile = _0x1afa25?.["desmobile"];
        // this.name = _0x1afa25?.["desmobile"];
        this.ecs_token = _0x1afa25?.["ecs_token"];
        this.city = _0x1afa25?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0x2de5c3 + "]");
      }
    } catch (_0xbdd6e5) {
      console.log(_0xbdd6e5);
    } finally {
      return _0x37e4ad;
    }
  }
  async openPlatLineNew(_0x161d57, _0x1583a4 = {}) {
    const _0x3f75eb = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0xe9a85 = _0x3f75eb;
    try {
      const _0x1ca8fd = {
        to_url: _0x161d57
      };
      const _0x4b32f1 = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x1ca8fd
      };
      let {
        headers: _0x47508c,
        statusCode: _0x210a77
      } = await this.request(_0x4b32f1);
      if (_0x47508c?.["location"]) {
        let _0x16a9aa = new URL(_0x47508c.location),
          _0xca76bb = _0x16a9aa.searchParams.get("type") || "02",
          _0x40e436 = _0x16a9aa.searchParams.get("ticket");
        !_0x40e436 && this.log("获取ticket失败");
        const _0x1b58a0 = {
          loc: _0x47508c.location,
          ticket: _0x40e436,
          type: _0xca76bb
        };
        _0xe9a85 = _0x1b58a0;
      } else {
        this.log("获取ticket失败[" + _0x210a77 + "]");
      }
    } catch (_0x4609eb) {
      console.log(_0x4609eb);
    } finally {
      return _0xe9a85;
    }
  }
  async gettaskip(_0x58f878 = {}) {
    let _0x4872df = _0x4bcdd6.randomString(32).toUpperCase();
    try {
      const _0x592b6b = {
        mobile: this.mobile,
        orderId: _0x4872df
      };
      const _0x511dec = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x592b6b
      };
      await this.request(_0x511dec);
    } catch (_0x26b30e) {
      console.log(_0x26b30e);
    } finally {
      return _0x4872df;
    }
  }
  async draw_28_queryChance(_0x2da2ca = {}) {
    try {
      const _0x2f8634 = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x267321,
          statusCode: _0x298344
        } = await this.request(_0x2f8634),
        _0x4104f5 = _0x4bcdd6.get(_0x267321, "status", _0x298344);
      if (_0x4104f5 == "0000") {
        let _0x114363 = parseInt(_0x267321?.["data"]?.["allRemainTimes"] || 0),
          _0x453360 = Math.min(_0x330995, _0x114363);
        this.log("28日五折日可以抽奖" + _0x114363 + "次, 去抽" + _0x453360 + "次");
        let _0x4c0fb6 = false;
        while (_0x453360-- > 0) {
          if (_0x4c0fb6) {
            await _0x4bcdd6.wait(8000);
          }
          _0x4c0fb6 = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x3064b5 = _0x267321?.["message"] || _0x267321?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x4104f5 + "]: " + _0x3064b5);
      }
    } catch (_0x1fed48) {
      console.log(_0x1fed48);
    }
  }
  async draw_28_lottery(_0x1bd86b = {}) {
    try {
      const _0x4fd7c0 = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x83cb1b,
          statusCode: _0x11a58b
        } = await this.request(_0x4fd7c0),
        _0x23d72c = _0x4bcdd6.get(_0x83cb1b, "status", _0x11a58b);
      if (_0x23d72c == "0000") {
        let _0x40ffe0 = _0x4bcdd6.get(_0x83cb1b?.["data"], "code", -1);
        if (_0x83cb1b?.["data"]?.["uuid"]) {
          await _0x4bcdd6.wait(2000);
          await this.draw_28_winningRecord(_0x83cb1b.data.uuid);
        } else {
          let _0x3b663b = _0x83cb1b?.["data"]?.["message"] || _0x83cb1b?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x40ffe0 + "]: " + _0x3b663b);
        }
      } else {
        let _0x52a18c = _0x83cb1b?.["message"] || _0x83cb1b?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x23d72c + "]: " + _0x52a18c);
      }
    } catch (_0xbffa06) {
      console.log(_0xbffa06);
    }
  }
  async draw_28_winningRecord(_0x1cded1, _0x2c56d9 = {}) {
    try {
      const _0x466c52 = {
        requestId: _0x1cded1
      };
      const _0x5e9ff2 = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x466c52
      };
      let {
          result: _0x3ebcf4,
          statusCode: _0x1beebd
        } = await this.request(_0x5e9ff2),
        _0x198c84 = _0x4bcdd6.get(_0x3ebcf4, "status", _0x1beebd);
      if (_0x198c84 == "0000") {
        let _0x36608c = _0x4bcdd6.get(_0x3ebcf4?.["data"], "code", -1);
        if (_0x36608c == "0000") {
          const _0x4606a6 = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x3ebcf4?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x4606a6);
        } else {
          let _0xdb3592 = _0x3ebcf4?.["data"]?.["message"] || _0x3ebcf4?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x36608c + "]: " + _0xdb3592);
        }
      } else {
        let _0x46d527 = _0x3ebcf4?.["message"] || _0x3ebcf4?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x198c84 + "]: " + _0x46d527);
      }
    } catch (_0x49bad4) {
      console.log(_0x49bad4);
    }
  }
  async ttlxj_authorize(_0xbd3cda, _0x430e2d, _0x4f1ba2, _0x265b05 = {}) {
    try {
      let _0x1788d5 = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x4f1ba2
          },
          json: {
            response_type: "rptid",
            client_id: _0x230769,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0xbd3cda,
              st_type: _0x430e2d,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x4bcdd6.randomString(13),
              trace_id: _0x4bcdd6.randomString(32)
            }
          }
        },
        {
          result: _0x2dd8f0
        } = await this.request(_0x1788d5),
        _0x1d7fa1 = _0x4bcdd6.get(_0x2dd8f0, "status", -1);
      if (_0x1d7fa1 == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x3e316d = _0x2dd8f0?.["message"] || _0x2dd8f0?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x1d7fa1 + "]: " + _0x3e316d);
      }
    } catch (_0x29470a) {
      console.log(_0x29470a);
    }
  }
  async ttlxj_authCheck(_0x164dbc = {}) {
    try {
      let _0x20c5a9 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x3c461c
        } = await this.request(_0x20c5a9),
        _0x226e8b = _0x4bcdd6.get(_0x3c461c, "code", -1);
      if (_0x226e8b == "0000") {
        let {
          mobile: _0x2547d9,
          sessionId: _0x4b3a59,
          tokenId: _0x2439ee,
          userId: _0x392e02
        } = _0x3c461c?.["data"]?.["authInfo"];
        const _0x4d2750 = {
          sessionId: _0x4b3a59,
          tokenId: _0x2439ee,
          userId: _0x392e02
        };
        Object.assign(this, _0x4d2750);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x226e8b == "2101000100") {
          let _0x542484 = _0x3c461c?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x542484);
        } else {
          let _0x2b7dfa = _0x3c461c?.["msgInside"] || _0x3c461c?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x226e8b + "]: " + _0x2b7dfa);
        }
      }
    } catch (_0x1e051d) {
      console.log(_0x1e051d);
    }
  }
  async ttlxj_login(_0x34e7f4, _0x38e7b5 = {}) {
    try {
      _0x34e7f4 += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x6f8b1b + "&bizChannelCode=" + _0x2746b6;
      const _0x58e63d = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x34e7f4
      };
      let {
        headers: _0x4e9d22,
        statusCode: _0x654515
      } = await this.request(_0x58e63d);
      if (_0x4e9d22?.["location"]) {
        let _0x7fc77 = new URL(_0x4e9d22.location);
        this.rptId = _0x7fc77.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x654515 + "]");
      }
    } catch (_0x4ce113) {
      console.log(_0x4ce113);
    }
  }
  async ttlxj_userDrawInfo(_0x5b3335 = {}) {
    try {
      let _0x2cf371 = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x5ced0d
        } = await this.request(_0x2cf371),
        _0x3e0695 = _0x4bcdd6.get(_0x5ced0d, "code", -1);
      if (_0x3e0695 == "0000") {
        let _0x553918 = _0x5ced0d?.["data"]?.["dayOfWeek"],
          _0xfc0ea2 = "day" + _0x553918,
          _0x3477fc = _0x5ced0d?.["data"]?.[_0xfc0ea2] == "1";
        const _0x1e8ab0 = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x3477fc ? "未" : "已") + "打卡", _0x1e8ab0);
        if (_0x3477fc) {
          let _0x513fbe = new Date().getDay();
          _0x513fbe % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0x452cc8 = _0x5ced0d?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x3e0695 + "]: " + _0x452cc8);
      }
    } catch (_0x3afea9) {
      console.log(_0x3afea9);
    }
  }
  async ttlxj_unifyDrawNew(_0x188535, _0xcf1730 = {}) {
    try {
      let _0x5484e1 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            drawType: _0x188535,
            bizFrom: _0x6f8b1b,
            activityId: _0x80da4f.ttlxj
          }
        },
        {
          result: _0x5b1fa7
        } = await this.request(_0x5484e1),
        _0x15a62b = _0x4bcdd6.get(_0x5b1fa7, "code", -1);
      if (_0x15a62b == "0000" && _0x5b1fa7?.["data"]?.["returnCode"] == 0) {
        let _0x25111e = _0x5b1fa7?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x5b1fa7?.["data"]?.["amount"]);
        const _0x49d1f6 = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x25111e, _0x49d1f6);
      } else {
        let _0x54c9bb = _0x5b1fa7?.["data"]?.["returnMsg"] || _0x5b1fa7?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x5b1fa7?.["data"]?.["returnCode"] || _0x15a62b) + "]: " + _0x54c9bb);
      }
    } catch (_0x68a7a6) {
      console.log(_0x68a7a6);
    }
  }
  async ttlxj_h(_0xb78614 = {}) {
    try {
      let _0x3bc4de = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x6f8b1b,
          activityId: _0x80da4f.ttlxj,
          uid: _0x5cb4b4
        }
      };
      await this.request(_0x3bc4de);
    } catch (_0x3ef35b) {
      console.log(_0x3ef35b);
    }
  }
  async ttlxj_queryAvailable(_0x268fd8 = {}) {
    try {
      let _0x2843d9 = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x33c78c
        } = await this.request(_0x2843d9),
        _0x556cf3 = _0x4bcdd6.get(_0x33c78c, "code", -1);
      if (_0x556cf3 == "0000" && _0x33c78c?.["data"]?.["returnCode"] == 0) {
        let _0x4b151e = _0x33c78c?.["data"]?.["availableAmount"] || 0;
        const _0x2dc283 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x4b151e / 100).toFixed(2) + "元", _0x2dc283);
        let _0x5909c9 = [],
          _0x54c669 = Date.now();
        for (let _0x271395 of _0x33c78c?.["data"]?.["prizeList"]?.["filter"](_0x5ed035 => _0x5ed035.status == "A")) {
          let _0x25c283 = _0x271395.endTime,
            _0x91b9b = new Date(_0x25c283.slice(0, 4) + "-" + _0x25c283.slice(4, 6) + "-" + _0x25c283.slice(6, 8) + " 00:00:00"),
            _0x382c8f = _0x91b9b.getTime();
          if (_0x382c8f - _0x54c669 < _0x479873 * 24 * 60 * 60 * 1000) {
            let _0x3bc7df = _0x4bcdd6.time("yyyy-MM-dd", _0x382c8f);
            const _0x33ce2d = {
              timestamp: _0x382c8f,
              date: _0x3bc7df,
              amount: _0x271395.amount
            };
            _0x5909c9.push(_0x33ce2d);
          }
        }
        if (_0x5909c9.length) {
          const _0x5da120 = {
            timestamp: 0
          };
          let _0x4610db = _0x5da120,
            _0x115ab2 = _0x5909c9.reduce(function (_0x68380c, _0x2e5408) {
              (_0x4610db.timestamp == 0 || _0x2e5408.timestamp < _0x4610db.timestamp) && (_0x4610db = _0x2e5408);
              return _0x68380c + parseFloat(_0x2e5408.amount);
            }, 0);
          const _0x571bfe = {
            notify: true
          };
          this.log(_0x479873 + "天内过期立减金: " + _0x115ab2.toFixed(2) + "元", _0x571bfe);
          const _0x18cd65 = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x4610db.amount + "元 -- " + _0x4610db.date + "过期", _0x18cd65);
        } else {
          const _0x2185df = {
            notify: true
          };
          this.log(_0x479873 + "天内没有过期的立减金", _0x2185df);
        }
      } else {
        let _0x5e4f10 = _0x33c78c?.["data"]?.["returnMsg"] || _0x33c78c?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x33c78c?.["data"]?.["returnCode"] || _0x556cf3) + "]: " + _0x5e4f10);
      }
    } catch (_0x5372d2) {
      console.log(_0x5372d2);
    }
  }
  async epay_28_authCheck(_0x1a126a = {}) {
    try {
      let _0x27e1cf = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x4f8a5f
        } = await this.request(_0x27e1cf),
        _0x36542f = _0x4bcdd6.get(_0x4f8a5f, "code", -1);
      if (_0x36542f == "0000") {
        let {
          mobile: _0x5141a1,
          sessionId: _0x367ad7,
          tokenId: _0x138755,
          userId: _0x1a4930
        } = _0x4f8a5f?.["data"]?.["authInfo"];
        const _0x35eca9 = {
          sessionId: _0x367ad7,
          tokenId: _0x138755,
          userId: _0x1a4930
        };
        Object.assign(this, _0x35eca9);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x36542f == "2101000100") {
          let _0x5f025b = _0x4f8a5f?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x5f025b);
        } else {
          let _0x52b72a = _0x4f8a5f?.["msgInside"] || _0x4f8a5f?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x36542f + "]: " + _0x52b72a);
        }
      }
    } catch (_0x396593) {
      console.log(_0x396593);
    }
  }
  async epay_28_login(_0x444f55, _0x5e55c3 = {}) {
    try {
      let _0x5dd333 = _0x4bcdd6.time("yyyyMM") + "28ZFR";
      _0x444f55 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x5dd333 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x39600f = {
        fn: "epay_28_login",
        method: "get",
        url: _0x444f55
      };
      let {
        headers: _0x217cc1,
        statusCode: _0x2a2285
      } = await this.request(_0x39600f);
      if (_0x217cc1?.["location"]) {
        let _0x543f0b = new URL(_0x217cc1.location);
        this.rptId = _0x543f0b.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x2a2285 + "]");
      }
    } catch (_0x5892a1) {
      console.log(_0x5892a1);
    }
  }
  async epay_28_queryUserPage(_0x2f733e = {}) {
    try {
      let _0x2bd2a0 = _0x4bcdd6.time("yyyyMM") + "28ZFR";
      const _0x5bb124 = {
        templateName: _0x2bd2a0
      };
      let _0x10c0fd = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x5bb124
        },
        {
          result: _0x5bd2dc
        } = await this.request(_0x10c0fd),
        _0x415153 = _0x4bcdd6.get(_0x5bd2dc, "code", -1);
      if (_0x415153 == "0000" && _0x5bd2dc?.["data"]?.["returnCode"] == 0) {
        for (let _0x39b812 of _0x5bd2dc?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          _0x39b812?.["rainbowUnitInfos"]?.[0]?.["unitActivityId"] && (await this.epay_28_unifyDraw(_0x39b812.rainbowUnitInfos[0]));
          if (_0x39b812?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x2bd2a0, _0x39b812.mouldName);
            break;
          }
        }
      } else {
        let _0x332206 = _0x5bd2dc?.["message"] || _0x5bd2dc?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x415153 + "]: " + _0x332206);
      }
    } catch (_0x5dc793) {
      console.log(_0x5dc793);
    }
  }
  async epay_28_queryMiddleUnit(_0xc4e698, _0xc256ec, _0x146183 = {}) {
    try {
      const _0x30d354 = {
        activityId: _0xc4e698,
        mouldName: _0xc256ec
      };
      let _0x1796d7 = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x30d354
        },
        {
          result: _0x2d4f1a
        } = await this.request(_0x1796d7),
        _0x3406e5 = _0x4bcdd6.get(_0x2d4f1a, "code", -1);
      if (_0x3406e5 == "0000") {
        let _0x21cf6d = _0x4bcdd6.time("dd");
        _0x2d4f1a?.["data"]?.[_0x21cf6d] == "1" ? this.log("联通支付日今日(" + _0x21cf6d + "号)已打卡") : await this.epay_28_unifyDrawNew(_0xc4e698, _0xc256ec);
      } else {
        let _0x417e32 = _0x2d4f1a?.["message"] || _0x2d4f1a?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x3406e5 + "]: " + _0x417e32);
      }
    } catch (_0x2ddc0e) {
      console.log(_0x2ddc0e);
    }
  }
  async epay_28_unifyDrawNew(_0x3290fc, _0x392c5, _0x57cb9f = {}) {
    try {
      const _0x5d7a66 = {
        bizFrom: _0x6f8b1b,
        activityId: _0x3290fc,
        mouldName: _0x392c5
      };
      let _0x32752f = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x5d7a66
        },
        {
          result: _0x1c8d97
        } = await this.request(_0x32752f),
        _0x49371c = _0x4bcdd6.get(_0x1c8d97, "code", -1);
      if (_0x49371c == "0000" && _0x1c8d97?.["data"]?.["returnCode"] == 0) {
        let _0xccc23e = _0x1c8d97?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x1c8d97?.["data"]?.["amount"]);
        const _0x49be9b = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0xccc23e, _0x49be9b);
      } else {
        let _0xdf5dbe = _0x1c8d97?.["data"]?.["returnMsg"] || _0x1c8d97?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x1c8d97?.["data"]?.["returnCode"] || _0x49371c) + "]: " + _0xdf5dbe);
      }
    } catch (_0xc5258f) {
      console.log(_0xc5258f);
    }
  }
  async epay_28_unifyDraw(_0x2b92ef, _0x2578be = {}) {
    try {
      const _0x51cafc = {
        activityId: _0x2b92ef.unitActivityId,
        isBigActivity: _0x2b92ef.isBigActivity,
        bigActivityId: _0x2b92ef.bigActivityId,
        bizFrom: _0x6f8b1b
      };
      let _0x4a4ad3 = {
          fn: "epay_28_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x51cafc
        },
        {
          result: _0x4616d7
        } = await this.request(_0x4a4ad3),
        _0x597801 = _0x4bcdd6.get(_0x4616d7, "code", -1);
      if (_0x597801 == "0000" && _0x4616d7?.["data"]?.["returnCode"] == 0) {
        const _0x2112bd = {
          notify: true
        };
        this.log("联通支付日抽奖: " + (_0x4616d7?.["data"]?.["prizeName"] || ""), _0x2112bd);
      } else {
        let _0x39d073 = _0x4616d7?.["data"]?.["returnMsg"] || _0x4616d7?.["msg"] || "";
        this.log("联通支付日抽奖失败[" + (_0x4616d7?.["data"]?.["returnCode"] || _0x597801) + "]: " + _0x39d073);
      }
    } catch (_0x25c875) {
      console.log(_0x25c875);
    }
  }
  async appMonth_28_bind(_0x36f768, _0x1d94a8 = {}) {
    try {
      const _0x20dea9 = {
        fn: "appMonth_28_bind",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/bind",
        form: {},
        valid_code: [401]
      };
      _0x20dea9.form.shareCode = _0x36f768;
      _0x20dea9.form.cl = "WeChat";
      let {
        result: _0x1e3501
      } = await this.request(_0x20dea9);
    } catch (_0x28e06b) {
      console.log(_0x28e06b);
    }
  }
  async appMonth_28_queryChance(_0x53c7f5 = {}) {
    try {
      const _0x588118 = {
        fn: "appMonth_28_queryChance",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x57f0da
        } = await this.request(_0x588118),
        _0x9ce542 = _0x4bcdd6.get(_0x57f0da, "status", -1);
      if (_0x9ce542 == "0000") {
        let {
          allRemainTimes: _0x2cfc95,
          isUnicom: _0x56c61c
        } = _0x57f0da?.["data"];
        if (_0x56c61c) {
          let _0x3a6b89 = Math.min(_0x5170bd, _0x2cfc95);
          this.log("联通支付日可以开宝箱" + _0x2cfc95 + "次, 去抽" + _0x3a6b89 + "次");
          while (_0x3a6b89-- > 0) {
            await this.appMonth_28_lottery();
          }
        }
      } else {
        let _0x2639d5 = _0x57f0da?.["msg"] || "";
        this.log("联通支付日查询开宝箱次数失败[" + _0x9ce542 + "]: " + _0x2639d5);
      }
    } catch (_0x95148c) {
      console.log(_0x95148c);
    }
  }
  async appMonth_28_lottery(_0xf4d55a = {}) {
    try {
      const _0x221049 = {
        fn: "appMonth_28_lottery",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x1255d7
        } = await this.request(_0x221049),
        _0xc8b8d3 = _0x4bcdd6.get(_0x1255d7, "status", -1);
      if (_0xc8b8d3 == "0000") {
        let {
          code: _0x1b0b6c,
          uuid: _0x2f3dad
        } = _0x1255d7?.["data"];
        _0x2f3dad ? await this.appMonth_28_winningRecord(_0x2f3dad) : this.log("联通支付日开宝箱失败[" + _0x1b0b6c + "]");
      } else {
        let _0x7c2dd5 = _0x1255d7?.["msg"] || "";
        this.log("联通支付日开宝箱失败[" + _0xc8b8d3 + "]: " + _0x7c2dd5);
      }
    } catch (_0x4dc455) {
      console.log(_0x4dc455);
    }
  }
  async appMonth_28_winningRecord(_0x49c4b3, _0x4294d2 = {}) {
    try {
      const _0x4b27d0 = {
        requestId: _0x49c4b3
      };
      const _0x6ce351 = {
        fn: "appMonth_28_winningRecord",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x4b27d0
      };
      let {
          result: _0x1f716c
        } = await this.request(_0x6ce351),
        _0x236166 = _0x4bcdd6.get(_0x1f716c, "status", -1);
      if (_0x236166 == "0000") {
        let {
          code: _0x18296d,
          prizeName: _0xfc47d9
        } = _0x1f716c?.["data"];
        if (_0x18296d == "0000") {
          const _0x3a0ca6 = {
            notify: true
          };
          this.log("联通支付日开宝箱: " + _0xfc47d9, _0x3a0ca6);
        } else {
          let _0x45b2d3 = _0x1f716c?.["data"]?.["message"] || "";
          this.log("联通支付日开宝箱[" + _0x18296d + "]: " + _0x45b2d3);
        }
      } else {
        let _0x1ebab8 = _0x1f716c?.["msg"] || "";
        this.log("联通支付日查询中奖奖品错误[" + _0x236166 + "]: " + _0x1ebab8);
      }
    } catch (_0x8b0e90) {
      console.log(_0x8b0e90);
    }
  }
  async sign_getContinuous(_0x36ae18 = {}) {
    try {
      const _0xdd11b4 = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: {}
      };
      _0xdd11b4.form.taskId = "";
      _0xdd11b4.form.channel = "shouye";
      _0xdd11b4.form.imei = "";
      let {
          result: _0x5b464c
        } = await this.request(_0xdd11b4),
        _0x302f35 = _0x4bcdd6.get(_0x5b464c, "status", -1);
      if (_0x302f35 == "0000") {
        let _0x6acaa7 = _0x5b464c?.["data"]?.["todaySigned"] || 0;
        const _0x3c908a = {
          notify: true
        };
        this.log("签到区今天" + (_0x6acaa7 == "1" ? "未" : "已") + "签到", _0x3c908a);
        _0x6acaa7 == "1" && (await _0x4bcdd6.wait(1000), await this.sign_daySign());
      } else {
        let _0x202612 = _0x5b464c?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x302f35 + "]: " + _0x202612);
      }
    } catch (_0x26b0e0) {
      console.log(_0x26b0e0);
    }
  }
  async sign_daySign(_0x29d19b = {}) {
    try {
      const _0x578157 = {
        shareCl: "",
        shareCode: ""
      };
      const _0x421a8b = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0x578157
      };
      let {
          result: _0x34802a
        } = await this.request(_0x421a8b),
        _0x5a2df9 = _0x4bcdd6.get(_0x34802a, "status", -1);
      if (_0x5a2df9 == "0000") {
        let {
          prizeName: _0x30a1b9,
          redSignMessage: _0x130dd2
        } = _0x34802a?.["data"];
        const _0x1b6ab8 = {
          notify: true
        };
        this.log("签到区签到成功: [" + _0x30a1b9 + "]" + _0x130dd2, _0x1b6ab8);
      } else {
        let _0x5739a5 = _0x34802a?.["msg"] || "";
        this.log("签到区签到失败[" + _0x5a2df9 + "]: " + _0x5739a5);
      }
    } catch (_0x5e0fe7) {
      console.log(_0x5e0fe7);
    }
  }
  async sign_queryBubbleTask(_0x23f9ba = {}) {
    try {
      const _0x2bdfcd = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x54a803
        } = await this.request(_0x2bdfcd),
        _0x557cc6 = _0x4bcdd6.get(_0x54a803, "status", -1);
      if (_0x557cc6 == "0000") {
        for (let _0x25f76f of _0x54a803?.["data"]?.["paramsList"]?.["filter"](_0x44add3 => _0x44add3.taskState == 1)) {
          let _0x3e8887 = await this.gettaskip();
          await this.sign_doTask(_0x25f76f, _0x3e8887);
        }
      } else {
        let _0x1447e8 = _0x54a803?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x557cc6 + "]: " + _0x1447e8);
      }
    } catch (_0x258deb) {
      console.log(_0x258deb);
    }
  }
  async sign_doTask(_0x2fff9a, _0x4e5a5f, _0xc4caad = {}) {
    try {
      const _0x188bde = {
        id: _0x2fff9a.id,
        orderId: _0x4e5a5f,
        imei: "BB97982E-3F03-46D3-B904-819D626DF478",
        prizeType: _0x2fff9a.rewardType,
        positionFlag: 0
      };
      const _0x4d3ad5 = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: _0x188bde
      };
      let {
          result: _0x10c598
        } = await this.request(_0x4d3ad5),
        _0x318591 = _0x4bcdd6.get(_0x10c598, "status", -1);
      if (_0x318591 == "0000") {
        this.log("完成任务[" + _0x2fff9a.actName + "]获得: " + _0x10c598?.["data"]?.["prizeCount"] + _0x10c598?.["data"]?.["prizeName"]);
      } else {
        let _0x56a66e = _0x10c598?.["msg"] || "";
        this.log("完成任务[" + _0x2fff9a.actName + "]失败[" + _0x318591 + "]: " + _0x56a66e);
      }
    } catch (_0x5eb908) {
      console.log(_0x5eb908);
    }
  }
  async game_login(_0x55d271, _0x26d008 = {}) {
    try {
      const _0x2c62c6 = {
        channelid: "GAMELTAPP_90005"
      };
      const _0x5884c1 = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: _0x2c62c6,
        json: {}
      };
      _0x5884c1.json.identityType = "esToken";
      _0x5884c1.json.code = this.ecs_token;
      _0x5884c1.json.ticket = _0x55d271;
      _0x5884c1.json.uuid = _0x343550;
      let {
          result: _0x1302ac
        } = await this.request(_0x5884c1),
        _0xa0c507 = _0x4bcdd6.get(_0x1302ac, "code", -1);
      if (_0xa0c507 == 200) {
        this.game_token = _0x1302ac?.["data"]?.["access_token"];
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
        const _0x21ab36 = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x21ab36);
      } else {
        let _0x3f8e26 = _0x1302ac?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0xa0c507 + "]: " + _0x3f8e26);
      }
    } catch (_0x1687ae) {
      console.log(_0x1687ae);
    }
  }
  async game_getMemberInfo(_0x100af8 = {}) {
    try {
      const _0xaa93e1 = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0x194594
        } = await this.request(_0xaa93e1),
        _0x45eba3 = _0x4bcdd6.get(_0x194594, "code", -1);
      if (_0x45eba3 == 200) {
        this.point = _0x194594?.["data"]?.["userIntegral"];
      } else {
        let _0x5371ff = _0x194594?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x45eba3 + "]: " + _0x5371ff);
      }
    } catch (_0x7a1fef) {
      console.log(_0x7a1fef);
    }
  }
  async game_signRecord(_0x14f9df = {}) {
    try {
      const _0x39ac48 = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x331c8e
        } = await this.request(_0x39ac48),
        _0x8a2768 = _0x4bcdd6.get(_0x331c8e, "code", -1);
      if (_0x8a2768 == 200) {
        for (let _0x517cc9 of _0x331c8e?.["data"]) {
          if (_0x517cc9.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x517cc9.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x517cc9.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x1dc24a = _0x331c8e?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x8a2768 + "]: " + _0x1dc24a);
      }
    } catch (_0x44fa5e) {
      console.log(_0x44fa5e);
    }
  }
  async game_signIn(_0x5b993e = {}) {
    try {
      const _0x5d6a92 = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x43de99
        } = await this.request(_0x5d6a92),
        _0x4a8a48 = _0x4bcdd6.get(_0x43de99, "code", -1);
      if (_0x4a8a48 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x6e8ce5 = _0x43de99?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x4a8a48 + "]: " + _0x6e8ce5);
      }
    } catch (_0x3dd4dc) {
      console.log(_0x3dd4dc);
    }
  }
  async game_checkSlider(_0x57abc5 = {}) {
    let _0x5513da = false;
    try {
      const _0x45b511 = {
        xPos: 234
      };
      const _0x5b0a8c = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x45b511
      };
      let {
          result: _0x2a3255
        } = await this.request(_0x5b0a8c),
        _0x42a9f6 = _0x4bcdd6.get(_0x2a3255, "code", -1);
      if (_0x42a9f6 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x2b2a6a = _0x2a3255?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x42a9f6 + "]: " + _0x2b2a6a);
      }
    } catch (_0x90988b) {
      console.log(_0x90988b);
    } finally {
      return _0x5513da;
    }
  }
  async game_lottery(_0x552931 = {}) {
    try {
      let _0xf6c7cd = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x4bcdd6.get(_0x552931, "id", 1)
          }
        },
        {
          result: _0x30bee3
        } = await this.request(_0xf6c7cd),
        _0x36ce0b = _0x4bcdd6.get(_0x30bee3, "code", -1);
      if (_0x36ce0b == 200) {
        const _0x3f7c89 = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x30bee3?.["data"]?.["productName"], _0x3f7c89);
      } else {
        let _0x5d193e = _0x30bee3?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x36ce0b + "]: " + _0x5d193e);
      }
    } catch (_0x295a7c) {
      console.log(_0x295a7c);
    }
  }
  async game_taskList(_0x31575c = {}) {
    try {
      const _0x456cb7 = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0x40151b
        } = await this.request(_0x456cb7),
        _0x456703 = _0x4bcdd6.get(_0x40151b, "code", -1);
      if (_0x456703 == 200) {
        for (let _0x36cb0b of _0x40151b?.["data"]) {
          switch (_0x36cb0b.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0x36cb0b);
              break;
            case 2:
              break;
            default:
              _0x4bcdd6.log("任务[" + _0x36cb0b.taskName + "]未知状态[" + _0x36cb0b.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0xadae83 = _0x40151b?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x456703 + "]: " + _0xadae83);
      }
    } catch (_0x1ef145) {
      console.log(_0x1ef145);
    }
  }
  async game_taskReceive(_0x268f63, _0x15ecae = {}) {
    try {
      const _0x31b339 = {
        productId: _0x268f63.productId,
        taskId: _0x268f63.id
      };
      const _0x262d5e = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x31b339
      };
      let {
          result: _0x167f1b
        } = await this.request(_0x262d5e),
        _0xc5441f = _0x4bcdd6.get(_0x167f1b, "code", -1);
      if (_0xc5441f == 200) {
        this.log("领取任务[" + _0x268f63.taskName + "]奖励成功");
      } else {
        let _0x15eb88 = _0x167f1b?.["msg"] || "";
        this.log("领取任务[" + _0x268f63.taskName + "]奖励失败[" + _0xc5441f + "]: " + _0x15eb88);
      }
    } catch (_0x3fafc9) {
      console.log(_0x3fafc9);
    }
  }
  async game_playSave(_0x144259 = {}) {
    try {
      let _0x4f776e = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x4bcdd6.randomString(2, "0123456789")
          }
        },
        {
          result: _0x28e82e
        } = await this.request(_0x4f776e),
        _0x3b20f7 = _0x4bcdd6.get(_0x28e82e, "code", -1);
      if (!(_0x3b20f7 == 200)) {
        let _0x3ac668 = _0x28e82e?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x3b20f7 + "]: " + _0x3ac668);
      }
    } catch (_0x14e895) {
      console.log(_0x14e895);
    }
  }
  async flmf_login(_0x270e32, _0xb171a1 = {}) {
    try {
      const _0x217154 = {
        fn: "flmf_login",
        method: "get",
        url: _0x270e32
      };
      let {
        headers: _0x5c2b6a,
        statusCode: _0x4c14fc
      } = await this.request(_0x217154);
      if (_0x5c2b6a?.["location"]) {
        let _0xc4060d = new URL(_0x5c2b6a.location);
        this.flmf_sid = _0xc4060d.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x4c14fc + "]");
      }
    } catch (_0x34f133) {
      console.log(_0x34f133);
    }
  }
  async flmf_signInInit(_0x2fb4c2 = {}) {
    try {
      let _0x4f36a8 = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x360f22
        } = await this.request(_0x4f36a8),
        _0x12f352 = _0x4bcdd6.get(_0x360f22, "resultCode", -1);
      if (_0x12f352 == "0000") {
        this.log("福利魔方今天" + (_0x360f22?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x360f22?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x360f22?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x4fb3ec = _0x360f22?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x12f352 + "]: " + _0x4fb3ec);
      }
    } catch (_0xdefac) {
      console.log(_0xdefac);
    }
  }
  async flmf_signIn(_0x875a85 = {}) {
    try {
      let _0x4f3d95 = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x59c356
        } = await this.request(_0x4f3d95),
        _0x2dc9fa = _0x4bcdd6.get(_0x59c356, "resultCode", -1);
      if (_0x2dc9fa == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x49857b = _0x59c356?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x2dc9fa + "]: " + _0x49857b);
      }
    } catch (_0x7b2aaa) {
      console.log(_0x7b2aaa);
    }
  }
  async flmf_taskList(_0x54b744 = {}) {
    try {
      let _0x176ea6 = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x21674a
        } = await this.request(_0x176ea6),
        _0x1dff9c = _0x4bcdd6.get(_0x21674a, "resultCode", -1);
      if (_0x1dff9c == "0000") {
        for (let _0xbff0c of _0x21674a?.["data"]?.["taskInfoList"]) {
          for (let _0x449e52 of _0xbff0c.taskInfoList.filter(_0x448adf => !_0x448adf.done)) {
            for (let _0xd301fe = _0x449e52.hascount; _0xd301fe < _0x449e52.count; _0xd301fe++) {
              await this.flmf_gogLance(_0x449e52.id);
            }
          }
        }
      } else {
        let _0x5efa01 = _0x21674a?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x1dff9c + "]: " + _0x5efa01);
      }
    } catch (_0x4ffde4) {
      console.log(_0x4ffde4);
    }
  }
  async flmf_scanTask() {
    for (let _0x44c645 of _0x17a236) {
      await this.flmf_gogLance(_0x44c645);
    }
  }
  async flmf_gogLance(_0x2ffed7, _0x17b9d3 = {}) {
    try {
      let _0x543264 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x2ffed7,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x3b80b4
        } = await this.request(_0x543264);
      await _0x4bcdd6.wait_gap_interval(this.t_flmf_task, _0x17c786);
      let _0x323d5d = _0x4bcdd6.get(_0x3b80b4, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x323d5d == "0000") {
        this.log("完成任务[" + _0x2ffed7 + "]成功");
      } else {
        let _0x2cff33 = _0x3b80b4?.["resultMsg"] || "";
        this.log("完成任务[" + _0x2ffed7 + "]失败[" + _0x323d5d + "]: " + _0x2cff33);
      }
    } catch (_0x290777) {
      console.log(_0x290777);
    }
  }
  async woread_api(_0x44e4e5) {
    let _0x4a2e6c = await this.request(_0x4bcdd6.copy(_0x44e4e5)),
      _0x4a939a = _0x4a2e6c?.["result"]?.["message"] || "";
    _0x4a939a?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x4a2e6c = await this.request(_0x4bcdd6.copy(_0x44e4e5)));
    return _0x4a2e6c;
  }
  switch_woread_token(_0x2a3f2c) {
    const _0x309392 = {
      accesstoken: _0x2a3f2c
    };
    const _0x34ee3d = {
      headers: _0x309392
    };
    this.got = this.got.extend(_0x34ee3d);
  }
  async woread_auth(_0x2cbb53 = {}) {
    let _0x5c5b3d = false;
    try {
      let _0x2d54b7 = _0x4bcdd6.time("yyyyMMddhhmmss");
      const _0x1ee8e6 = {
        timestamp: _0x2d54b7
      };
      let _0x49bca7 = this.encode_woread(_0x1ee8e6),
        _0x21faea = Date.now().toString(),
        _0x40e965 = _0x481d2f.MD5(_0x276684 + _0x5a5cd2 + _0x21faea).toString();
      const _0x11ecad = {
        sign: _0x49bca7
      };
      const _0x3a3fb6 = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x276684 + "/" + _0x21faea + "/" + _0x40e965,
        json: _0x11ecad
      };
      let {
          result: _0x445aea
        } = await this.request(_0x3a3fb6),
        _0xc0f102 = _0x4bcdd6.get(_0x445aea, "code", -1);
      if (_0xc0f102 == "0000") {
        _0x5c5b3d = true;
        this.woread_accesstoken = _0x445aea?.["data"]?.["accesstoken"];
        this.switch_woread_token(this.woread_accesstoken);
      } else {
        let _0x52fd26 = _0x445aea?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0xc0f102 + "]: " + _0x52fd26);
      }
    } catch (_0x18e48f) {
      console.log(_0x18e48f);
    } finally {
      return _0x5c5b3d;
    }
  }
  async woread_login(_0x105cd5 = {}) {
    let _0x4408ec = false;
    try {
      let _0x564579 = {
          phone: this.mobile,
          timestamp: _0x4bcdd6.time("yyyyMMddhhmmss")
        },
        _0x7f3f77 = this.encode_woread(_0x564579);
      const _0xc58002 = {
        sign: _0x7f3f77
      };
      const _0x2f4d49 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0xc58002
      };
      let {
          result: _0x26c726
        } = await this.request(_0x2f4d49),
        _0x165af4 = _0x4bcdd6.get(_0x26c726, "code", -1);
      if (_0x165af4 == "0000") {
        _0x4408ec = true;
        let {
          userid: _0x548a84,
          userindex: _0x480124,
          token: _0x5e8b9d,
          verifycode: _0xe97168
        } = _0x26c726?.["data"];
        this.woread_token = _0x5e8b9d;
        this.woread_verifycode = _0xe97168;
        const _0xd678f9 = {
          woread_userid: _0x548a84,
          woread_userindex: _0x480124,
          woread_token: _0x5e8b9d,
          woread_verifycode: _0xe97168
        };
        Object.assign(this, _0xd678f9);
      } else {
        let _0x2ac10e = _0x26c726?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x165af4 + "]: " + _0x2ac10e);
      }
    } catch (_0x3cca98) {
      console.log(_0x3cca98);
    } finally {
      return _0x4408ec;
    }
  }
  async woread_m_auth(_0x43f61a = {}) {
    let _0x98a638 = false;
    try {
      let _0x47ef78 = Date.now().toString(),
        _0x5cdd10 = _0x481d2f.MD5(_0x55dd02 + _0x3f3ace + _0x47ef78).toString();
      const _0x2d8cf8 = {
        fn: "woread_auth",
        method: "get",
        url: "https:///m.woread.com.cn/api/union/app/auth/" + _0x55dd02 + "/" + _0x47ef78 + "/" + _0x5cdd10
      };
      let {
          result: _0xf1ef37
        } = await this.request(_0x2d8cf8),
        _0x46a250 = _0x4bcdd6.get(_0xf1ef37, "code", -1);
      if (_0x46a250 == "0000") {
        _0x98a638 = true;
        this.woread_m_accesstoken = _0xf1ef37?.["data"]?.["accesstoken"];
        this.switch_woread_token(this.woread_m_accesstoken);
      } else {
        let _0x11a60c = _0xf1ef37?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x46a250 + "]: " + _0x11a60c);
      }
    } catch (_0x1565f5) {
      console.log(_0x1565f5);
    } finally {
      return _0x98a638;
    }
  }
  async woread_m_login(_0x1226fa = {}) {
    let _0x35aa34 = false;
    try {
      let _0x306412 = {
        userid: this.woread_userid,
        token: this.woread_token,
        timestamp: Date.now()
      };
      const _0x28add2 = {
        fn: "woread_login",
        method: "get",
        url: "https://m.woread.com.cn/api/union/user/thirdPartyFreeLogin"
      };
      let {
          result: _0x32867f
        } = await this.request(_0x28add2),
        _0x5cf7db = _0x4bcdd6.get(_0x32867f, "code", -1);
      if (_0x5cf7db == "0000") {
        _0x35aa34 = true;
        let {
          userid: _0x269781,
          userindex: _0x245d1a,
          token: _0x10de7e,
          verifycode: _0x1e47e8
        } = _0x32867f?.["data"];
        this.woread_token = _0x10de7e;
        this.woread_verifycode = _0x1e47e8;
        const _0x291876 = {
          woread_userid: _0x269781,
          woread_userindex: _0x245d1a,
          woread_token: _0x10de7e,
          woread_verifycode: _0x1e47e8
        };
        Object.assign(this, _0x291876);
      } else {
        let _0x41a792 = _0x32867f?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x5cf7db + "]: " + _0x41a792);
      }
    } catch (_0x574c3e) {
      console.log(_0x574c3e);
    } finally {
      return _0x35aa34;
    }
  }
  async woread_getSeeVideoAddNumber(_0x49881e, _0x353663 = {}) {
    try {
      let _0x507567 = {
          activityIndex: _0x49881e,
          ...this.get_woread_param()
        },
        _0xb98518 = this.encode_woread(_0x507567);
      const _0x57f8e6 = {
        sign: _0xb98518
      };
      const _0x710f6 = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0x57f8e6
      };
      let {
          result: _0x918b8d
        } = await this.woread_api(_0x710f6),
        _0x5dff66 = _0x4bcdd6.get(_0x918b8d, "code", -1);
      if (_0x5dff66 == "0000") {
        _0x918b8d?.["data"] == -1 && (await this.woread_addUserSeeVideo(_0x49881e));
      } else {
        let _0xfb2ab3 = _0x918b8d?.["message"] || "";
        this.log("阅读活动[" + _0x49881e + "]查询抽奖视频失败[" + _0x5dff66 + "]: " + _0xfb2ab3);
      }
    } catch (_0x4adbb6) {
      console.log(_0x4adbb6);
    }
  }
  async woread_addUserSeeVideo(_0x2a994d, _0x39b80b = {}) {
    try {
      let _0xacc581 = _0x39b80b.num || 5,
        _0x3cb994 = {
          activityIndex: _0x2a994d,
          num: _0xacc581,
          ...this.get_woread_param()
        },
        _0x3ed2de = this.encode_woread(_0x3cb994);
      const _0x163c69 = {
        sign: _0x3ed2de
      };
      const _0x5481fb = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x163c69
      };
      let {
          result: _0x386e18
        } = await this.woread_api(_0x5481fb),
        _0x3a9769 = _0x4bcdd6.get(_0x386e18, "code", -1);
      if (_0x3a9769 == "0000") {
        this.log("阅读活动[" + _0x2a994d + "]看视频增加抽奖次数成功");
      } else {
        let _0x47edad = _0x386e18?.["message"] || "";
        this.log("阅读活动[" + _0x2a994d + "]看视频增加抽奖次数失败[" + _0x3a9769 + "]: " + _0x47edad);
      }
    } catch (_0x2e1bba) {
      console.log(_0x2e1bba);
    }
  }
  async woread_getActivityNumber(_0x216484, _0x406f6f = {}) {
    try {
      let _0x835a63 = {
          activeIndex: _0x216484,
          ...this.get_woread_param()
        },
        _0x528f2a = this.encode_woread(_0x835a63);
      const _0x13ab2b = {
        sign: _0x528f2a
      };
      const _0x516bd8 = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x13ab2b
      };
      let {
          result: _0x111b12
        } = await this.woread_api(_0x516bd8),
        _0x12661c = _0x4bcdd6.get(_0x111b12, "code", -1);
      if (_0x12661c == "0000") {
        let _0x3b137f = _0x111b12?.["data"] || 0;
        this.log("阅读活动[" + _0x216484 + "]可以抽奖" + _0x3b137f + "次");
        while (_0x3b137f-- > 0) {
          await _0x4bcdd6.wait(5000);
          await this.woread_doDraw(_0x216484);
        }
      } else {
        let _0x208a33 = _0x111b12?.["message"] || "";
        this.log("阅读活动[" + _0x216484 + "]查询抽奖次数失败[" + _0x12661c + "]: " + _0x208a33);
      }
    } catch (_0x4ee6f1) {
      console.log(_0x4ee6f1);
    }
  }
  async woread_addDrawTimes(_0xee3b6a, _0x4b83ea = {}) {
    try {
      let _0x14713d = {
          activetyindex: _0xee3b6a,
          ...this.get_woread_param()
        },
        _0x1d1b05 = this.encode_woread(_0x14713d);
      const _0x5c254c = {
        sign: _0x1d1b05
      };
      const _0x5bf83b = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0x5c254c
      };
      await _0x4bcdd6.wait_gap_interval(this.t_woread_draw, _0x3e05b1);
      let {
        result: _0x1736e8
      } = await this.woread_api(_0x5bf83b);
      this.t_woread_draw = Date.now();
      let _0x358b6d = _0x4bcdd6.get(_0x1736e8, "code", -1);
      if (_0x358b6d == "0000") {
        this.log("阅读活动[" + _0xee3b6a + "]打卡增加抽奖次数成功");
      } else {
        if (_0x358b6d != "9999") {
          let _0x103cc4 = _0x1736e8?.["message"] || "";
          this.log("阅读活动[" + _0xee3b6a + "]打卡增加抽奖次数失败[" + _0x358b6d + "]: " + _0x103cc4);
        }
      }
    } catch (_0x2f0568) {
      console.log(_0x2f0568);
    }
  }
  async woread_doDraw(_0x4477ef, _0x4b6cd6 = {}) {
    try {
      let _0x1f2124 = {
          activeindex: _0x4477ef,
          ...this.get_woread_param()
        },
        _0x4be10b = this.encode_woread(_0x1f2124);
      const _0x5ab524 = {
        sign: _0x4be10b
      };
      const _0x2f8490 = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x5ab524
      };
      await _0x4bcdd6.wait_gap_interval(this.t_woread_draw, _0x3e05b1);
      let {
        result: _0x2a53fa
      } = await this.woread_api(_0x2f8490);
      this.t_woread_draw = Date.now();
      let _0x3ad12d = _0x4bcdd6.get(_0x2a53fa, "code", -1);
      if (_0x3ad12d == "0000") {
        const _0x844a9e = {
          notify: true
        };
        this.log("阅读活动[" + _0x4477ef + "]抽奖: " + (_0x2a53fa?.["data"]?.["prizedesc"] || "空气"), _0x844a9e);
      } else {
        let _0x3c8457 = _0x2a53fa?.["message"] || "";
        this.log("阅读活动[" + _0x4477ef + "]抽奖失败[" + _0x3ad12d + "]: " + _0x3c8457);
      }
    } catch (_0x2a3ef0) {
      console.log(_0x2a3ef0);
    }
  }
  async woread_queryTicketAccount(_0x3179bf = {}) {
    try {
      let _0x5b178e = this.get_woread_param(),
        _0x4e3516 = this.encode_woread(_0x5b178e);
      const _0x412099 = {
        sign: _0x4e3516
      };
      const _0xa4027b = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x412099
      };
      let {
          result: _0x1d2ea8
        } = await this.woread_api(_0xa4027b),
        _0x2ad674 = _0x4bcdd6.get(_0x1d2ea8, "code", -1);
      if (_0x2ad674 == "0000") {
        let _0x52eab5 = (_0x1d2ea8?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x216ab2 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x52eab5, _0x216ab2);
      } else {
        let _0x963e3b = _0x1d2ea8?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x2ad674 + "]: " + _0x963e3b);
      }
    } catch (_0x8e8078) {
      console.log(_0x8e8078);
    }
  }
  async woread_m_queryTicketAccount(_0x81d61 = {}) {
    try {
      let _0x2ca75c = this.get_woread_m_param(),
        _0x4ff394 = this.encode_woread(_0x2ca75c, _0x48e277);
      const _0x26927 = {
        sign: _0x4ff394
      };
      const _0x8720b5 = {
        fn: "woread_m_queryTicketAccount",
        method: "post",
        url: "https://m.woread.com.cn/api/union/phone/vouchers/queryTicketAccount",
        json: _0x26927
      };
      let {
          result: _0x550af5
        } = await this.woread_api(_0x8720b5),
        _0x43ad47 = _0x4bcdd6.get(_0x550af5, "code", -1);
      if (_0x43ad47 == "0000") {
        let _0x48f419 = (_0x550af5?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x20a8ac = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x48f419, _0x20a8ac);
      } else {
        let _0x5c4a10 = _0x550af5?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0x43ad47 + "]: " + _0x5c4a10);
      }
    } catch (_0xe40b9) {
      console.log(_0xe40b9);
    }
  }
  async woread_addReadTime(_0x59de6d = {}) {
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
        } = _0x59de6d,
        _0x35fbff = {
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
        _0x4eea53 = this.encode_woread(_0x35fbff);
      const _0x514e7a = {
        sign: _0x4eea53
      };
      const _0x239b76 = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x514e7a
      };
      let {
          result: _0x2751f6
        } = await this.request(_0x239b76),
        _0x41972e = _0x4bcdd6.get(_0x2751f6, "code", -1);
      if (_0x41972e == "0000") {
        this.log("刷新读小说时间: " + _0x2751f6?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x2751f6?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x591469 = _0x2751f6?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x41972e + "]: " + _0x591469);
      }
    } catch (_0x51cb85) {
      console.log(_0x51cb85);
    }
  }
  async woread_m_addReadTime(_0x3de7b2 = {}) {
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
        } = _0x3de7b2,
        _0x2d50d9 = {
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
          ...this.get_woread_m_param()
        },
        _0x2b71f2 = this.encode_woread(_0x2d50d9, _0x48e277);
      const _0x38883f = {
        sign: _0x2b71f2
      };
      const _0x5c50da = {
        fn: "woread_m_addReadTime",
        method: "post",
        url: "https:///m.woread.com.cn/api/union/history/addReadTime",
        json: _0x38883f
      };
      let {
          result: _0x500a91
        } = await this.request(_0x5c50da),
        _0x11a5bf = _0x4bcdd6.get(_0x500a91, "code", -1);
      if (_0x11a5bf == "0000") {
        this.log("刷新读小说时间: " + _0x500a91?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x500a91?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x35f366 = _0x500a91?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x11a5bf + "]: " + _0x35f366);
      }
    } catch (_0x332594) {
      console.log(_0x332594);
    }
  }
  async rabblit_queryActivityData(_0x3e1d89 = {}) {
    try {
      let _0x5b2bda = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x264862 = this.encode_woread(_0x5b2bda);
      const _0x3781c5 = {
        sign: _0x264862
      };
      const _0x2d8444 = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0x3781c5
      };
      let {
          result: _0xd8444f
        } = await this.woread_api(_0x2d8444),
        _0x40faef = _0x4bcdd6.get(_0xd8444f, "code", -1);
      if (_0x40faef == "0000") {
        let {
          totalcharpternums: _0x553f39,
          totalreadnums: _0x3d85e3,
          status: _0x4a0e1d,
          activitystatus: _0x3f8bde
        } = _0xd8444f?.["data"];
        if (_0x3f8bde == 1) {
          this.need_read_rabbit = false;
          const _0xbca0d = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0xbca0d);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x3d85e3 + "/" + _0x553f39 + "分钟");
        if (_0x4a0e1d == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x3d85e3 >= _0x553f39) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x27d026 = _0xd8444f?.["message"] || "";
        _0x27d026?.["includes"]("未参加") && !_0x3e1d89.join_retry && (await this.rabblit_joinRuning()) ? (_0x3e1d89.join_retry = true, await this.rabblit_queryActivityData(_0x3e1d89)) : this.log("龟兔赛跑查询状态失败[" + _0x40faef + "]: " + _0x27d026);
      }
    } catch (_0x5c3948) {
      console.log(_0x5c3948);
    }
  }
  async rabblit_joinRuning(_0x277ea1 = {}) {
    let _0x23255f = false;
    try {
      let _0x5e8c7c = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0xb18a52 = this.encode_woread(_0x5e8c7c);
      const _0x1b1462 = {
        sign: _0xb18a52
      };
      const _0x213d23 = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x1b1462
      };
      let {
          result: _0x4822c6
        } = await this.woread_api(_0x213d23),
        _0x340e70 = _0x4bcdd6.get(_0x4822c6, "code", -1);
      if (_0x340e70 == "0000") {
        _0x23255f = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0xbf97c1 = _0x4822c6?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x340e70 + "]: " + _0xbf97c1);
      }
    } catch (_0x494a46) {
      console.log(_0x494a46);
    } finally {
      return _0x23255f;
    }
  }
  async rabblit_wakeRabbit(_0x1fa6c7 = {}) {
    try {
      let _0xd85a5f = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x335a42 = this.encode_woread(_0xd85a5f);
      const _0x43c138 = {
        sign: _0x335a42
      };
      const _0x2d443e = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x43c138
      };
      await _0x4bcdd6.wait_gap_interval(this.t_woread_draw, _0x3e05b1);
      let {
        result: _0x3578c8
      } = await this.woread_api(_0x2d443e);
      this.t_woread_draw = Date.now();
      let _0x722ff5 = _0x4bcdd6.get(_0x3578c8, "code", -1);
      if (_0x722ff5 == "0000") {
        const _0x2d6e77 = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x3578c8?.["data"]?.["prizedesc"] || "空气"), _0x2d6e77);
      } else {
        let _0x170655 = _0x3578c8?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x722ff5 + "]: " + _0x170655);
      }
    } catch (_0x4589a7) {
      console.log(_0x4589a7);
    }
  }
  async rabblit_finishActivity(_0x34e0c5 = {}) {
    try {
      let _0x1b4649 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0xf0a05a = this.encode_woread(_0x1b4649);
      const _0x445158 = {
        sign: _0xf0a05a
      };
      const _0x48546e = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x445158
      };
      await _0x4bcdd6.wait_gap_interval(this.t_woread_draw, _0x3e05b1);
      let {
        result: _0x1b6f2f
      } = await this.woread_api(_0x48546e);
      this.t_woread_draw = Date.now();
      let _0x54615b = _0x4bcdd6.get(_0x1b6f2f, "code", -1);
      if (_0x54615b == "0000") {
        this.need_read_rabbit = false;
        const _0x2e5c12 = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x1b6f2f?.["data"]?.["prizedesc"] || "空气"), _0x2e5c12);
      } else {
        let _0x2bdee3 = _0x1b6f2f?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x54615b + "]: " + _0x2bdee3);
      }
    } catch (_0x22b797) {
      console.log(_0x22b797);
    }
  }
  async moonbox_queryActiveInfo(_0x4d7850 = {}) {
    try {
      let _0x4a6a5c = this.get_woread_param(),
        _0x2574e5 = this.encode_woread(_0x4a6a5c);
      const _0x377269 = {
        sign: _0x2574e5
      };
      const _0x568106 = {
        fn: "moonbox_queryActiveInfo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
        json: _0x377269
      };
      let {
          result: _0x5ed355
        } = await this.woread_api(_0x568106),
        _0x39b7fa = _0x4bcdd6.get(_0x5ed355, "code", -1);
      if (_0x39b7fa == "0000") {
        let {
          activeId: _0x38e6ca,
          activeName: _0x1835f6
        } = _0x5ed355?.["data"];
        _0x4d42f0 = _0x38e6ca;
      } else {
        let _0x1fe3cc = _0x5ed355?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x39b7fa + "]: " + _0x1fe3cc);
      }
    } catch (_0x1fc42f) {
      console.log(_0x1fc42f);
    }
  }
  async moonbox_queryCurTaskStatus(_0x597024 = {}) {
    try {
      let _0x45030d = {
          activeIndex: _0x4d42f0,
          ...this.get_woread_param()
        },
        _0x1219fa = this.encode_woread(_0x45030d);
      const _0x54e80d = {
        sign: _0x1219fa
      };
      const _0xfcee95 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x54e80d
      };
      let {
          result: _0x443957
        } = await this.woread_api(_0xfcee95),
        _0x27c691 = _0x4bcdd6.get(_0x443957, "code", -1);
      if (_0x27c691 == "0000") {
        for (let _0x12f21d of _0x443957?.["data"] || []) {
          let {
            taskName: _0x7b7d3a,
            currentValue: _0x54a284,
            taskValue: _0xdb3047
          } = _0x12f21d?.["taskDetail"];
          switch (_0x12f21d.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x7b7d3a] = true;
                this.log("阅光宝盒[" + _0x7b7d3a + "]进度: " + parseInt(_0x54a284) + "/" + _0xdb3047 + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_completeActiveTask(_0x12f21d);
              }
            case 1:
              {
                this.moonbox_task_record[_0x7b7d3a] = false;
                if (!this.moonbox_notified.includes(_0x7b7d3a)) {
                  this.moonbox_notified.push(_0x7b7d3a);
                  const _0x3349e9 = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x7b7d3a + "]已完成", _0x3349e9);
                }
                break;
              }
          }
        }
      } else {
        let _0x56a9b6 = _0x443957?.["message"] || "";
        _0x56a9b6?.["includes"]("未领取") && !_0x597024.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x597024.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x597024)) : this.log("阅光宝盒查询任务状态失败[" + _0x27c691 + "]: " + _0x56a9b6);
      }
    } catch (_0x248827) {
      console.log(_0x248827);
    }
  }
  async moonbox_completeActiveTask(_0x5e726b, _0x1f3a35 = {}) {
    try {
      let _0x47f1f3 = {
          taskId: _0x5e726b.id,
          ...this.get_woread_param()
        },
        _0x2eebe0 = this.encode_woread(_0x47f1f3);
      const _0x1521e9 = {
        sign: _0x2eebe0
      };
      const _0x1b9df7 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x1521e9
      };
      let {
          result: _0xd82ca8
        } = await this.woread_api(_0x1b9df7),
        _0x2d19c8 = _0x4bcdd6.get(_0xd82ca8, "code", -1);
      if (_0x2d19c8 == "0000") {
        const _0x559452 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0xd82ca8?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0xd82ca8?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x559452);
      } else {
        let _0x193a7e = _0xd82ca8?.["message"] || "";
        this.log("阅光宝盒[" + _0x5e726b?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x2d19c8 + "]: " + _0x193a7e);
      }
    } catch (_0x2032e8) {
      console.log(_0x2032e8);
    }
  }
  async moonbox_queryActiveTaskList(_0x138680 = {}) {
    try {
      let _0xb7745a = {
          activeIndex: _0x4d42f0,
          ...this.get_woread_param()
        },
        _0x11186c = this.encode_woread(_0xb7745a);
      const _0x1716e0 = {
        sign: _0x11186c
      };
      const _0xfdddaa = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x1716e0
      };
      let {
          result: _0x234cc8
        } = await this.woread_api(_0xfdddaa),
        _0x2d81bc = _0x4bcdd6.get(_0x234cc8, "code", -1);
      if (_0x2d81bc == "0000") {
        let _0x5e3702 = _0x234cc8?.["data"]?.["sort"](function (_0x348228, _0x1b6fd1) {
            let _0x40db30 = parseInt(_0x1b6fd1.taskDetail.taskValue),
              _0x411a40 = parseInt(_0x348228.taskDetail.taskValue);
            return _0x40db30 - _0x411a40;
          }),
          _0x59f933 = _0x5e3702.filter(_0x39300f => _0x39300f.maxNum - _0x39300f.receiveNum > 0 && _0x39300f.taskDetail.materialGroup.groupName.includes("红包"));
        _0x59f933?.["length"] ? await this.moonbox_receiveActiveTask(_0x59f933) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x363f9d = _0x234cc8?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x2d81bc + "]: " + _0x363f9d);
      }
    } catch (_0x275b41) {
      console.log(_0x275b41);
    }
  }
  async moonbox_receiveActiveTask(_0x13ec08, _0x429908 = {}) {
    try {
      if (!_0x13ec08.length) {
        return;
      }
      let _0x5dad7c = _0x13ec08.shift(),
        _0x3dccdb = _0x5dad7c?.["taskDetail"]?.["taskName"] || "",
        _0x370a14 = {
          activeId: _0x4d42f0,
          taskId: _0x5dad7c.secondTaskId,
          ...this.get_woread_param()
        },
        _0x238c9b = this.encode_woread(_0x370a14);
      const _0x1c9570 = {
        sign: _0x238c9b
      };
      const _0xf72852 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x1c9570
      };
      let {
          result: _0x2a1734
        } = await this.woread_api(_0xf72852),
        _0x4375e5 = _0x4bcdd6.get(_0x2a1734, "code", -1);
      if (_0x4375e5 == "0000") {
        this.moonbox_task_record[_0x3dccdb] = true;
        this.log("领取阅光宝盒任务[" + _0x3dccdb + "]成功");
      } else {
        let _0x1626e5 = _0x2a1734?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x3dccdb + "]失败[" + _0x4375e5 + "]: " + _0x1626e5);
        (_0x1626e5?.["includes"]("今天无法完成") || _0x1626e5?.["includes"]("领光了")) && _0x13ec08.length > 0 && (await _0x4bcdd6.wait(500), await this.moonbox_receiveActiveTask(_0x13ec08, _0x429908));
      }
    } catch (_0x507b2b) {
      console.log(_0x507b2b);
    }
  }
  async moonbox_queryReadStatus(_0x3db476 = {}) {
    try {
      let _0x5d58cb = {
          activeIndex: _0x4d42f0,
          ...this.get_woread_param()
        },
        _0x14c633 = this.encode_woread(_0x5d58cb);
      const _0x1c49b8 = {
        sign: _0x14c633
      };
      const _0x4581be = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x1c49b8
      };
      let {
          result: _0x15050e
        } = await this.woread_api(_0x4581be),
        _0x564226 = _0x4bcdd6.get(_0x15050e, "code", -1);
      if (_0x564226 == "0000") {
        switch (_0x15050e?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x531a58 = {
                readTime: 2
              };
              await this.woread_addReadTime(_0x531a58);
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
              this.log("阅光宝盒抽奖状态[" + _0x15050e?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x30a2d1 = _0x15050e?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x564226 + "]: " + _0x30a2d1);
      }
    } catch (_0x455fb4) {
      console.log(_0x455fb4);
    }
  }
  async moonbox_drawReadActivePrize(_0x142af5 = {}) {
    try {
      let _0x2b9311 = {
          activeIndex: _0x4d42f0,
          ...this.get_woread_param()
        },
        _0xfe3ac0 = this.encode_woread(_0x2b9311);
      const _0x199647 = {
        sign: _0xfe3ac0
      };
      const _0x231935 = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x199647
      };
      let {
          result: _0x581ab5
        } = await this.woread_api(_0x231935),
        _0x13134a = _0x4bcdd6.get(_0x581ab5, "code", -1);
      if (_0x13134a == "0000") {
        const _0x52566c = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x581ab5?.["data"]?.["prizedesc"] || JSON.stringify(_0x581ab5)), _0x52566c);
      } else {
        let _0x11ab04 = _0x581ab5?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x13134a + "]: " + _0x11ab04);
      }
    } catch (_0x566fdd) {
      console.log(_0x566fdd);
    }
  }
  async moonbox_m_queryActiveInfo(_0x46c44c = {}) {
    try {
      let _0x331587 = this.get_woread_m_param(),
        _0x41bfdf = this.encode_woread(_0x331587, _0x48e277);
      const _0xd40901 = {
        sign: _0x41bfdf
      };
      const _0x1560d4 = {
        fn: "moonbox_m_queryActiveInfo",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/queryActiveInfo",
        json: _0xd40901
      };
      let {
          result: _0x1cce54
        } = await this.woread_api(_0x1560d4),
        _0x18ceee = _0x4bcdd6.get(_0x1cce54, "code", -1);
      if (_0x18ceee == "0000") {
        let {
          activeId: _0x865d98,
          activeName: _0xb54e85
        } = _0x1cce54?.["data"];
        _0x4d42f0 = _0x865d98;
      } else {
        let _0x2ac399 = _0x1cce54?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x18ceee + "]: " + _0x2ac399);
      }
    } catch (_0x1a613e) {
      console.log(_0x1a613e);
    }
  }
  async moonbox_m_queryCurTaskStatus(_0x4fabdd = {}) {
    try {
      let _0x9ae426 = {
          activeIndex: _0x4d42f0,
          ...this.get_woread_m_param()
        },
        _0x251c74 = this.encode_woread(_0x9ae426, _0x48e277);
      const _0x584175 = {
        sign: _0x251c74
      };
      const _0xc2d608 = {
        fn: "moonbox_m_queryCurTaskStatus",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/queryCurTaskStatus",
        json: _0x584175
      };
      let {
          result: _0x2a891b
        } = await this.woread_api(_0xc2d608),
        _0x202c55 = _0x4bcdd6.get(_0x2a891b, "code", -1);
      if (_0x202c55 == "0000") {
        for (let _0x128ae8 of _0x2a891b?.["data"] || []) {
          let {
            taskName: _0x81e955,
            currentValue: _0x4338f5,
            taskValue: _0x47f913
          } = _0x128ae8?.["taskDetail"];
          switch (_0x128ae8.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x81e955] = true;
                this.log("阅光宝盒[" + _0x81e955 + "]进度: " + parseInt(_0x4338f5) + "/" + _0x47f913 + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_m_completeActiveTask(_0x128ae8);
              }
            case 1:
              {
                this.moonbox_task_record[_0x81e955] = false;
                if (!this.moonbox_notified.includes(_0x81e955)) {
                  this.moonbox_notified.push(_0x81e955);
                  const _0x30fef2 = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x81e955 + "]已完成", _0x30fef2);
                }
                break;
              }
          }
        }
      } else {
        let _0x1b6e37 = _0x2a891b?.["message"] || "";
        _0x1b6e37?.["includes"]("未领取") && !_0x4fabdd.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x4fabdd.activate_retry = true, await this.moonbox_m_queryCurTaskStatus(_0x4fabdd)) : this.log("阅光宝盒查询任务状态失败[" + _0x202c55 + "]: " + _0x1b6e37);
      }
    } catch (_0x24197a) {
      console.log(_0x24197a);
    }
  }
  async moonbox_m_completeActiveTask(_0x27bef7, _0x529296 = {}) {
    try {
      let _0x5ad479 = {
          taskId: _0x27bef7.id,
          ...this.get_woread_m_param()
        },
        _0x2eb143 = this.encode_woread(_0x5ad479, _0x48e277);
      const _0x3589b3 = {
        sign: _0x2eb143
      };
      const _0x4e44fd = {
        fn: "moonbox_m_completeActiveTask",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/completeActiveTask",
        json: _0x3589b3
      };
      let {
          result: _0x4ade68
        } = await this.woread_api(_0x4e44fd),
        _0x11740c = _0x4bcdd6.get(_0x4ade68, "code", -1);
      if (_0x11740c == "0000") {
        const _0x52a134 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x4ade68?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x4ade68?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x52a134);
      } else {
        let _0x4b76d9 = _0x4ade68?.["message"] || "";
        this.log("阅光宝盒[" + _0x27bef7?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x11740c + "]: " + _0x4b76d9);
      }
    } catch (_0x453146) {
      console.log(_0x453146);
    }
  }
  async moonbox_m_queryActiveTaskList(_0x1d7d93 = {}) {
    try {
      let _0x399bb7 = {
          activeIndex: _0x4d42f0,
          ...this.get_woread_m_param()
        },
        _0x366c48 = this.encode_woread(_0x399bb7, _0x48e277);
      const _0x1b7eff = {
        sign: _0x366c48
      };
      const _0x59c6d9 = {
        fn: "moonbox_m_queryActiveTaskList",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/queryActiveTaskList",
        json: _0x1b7eff
      };
      let {
          result: _0x36eb48
        } = await this.woread_api(_0x59c6d9),
        _0x4efea3 = _0x4bcdd6.get(_0x36eb48, "code", -1);
      if (_0x4efea3 == "0000") {
        let _0x33b731 = _0x36eb48?.["data"]?.["sort"](function (_0x484da2, _0x30c1e2) {
            let _0x4fd4fc = parseInt(_0x30c1e2.taskDetail.taskValue),
              _0x5cbb98 = parseInt(_0x484da2.taskDetail.taskValue);
            return _0x4fd4fc - _0x5cbb98;
          }),
          _0x170b14 = _0x33b731.filter(_0x53ea4c => _0x53ea4c.maxNum - _0x53ea4c.receiveNum > 0 && _0x53ea4c.taskDetail.materialGroup.groupName.includes("红包"));
        _0x170b14?.["length"] ? await this.moonbox_m_receiveActiveTask(_0x170b14) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x32379a = _0x36eb48?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x4efea3 + "]: " + _0x32379a);
      }
    } catch (_0x110c8a) {
      console.log(_0x110c8a);
    }
  }
  async moonbox_m_receiveActiveTask(_0x4f2c0d, _0x170c41 = {}) {
    try {
      if (!_0x4f2c0d.length) {
        return;
      }
      let _0x3271cc = _0x4f2c0d.shift(),
        _0x9a107 = _0x3271cc?.["taskDetail"]?.["taskName"] || "",
        _0x29529b = {
          activeId: _0x4d42f0,
          taskId: _0x3271cc.secondTaskId,
          ...this.get_woread_m_param()
        },
        _0xee5bed = this.encode_woread(_0x29529b, _0x48e277);
      const _0x11380b = {
        sign: _0xee5bed
      };
      const _0x4e744a = {
        fn: "moonbox_m_queryActiveTaskList",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/receiveActiveTask",
        json: _0x11380b
      };
      let {
          result: _0x5dd55d
        } = await this.woread_api(_0x4e744a),
        _0x4b2472 = _0x4bcdd6.get(_0x5dd55d, "code", -1);
      if (_0x4b2472 == "0000") {
        this.moonbox_task_record[_0x9a107] = true;
        this.log("领取阅光宝盒任务[" + _0x9a107 + "]成功");
      } else {
        let _0x18b1c0 = _0x5dd55d?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x9a107 + "]失败[" + _0x4b2472 + "]: " + _0x18b1c0);
        (_0x18b1c0?.["includes"]("今天无法完成") || _0x18b1c0?.["includes"]("领光了")) && _0x4f2c0d.length > 0 && (await _0x4bcdd6.wait(500), await this.moonbox_m_receiveActiveTask(_0x4f2c0d, _0x170c41));
      }
    } catch (_0x55b60e) {
      console.log(_0x55b60e);
    }
  }
  async moonbox_m_queryReadStatus(_0x1c14e1 = {}) {
    try {
      let _0x4862f4 = {
          activeIndex: _0x4d42f0,
          ...this.get_woread_m_param()
        },
        _0x13faea = this.encode_woread(_0x4862f4, _0x48e277);
      const _0x369376 = {
        sign: _0x13faea
      };
      const _0x5314f9 = {
        fn: "moonbox_m_queryReadStatus",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/queryReadStatus",
        json: _0x369376
      };
      let {
          result: _0x782695
        } = await this.woread_api(_0x5314f9),
        _0x225d73 = _0x4bcdd6.get(_0x782695, "code", -1);
      if (_0x225d73 == "0000") {
        switch (_0x782695?.["message"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x1ade21 = {
                readTime: 2
              };
              await this.woread_m_addReadTime(_0x1ade21);
              await this.moonbox_m_drawReadActivePrize();
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
              await this.moonbox_m_drawReadActivePrize();
              break;
            }
          default:
            {
              this.log("阅光宝盒抽奖状态[" + _0x782695?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x248368 = _0x782695?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x225d73 + "]: " + _0x248368);
      }
    } catch (_0x44313f) {
      console.log(_0x44313f);
    }
  }
  async moonbox_m_drawReadActivePrize(_0x1bd674 = {}) {
    try {
      let _0xb25547 = {
          activeIndex: _0x4d42f0,
          ...this.get_woread_m_param()
        },
        _0x1a00b1 = this.encode_woread(_0xb25547, _0x48e277);
      const _0x5d69c8 = {
        sign: _0x1a00b1
      };
      const _0x348b96 = {
        fn: "moonbox_m_drawReadActivePrize",
        method: "post",
        url: "https://m.woread.com.cn/api/union/activity423/drawReadActivePrize",
        json: _0x5d69c8
      };
      let {
          result: _0x26cbc8
        } = await this.woread_api(_0x348b96),
        _0x5a2ee8 = _0x4bcdd6.get(_0x26cbc8, "code", -1);
      if (_0x5a2ee8 == "0000") {
        const _0x17df6b = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x26cbc8?.["data"]?.["prizedesc"] || JSON.stringify(_0x26cbc8)), _0x17df6b);
      } else {
        let _0x1d624a = _0x26cbc8?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x5a2ee8 + "]: " + _0x1d624a);
      }
    } catch (_0x26b11a) {
      console.log(_0x26b11a);
    }
  }
  async ltyp_login(_0x2cdc5f, _0x28b786 = {}) {
    try {
      const _0x115e42 = {
        "client-Id": _0x366e1a,
        accessToken: ""
      };
      const _0x23454b = {
        clientId: _0x366e1a,
        ticket: _0x2cdc5f
      };
      let _0xe35620 = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x115e42,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x23454b
          }
        },
        {
          result: _0x1fcb83
        } = await this.request(_0xe35620),
        _0x1ab1b4 = _0x4bcdd6.get(_0x1fcb83, "STATUS", -1);
      if (_0x1ab1b4 == 200) {
        this.ltyp_token = _0x1fcb83?.["RSP"]?.["DATA"]?.["token"];
        for (let _0x10d7b7 of _0x2d86db) {
          await this.ltyp_incentiveTimes(_0x10d7b7);
          await this.ltyp_lottery(_0x10d7b7);
        }
      } else {
        let _0xe9d2b0 = _0x1fcb83?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x1ab1b4 + "]: " + _0xe9d2b0);
      }
    } catch (_0xa6bf3c) {
      console.log(_0xa6bf3c);
    }
  }
  async ltyp_incentiveTimes(_0x53e939, _0x5e1b65 = {}) {
    try {
      const _0x2b8a6b = {
        "client-Id": _0x366e1a,
        "Access-Token": this.ltyp_token
      };
      const _0x394e06 = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x2b8a6b,
        searchParams: {}
      };
      _0x394e06.searchParams.bizKey = "incentiveTimesPipeline";
      _0x394e06.searchParams.activityId = _0x53e939;
      let {
          result: _0x20efe2
        } = await this.request(_0x394e06),
        _0x12dc03 = _0x4bcdd6.get(_0x20efe2?.["meta"], "code", -1);
      if (_0x12dc03 == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0x20efe2?.["result"];
        if (isIncentiveTask) {
          for (let _0x381ca1 = incentiveTimeDone; _0x381ca1 < incentiveTimeTotal; _0x381ca1++) {
            await this.ltyp_incentiveTask(_0x53e939);
          }
        }
      } else {
        let _0x1983e9 = _0x20efe2?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x12dc03 + "]: " + _0x1983e9);
      }
    } catch (_0x3d5d6f) {
      console.log(_0x3d5d6f);
    }
  }
  async ltyp_incentiveTask(_0x5a0319, _0x294636 = {}) {
    try {
      const _0x307a46 = {
        "client-Id": _0x366e1a,
        "Access-Token": this.ltyp_token
      };
      const _0x28ee70 = {
        activityId: _0x5a0319
      };
      const _0x436585 = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x307a46,
        json: {}
      };
      _0x436585.json.bizKey = "incentiveTaskPipeline";
      _0x436585.json.bizObject = _0x28ee70;
      let {
          result: _0xfa0d3
        } = await this.request(_0x436585),
        _0x486c14 = _0x4bcdd6.get(_0xfa0d3?.["meta"], "code", -1);
      if (_0x486c14 == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0xfa0d3?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x23611d = _0xfa0d3?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x486c14 + "]: " + _0x23611d);
      }
    } catch (_0x3acf83) {
      console.log(_0x3acf83);
    }
  }
  async ltyp_lottery_times(_0x208c61, _0x28de03 = {}) {
    try {
      const _0x2e755a = {
        "client-Id": _0x366e1a,
        token: this.ltyp_token
      };
      const _0x400b28 = {
        activityId: _0x208c61
      };
      const _0x1875c4 = {
        fn: "ltyp_lottery_times",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/times",
        headers: _0x2e755a,
        searchParams: _0x400b28
      };
      let {
          result: _0x53d979
        } = await this.request(_0x1875c4),
        _0xa5a44f = _0x4bcdd6.get(_0x53d979, "RSP_CODE", -1);
      if (_0xa5a44f == 0) {
        let {
          times = 0
        } = _0x53d979?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await _0x4bcdd6.wait(1000);
          await this.ltyp_lottery(_0x208c61);
        }
      } else {
        let _0x5c093b = _0x53d979?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0xa5a44f + "]: " + _0x5c093b);
      }
    } catch (_0x201afe) {
      console.log(_0x201afe);
    }
  }
  async ltyp_lottery(_0x41ec4d, _0x31654a = {}) {
    try {
      const _0x43c85d = {
        "client-Id": _0x366e1a,
        "Access-Token": this.ltyp_token
      };
      const _0x3ddc66 = {
        activityId: _0x41ec4d,
        type: 3
      };
      const _0x5b8bcc = {
        lottery: _0x3ddc66
      };
      const _0x492259 = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0x43c85d,
        json: {}
      };
      _0x492259.json.bizKey = "newLottery";
      _0x492259.json.bizObject = _0x5b8bcc;
      let {
          result: _0x1eeefd
        } = await this.request(_0x492259),
        _0x3b8427 = _0x4bcdd6.get(_0x1eeefd?.["meta"], "code", -1);
      if (_0x3b8427 == 0) {
        let {
          prizeName = ""
        } = _0x1eeefd?.["result"];
        if (prizeName) {
          const _0x5c3824 = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x5c3824);
          await this.ltyp_lottery(_0x41ec4d, _0x31654a);
        }
      } else {
        let _0x38a23f = _0x1eeefd?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x3b8427 + "]: " + _0x38a23f);
      }
    } catch (_0xf65750) {
      console.log(_0xf65750);
    }
  }
  async act_517_userAccount(_0x519a8f = {}) {
    try {
      const _0x19a23e = {
        fn: "act_517_userAccount",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/userAccount"
      };
      {
        let {
            result: _0x1a97ba,
            statusCode: _0x2eb76d
          } = await this.request(_0x4bcdd6.copy(_0x19a23e)),
          _0x382c89 = _0x4bcdd6.get(_0x1a97ba, "code", _0x2eb76d);
        if (_0x382c89 == "0000") {
          await this.act_517_taskList();
        } else {
          let _0x5a2f3d = _0x1a97ba?.["message"] || _0x1a97ba?.["msg"] || "";
          this.log("517活动进入主页失败[" + _0x382c89 + "]: " + _0x5a2f3d);
          return;
        }
      }
      {
        let {
            result: _0x11ade9,
            statusCode: _0x1d5965
          } = await this.request(_0x4bcdd6.copy(_0x19a23e)),
          _0x4a20e0 = _0x4bcdd6.get(_0x11ade9, "code", _0x1d5965);
        if (_0x4a20e0 == "0000") {
          let {
            chances: _0x181d91
          } = _0x11ade9?.["data"];
          this.log("517活动可以抽奖" + _0x181d91 + "次");
          let _0x487db5 = false;
          while (_0x181d91-- > 0) {
            if (_0x487db5) {
              await _0x4bcdd6.wait(3000);
            }
            _0x487db5 = true;
            await this.act_517_lottery();
          }
        } else {
          let _0x35f5ac = _0x11ade9?.["message"] || _0x11ade9?.["msg"] || "";
          this.log("517活动查询抽奖次数失败[" + _0x4a20e0 + "]: " + _0x35f5ac);
        }
      }
      {
        let {
            result: _0x1d88c5,
            statusCode: _0x59aa6b
          } = await this.request(_0x4bcdd6.copy(_0x19a23e)),
          _0x492b51 = _0x4bcdd6.get(_0x1d88c5, "code", _0x59aa6b);
        if (_0x492b51 == "0000") {
          let {
            amount: _0x4cfd7a,
            targetAmount: _0x223d72
          } = _0x1d88c5?.["data"];
          const _0x35685c = {
            notify: true
          };
          this.log("517活动现金进度: " + _0x4cfd7a + "/" + _0x223d72, _0x35685c);
        } else {
          let _0x52e18e = _0x1d88c5?.["message"] || _0x1d88c5?.["msg"] || "";
          this.log("517活动查询进度失败[" + _0x492b51 + "]: " + _0x52e18e);
        }
      }
    } catch (_0x56fd32) {
      console.log(_0x56fd32);
    }
  }
  async act_517_bind(_0x67a06, _0x3ed3ce = {}) {
    try {
      const _0x5eec28 = {
        fn: "act_517_bind",
        method: "post",
        url: "https://activity.10010.com/2024517charges/openWindows/bind",
        json: {},
        valid_code: [401]
      };
      _0x5eec28.json.shareCode = _0x67a06;
      _0x5eec28.json.channel = "countersign";
      let {
        result: _0x140b34
      } = await this.request(_0x5eec28);
    } catch (_0x564c46) {
      console.log(_0x564c46);
    }
  }
  async act_517_lottery(_0x25b764 = {}) {
    try {
      const _0x4c011d = {
        fn: "act_517_lottery",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/lottery"
      };
      let {
          result: _0x3ec2f6,
          statusCode: _0x593ec8
        } = await this.request(_0x4c011d),
        _0x23086d = _0x4bcdd6.get(_0x3ec2f6, "code", _0x593ec8);
      if (_0x23086d == "0000") {
        _0x3ec2f6?.["data"]?.["uuid"] ? (await _0x4bcdd6.wait(2000), await this.act_517_winningRecord(_0x3ec2f6.data.uuid)) : this.log("517活动抽奖失败, 没有返回uuid");
      } else {
        let _0x4455fc = _0x3ec2f6?.["message"] || _0x3ec2f6?.["msg"] || "";
        this.log("517活动抽奖失败[" + _0x23086d + "]: " + _0x4455fc);
      }
    } catch (_0x5f076f) {
      console.log(_0x5f076f);
    }
  }
  async act_517_winningRecord(_0xe2ffc6, _0x561e62 = {}) {
    try {
      const _0x36e862 = {
        requestId: _0xe2ffc6
      };
      const _0xd45868 = {
        fn: "act_517_winningRecord",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/winningRecord",
        searchParams: _0x36e862
      };
      let {
          result: _0x21b6eb,
          statusCode: _0x582cb6
        } = await this.request(_0xd45868),
        _0x1250b7 = _0x4bcdd6.get(_0x21b6eb, "code", _0x582cb6);
      if (_0x1250b7 == "0000") {
        if (_0x21b6eb?.["data"]?.["isWin"] === "1") {
          let {
              prizeAmount: _0xe8a235,
              prizeList: _0x157745,
              afterAmount: _0x278ef0,
              targetAmount: _0x12bff3,
              showAmount = "0"
            } = _0x21b6eb?.["data"],
            _0x1a632d = (_0x157745 || []).filter(_0x49b00e => _0x49b00e.prizeName).map(_0x4ad7b1 => _0x4ad7b1.prizeName).join(", ") || "";
          const _0x54c6c9 = {
            notify: true
          };
          if (_0x1a632d) {
            this.log("517活动抽奖: " + _0x1a632d, _0x54c6c9);
          }
          if (showAmount === "1") {
            this.log("517活动抽奖现金进度: +" + _0xe8a235 + " (" + _0x278ef0 + "/" + _0x12bff3 + ")");
          }
        } else {
          this.log("517活动抽奖: 空气");
        }
      } else {
        let _0x57862f = _0x21b6eb?.["message"] || _0x21b6eb?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x1250b7 + "]: " + _0x57862f);
      }
    } catch (_0x3f49b3) {
      console.log(_0x3f49b3);
    }
  }
  async act_517_taskList(_0x218bb2 = {}) {
    try {
      const _0x1ac60c = {
        fn: "act_517_taskList",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/taskList"
      };
      let {
          result: _0x37b860,
          statusCode: _0x1f84b0
        } = await this.request(_0x1ac60c),
        _0x43a6d8 = _0x4bcdd6.get(_0x37b860, "code", _0x1f84b0);
      if (_0x43a6d8 == "0000") {
        let _0x37e4dd = _0x37b860?.["data"]?.["taskList"] || [];
        for (let _0x74fa8 of _0x37e4dd) {
          let {
            completeNum = 0,
            maxNum: _0x14858b,
            isComplete: _0x1f2c65,
            taskType: _0x27db8c
          } = _0x74fa8;
          if (_0x1f2c65) {
            continue;
          }
          if (_0x27db8c == "5") {
            continue;
          }
          completeNum = parseInt(completeNum);
          _0x14858b = parseInt(_0x14858b);
          for (let _0x390406 = completeNum; _0x390406 < _0x14858b; _0x390406++) {
            await this.act_517_completeTask(_0x74fa8);
          }
        }
      } else {
        let _0x22ca6b = _0x37b860?.["message"] || _0x37b860?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x43a6d8 + "]: " + _0x22ca6b);
      }
    } catch (_0x274d17) {
      console.log(_0x274d17);
    }
  }
  async act_517_completeTask(_0x3d42a4, _0x9b579b = {}) {
    try {
      let _0x4de254 = _0x3d42a4.title;
      const _0x3a9b84 = {
        taskId: _0x3d42a4.taskId
      };
      const _0x2bef5e = {
        fn: "act_517_completeTask",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/completeTask",
        searchParams: _0x3a9b84
      };
      let {
          result: _0x4f8aab,
          statusCode: _0x215f8b
        } = await this.request(_0x2bef5e),
        _0x38918d = _0x4bcdd6.get(_0x4f8aab, "code", _0x215f8b);
      if (_0x38918d == "0000") {
        if (_0x4f8aab?.["data"]) {
          let {
            num: _0x9a57c8,
            title: _0x1194c6
          } = _0x4f8aab.data;
          this.log("完成任务[" + _0x1194c6 + "]成功: " + _0x9a57c8 + "次抽奖机会");
        } else {
          this.log("完成任务[" + _0x4de254 + "]失败没有获得抽奖机会");
        }
      } else {
        let _0x36123f = _0x4f8aab?.["message"] || _0x4f8aab?.["msg"] || "";
        this.log("完成任务[" + _0x4de254 + "]失败[" + _0x38918d + "]: " + _0x36123f);
      }
    } catch (_0x4a7166) {
      console.log(_0x4a7166);
    }
  }
  get_wocare_body(_0x152e8b, _0x30c536 = {}) {
    const _0x4508ff = _0x4bcdd6.time("yyyyMMddhhmmssS"),
      _0x1ff312 = Buffer.from(JSON.stringify(_0x30c536)).toString("base64");
    let _0x45336b = {
        version: _0xecd3b7,
        apiCode: _0x152e8b,
        channelId: _0x4f7e86,
        transactionId: _0x4508ff + _0x4bcdd6.randomString(6, _0x345675),
        timeStamp: _0x4508ff,
        messageContent: _0x1ff312
      },
      _0x323507 = [];
    Object.keys(_0x45336b).sort().forEach(_0x328a5d => {
      _0x323507.push(_0x328a5d + "=" + _0x45336b[_0x328a5d]);
    });
    _0x323507.push("sign=" + _0x12ea5b);
    _0x45336b.sign = _0x481d2f.MD5(_0x323507.join("&")).toString();
    return _0x45336b;
  }
  async wocare_api(_0x4076f4, _0x38e39a = {}) {
    let _0x364a2c = this.get_wocare_body(_0x4076f4, _0x38e39a);
    const _0xa0251 = {
      fn: "wocare_" + _0x4076f4,
      method: "post",
      url: "https://wocare.unisk.cn/api/v1/" + _0x4076f4,
      form: _0x364a2c
    };
    let _0x2fc07c = await this.request(_0xa0251);
    if (_0x2fc07c?.["result"]?.["messageContent"]) {
      try {
        let _0x3df84d = JSON.parse(Buffer.from(_0x2fc07c.result.messageContent, "base64").toString());
        _0x2fc07c.result.data = _0x3df84d?.["data"] || _0x3df84d;
        if (_0x3df84d?.["resultMsg"]) {
          _0x2fc07c.result.resultMsg = _0x3df84d.resultMsg;
        }
      } catch (_0x1bff7f) {
        this.log("解析联通祝福返回失败:");
        console.log(_0x1bff7f);
      }
    }
    return _0x2fc07c;
  }
  async wocare_getToken(_0x3f2ede, _0x524d26 = {}) {
    let _0x4993a4 = false;
    try {
      let _0x157427 = {
          fn: "wocare_getToken",
          method: "get",
          url: "https://wocare.unisk.cn/mbh/getToken",
          searchParams: {
            channelType: _0x245632,
            type: "02",
            ticket: _0x3f2ede,
            version: _0x147043,
            timestamp: _0x4bcdd6.time("yyyyMMddhhmmssS"),
            desmobile: this.mobile,
            num: 0,
            postage: _0x4bcdd6.randomString(32),
            homePage: "home",
            duanlianjieabc: "qAz2m",
            userNumber: this.mobile
          }
        },
        {
          headers: _0x2af8ae,
          statusCode: _0x5dc9a6
        } = await this.request(_0x157427);
      if (_0x5dc9a6 == 302) {
        if (_0x2af8ae?.["location"]) {
          let _0x236714 = new URL(_0x2af8ae.location),
            _0x4d9f74 = _0x236714.searchParams.get("sid");
          _0x4d9f74 ? (this.wocare_sid = _0x4d9f74, _0x4993a4 = await this.wocare_loginmbh()) : this.log("联通祝福没有获取到sid");
        } else {
          this.log("联通祝福没有获取到location");
        }
      } else {
        this.log("联通祝福获取sid失败[" + _0x5dc9a6 + "]");
      }
    } catch (_0x2fc11b) {
      console.log(_0x2fc11b);
    } finally {
      return _0x4993a4;
    }
  }
  async wocare_loginmbh(_0x115400 = {}) {
    let _0xfa6fc1 = false;
    try {
      let _0x2b0405 = "loginmbh";
      const _0x5da938 = {
        sid: this.wocare_sid,
        channelType: _0x245632,
        apiCode: _0x2b0405
      };
      let {
          result: _0x20fa7f,
          statusCode: _0x37c93f
        } = await this.wocare_api(_0x2b0405, _0x5da938),
        _0xdca97c = _0x4bcdd6.get(_0x20fa7f, "resultCode", _0x37c93f);
      if (_0xdca97c == "0000") {
        _0xfa6fc1 = true;
        let {
          token: _0x3dfc51
        } = _0x20fa7f?.["data"];
        this.wocare_token = _0x3dfc51;
      } else {
        let _0x382e29 = _0x20fa7f?.["resultMsg"] || _0x20fa7f?.["resultDesc"] || "";
        this.log("联通祝福登录失败[" + _0xdca97c + "]: " + _0x382e29);
      }
    } catch (_0x3bb331) {
      console.log(_0x3bb331);
    } finally {
      return _0xfa6fc1;
    }
  }
  async wocare_getSpecificityBanner(_0x8b4026 = {}) {
    try {
      let _0x593b49 = "getSpecificityBanner";
      const _0x2d256a = {
        token: this.wocare_token,
        apiCode: _0x593b49
      };
      let {
          result: _0x2847ba,
          statusCode: _0x580817
        } = await this.wocare_api(_0x593b49, _0x2d256a),
        _0x5e1722 = _0x4bcdd6.get(_0x2847ba, "resultCode", _0x580817);
      if (_0x5e1722 == "0000") {
        let _0x50b884 = _0x2847ba?.["data"] || [];
        for (let _0x54d57d of _0x50b884.filter(_0x5704e8 => _0x5704e8.activityStatus === "0" && _0x5704e8.isDeleted === "0")) {
          await this.wocare_getDrawTask(_0x54d57d);
          await this.wocare_loadInit(_0x54d57d);
        }
      } else {
        let _0x5261f5 = _0x2847ba?.["resultMsg"] || _0x2847ba?.["resultDesc"] || "";
        this.log("联通祝福进入活动失败[" + _0x5e1722 + "]: " + _0x5261f5);
      }
    } catch (_0x47f26e) {
      console.log(_0x47f26e);
    }
  }
  async wocare_loadInit(_0x4cc9e3, _0xa93160 = {}) {
    try {
      let _0x114f7b = "loadInit";
      const _0xe2311a = {
        token: this.wocare_token,
        channelType: _0x245632,
        type: _0x4cc9e3.id,
        apiCode: _0x114f7b
      };
      let {
          result: _0x4fb982,
          statusCode: _0xff60c2
        } = await this.wocare_api(_0x114f7b, _0xe2311a),
        _0x40b616 = _0x4bcdd6.get(_0x4fb982, "resultCode", _0xff60c2);
      if (_0x40b616 == "0000") {
        let _0x2f923d = _0x4fb982?.["data"],
          _0x29da9b = _0x2f923d?.["zActiveModuleGroupId"],
          _0x5c2738 = 0;
        switch (_0x4cc9e3.id) {
          case 2:
            {
              let _0x1fd44d = _0x2f923d?.["data"]?.["isPartake"] || 0;
              !_0x1fd44d && (_0x5c2738 = 1);
              break;
            }
          case 3:
            {
              _0x5c2738 = parseInt(_0x2f923d?.["raffleCountValue"] || 0);
              break;
            }
          case 4:
            {
              _0x5c2738 = parseInt(_0x2f923d?.["mhRaffleCountValue"] || 0);
              break;
            }
        }
        while (_0x5c2738-- > 0) {
          await _0x4bcdd6.wait(5000);
          await this.wocare_luckDraw(_0x4cc9e3, _0x29da9b);
        }
      } else {
        let _0x4745c5 = _0x4fb982?.["resultMsg"] || _0x4fb982?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x4cc9e3.name + "]查询活动失败[" + _0x40b616 + "]: " + _0x4745c5);
      }
    } catch (_0x193760) {
      console.log(_0x193760);
    }
  }
  async wocare_getDrawTask(_0x3892ba, _0x127c76 = {}) {
    try {
      let _0x1424ef = "getDrawTask";
      const _0x2d9b14 = {
        token: this.wocare_token,
        channelType: _0x245632,
        type: _0x3892ba.id,
        apiCode: _0x1424ef
      };
      let {
          result: _0x19c202,
          statusCode: _0x43751f
        } = await this.wocare_api(_0x1424ef, _0x2d9b14),
        _0x38fe53 = _0x4bcdd6.get(_0x19c202, "resultCode", _0x43751f);
      if (_0x38fe53 == "0000") {
        let _0x48adfd = _0x19c202?.["data"]?.["taskList"] || [];
        for (let _0x4e457f of _0x48adfd.filter(_0x2ca0e8 => _0x2ca0e8.taskStatus == 0)) {
          await this.wocare_completeTask(_0x3892ba, _0x4e457f);
        }
      } else {
        let _0x582ae2 = _0x19c202?.["resultMsg"] || _0x19c202?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x3892ba.name + "]查询任务失败[" + _0x38fe53 + "]: " + _0x582ae2);
      }
    } catch (_0x584fa7) {
      console.log(_0x584fa7);
    }
  }
  async wocare_completeTask(_0x2c60e6, _0x244cb8, _0x3d0ea3 = "1", _0x3e5d50 = {}) {
    try {
      let _0x25177a = _0x244cb8.title,
        _0x30bfe5 = _0x3d0ea3 == "1" ? "领取任务" : "完成任务",
        _0x5ba7b1 = "completeTask";
      const _0x2256f3 = {
        token: this.wocare_token,
        channelType: _0x245632,
        task: _0x244cb8.id,
        taskStep: _0x3d0ea3,
        type: _0x2c60e6.id,
        apiCode: _0x5ba7b1
      };
      let {
          result: _0x202dba,
          statusCode: _0x2e774
        } = await this.wocare_api(_0x5ba7b1, _0x2256f3),
        _0x13f825 = _0x4bcdd6.get(_0x202dba, "resultCode", _0x2e774);
      if (_0x13f825 == "0000") {
        this.log(_0x30bfe5 + "[" + _0x25177a + "]成功");
        _0x3d0ea3 == "1" && (await this.wocare_completeTask(_0x2c60e6, _0x244cb8, "4"));
      } else {
        let _0xaaebcc = _0x202dba?.["resultMsg"] || _0x202dba?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x2c60e6.name + "]" + _0x30bfe5 + "[" + _0x25177a + "]失败[" + _0x13f825 + "]: " + _0xaaebcc);
      }
    } catch (_0x35e20d) {
      console.log(_0x35e20d);
    }
  }
  async wocare_luckDraw(_0x4eb182, _0x23e24b, _0x28dd39 = {}) {
    try {
      let _0x3cd40a = "luckDraw";
      const _0x2ee02e = {
        token: this.wocare_token,
        channelType: _0x245632,
        zActiveModuleGroupId: _0x23e24b,
        type: _0x4eb182.id,
        apiCode: _0x3cd40a
      };
      let {
          result: _0x43ae98,
          statusCode: _0x157892
        } = await this.wocare_api(_0x3cd40a, _0x2ee02e),
        _0x53ce4a = _0x4bcdd6.get(_0x43ae98, "resultCode", _0x157892);
      if (_0x53ce4a == "0000") {
        let _0x48e8b2 = _0x4bcdd6.get(_0x43ae98?.["data"], "resultCode", -1);
        if (_0x48e8b2 == "0000") {
          let {
            prizeName: _0x3ebe99,
            prizeDesc: _0x5023f8
          } = _0x43ae98?.["data"]?.["data"]?.["prize"];
          this.log("联通祝福[" + _0x4eb182.name + "]抽奖: " + _0x3ebe99 + "[" + _0x5023f8 + "]");
        } else {
          let _0x188367 = _0x43ae98?.["resultMsg"] || _0x43ae98?.["resultDesc"] || "";
          this.log("联通祝福[" + _0x4eb182.name + "]抽奖失败[" + _0x48e8b2 + "]: " + _0x188367);
        }
      } else {
        let _0x46262a = _0x43ae98?.["resultMsg"] || _0x43ae98?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x4eb182.name + "]抽奖错误[" + _0x53ce4a + "]: " + _0x46262a);
      }
    } catch (_0x49cdb8) {
      console.log(_0x49cdb8);
    }
  }
  async card_618_authCheck(_0x3b1b0 = {}) {
    try {
      let _0x57c130 = {
          fn: "card_618_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x405a5a
        } = await this.request(_0x57c130),
        _0x53e455 = _0x4bcdd6.get(_0x405a5a, "code", -1);
      if (_0x53e455 == "0000") {
        let {
          mobile: _0xe3d3a8,
          sessionId: _0x210adb,
          tokenId: _0x3b04ff,
          userId: _0xf8e4a2
        } = _0x405a5a?.["data"]?.["authInfo"];
        const _0x37e52f = {
          sessionId: _0x210adb,
          tokenId: _0x3b04ff,
          userId: _0xf8e4a2
        };
        Object.assign(this, _0x37e52f);
        await this.card_618_queryUserCardInfo();
      } else {
        if (_0x53e455 == "2101000100") {
          let _0x249609 = _0x405a5a?.["data"]?.["woauth_login_url"];
          await this.card_618_login(_0x249609);
        } else {
          let _0x7fc260 = _0x405a5a?.["msgInside"] || _0x405a5a?.["msg"] || "";
          this.log("618集卡获取tokenId失败[" + _0x53e455 + "]: " + _0x7fc260);
        }
      }
    } catch (_0x179a9b) {
      console.log(_0x179a9b);
    }
  }
  async card_618_login(_0x5de9b2, _0x1b6e20 = {}) {
    try {
      let _0x2742ea = _0x4bcdd6.time("yyyyMM") + "28ZFR";
      _0x5de9b2 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x2742ea + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x475229 = {
        fn: "card_618_login",
        method: "get",
        url: "https://epay.10010.com/woauth2/login",
        searchParams: {}
      };
      _0x475229.searchParams.response_type = "web_token";
      _0x475229.searchParams.source = "app_sjyyt";
      _0x475229.searchParams.union_session_id = "";
      _0x475229.searchParams.device_digest_token_id = this.tokenId_cookie;
      _0x475229.searchParams.target_client_id = _0x33a726;
      _0x475229.searchParams.position = null;
      _0x475229.searchParams.redirect_url = "https://epay.10010.com/ci-mcss-party-web/cardSelection/?activityId=NZJK618CJHD";
      _0x475229.searchParams.bizFrom = _0x6f8b1b;
      _0x475229.searchParams.bizChannelCode = _0x2746b6;
      _0x475229.searchParams.channelType = "WDQB";
      let {
        headers: _0x4c0f1a,
        statusCode: _0x48849a
      } = await this.request(_0x475229);
      if (_0x4c0f1a?.["location"]) {
        let _0x34da00 = new URL(_0x4c0f1a.location);
        this.rptId = _0x34da00.searchParams.get("rptid");
        this.rptId ? await this.card_618_authCheck() : this.log("618集卡获取rptid失败");
      } else {
        this.log("618集卡获取rptid失败[" + _0x48849a + "]");
      }
    } catch (_0x25d46a) {
      console.log(_0x25d46a);
    }
  }
  async card_618_queryUserCardInfo(_0x7c124d = {}) {
    try {
      let _0x41ca24 = {
          fn: "card_618_queryUserCardInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/mouldCard/queryUserCardInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            activityId: _0x80da4f.card_618
          }
        },
        {
          result: _0x5032cd
        } = await this.request(_0x41ca24),
        _0x24ccfd = _0x4bcdd6.get(_0x5032cd, "code", -1);
      if (_0x24ccfd == "0000" && _0x5032cd?.["data"]?.["returnCode"] == 0) {
        let {
          userRemain = 0,
          isFirst = true
        } = _0x5032cd?.["data"];
        if (isFirst) {
          await this.card_618_unifyDraw("首次进入");
        }
        this.log("618集卡可以抽奖" + userRemain + "次");
        while (userRemain-- > 0) {
          await this.card_618_unifyDraw("抽奖");
        }
      } else {
        let _0x4e9042 = _0x5032cd?.["message"] || _0x5032cd?.["msg"] || "";
        this.log("618集卡进入主页失败[" + _0x24ccfd + "]: " + _0x4e9042);
      }
    } catch (_0x550c23) {
      console.log(_0x550c23);
    }
  }
  async card_618_unifyDraw(_0x1fc5f1, _0x3b4e9e = {}) {
    try {
      let _0x32065c = {
          fn: "card_618_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/mouldCard/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            bigActivityId: _0x80da4f.card_618,
            activityId: "NZJK618CJHD" + _0x4c930c[_0x1fc5f1],
            bizFrom: _0x6f8b1b
          }
        },
        {
          result: _0x57c41a
        } = await this.request(_0x32065c),
        _0x44af21 = _0x4bcdd6.get(_0x57c41a, "code", -1);
      if (_0x44af21 == "0000" && _0x57c41a?.["data"]?.["returnCode"] == 0) {
        let _0x1f4850 = _0x57c41a?.["data"]?.["prizeId"] || "空气",
          _0x26c37f = _0x3c9e28[_0x1f4850] || _0x1f4850;
        const _0x44873e = {
          notify: true
        };
        this.log("618集卡[" + _0x1fc5f1 + "]: " + _0x26c37f, _0x44873e);
      } else {
        let _0x69ce67 = _0x57c41a?.["data"]?.["returnMsg"] || _0x57c41a?.["msg"] || "";
        this.log("618集卡[" + _0x1fc5f1 + "]失败[" + (_0x57c41a?.["data"]?.["returnCode"] || _0x44af21) + "]: " + _0x69ce67);
      }
    } catch (_0x52d27d) {
      console.log(_0x52d27d);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x9c05a = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x5a6dda
      } = await this.openPlatLineNew(_0x9c05a);
    if (!_0x5a6dda) {
      return;
    }
    await this.game_login(_0x5a6dda);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0x557462 = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0xcf40f9,
        type: _0xc0e633,
        loc: _0x52e869
      } = await this.openPlatLineNew(_0x557462);
    if (!_0xcf40f9) {
      return;
    }
    await this.ttlxj_authorize(_0xcf40f9, _0xc0e633, _0x52e869);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x3bb252 = new Date().getDate();
    if (_0x3bb252 >= 26 && _0x3bb252 <= 28) {
      await this.epay_28_authCheck();
      if (_0x73a8f.length) {
        let _0x3b8f3b = _0x4bcdd6.randomList(_0x73a8f);
        await this.appMonth_28_bind(_0x3b8f3b);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x259cd1 = new Date().getDate();
    _0x259cd1 == 28 && (await this.draw_28_queryChance());
  }
  async act_517_task() {
    let _0x53e688 = new Date("2024-05-10 00:00:00"),
      _0x341bcc = new Date("2024-06-09 00:00:00"),
      _0x1682bd = Date.now();
    if (_0x1682bd > _0x53e688.getTime() && _0x1682bd < _0x341bcc.getTime()) {
      if (_0x8daf81.length) {
        let _0x233c84 = _0x4bcdd6.randomList(_0x8daf81);
        await this.act_517_bind(_0x233c84);
      }
      await this.act_517_userAccount();
    }
  }
  async card_618_task() {
    let _0x3d2e89 = new Date("2024-05-31 00:00:00"),
      _0x536f0d = new Date("2024-06-21 00:00:00"),
      _0x361621 = Date.now();
    _0x361621 > _0x3d2e89.getTime() && _0x361621 < _0x536f0d.getTime() && (this.rptId = "", await this.card_618_authCheck());
  }
  async flmf_task() {
    if (this.city.filter(_0x4e9ab3 => _0x4e9ab3.proCode == "091").length == 0) {
      return;
    }
    let _0x3e5bfa = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0x36687e
      } = await this.openPlatLineNew(_0x3e5bfa);
    if (!_0x36687e) {
      return;
    }
    await this.flmf_login(_0x36687e);
  }
  async ltyp_task() {
    let _0x58c9cd = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x208e42
      } = await this.openPlatLineNew(_0x58c9cd);
    if (!_0x208e42) {
      return;
    }
    await this.ltyp_login(_0x208e42);
  }
  async ltzf_task() {
    let _0x2670e7 = new URL("https://wocare.unisk.cn/mbh/getToken");
    _0x2670e7.searchParams.append("channelType", _0x245632);
    _0x2670e7.searchParams.append("homePage", "home");
    _0x2670e7.searchParams.append("duanlianjieabc", "qAz2m");
    let _0x48dd3c = _0x2670e7.toString(),
      {
        ticket: _0x5b5c5a
      } = await this.openPlatLineNew(_0x48dd3c);
    if (!_0x5b5c5a) {
      return;
    }
    if (!(await this.wocare_getToken(_0x5b5c5a))) {
      return;
    }
    for (let _0x575ac6 of _0x40a751) {
      await this.wocare_getDrawTask(_0x575ac6);
      await this.wocare_loadInit(_0x575ac6);
    }
  }
  async woread_draw_task(_0x4a41f9) {
    await this.woread_getSeeVideoAddNumber(_0x4a41f9);
    await this.woread_addDrawTimes(_0x4a41f9);
    await this.woread_getActivityNumber(_0x4a41f9);
  }
  async woread_task() {
    for (let _0x10a5b3 of _0x2c3946) {
      await this.woread_draw_task(_0x10a5b3);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    let _0x35854c = Object.values(this.moonbox_task_record).filter(_0x4819d3 => _0x4819d3 === true).length;
    while (this.need_read_rabbit || _0x35854c) {
      let _0x306c19 = 2;
      const _0x2e1d2a = {
        readTime: _0x306c19
      };
      await this.woread_addReadTime(_0x2e1d2a);
      let _0x4d684b = Date.now();
      if (_0x35854c) {
        await this.moonbox_queryCurTaskStatus();
      }
      _0x35854c = Object.values(this.moonbox_task_record).filter(_0x10708e => _0x10708e === true).length;
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      let _0x3a0bf3 = Date.now(),
        _0x5a3447 = 125000 + _0x4d684b - _0x3a0bf3;
      (this.need_read_rabbit || _0x35854c) && _0x5a3447 > 0 && (this.log("等待2分钟..."), await _0x4bcdd6.wait(_0x5a3447));
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
    if (!_0x4d42f0) {
      await this.moonbox_queryActiveInfo();
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x4bcdd6.log("\n------------------ 账号[" + this.index + "] ------------------");
    if (!_0x5d8afc) {
      await this.sign_task();
    }
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.act_517_task();
    await this.card_618_task();
    if (!_0x41455e) {
      await this.ltzf_task();
    }
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x4bcdd6.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  // if (!(await _0x55b75f())) {
  //   return;
  // }
  await _0x49701f();
  _0x4bcdd6.read_env(_0x3ef7fd);
  _0x4bcdd6.log("\n------------------------------------");
  _0x4bcdd6.log("首页签到设置为: " + (_0x5d8afc ? "不" : "") + "运行");
  _0x4bcdd6.log("联通祝福设置为: " + (_0x41455e ? "不" : "") + "运行");
  _0x4bcdd6.log("------------------------------------\n");
  for (let _0x5ba7ec of _0x4bcdd6.userList) {
    await _0x5ba7ec.userLoginTask();
  }
  for (let _0xc03518 of _0x4bcdd6.userList.filter(_0x247959 => _0x247959.valid)) {
    await _0xc03518.userTask();
  }
  let _0x84c4b8 = _0x4bcdd6.userList.filter(_0x681931 => _0x681931.valid && _0x681931.woread_verifycode && (_0x681931.need_read_rabbit || Object.values(_0x681931.moonbox_task_record).filter(_0x2e8315 => _0x2e8315 === true).length));
  // if (_0x84c4b8.length) {
  //   let _0x1a6949 = [];
  //   _0x4bcdd6.log("\n============ 开始刷阅读时长 ============");
  //   for (let _0x17afa5 of _0x84c4b8) {
  //     _0x1a6949.push(_0x17afa5.woread_reading_task());
  //   }
  //   await Promise.all(_0x1a6949);
  // }
})().catch(_0x46f662 => _0x4bcdd6.log(_0x46f662)).finally(() => _0x4bcdd6.exitNow());
async function _0x55b75f(_0x1bc920 = 0) {
  let _0x13982a = false;
  try {
    const _0x558c35 = {
      fn: "auth",
      method: "get",
      url: _0x326b7c,
      timeout: 20000
    };
    let {
      statusCode: _0x79bf48,
      result: _0x1468cb
    } = await _0x42a83a.request(_0x558c35);
    if (_0x79bf48 != 200) {
      _0x1bc920++ < _0xf2ada5 && (_0x13982a = await _0x55b75f(_0x1bc920));
      return _0x13982a;
    }
    if (_0x1468cb?.["code"] == 0) {
      _0x1468cb = JSON.parse(_0x1468cb.data.file.data);
      if (_0x1468cb?.["commonNotify"] && _0x1468cb.commonNotify.length > 0) {
        const _0x5351d2 = {
          notify: true
        };
        _0x4bcdd6.log(_0x1468cb.commonNotify.join("\n") + "\n", _0x5351d2);
      }
      _0x1468cb?.["commonMsg"] && _0x1468cb.commonMsg.length > 0 && _0x4bcdd6.log(_0x1468cb.commonMsg.join("\n") + "\n");
      if (_0x1468cb[_0x466772]) {
        let _0x44dd56 = _0x1468cb[_0x466772];
        _0x44dd56.status == 0 ? _0x33bff1 >= _0x44dd56.version ? (_0x13982a = true, _0x4bcdd6.log(_0x44dd56.msg[_0x44dd56.status]), _0x4bcdd6.log(_0x44dd56.updateMsg), _0x4bcdd6.log("现在运行的脚本版本是：" + _0x33bff1 + "，最新脚本版本：" + _0x44dd56.latestVersion)) : _0x4bcdd6.log(_0x44dd56.versionMsg) : _0x4bcdd6.log(_0x44dd56.msg[_0x44dd56.status]);
      } else {
        _0x4bcdd6.log(_0x1468cb.errorMsg);
      }
    } else {
      _0x1bc920++ < _0xf2ada5 && (_0x13982a = await _0x55b75f(_0x1bc920));
    }
  } catch (_0x5db370) {
    _0x4bcdd6.log(_0x5db370);
  } finally {
    return _0x13982a;
  }
}
async function _0x49701f() {
  let _0x2e422e = false;
  try {
    const _0x27c76a = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x4843f6
    };
    let {
      statusCode: _0x2ee222,
      result: _0x1ebdc5
    } = await _0x42a83a.request(_0x27c76a);
    if (_0x2ee222 != 200) {
      return Promise.resolve();
    }
    if (_0x1ebdc5?.["code"] == 0) {
      _0x1ebdc5 = JSON.parse(_0x1ebdc5.data.file.data);
      _0x2d86db = _0x1ebdc5?.["ltyp_lottery"] || _0x2d86db;
      _0x2c3946 = _0x1ebdc5?.["woread_draw_id"] || _0x2c3946;
      _0x73a8f = _0x1ebdc5?.["appMonth_28_share"] || _0x73a8f;
      _0x8daf81 = _0x1ebdc5?.["act_517_share"] || _0x8daf81;
    }
  } catch (_0x4a05f4) {
    _0x4bcdd6.log(_0x4a05f4);
  } finally {
    return _0x2e422e;
  }
}
function _0x59ca20(_0x5a6609) {
  return new class {
    constructor(_0x49ad9a) {
      this.name = _0x49ad9a;
      this.startTime = Date.now();
      const _0x4d077e = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x4d077e);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x5e5a88, _0x371f7a = {}) {
      const _0x3a2e72 = {
        console: true
      };
      Object.assign(_0x3a2e72, _0x371f7a);
      if (_0x3a2e72.time) {
        let _0x56db7d = _0x3a2e72.fmt || "hh:mm:ss";
        _0x5e5a88 = "[" + this.time(_0x56db7d) + "]" + _0x5e5a88;
      }
      if (_0x3a2e72.notify) {
        this.notifyStr.push(_0x5e5a88);
      }
      if (_0x3a2e72.console) {
        console.log(_0x5e5a88);
      }
    }
    get(_0x40fe13, _0x40ba3c, _0x17c048 = "") {
      let _0xe644 = _0x17c048;
      _0x40fe13?.["hasOwnProperty"](_0x40ba3c) && (_0xe644 = _0x40fe13[_0x40ba3c]);
      return _0xe644;
    }
    pop(_0x2a8b4a, _0x555c2a, _0xc6572b = "") {
      let _0x5805a7 = _0xc6572b;
      _0x2a8b4a?.["hasOwnProperty"](_0x555c2a) && (_0x5805a7 = _0x2a8b4a[_0x555c2a], delete _0x2a8b4a[_0x555c2a]);
      return _0x5805a7;
    }
    copy(_0x3e2869) {
      return Object.assign({}, _0x3e2869);
    }
    read_env(_0xa568) {
      let _0x105963 = _0x174adf.map(_0x134039 => process.env[_0x134039]);
      for (let _0x54ed18 of _0x105963.filter(_0x2685bd => !!_0x2685bd)) {
        let _0x49fe50 = _0x45c89b.filter(_0x5cbdf1 => _0x54ed18.includes(_0x5cbdf1)),
          _0x2e1f9d = _0x49fe50.length > 0 ? _0x49fe50[0] : _0x45c89b[0];
        for (let _0x55eac6 of _0x54ed18.split(_0x2e1f9d).filter(_0x5c26f7 => !!_0x5c26f7)) {
          this.userList.push(new _0xa568(_0x55eac6));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x50bea1 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x174adf.map(_0x118064 => "[" + _0x118064 + "]").join("或"), _0x50bea1);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x471346, _0x2792d0, _0x295b4b = {}) {
      while (_0x2792d0.idx < _0x4bcdd6.userList.length) {
        let _0x2adcb2 = _0x4bcdd6.userList[_0x2792d0.idx++];
        if (!_0x2adcb2.valid) {
          continue;
        }
        await _0x2adcb2[_0x471346](_0x295b4b);
      }
    }
    async threadTask(_0x46ecfb, _0x4f9fb2) {
      let _0x54d5d4 = [];
      const _0x2af26a = {
        idx: 0
      };
      while (_0x4f9fb2--) {
        _0x54d5d4.push(this.threads(_0x46ecfb, _0x2af26a));
      }
      await Promise.all(_0x54d5d4);
    }
    time(_0x57e2d4, _0x539715 = null) {
      let _0x1666c8 = _0x539715 ? new Date(_0x539715) : new Date(),
        _0x4ce9bd = {
          "M+": _0x1666c8.getMonth() + 1,
          "d+": _0x1666c8.getDate(),
          "h+": _0x1666c8.getHours(),
          "m+": _0x1666c8.getMinutes(),
          "s+": _0x1666c8.getSeconds(),
          "q+": Math.floor((_0x1666c8.getMonth() + 3) / 3),
          S: this.padStr(_0x1666c8.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x57e2d4) && (_0x57e2d4 = _0x57e2d4.replace(RegExp.$1, (_0x1666c8.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1c9776 in _0x4ce9bd) new RegExp("(" + _0x1c9776 + ")").test(_0x57e2d4) && (_0x57e2d4 = _0x57e2d4.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4ce9bd[_0x1c9776] : ("00" + _0x4ce9bd[_0x1c9776]).substr(("" + _0x4ce9bd[_0x1c9776]).length)));
      return _0x57e2d4;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x96af66 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x96af66.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x5facd1, _0x56680c, _0x3d3219 = {}) {
      let _0x231fb7 = _0x3d3219.padding || "0",
        _0x5e95f1 = _0x3d3219.mode || "l",
        _0x1abbba = String(_0x5facd1),
        _0xed6ac8 = _0x56680c > _0x1abbba.length ? _0x56680c - _0x1abbba.length : 0,
        _0x1860af = "";
      for (let _0xcd0060 = 0; _0xcd0060 < _0xed6ac8; _0xcd0060++) {
        _0x1860af += _0x231fb7;
      }
      _0x5e95f1 == "r" ? _0x1abbba = _0x1abbba + _0x1860af : _0x1abbba = _0x1860af + _0x1abbba;
      return _0x1abbba;
    }
    json2str(_0x29ef22, _0x4320e8, _0x5f1c52 = false) {
      let _0x58fa0d = [];
      for (let _0x1d58e7 of Object.keys(_0x29ef22).sort()) {
        let _0xaef402 = _0x29ef22[_0x1d58e7];
        if (_0xaef402 && _0x5f1c52) {
          _0xaef402 = encodeURIComponent(_0xaef402);
        }
        _0x58fa0d.push(_0x1d58e7 + "=" + _0xaef402);
      }
      return _0x58fa0d.join(_0x4320e8);
    }
    str2json(_0x40250c, _0x4fd17d = false) {
      let _0x156fdd = {};
      for (let _0xc8b999 of _0x40250c.split("&")) {
        if (!_0xc8b999) {
          continue;
        }
        let _0x30fae2 = _0xc8b999.indexOf("=");
        if (_0x30fae2 == -1) {
          continue;
        }
        let _0x106982 = _0xc8b999.substr(0, _0x30fae2),
          _0x139add = _0xc8b999.substr(_0x30fae2 + 1);
        if (_0x4fd17d) {
          _0x139add = decodeURIComponent(_0x139add);
        }
        _0x156fdd[_0x106982] = _0x139add;
      }
      return _0x156fdd;
    }
    randomPattern(_0x104ac4, _0x502957 = "abcdef0123456789") {
      let _0x2a88f0 = "";
      for (let _0x32f791 of _0x104ac4) {
        if (_0x32f791 == "x") {
          _0x2a88f0 += _0x502957.charAt(Math.floor(Math.random() * _0x502957.length));
        } else {
          _0x32f791 == "X" ? _0x2a88f0 += _0x502957.charAt(Math.floor(Math.random() * _0x502957.length)).toUpperCase() : _0x2a88f0 += _0x32f791;
        }
      }
      return _0x2a88f0;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-4xxx-4xxx-xxxxxxxxxxxx");
    }
    randomString(_0x5bd6f9, _0x4f8dbc = "abcdef0123456789") {
      let _0x542675 = "";
      for (let _0x176174 = 0; _0x176174 < _0x5bd6f9; _0x176174++) {
        _0x542675 += _0x4f8dbc.charAt(Math.floor(Math.random() * _0x4f8dbc.length));
      }
      return _0x542675;
    }
    randomList(_0x319ae9) {
      let _0x390714 = Math.floor(Math.random() * _0x319ae9.length);
      return _0x319ae9[_0x390714];
    }
    wait(_0x2fc569) {
      return new Promise(_0x19a99e => setTimeout(_0x19a99e, _0x2fc569));
    }
    async exitNow() {
      await this.showmsg();
      let _0x3b3835 = Date.now(),
        _0x2d3c11 = (_0x3b3835 - this.startTime) / 1000;
      this.log("");
      const _0xd81cae = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2d3c11 + "秒", _0xd81cae);
      process.exit(0);
    }
    normalize_time(_0x24abf2, _0x573832 = {}) {
      let _0x55117e = _0x573832.len || this.default_timestamp_len;
      _0x24abf2 = _0x24abf2.toString();
      let _0x132298 = _0x24abf2.length;
      while (_0x132298 < _0x55117e) {
        _0x24abf2 += "0";
      }
      _0x132298 > _0x55117e && (_0x24abf2 = _0x24abf2.slice(0, 13));
      return parseInt(_0x24abf2);
    }
    async wait_until(_0x13034f, _0x19b456 = {}) {
      let _0x994b5c = _0x19b456.logger || this,
        _0x46b279 = _0x19b456.interval || default_wait_interval,
        _0x1e12b0 = _0x19b456.limit || default_wait_limit,
        _0x2c41d4 = _0x19b456.ahead || default_wait_ahead;
      if (typeof _0x13034f == "string" && _0x13034f.includes(":")) {
        if (_0x13034f.includes("-")) {
          _0x13034f = new Date(_0x13034f).getTime();
        } else {
          let _0x3f43da = this.time("yyyy-MM-dd ");
          _0x13034f = new Date(_0x3f43da + _0x13034f).getTime();
        }
      }
      let _0x2bf90a = this.normalize_time(_0x13034f) - _0x2c41d4,
        _0x3a9cd7 = this.time("hh:mm:ss.S", _0x2bf90a),
        _0x3eb0ba = Date.now();
      _0x3eb0ba > _0x2bf90a && (_0x2bf90a += 86400000);
      let _0x586a6a = _0x2bf90a - _0x3eb0ba;
      if (_0x586a6a > _0x1e12b0) {
        const _0x2cb98c = {
          time: true
        };
        _0x994b5c.log("离目标时间[" + _0x3a9cd7 + "]大于" + _0x1e12b0 / 1000 + "秒,不等待", _0x2cb98c);
      } else {
        const _0x2d6728 = {
          time: true
        };
        _0x994b5c.log("离目标时间[" + _0x3a9cd7 + "]还有" + _0x586a6a / 1000 + "秒,开始等待", _0x2d6728);
        while (_0x586a6a > 0) {
          let _0x1075da = Math.min(_0x586a6a, _0x46b279);
          await this.wait(_0x1075da);
          _0x3eb0ba = Date.now();
          _0x586a6a = _0x2bf90a - _0x3eb0ba;
        }
        const _0x2c337b = {
          time: true
        };
        _0x994b5c.log("已完成等待", _0x2c337b);
      }
    }
    async wait_gap_interval(_0x418225, _0x41c3a9) {
      let _0x3a34b7 = Date.now() - _0x418225;
      _0x3a34b7 < _0x41c3a9 && (await this.wait(_0x41c3a9 - _0x3a34b7));
    }
  }(_0x5a6609);
}