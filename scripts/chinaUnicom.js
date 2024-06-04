const _0x5bb516 = _0x48e85d("中国联通"),
  _0x247cad = require("got"),
  _0x1db3b5 = require("path"),
  {
    exec: _0x1f69bb
  } = require("child_process"),
  _0x280505 = require("crypto-js"),
  {
    CookieJar: _0x5b16d4
  } = require("tough-cookie"),
  _0x2d6876 = "chinaUnicom",
  _0x19f641 = ["\n", "&", "@"],
  _0x37842d = [_0x2d6876 + "Cookie"],
  _0x4a231a = process.env[_0x2d6876 + "Sign"] === "false",
  _0x43e13f = process.env[_0x2d6876 + "Ltzf"] === "false",
  _0x741fc = 50000,
  _0x960c61 = 3;
const _0x5c887a = 2.04,
  _0x592491 = "chinaUnicom",
  _0x2050db = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x1e357b = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x592491 + ".json",
  _0x56a4dc = 5,
  _0x24f474 = "iphone_c@11.0503",
  _0x483809 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:" + _0x24f474 + "}",
  _0x3c2560 = "d82ac3821b50e6f05f6c684d27d252a584517c685da7130a2bd27361afb4f2e300ab1ecc5a701b4d2d4df69e795299dc08c2c5a1129381372a65a1a9a397eb16cec3c3cc0179f01df450042f3469658331cec050c7d5c50b121dc28b3f31ece6",
  _0x3863a6 = "10000002",
  _0x1d868a = "7k1HcDL8RKvc",
  _0x3d8436 = "update!@#1234567",
  _0xe5e28a = "16-Bytes--String",
  _0x461698 = "225",
  _0xb4f4c7 = "225",
  _0x328ab0 = "party",
  _0x28752e = "6-WfVldfFrt3zhjHhe6kzwI-XfG5aMCzRTLI_4K7_a0",
  _0x173f7c = "73b138fd-250c-4126-94e2-48cbcc8b9cbe",
  _0x27c966 = "7cb46449-3b11-4414-bb49-cbd15525fb88",
  _0xf6b7e = "1",
  _0x2b3213 = "wocareMBHServiceLife1",
  _0x516a2c = "beea1c7edf7c4989b2d3621c4255132f",
  _0x28fd72 = "f4cd4ffeb5554586acf65ba7110534f5",
  _0x330846 = "0123456789",
  _0x189c1e = "qwertyuiopasdfghjklzxcvbnm",
  _0x26866f = process.env[_0x2d6876 + "Uuid"] || _0x5bb516.randomUuid(),
  _0x38cad8 = [9, 10, 11, 12, 13],
  _0x59602e = 1000,
  _0x28c433 = 5000,
  _0x17779a = "1001000003",
  _0x2b196 = "100002",
  _0x1e1707 = "";
let _0x545960 = [],
  _0x110e7c = [],
  _0x151f69 = [],
  _0x18dd5f = null,
  _0x91bd0a = [6640, 6641];
const _0x752aa = 7,
  _0x47e20d = 5,
  _0x4d170b = 5,
  _0x1c6653 = {
    ttlxj: "TTLXJ20210330",
    card_618: "NZJK618CJHD"
  };
const _0x40d48c = {
  name: "星座配对",
  id: 2
};
const _0x16647b = {
  name: "大转盘",
  id: 3
};
const _0xa2b0be = {
  name: "盲盒抽奖",
  id: 4
};
const _0x1a0c5d = [_0x40d48c, _0x16647b, _0xa2b0be],
  _0xafd1ea = {
    ZFGJBXXCY1: "空气",
    GJBNZJK19: "[6]",
    GJBNZJK20: "[1]",
    GJBNZJK21: "[8]",
    GJBNZJK22: "[狂]",
    GJBNZJK23: "[欢]"
  };
const _0x1e5360 = {
  "抽奖": "01",
  "首次进入": "02",
  "卡片合成": "03",
  "瓜分奖励": "04"
};
function _0x1cf0d1(_0x55b75e, _0x1098ac, _0x4fd4f1, _0x32d51b, _0x164bce, _0x4d3d3a) {
  return _0x280505[_0x55b75e].encrypt(_0x280505.enc.Utf8.parse(_0x32d51b), _0x280505.enc.Utf8.parse(_0x164bce), {
    mode: _0x280505.mode[_0x1098ac],
    padding: _0x280505.pad[_0x4fd4f1],
    iv: _0x280505.enc.Utf8.parse(_0x4d3d3a)
  }).ciphertext.toString(_0x280505.enc.Hex);
}
function _0x423c20(_0x53d566, _0x5e8f66, _0x22cf99, _0x53ccee, _0x59126c, _0xa55191) {
  return _0x280505[_0x53d566].decrypt({
    ciphertext: _0x280505.enc.Hex.parse(_0x53ccee)
  }, _0x280505.enc.Utf8.parse(_0x59126c), {
    mode: _0x280505.mode[_0x5e8f66],
    padding: _0x280505.pad[_0x22cf99],
    iv: _0x280505.enc.Utf8.parse(_0xa55191)
  }).toString(_0x280505.enc.Utf8);
}
let _0x3b8a43 = 0,
  _0x32f0c5 = 0;
function _0x2ce26c() {
  _0x32f0c5 = 1;
  process.on("SIGTERM", () => {
    _0x32f0c5 = 2;
    process.exit(0);
  });
  const _0x16ec23 = _0x1db3b5.basename(process.argv[1]),
    _0x4b43d3 = ["bash", "timeout", "grep"];
  let _0x1a3d3b = ["ps afx"];
  _0x1a3d3b.push("grep " + _0x16ec23);
  _0x1a3d3b = _0x1a3d3b.concat(_0x4b43d3.map(_0x23f3c4 => "grep -v \"" + _0x23f3c4 + " \""));
  _0x1a3d3b.push("wc -l");
  const _0x5c615f = _0x1a3d3b.join("|"),
    _0x10846f = () => {
      _0x1f69bb(_0x5c615f, (_0xcbc97d, _0x26ea94, _0x1db1a5) => {
        if (_0xcbc97d || _0x1db1a5) {
          return;
        }
        _0x3b8a43 = parseInt(_0x26ea94.trim(), 10);
      });
      if (_0x32f0c5 == 1) {
        setTimeout(_0x10846f, 2000);
      }
    };
  _0x10846f();
}
class _0x2a8d55 {
  constructor() {
    this.index = _0x5bb516.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x239512 = {
      limit: 0
    };
    const _0x22f6e3 = {
      Connection: "keep-alive"
    };
    const _0x4cbfbd = {
      retry: _0x239512,
      timeout: _0x741fc,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x22f6e3
    };
    this.got = _0x247cad.extend(_0x4cbfbd);
    if (_0x32f0c5 == 0) {
      _0x2ce26c();
    }
  }
  log(_0x2190ae, _0x1344d7 = {}) {
    var _0xf676e3 = "",
      _0x30914f = _0x5bb516.userCount.toString().length;
    if (this.index) {
      _0xf676e3 += "账号[" + _0x5bb516.padStr(this.index, _0x30914f) + "]";
    }
    if (this.name) {
      _0xf676e3 += "[" + this.name + "]";
    }
    _0x5bb516.log(_0xf676e3 + _0x2190ae, _0x1344d7);
  }
  set_cookie(_0x2a4632, _0x4fcbdf, _0x15578f, _0x18bc5d, _0x10b5df = {}) {
    this.cookieJar.setCookieSync(_0x2a4632 + "=" + _0x4fcbdf + "; Domain=" + _0x15578f + ";", "" + _0x18bc5d);
  }
  async request(_0x2b997b) {
    const _0x40745a = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x2c61cf = ["TimeoutError"],
      _0x3fa967 = ["EPROTO"],
      _0x13cad8 = [];
    var _0x4f963e = null,
      _0xae3928 = 0,
      _0x1b63c6 = _0x2b997b.fn || _0x2b997b.url;
    let _0x3c1ad3 = _0x5bb516.get(_0x2b997b, "valid_code", _0x13cad8);
    _0x2b997b.method = _0x2b997b?.["method"]?.["toUpperCase"]() || "GET";
    let _0x24d5ad, _0x1be2f0;
    while (_0xae3928 < _0x960c61) {
      try {
        _0xae3928++;
        _0x24d5ad = "";
        _0x1be2f0 = "";
        let _0x41623e = null,
          _0x31e831 = _0x2b997b?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x741fc,
          _0x31d88d = false,
          _0x90ff2f = Math.max(this.index - 2, 0),
          _0x2c4c23 = Math.min(Math.max(this.index - 3, 1), 3),
          _0x24d59f = Math.min(Math.max(this.index - 4, 1), 4),
          _0xbbfa89 = _0x90ff2f * _0x2c4c23 * _0x24d59f * 400,
          _0xb9f790 = _0x90ff2f * _0x2c4c23 * _0x24d59f * 1800,
          _0x500e4e = _0xbbfa89 + Math.floor(Math.random() * _0xb9f790),
          _0x505e2e = _0x3b8a43 * (_0x3b8a43 - 1) * 2000,
          _0x445a68 = (_0x3b8a43 - 1) * (_0x3b8a43 - 1) * 2000,
          _0x484f54 = _0x505e2e + Math.floor(Math.random() * _0x445a68),
          _0x3a12f3 = Math.max(_0x5bb516.userCount - 2, 0),
          _0x4db780 = Math.max(_0x5bb516.userCount - 3, 0),
          _0x39de7f = _0x3a12f3 * 200,
          _0x2a4a12 = _0x4db780 * 400,
          _0x171882 = _0x39de7f + Math.floor(Math.random() * _0x2a4a12),
          _0x1121b8 = _0x500e4e + _0x484f54 + _0x171882;
        await _0x5bb516.wait(_0x1121b8);
        await new Promise(async _0x538fbd => {
          setTimeout(() => {
            _0x31d88d = true;
            _0x538fbd();
          }, _0x31e831);
          await this.got(_0x2b997b).then(_0x4e0047 => {
            _0x4f963e = _0x4e0047;
          }, _0x124f74 => {
            _0x41623e = _0x124f74;
            _0x4f963e = _0x124f74.response;
            _0x24d5ad = _0x41623e?.["code"] || "";
            _0x1be2f0 = _0x41623e?.["name"] || "";
          });
          _0x538fbd();
        });
        if (_0x31d88d) {
          this.log("[" + _0x1b63c6 + "]请求超时(" + _0x31e831 / 1000 + "秒)，重试第" + _0xae3928 + "次");
        } else {
          if (_0x3fa967.includes(_0x24d5ad)) {
            this.log("[" + _0x1b63c6 + "]请求错误[" + _0x24d5ad + "][" + _0x1be2f0 + "]");
            if (_0x41623e?.["message"]) {
              console.log(_0x41623e.message);
            }
            break;
          } else {
            if (_0x2c61cf.includes(_0x1be2f0)) {
              this.log("[" + _0x1b63c6 + "]请求错误[" + _0x24d5ad + "][" + _0x1be2f0 + "]，重试第" + _0xae3928 + "次");
            } else {
              if (_0x40745a.includes(_0x24d5ad)) {
                this.log("[" + _0x1b63c6 + "]请求错误[" + _0x24d5ad + "][" + _0x1be2f0 + "]，重试第" + _0xae3928 + "次");
              } else {
                let _0x32c2fd = _0x4f963e?.["statusCode"] || "",
                  _0x5e2a18 = _0x32c2fd / 100 | 0;
                if (_0x32c2fd) {
                  _0x5e2a18 > 3 && !_0x3c1ad3.includes(_0x32c2fd) && (_0x32c2fd ? this.log("请求[" + _0x1b63c6 + "]返回[" + _0x32c2fd + "]") : this.log("请求[" + _0x1b63c6 + "]错误[" + _0x24d5ad + "][" + _0x1be2f0 + "]"));
                  if (_0x5e2a18 <= 4) {
                    break;
                  }
                } else {
                  this.log("请求[" + _0x1b63c6 + "]错误[" + _0x24d5ad + "][" + _0x1be2f0 + "]");
                }
              }
            }
          }
        }
      } catch (_0x451f36) {
        _0x451f36.name == "TimeoutError" ? this.log("[" + _0x1b63c6 + "]请求超时，重试第" + _0xae3928 + "次") : this.log("[" + _0x1b63c6 + "]请求错误(" + _0x451f36.message + ")，重试第" + _0xae3928 + "次");
      }
    }
    if (_0x4f963e == null) {
      return Promise.resolve({
        statusCode: _0x24d5ad || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x40ba81,
      headers: _0x3e7d8a,
      body: _0x11e2d9
    } = _0x4f963e;
    if (_0x11e2d9) {
      try {
        _0x11e2d9 = JSON.parse(_0x11e2d9);
      } catch {}
    }
    const _0x3af743 = {
      statusCode: _0x40ba81,
      headers: _0x3e7d8a,
      result: _0x11e2d9
    };
    return Promise.resolve(_0x3af743);
  }
}
let _0x54ef59 = _0x2a8d55;
try {
  let _0x513b95 = require("./LocalBasic");
  _0x54ef59 = _0x513b95;
} catch {}
let _0x5a7f2e = new _0x54ef59(_0x5bb516);
class _0x4e574b extends _0x54ef59 {
  constructor(_0x55848f) {
    super(_0x5bb516);
    this.cookieJar = new _0x5b16d4();
    const _0x59c74b = {
      "User-Agent": _0x483809
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x59c74b
    });
    let _0x56832b = _0x55848f.split("#");
    this.token_online = _0x56832b[0];
    this.unicomTokenId = _0x5bb516.randomString(32);
    this.tokenId_cookie = "chinaunicom-" + _0x5bb516.randomString(32, _0x330846 + _0x189c1e).toUpperCase();
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
  set_cookie(_0x1f6c54, _0x876133, _0xe72914 = {}) {
    let _0x28e81b = _0xe72914?.["domain"] || "10010.com",
      _0x32bc96 = _0xe72914?.["currentUrl"] || "https://epay.10010.com";
    super.set_cookie(_0x1f6c54, _0x876133, _0x28e81b, _0x32bc96, _0xe72914);
  }
  get_bizchannelinfo() {
    const _0x147418 = {
      bizChannelCode: _0xb4f4c7,
      disriBiz: _0x328ab0,
      unionSessionId: "",
      stType: "",
      stDesmobile: "",
      source: "",
      rptId: this.rptId,
      ticket: "",
      tongdunTokenId: this.tokenId_cookie,
      xindunTokenId: this.sdkuuid
    };
    let _0x4fdb5c = JSON.stringify(_0x147418);
    return _0x4fdb5c;
  }
  get_epay_authinfo() {
    const _0x5c5cea = {
      mobile: "",
      sessionId: this.sessionId,
      tokenId: this.tokenId,
      userId: ""
    };
    return JSON.stringify(_0x5c5cea);
  }
  get_flmf_data(_0x4b6adf = "welfareCenter") {
    const _0x3af68f = {
      sid: this.flmf_sid,
      actcode: _0x4b6adf
    };
    return _0x3af68f;
  }
  encode_woread(_0x3ab03c) {
    let _0x16f9fc = _0x1cf0d1("AES", "CBC", "Pkcs7", JSON.stringify(_0x3ab03c), _0x3d8436, _0xe5e28a);
    return Buffer.from(_0x16f9fc, "utf-8").toString("base64");
  }
  get_woread_param() {
    return {
      timestamp: _0x5bb516.time("yyyyMMddhhmmss"),
      token: this.woread_token,
      userid: this.woread_userid,
      userId: this.woread_userid,
      userIndex: this.woread_userIndex,
      userAccount: this.mobile,
      verifyCode: this.woread_verifycode
    };
  }
  get_ltyp_sign_header(_0x437173) {
    let _0x22b7bf = Date.now(),
      _0x4be0ca = Math.floor(89999 * Math.random()) + 100000,
      _0x3af05f = _0x2b196,
      _0xa7da84 = _0x1e1707,
      _0x3c7695 = _0x280505.MD5(_0x437173 + _0x22b7bf + _0x4be0ca + _0x3af05f + _0xa7da84).toString();
    const _0x27fdc8 = {
      key: _0x437173,
      resTime: _0x22b7bf,
      reqSeq: _0x4be0ca,
      channel: _0x3af05f,
      version: _0xa7da84,
      sign: _0x3c7695
    };
    return _0x27fdc8;
  }
  async onLine(_0x22b75c = {}) {
    let _0x46ff02 = false;
    try {
      let _0x36f87c = {
          fn: "onLine",
          method: "post",
          url: "https://m.client.10010.com/mobileService/onLine.htm",
          form: {
            token_online: this.token_online,
            reqtime: _0x5bb516.time("yyyy-MM-dd hh:mm:ss"),
            appId: _0x3c2560,
            version: _0x24f474,
            step: "bindlist",
            isFirstInstall: 0,
            deviceModel: "iPhone"
          }
        },
        {
          result: _0x413d40,
          statusCode: _0x4b8e16
        } = await this.request(_0x36f87c),
        _0xd4b8e2 = _0x5bb516.get(_0x413d40, "code", _0x4b8e16);
      if (_0xd4b8e2 == 0) {
        _0x46ff02 = true;
        this.valid = true;
        this.mobile = _0x413d40?.["desmobile"];
        // this.name = _0x413d40?.["desmobile"];
        this.ecs_token = _0x413d40?.["ecs_token"];
        this.city = _0x413d40?.["list"];
        this.log("登录成功");
      } else {
        this.valid = false;
        this.log("登录失败[" + _0xd4b8e2 + "]");
      }
    } catch (_0x4c003f) {
      console.log(_0x4c003f);
    } finally {
      return _0x46ff02;
    }
  }
  async openPlatLineNew(_0x393294, _0x18a40d = {}) {
    const _0x4c802 = {
      ticket: "",
      type: "",
      loc: ""
    };
    let _0x2b29fd = _0x4c802;
    try {
      const _0x56ddc7 = {
        to_url: _0x393294
      };
      const _0x501de4 = {
        fn: "openPlatLineNew",
        method: "get",
        url: "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm",
        searchParams: _0x56ddc7
      };
      let {
        headers: _0x1218bc,
        statusCode: _0x427c93
      } = await this.request(_0x501de4);
      if (_0x1218bc?.["location"]) {
        let _0x4938ec = new URL(_0x1218bc.location),
          _0xc6c290 = _0x4938ec.searchParams.get("type") || "02",
          _0x485595 = _0x4938ec.searchParams.get("ticket");
        !_0x485595 && this.log("获取ticket失败");
        const _0x279272 = {
          loc: _0x1218bc.location,
          ticket: _0x485595,
          type: _0xc6c290
        };
        _0x2b29fd = _0x279272;
      } else {
        this.log("获取ticket失败[" + _0x427c93 + "]");
      }
    } catch (_0x385d37) {
      console.log(_0x385d37);
    } finally {
      return _0x2b29fd;
    }
  }
  async gettaskip(_0x3d1500 = {}) {
    let _0x566bf5 = _0x5bb516.randomString(32).toUpperCase();
    try {
      const _0x1121c0 = {
        mobile: this.mobile,
        orderId: _0x566bf5
      };
      const _0x8fb7ee = {
        fn: "gettaskip",
        method: "post",
        url: "https://m.client.10010.com/taskcallback/topstories/gettaskip",
        form: _0x1121c0
      };
      await this.request(_0x8fb7ee);
    } catch (_0x1c121f) {
      console.log(_0x1c121f);
    } finally {
      return _0x566bf5;
    }
  }
  async draw_28_queryChance(_0x34d3a8 = {}) {
    try {
      const _0x11052e = {
        fn: "draw_28_queryChance",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x3cdbe1,
          statusCode: _0x201463
        } = await this.request(_0x11052e),
        _0x141a18 = _0x5bb516.get(_0x3cdbe1, "status", _0x201463);
      if (_0x141a18 == "0000") {
        let _0x4634c9 = parseInt(_0x3cdbe1?.["data"]?.["allRemainTimes"] || 0),
          _0x215e66 = Math.min(_0x4d170b, _0x4634c9);
        this.log("28日五折日可以抽奖" + _0x4634c9 + "次, 去抽" + _0x215e66 + "次");
        let _0x5444a9 = false;
        while (_0x215e66-- > 0) {
          if (_0x5444a9) {
            await _0x5bb516.wait(8000);
          }
          _0x5444a9 = true;
          await this.draw_28_lottery();
        }
      } else {
        let _0x4f65f6 = _0x3cdbe1?.["message"] || _0x3cdbe1?.["msg"] || "";
        this.log("28日五折日查询抽奖次数失败[" + _0x141a18 + "]: " + _0x4f65f6);
      }
    } catch (_0x97483b) {
      console.log(_0x97483b);
    }
  }
  async draw_28_lottery(_0x34d631 = {}) {
    try {
      const _0x3aa896 = {
        fn: "draw_28_lottery",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x53168d,
          statusCode: _0x369f8b
        } = await this.request(_0x3aa896),
        _0x353c90 = _0x5bb516.get(_0x53168d, "status", _0x369f8b);
      if (_0x353c90 == "0000") {
        let _0x275845 = _0x5bb516.get(_0x53168d?.["data"], "code", -1);
        if (_0x53168d?.["data"]?.["uuid"]) {
          await _0x5bb516.wait(2000);
          await this.draw_28_winningRecord(_0x53168d.data.uuid);
        } else {
          let _0x192672 = _0x53168d?.["data"]?.["message"] || _0x53168d?.["data"]?.["msg"] || "";
          this.log("28日五折日抽奖失败[" + _0x275845 + "]: " + _0x192672);
        }
      } else {
        let _0x7e9e0f = _0x53168d?.["message"] || _0x53168d?.["msg"] || "";
        this.log("28日五折日抽奖失败[" + _0x353c90 + "]: " + _0x7e9e0f);
      }
    } catch (_0x2e63bf) {
      console.log(_0x2e63bf);
    }
  }
  async draw_28_winningRecord(_0x873217, _0x240a53 = {}) {
    try {
      const _0x35243b = {
        requestId: _0x873217
      };
      const _0x362d6c = {
        fn: "draw_28_winningRecord",
        method: "post",
        url: "https://m.client.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x35243b
      };
      let {
          result: _0x48afc3,
          statusCode: _0x39e5f6
        } = await this.request(_0x362d6c),
        _0x11bbd3 = _0x5bb516.get(_0x48afc3, "status", _0x39e5f6);
      if (_0x11bbd3 == "0000") {
        let _0x20c702 = _0x5bb516.get(_0x48afc3?.["data"], "code", -1);
        if (_0x20c702 == "0000") {
          const _0x31ad4a = {
            notify: true
          };
          this.log("28日五折日抽奖: " + _0x48afc3?.["data"]?.["prizeName"]?.["replace"](/\t/g, ""), _0x31ad4a);
        } else {
          let _0x45c40d = _0x48afc3?.["data"]?.["message"] || _0x48afc3?.["data"]?.["msg"] || "";
          this.log("查询28日五折日抽奖结果失败[" + _0x20c702 + "]: " + _0x45c40d);
        }
      } else {
        let _0x470533 = _0x48afc3?.["message"] || _0x48afc3?.["msg"] || "";
        this.log("查询28日五折日抽奖结果失败[" + _0x11bbd3 + "]: " + _0x470533);
      }
    } catch (_0x4ddb5f) {
      console.log(_0x4ddb5f);
    }
  }
  async ttlxj_authorize(_0x5e19ac, _0x262901, _0x2d90c1, _0x3f1203 = {}) {
    try {
      let _0xc90625 = {
          fn: "ttlxj_authorize",
          method: "post",
          url: "https://epay.10010.com/woauth2/v2/authorize",
          headers: {
            Origin: "https://epay.10010.com",
            Referer: _0x2d90c1
          },
          json: {
            response_type: "rptid",
            client_id: _0x173f7c,
            redirect_uri: "https://epay.10010.com/ci-mps-st-web/",
            login_hint: {
              credential_type: "st_ticket",
              credential: _0x5e19ac,
              st_type: _0x262901,
              force_logout: true,
              source: "app_sjyyt"
            },
            device_info: {
              token_id: "chinaunicom-pro-" + Date.now() + "-" + _0x5bb516.randomString(13),
              trace_id: _0x5bb516.randomString(32)
            }
          }
        },
        {
          result: _0x23ef1c
        } = await this.request(_0xc90625),
        _0x2198f0 = _0x5bb516.get(_0x23ef1c, "status", -1);
      if (_0x2198f0 == 200) {
        await this.ttlxj_authCheck();
      } else {
        let _0x46319d = _0x23ef1c?.["message"] || _0x23ef1c?.["msg"] || "";
        this.log("天天领现金获取SESSION失败[" + _0x2198f0 + "]: " + _0x46319d);
      }
    } catch (_0x5781d2) {
      console.log(_0x5781d2);
    }
  }
  async ttlxj_authCheck(_0x14e32b = {}) {
    try {
      let _0x10bd05 = {
          fn: "ttlxj_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x5a0711
        } = await this.request(_0x10bd05),
        _0x5a7c58 = _0x5bb516.get(_0x5a0711, "code", -1);
      if (_0x5a7c58 == "0000") {
        let {
          mobile: _0x4f6126,
          sessionId: _0x578ceb,
          tokenId: _0x1b8817,
          userId: _0x13d254
        } = _0x5a0711?.["data"]?.["authInfo"];
        const _0x3871a2 = {
          sessionId: _0x578ceb,
          tokenId: _0x1b8817,
          userId: _0x13d254
        };
        Object.assign(this, _0x3871a2);
        await this.ttlxj_userDrawInfo();
        await this.ttlxj_queryAvailable();
      } else {
        if (_0x5a7c58 == "2101000100") {
          let _0x27c302 = _0x5a0711?.["data"]?.["woauth_login_url"];
          await this.ttlxj_login(_0x27c302);
        } else {
          let _0x5a9e55 = _0x5a0711?.["msgInside"] || _0x5a0711?.["msg"] || "";
          this.log("天天领现金获取tokenId失败[" + _0x5a7c58 + "]: " + _0x5a9e55);
        }
      }
    } catch (_0x1c201c) {
      console.log(_0x1c201c);
    }
  }
  async ttlxj_login(_0x3baa39, _0x369fb5 = {}) {
    try {
      _0x3baa39 += "https://epay.10010.com/ci-mcss-party-web/clockIn/?bizFrom=" + _0x461698 + "&bizChannelCode=" + _0xb4f4c7;
      const _0x1d1310 = {
        fn: "ttlxj_login",
        method: "get",
        url: _0x3baa39
      };
      let {
        headers: _0x33507d,
        statusCode: _0x180d14
      } = await this.request(_0x1d1310);
      if (_0x33507d?.["location"]) {
        let _0x278155 = new URL(_0x33507d.location);
        this.rptId = _0x278155.searchParams.get("rptid");
        this.rptId ? await this.ttlxj_authCheck() : this.log("天天领现金获取rptid失败");
      } else {
        this.log("天天领现金获取rptid失败[" + _0x180d14 + "]");
      }
    } catch (_0xf3b4da) {
      console.log(_0xf3b4da);
    }
  }
  async ttlxj_userDrawInfo(_0x5f51f1 = {}) {
    try {
      let _0x2d97a1 = {
          fn: "ttlxj_userDrawInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/userDrawInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x29a9f0
        } = await this.request(_0x2d97a1),
        _0x335ee1 = _0x5bb516.get(_0x29a9f0, "code", -1);
      if (_0x335ee1 == "0000") {
        let _0x24120a = _0x29a9f0?.["data"]?.["dayOfWeek"],
          _0x2db967 = "day" + _0x24120a,
          _0x436bc1 = _0x29a9f0?.["data"]?.[_0x2db967] == "1";
        const _0x5722bf = {
          notify: true
        };
        this.log("天天领现金今天" + (_0x436bc1 ? "未" : "已") + "打卡", _0x5722bf);
        if (_0x436bc1) {
          let _0x192574 = new Date().getDay();
          _0x192574 % 7 == 0 ? await this.ttlxj_unifyDrawNew("C") : await this.ttlxj_unifyDrawNew("B");
        }
      } else {
        let _0xb5d2a2 = _0x29a9f0?.["msg"] || "";
        this.log("天天领现金查询失败[" + _0x335ee1 + "]: " + _0xb5d2a2);
      }
    } catch (_0x2973c0) {
      console.log(_0x2973c0);
    }
  }
  async ttlxj_unifyDrawNew(_0x363cc9, _0x461f73 = {}) {
    try {
      const _0x2b021c = {
        drawType: _0x363cc9,
        bizFrom: _0x461698,
        activityId: "TTLXJ20210330"
      };
      let _0x1d1018 = {
          fn: "ttlxj_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x2b021c
        },
        {
          result: _0x52b879
        } = await this.request(_0x1d1018),
        _0x1e5b95 = _0x5bb516.get(_0x52b879, "code", -1);
      if (_0x1e5b95 == "0000" && _0x52b879?.["data"]?.["returnCode"] == 0) {
        let _0x2a1490 = _0x52b879?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x52b879?.["data"]?.["amount"]);
        const _0x56d027 = {
          notify: true
        };
        this.log("天天领现金打卡:" + _0x2a1490, _0x56d027);
      } else {
        let _0x3cf1e7 = _0x52b879?.["data"]?.["returnMsg"] || _0x52b879?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x52b879?.["data"]?.["returnCode"] || _0x1e5b95) + "]: " + _0x3cf1e7);
      }
    } catch (_0xb6be21) {
      console.log(_0xb6be21);
    }
  }
  async ttlxj_h(_0x51d9d1 = {}) {
    try {
      let _0x55350e = {
        fn: "ttlxj_h",
        method: "post",
        url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/help",
        headers: {
          bizchannelinfo: this.get_bizchannelinfo(),
          authinfo: this.get_epay_authinfo()
        },
        form: {
          bizFrom: _0x461698,
          activityId: _0x1c6653.ttlxj,
          uid: _0x28752e
        }
      };
      await this.request(_0x55350e);
    } catch (_0x3819f2) {
      console.log(_0x3819f2);
    }
  }
  async ttlxj_queryAvailable(_0x2074da = {}) {
    try {
      let _0x46f7d3 = {
          fn: "ttlxj_queryAvailable",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          }
        },
        {
          result: _0x322c1d
        } = await this.request(_0x46f7d3),
        _0x2ff99f = _0x5bb516.get(_0x322c1d, "code", -1);
      if (_0x2ff99f == "0000" && _0x322c1d?.["data"]?.["returnCode"] == 0) {
        let _0x9eeb6b = _0x322c1d?.["data"]?.["availableAmount"] || 0;
        const _0x183729 = {
          notify: true
        };
        this.log("可用立减金: " + (_0x9eeb6b / 100).toFixed(2) + "元", _0x183729);
        let _0x83aa1b = [],
          _0x4f7b16 = Date.now();
        for (let _0x256e8d of _0x322c1d?.["data"]?.["prizeList"]?.["filter"](_0x491843 => _0x491843.status == "A")) {
          let _0x2bb6c1 = _0x256e8d.endTime,
            _0x39a9b1 = new Date(_0x2bb6c1.slice(0, 4) + "-" + _0x2bb6c1.slice(4, 6) + "-" + _0x2bb6c1.slice(6, 8) + " 00:00:00"),
            _0x3dd73e = _0x39a9b1.getTime();
          if (_0x3dd73e - _0x4f7b16 < _0x752aa * 24 * 60 * 60 * 1000) {
            let _0x18755f = _0x5bb516.time("yyyy-MM-dd", _0x3dd73e);
            const _0x29b2a8 = {
              timestamp: _0x3dd73e,
              date: _0x18755f,
              amount: _0x256e8d.amount
            };
            _0x83aa1b.push(_0x29b2a8);
          }
        }
        if (_0x83aa1b.length) {
          const _0x2417a3 = {
            timestamp: 0
          };
          let _0x5d6d72 = _0x2417a3,
            _0x2aee17 = _0x83aa1b.reduce(function (_0x1f4816, _0x12f8ef) {
              (_0x5d6d72.timestamp == 0 || _0x12f8ef.timestamp < _0x5d6d72.timestamp) && (_0x5d6d72 = _0x12f8ef);
              return _0x1f4816 + parseFloat(_0x12f8ef.amount);
            }, 0);
          const _0x53f0ad = {
            notify: true
          };
          this.log(_0x752aa + "天内过期立减金: " + _0x2aee17.toFixed(2) + "元", _0x53f0ad);
          const _0x37adfb = {
            notify: true
          };
          this.log("最早过期立减金: " + _0x5d6d72.amount + "元 -- " + _0x5d6d72.date + "过期", _0x37adfb);
        } else {
          const _0x50fe6a = {
            notify: true
          };
          this.log(_0x752aa + "天内没有过期的立减金", _0x50fe6a);
        }
      } else {
        let _0x328fd5 = _0x322c1d?.["data"]?.["returnMsg"] || _0x322c1d?.["msg"] || "";
        this.log("天天领现金打卡失败[" + (_0x322c1d?.["data"]?.["returnCode"] || _0x2ff99f) + "]: " + _0x328fd5);
      }
    } catch (_0x107f6f) {
      console.log(_0x107f6f);
    }
  }
  async epay_28_authCheck(_0x38e663 = {}) {
    try {
      let _0x12580a = {
          fn: "epay_28_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x54b5ef
        } = await this.request(_0x12580a),
        _0x37f52c = _0x5bb516.get(_0x54b5ef, "code", -1);
      if (_0x37f52c == "0000") {
        let {
          mobile: _0x27486f,
          sessionId: _0x386a2e,
          tokenId: _0x367116,
          userId: _0x5c16fb
        } = _0x54b5ef?.["data"]?.["authInfo"];
        const _0x1bcd73 = {
          sessionId: _0x386a2e,
          tokenId: _0x367116,
          userId: _0x5c16fb
        };
        Object.assign(this, _0x1bcd73);
        await this.epay_28_queryUserPage();
      } else {
        if (_0x37f52c == "2101000100") {
          let _0x238bab = _0x54b5ef?.["data"]?.["woauth_login_url"];
          await this.epay_28_login(_0x238bab);
        } else {
          let _0x58a5f7 = _0x54b5ef?.["msgInside"] || _0x54b5ef?.["msg"] || "";
          this.log("联通支付日获取tokenId失败[" + _0x37f52c + "]: " + _0x58a5f7);
        }
      }
    } catch (_0x2098f7) {
      console.log(_0x2098f7);
    }
  }
  async epay_28_login(_0xcf2fd8, _0x49e155 = {}) {
    try {
      let _0x591e44 = _0x5bb516.time("yyyyMM") + "28ZFR";
      _0xcf2fd8 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x591e44 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x405cab = {
        fn: "epay_28_login",
        method: "get",
        url: _0xcf2fd8
      };
      let {
        headers: _0x3f2579,
        statusCode: _0x42c9ab
      } = await this.request(_0x405cab);
      if (_0x3f2579?.["location"]) {
        let _0x215d32 = new URL(_0x3f2579.location);
        this.rptId = _0x215d32.searchParams.get("rptid");
        this.rptId ? await this.epay_28_authCheck() : this.log("联通支付日获取rptid失败");
      } else {
        this.log("联通支付日获取rptid失败[" + _0x42c9ab + "]");
      }
    } catch (_0xf468ca) {
      console.log(_0xf468ca);
    }
  }
  async epay_28_queryUserPage(_0x47f767 = {}) {
    try {
      let _0x545adf = _0x5bb516.time("yyyyMM") + "28ZFR";
      const _0x2ae385 = {
        templateName: _0x545adf
      };
      let _0x115956 = {
          fn: "epay_28_queryUserPage",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryUserPage",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x2ae385
        },
        {
          result: _0x1f0141
        } = await this.request(_0x115956),
        _0x359b01 = _0x5bb516.get(_0x1f0141, "code", -1);
      if (_0x359b01 == "0000" && _0x1f0141?.["data"]?.["returnCode"] == 0) {
        for (let _0x3c288a of _0x1f0141?.["data"]?.["prizeList"]?.["rainbowMouldInfos"] || []) {
          _0x3c288a?.["rainbowUnitInfos"]?.[0]?.["unitActivityId"] && (await this.epay_28_unifyDraw(_0x3c288a.rainbowUnitInfos[0]));
          if (_0x3c288a?.["day01DrawParam"]) {
            await this.epay_28_queryMiddleUnit(_0x545adf, _0x3c288a.mouldName);
            break;
          }
        }
      } else {
        let _0x5d550f = _0x1f0141?.["message"] || _0x1f0141?.["msg"] || "";
        this.log("联通支付日进入主页失败[" + _0x359b01 + "]: " + _0x5d550f);
      }
    } catch (_0x4aef35) {
      console.log(_0x4aef35);
    }
  }
  async epay_28_queryMiddleUnit(_0x4a1598, _0x4238fb, _0x5e6837 = {}) {
    try {
      const _0x2a7862 = {
        activityId: _0x4a1598,
        mouldName: _0x4238fb
      };
      let _0x5ae224 = {
          fn: "epay_28_queryMiddleUnit",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/queryMiddleUnit",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x2a7862
        },
        {
          result: _0xd8a01d
        } = await this.request(_0x5ae224),
        _0x57e4c8 = _0x5bb516.get(_0xd8a01d, "code", -1);
      if (_0x57e4c8 == "0000") {
        let _0x7d1d4e = _0x5bb516.time("dd");
        _0xd8a01d?.["data"]?.[_0x7d1d4e] == "1" ? this.log("联通支付日今日(" + _0x7d1d4e + "号)已打卡") : await this.epay_28_unifyDrawNew(_0x4a1598, _0x4238fb);
      } else {
        let _0x317f58 = _0xd8a01d?.["message"] || _0xd8a01d?.["msg"] || "";
        this.log("联通支付日查询打卡失败[" + _0x57e4c8 + "]: " + _0x317f58);
      }
    } catch (_0x256b9e) {
      console.log(_0x256b9e);
    }
  }
  async epay_28_unifyDrawNew(_0x318f2c, _0x3c53d6, _0x10359d = {}) {
    try {
      const _0x47aee1 = {
        bizFrom: _0x461698,
        activityId: _0x318f2c,
        mouldName: _0x3c53d6
      };
      let _0x4f8b55 = {
          fn: "epay_28_unifyDrawNew",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDrawNew",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x47aee1
        },
        {
          result: _0x425663
        } = await this.request(_0x4f8b55),
        _0x22b636 = _0x5bb516.get(_0x425663, "code", -1);
      if (_0x22b636 == "0000" && _0x425663?.["data"]?.["returnCode"] == 0) {
        let _0x4e128e = _0x425663?.["data"]?.["awardTipContent"]?.["replace"](/xx/, _0x425663?.["data"]?.["amount"]);
        const _0x36d395 = {
          notify: true
        };
        this.log("联通支付日打卡:" + _0x4e128e, _0x36d395);
      } else {
        let _0xa1e77e = _0x425663?.["data"]?.["returnMsg"] || _0x425663?.["msg"] || "";
        this.log("联通支付日打卡失败[" + (_0x425663?.["data"]?.["returnCode"] || _0x22b636) + "]: " + _0xa1e77e);
      }
    } catch (_0x7bd60c) {
      console.log(_0x7bd60c);
    }
  }
  async epay_28_unifyDraw(_0x584175, _0x111153 = {}) {
    try {
      const _0x3e723d = {
        activityId: _0x584175.unitActivityId,
        isBigActivity: _0x584175.isBigActivity,
        bigActivityId: _0x584175.bigActivityId,
        bizFrom: _0x461698
      };
      let _0x2292b0 = {
          fn: "epay_28_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/rainbow/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: _0x3e723d
        },
        {
          result: _0x515a38
        } = await this.request(_0x2292b0),
        _0x3b1014 = _0x5bb516.get(_0x515a38, "code", -1);
      if (_0x3b1014 == "0000" && _0x515a38?.["data"]?.["returnCode"] == 0) {
        const _0x549e36 = {
          notify: true
        };
        this.log("联通支付日抽奖: " + (_0x515a38?.["data"]?.["prizeName"] || ""), _0x549e36);
      } else {
        let _0x303d30 = _0x515a38?.["data"]?.["returnMsg"] || _0x515a38?.["msg"] || "";
        this.log("联通支付日抽奖失败[" + (_0x515a38?.["data"]?.["returnCode"] || _0x3b1014) + "]: " + _0x303d30);
      }
    } catch (_0x1773c4) {
      console.log(_0x1773c4);
    }
  }
  async appMonth_28_bind(_0x3cd7f6, _0x123d6f = {}) {
    try {
      const _0x4de687 = {
        shareCode: _0x3cd7f6,
        cl: "WeChat"
      };
      const _0x2d7c98 = {
        fn: "appMonth_28_bind",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/bind",
        form: _0x4de687,
        valid_code: [401]
      };
      let {
        result: _0x3506e6
      } = await this.request(_0x2d7c98);
    } catch (_0x29e70e) {
      console.log(_0x29e70e);
    }
  }
  async appMonth_28_queryChance(_0x13bc5a = {}) {
    try {
      const _0x5a0a53 = {
        fn: "appMonth_28_queryChance",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/queryChance"
      };
      let {
          result: _0x475fcb
        } = await this.request(_0x5a0a53),
        _0x350dd1 = _0x5bb516.get(_0x475fcb, "status", -1);
      if (_0x350dd1 == "0000") {
        let {
          allRemainTimes: _0xedbb55,
          isUnicom: _0x485826
        } = _0x475fcb?.["data"];
        if (_0x485826) {
          let _0x252882 = Math.min(_0x47e20d, _0xedbb55);
          this.log("联通支付日可以开宝箱" + _0xedbb55 + "次, 去抽" + _0x252882 + "次");
          while (_0x252882-- > 0) {
            await this.appMonth_28_lottery();
          }
        }
      } else {
        let _0x2b2648 = _0x475fcb?.["msg"] || "";
        this.log("联通支付日查询开宝箱次数失败[" + _0x350dd1 + "]: " + _0x2b2648);
      }
    } catch (_0x4b6785) {
      console.log(_0x4b6785);
    }
  }
  async appMonth_28_lottery(_0x77a7e3 = {}) {
    try {
      const _0x3bb13a = {
        fn: "appMonth_28_lottery",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/lottery"
      };
      let {
          result: _0x155c87
        } = await this.request(_0x3bb13a),
        _0x1cdefa = _0x5bb516.get(_0x155c87, "status", -1);
      if (_0x1cdefa == "0000") {
        let {
          code: _0x2b3205,
          uuid: _0x28e93e
        } = _0x155c87?.["data"];
        _0x28e93e ? await this.appMonth_28_winningRecord(_0x28e93e) : this.log("联通支付日开宝箱失败[" + _0x2b3205 + "]");
      } else {
        let _0x490c4e = _0x155c87?.["msg"] || "";
        this.log("联通支付日开宝箱失败[" + _0x1cdefa + "]: " + _0x490c4e);
      }
    } catch (_0x102df4) {
      console.log(_0x102df4);
    }
  }
  async appMonth_28_winningRecord(_0x5f4ebf, _0x354451 = {}) {
    try {
      const _0x5812f9 = {
        requestId: _0x5f4ebf
      };
      const _0x5bec22 = {
        fn: "appMonth_28_winningRecord",
        method: "post",
        url: "https://activity.10010.com/AppMonthly/appMonth/winningRecord",
        form: _0x5812f9
      };
      let {
          result: _0x14c934
        } = await this.request(_0x5bec22),
        _0x3fb6eb = _0x5bb516.get(_0x14c934, "status", -1);
      if (_0x3fb6eb == "0000") {
        let {
          code: _0x2a78aa,
          prizeName: _0x31fb81
        } = _0x14c934?.["data"];
        if (_0x2a78aa == "0000") {
          const _0x33696f = {
            notify: true
          };
          this.log("联通支付日开宝箱: " + _0x31fb81, _0x33696f);
        } else {
          let _0x171969 = _0x14c934?.["data"]?.["message"] || "";
          this.log("联通支付日开宝箱[" + _0x2a78aa + "]: " + _0x171969);
        }
      } else {
        let _0x16532d = _0x14c934?.["msg"] || "";
        this.log("联通支付日查询中奖奖品错误[" + _0x3fb6eb + "]: " + _0x16532d);
      }
    } catch (_0x32e68c) {
      console.log(_0x32e68c);
    }
  }
  async sign_getContinuous(_0x28f630 = {}) {
    try {
      const _0x48d55e = {
        taskId: "",
        channel: "shouye",
        imei: ""
      };
      const _0x1a4686 = {
        fn: "sign_getContinuous",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/getContinuous",
        form: _0x48d55e
      };
      let {
          result: _0x9f6420
        } = await this.request(_0x1a4686),
        _0x19db25 = _0x5bb516.get(_0x9f6420, "status", -1);
      if (_0x19db25 == "0000") {
        let _0xe297fa = _0x9f6420?.["data"]?.["todaySigned"] || 0;
        const _0x2dde67 = {
          notify: true
        };
        this.log("签到区今天" + (_0xe297fa == "1" ? "未" : "已") + "签到", _0x2dde67);
        _0xe297fa == "1" && (await _0x5bb516.wait(1000), await this.sign_daySign());
      } else {
        let _0xe5641c = _0x9f6420?.["msg"] || "";
        this.log("签到区查询签到状态失败[" + _0x19db25 + "]: " + _0xe5641c);
      }
    } catch (_0x44c99f) {
      console.log(_0x44c99f);
    }
  }
  async sign_daySign(_0xdc25a6 = {}) {
    try {
      const _0xfdd235 = {
        shareCl: "",
        shareCode: ""
      };
      const _0x179086 = {
        fn: "sign_daySign",
        method: "post",
        url: "https://act.10010.com/SigninApp/signin/daySign",
        form: _0xfdd235
      };
      let {
          result: _0x1e2df4
        } = await this.request(_0x179086),
        _0x5a8a1a = _0x5bb516.get(_0x1e2df4, "status", -1);
      if (_0x5a8a1a == "0000") {
        let {
          prizeName: _0x2a38b4,
          redSignMessage: _0x15e785
        } = _0x1e2df4?.["data"];
        const _0x3b4820 = {
          notify: true
        };
        this.log("签到区签到成功: [" + _0x2a38b4 + "]" + _0x15e785, _0x3b4820);
      } else {
        let _0x51c960 = _0x1e2df4?.["msg"] || "";
        this.log("签到区签到失败[" + _0x5a8a1a + "]: " + _0x51c960);
      }
    } catch (_0x3241bd) {
      console.log(_0x3241bd);
    }
  }
  async sign_queryBubbleTask(_0x3a2b1e = {}) {
    try {
      const _0x178b0 = {
        fn: "sign_queryBubbleTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/bubbleTask/queryBubbleTask"
      };
      let {
          result: _0x3af127
        } = await this.request(_0x178b0),
        _0x1a4e37 = _0x5bb516.get(_0x3af127, "status", -1);
      if (_0x1a4e37 == "0000") {
        for (let _0x597813 of _0x3af127?.["data"]?.["paramsList"]?.["filter"](_0x3fb934 => _0x3fb934.taskState == 1)) {
          let _0x358966 = await this.gettaskip();
          await this.sign_doTask(_0x597813, _0x358966);
        }
      } else {
        let _0x53504e = _0x3af127?.["msg"] || "";
        this.log("签到区查询气泡任务失败[" + _0x1a4e37 + "]: " + _0x53504e);
      }
    } catch (_0x1ac0be) {
      console.log(_0x1ac0be);
    }
  }
  async sign_doTask(_0x456aa9, _0x6f717b, _0x37f6c6 = {}) {
    try {
      const _0x1c3ef2 = {
        fn: "sign_doTask",
        method: "post",
        url: "https://act.10010.com/SigninApp/task/doTask",
        form: {}
      };
      _0x1c3ef2.form.id = _0x456aa9.id;
      _0x1c3ef2.form.orderId = _0x6f717b;
      _0x1c3ef2.form.imei = "BB97982E-3F03-46D3-B904-819D626DF478";
      _0x1c3ef2.form.prizeType = _0x456aa9.rewardType;
      _0x1c3ef2.form.positionFlag = 0;
      let {
          result: _0x52a553
        } = await this.request(_0x1c3ef2),
        _0x2e022a = _0x5bb516.get(_0x52a553, "status", -1);
      if (_0x2e022a == "0000") {
        this.log("完成任务[" + _0x456aa9.actName + "]获得: " + _0x52a553?.["data"]?.["prizeCount"] + _0x52a553?.["data"]?.["prizeName"]);
      } else {
        let _0x548ebd = _0x52a553?.["msg"] || "";
        this.log("完成任务[" + _0x456aa9.actName + "]失败[" + _0x2e022a + "]: " + _0x548ebd);
      }
    } catch (_0x32c96f) {
      console.log(_0x32c96f);
    }
  }
  async game_login(_0x3e159f, _0x20ea8d = {}) {
    try {
      const _0x5bb879 = {
        identityType: "esToken",
        code: this.ecs_token,
        ticket: _0x3e159f,
        uuid: _0x26866f
      };
      const _0x47df42 = {
        fn: "game_login",
        method: "post",
        url: "https://game.wostore.cn/api/app//user/v2/login",
        headers: {},
        json: _0x5bb879
      };
      _0x47df42.headers.channelid = "GAMELTAPP_90005";
      let {
          result: _0x37f8bc
        } = await this.request(_0x47df42),
        _0xedbfb3 = _0x5bb516.get(_0x37f8bc, "code", -1);
      if (_0xedbfb3 == 200) {
        this.game_token = _0x37f8bc?.["data"]?.["access_token"];
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
        const _0x168dcf = {
          notify: true
        };
        this.log("联通畅游币: " + this.point, _0x168dcf);
      } else {
        let _0x1d75eb = _0x37f8bc?.["msg"] || "";
        this.log("联通畅游登录失败[" + _0xedbfb3 + "]: " + _0x1d75eb);
      }
    } catch (_0x9949cb) {
      console.log(_0x9949cb);
    }
  }
  async game_getMemberInfo(_0x10d7f6 = {}) {
    try {
      const _0x13a441 = {
        fn: "game_getMemberInfo",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/getMemberInfo"
      };
      let {
          result: _0xb0004f
        } = await this.request(_0x13a441),
        _0x316c3f = _0x5bb516.get(_0xb0004f, "code", -1);
      if (_0x316c3f == 200) {
        this.point = _0xb0004f?.["data"]?.["userIntegral"];
      } else {
        let _0x6f02fc = _0xb0004f?.["msg"] || "";
        this.log("联通畅游查询积分失败[" + _0x316c3f + "]: " + _0x6f02fc);
      }
    } catch (_0x1dda9c) {
      console.log(_0x1dda9c);
    }
  }
  async game_signRecord(_0x4c4423 = {}) {
    try {
      const _0x23258e = {
        fn: "game_signRecord",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signRecord"
      };
      let {
          result: _0x2b5973
        } = await this.request(_0x23258e),
        _0x3a330e = _0x5bb516.get(_0x2b5973, "code", -1);
      if (_0x3a330e == 200) {
        for (let _0x325dd5 of _0x2b5973?.["data"]) {
          if (_0x325dd5.now == 0) {
            continue;
          }
          this.log("联通畅游今天" + (_0x325dd5.signStatus == 2 ? "未" : "已") + "签到");
          if (_0x325dd5.signStatus == 2) {
            await this.game_signIn();
          }
        }
      } else {
        let _0x406cee = _0x2b5973?.["msg"] || "";
        this.log("联通畅游查询签到失败[" + _0x3a330e + "]: " + _0x406cee);
      }
    } catch (_0x40c4ff) {
      console.log(_0x40c4ff);
    }
  }
  async game_signIn(_0x573aa3 = {}) {
    try {
      const _0x52c512 = {
        fn: "game_signIn",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/signIn"
      };
      let {
          result: _0x24605f
        } = await this.request(_0x52c512),
        _0x50a767 = _0x5bb516.get(_0x24605f, "code", -1);
      if (_0x50a767 == 200) {
        this.log("联通畅游签到成功");
      } else {
        let _0x28f7f1 = _0x24605f?.["msg"] || "";
        this.log("联通畅游签到失败[" + _0x50a767 + "]: " + _0x28f7f1);
      }
    } catch (_0x54d205) {
      console.log(_0x54d205);
    }
  }
  async game_checkSlider(_0x47c476 = {}) {
    let _0x3b64b7 = false;
    try {
      const _0x1fb283 = {
        xPos: 234
      };
      const _0x126f39 = {
        fn: "game_checkSlider",
        method: "post",
        url: "https://game.wostore.cn/api/app/common/slider/checkSlider",
        searchParams: _0x1fb283
      };
      let {
          result: _0x1bdb25
        } = await this.request(_0x126f39),
        _0x164ab5 = _0x5bb516.get(_0x1bdb25, "code", -1);
      if (_0x164ab5 == 200) {
        this.log("联通畅游滑块验证成功");
      } else {
        let _0x354e0c = _0x1bdb25?.["msg"] || "";
        this.log("联通畅游滑块验证失败[" + _0x164ab5 + "]: " + _0x354e0c);
      }
    } catch (_0x396cba) {
      console.log(_0x396cba);
    } finally {
      return _0x3b64b7;
    }
  }
  async game_lottery(_0x350a7a = {}) {
    try {
      let _0x2f74d2 = {
          fn: "game_lottery",
          method: "get",
          url: "https://game.wostore.cn/api/app/user/v2/benefit/lottery",
          searchParams: {
            id: _0x5bb516.get(_0x350a7a, "id", 1)
          }
        },
        {
          result: _0x3b0adb
        } = await this.request(_0x2f74d2),
        _0x5116e7 = _0x5bb516.get(_0x3b0adb, "code", -1);
      if (_0x5116e7 == 200) {
        const _0x38c7ea = {
          notify: true
        };
        this.log("联通畅游抽奖: " + _0x3b0adb?.["data"]?.["productName"], _0x38c7ea);
      } else {
        let _0x2ac21c = _0x3b0adb?.["msg"] || "";
        this.log("联通畅游抽奖失败[" + _0x5116e7 + "]: " + _0x2ac21c);
      }
    } catch (_0x498e2) {
      console.log(_0x498e2);
    }
  }
  async game_taskList(_0x1ed546 = {}) {
    try {
      const _0x12dceb = {
        fn: "game_taskList",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/list"
      };
      let {
          result: _0xd8ce5
        } = await this.request(_0x12dceb),
        _0x56c372 = _0x5bb516.get(_0xd8ce5, "code", -1);
      if (_0x56c372 == 200) {
        for (let _0xcb74e5 of _0xd8ce5?.["data"]) {
          switch (_0xcb74e5.receiveStatus) {
            case 0:
              break;
            case 1:
              await this.game_taskReceive(_0xcb74e5);
              break;
            case 2:
              break;
            default:
              _0x5bb516.log("任务[" + _0xcb74e5.taskName + "]未知状态[" + _0xcb74e5.receiveStatus + "]");
              break;
          }
        }
      } else {
        let _0x59b20b = _0xd8ce5?.["msg"] || "";
        this.log("联通畅游查询任务失败[" + _0x56c372 + "]: " + _0x59b20b);
      }
    } catch (_0x4642df) {
      console.log(_0x4642df);
    }
  }
  async game_taskReceive(_0x266861, _0x90a6a7 = {}) {
    try {
      const _0x814d30 = {
        productId: _0x266861.productId,
        taskId: _0x266861.id
      };
      const _0x47b982 = {
        fn: "game_taskReceive",
        method: "get",
        url: "https://game.wostore.cn/api/app/user/v2/task/receive",
        searchParams: _0x814d30
      };
      let {
          result: _0x4e6c5f
        } = await this.request(_0x47b982),
        _0x1575f3 = _0x5bb516.get(_0x4e6c5f, "code", -1);
      if (_0x1575f3 == 200) {
        this.log("领取任务[" + _0x266861.taskName + "]奖励成功");
      } else {
        let _0x597ccb = _0x4e6c5f?.["msg"] || "";
        this.log("领取任务[" + _0x266861.taskName + "]奖励失败[" + _0x1575f3 + "]: " + _0x597ccb);
      }
    } catch (_0x53313e) {
      console.log(_0x53313e);
    }
  }
  async game_playSave(_0x21c1d9 = {}) {
    try {
      let _0x2765f9 = {
          fn: "game_playSave",
          method: "post",
          url: "https://game.wostore.cn/api/app/user/v2/play/save",
          json: {
            cpGameId: "15000199" + _0x5bb516.randomString(2, "0123456789")
          }
        },
        {
          result: _0x358554
        } = await this.request(_0x2765f9),
        _0x56fd92 = _0x5bb516.get(_0x358554, "code", -1);
      if (!(_0x56fd92 == 200)) {
        let _0x5506e9 = _0x358554?.["msg"] || "";
        this.log("联通畅游玩游戏失败[" + _0x56fd92 + "]: " + _0x5506e9);
      }
    } catch (_0x2df080) {
      console.log(_0x2df080);
    }
  }
  async flmf_login(_0x59374b, _0x7a872 = {}) {
    try {
      const _0x489c50 = {
        fn: "flmf_login",
        method: "get",
        url: _0x59374b
      };
      let {
        headers: _0x1f0b5d,
        statusCode: _0x20cf5e
      } = await this.request(_0x489c50);
      if (_0x1f0b5d?.["location"]) {
        let _0x5589ed = new URL(_0x1f0b5d.location);
        this.flmf_sid = _0x5589ed.searchParams.get("sid");
        this.flmf_sid ? (await this.flmf_signInInit(), await this.flmf_taskList(), await this.flmf_scanTask()) : this.log("福利魔方获取sid失败");
      } else {
        this.log("福利魔方获取sid失败[" + _0x20cf5e + "]");
      }
    } catch (_0x2d05d2) {
      console.log(_0x2d05d2);
    }
  }
  async flmf_signInInit(_0x4102a3 = {}) {
    try {
      let _0x7ddca3 = {
          fn: "flmf_signInInit",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signInInit",
          form: this.get_flmf_data()
        },
        {
          result: _0x456d40
        } = await this.request(_0x7ddca3),
        _0x24b2be = _0x5bb516.get(_0x456d40, "resultCode", -1);
      if (_0x24b2be == "0000") {
        this.log("福利魔方今天" + (_0x456d40?.["data"]?.["isSigned"] ? "已" : "未") + "签到, 已连续签到" + _0x456d40?.["data"]?.["consecutiveDays"] + "天");
        if (!_0x456d40?.["data"]?.["isSigned"]) {
          await this.flmf_signIn();
        }
      } else {
        let _0x5db043 = _0x456d40?.["resultMsg"] || "";
        this.log("福利魔方查询签到失败[" + _0x24b2be + "]: " + _0x5db043);
      }
    } catch (_0x940553) {
      console.log(_0x940553);
    }
  }
  async flmf_signIn(_0x4bac71 = {}) {
    try {
      let _0x2680c6 = {
          fn: "flmf_signIn",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/signIn",
          form: this.get_flmf_data()
        },
        {
          result: _0x11f586
        } = await this.request(_0x2680c6),
        _0x5bc55a = _0x5bb516.get(_0x11f586, "resultCode", -1);
      if (_0x5bc55a == "0000") {
        this.log("福利魔方签到成功");
      } else {
        let _0x429f51 = _0x11f586?.["resultMsg"] || "";
        this.log("福利魔方签到失败[" + _0x5bc55a + "]: " + _0x429f51);
      }
    } catch (_0x33c08b) {
      console.log(_0x33c08b);
    }
  }
  async flmf_taskList(_0x656c70 = {}) {
    try {
      let _0x5ce254 = {
          fn: "flmf_taskList",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/taskList",
          form: this.get_flmf_data()
        },
        {
          result: _0x58d404
        } = await this.request(_0x5ce254),
        _0x1af4e7 = _0x5bb516.get(_0x58d404, "resultCode", -1);
      if (_0x1af4e7 == "0000") {
        for (let _0x24aac2 of _0x58d404?.["data"]?.["taskInfoList"]) {
          for (let _0x2aec65 of _0x24aac2.taskInfoList.filter(_0x5b733f => !_0x5b733f.done)) {
            for (let _0x141fe1 = _0x2aec65.hascount; _0x141fe1 < _0x2aec65.count; _0x141fe1++) {
              await this.flmf_gogLance(_0x2aec65.id);
            }
          }
        }
      } else {
        let _0x1d0e5f = _0x58d404?.["resultMsg"] || "";
        this.log("福利魔方查询任务失败[" + _0x1af4e7 + "]: " + _0x1d0e5f);
      }
    } catch (_0x52772a) {
      console.log(_0x52772a);
    }
  }
  async flmf_scanTask() {
    for (let _0x57daa7 of _0x38cad8) {
      await this.flmf_gogLance(_0x57daa7);
    }
  }
  async flmf_gogLance(_0x243d5c, _0x341257 = {}) {
    try {
      let _0x852c27 = {
          fn: "flmf_gogLance",
          method: "post",
          url: "https://weixin.linktech.hk/lv-apiaccess/welfareCenter/gogLance",
          form: {
            taskId: _0x243d5c,
            ...this.get_flmf_data()
          }
        },
        {
          result: _0x642d48
        } = await this.request(_0x852c27);
      await _0x5bb516.wait_gap_interval(this.t_flmf_task, _0x59602e);
      let _0x503661 = _0x5bb516.get(_0x642d48, "resultCode", -1);
      this.t_flmf_task = Date.now();
      if (_0x503661 == "0000") {
        this.log("完成任务[" + _0x243d5c + "]成功");
      } else {
        let _0x25c173 = _0x642d48?.["resultMsg"] || "";
        this.log("完成任务[" + _0x243d5c + "]失败[" + _0x503661 + "]: " + _0x25c173);
      }
    } catch (_0x4e3b4d) {
      console.log(_0x4e3b4d);
    }
  }
  async woread_api(_0x1e8afe) {
    let _0x34e1e3 = await this.request(_0x5bb516.copy(_0x1e8afe)),
      _0x41b908 = _0x34e1e3?.["result"]?.["message"] || "";
    _0x41b908?.["includes"]("登录已过期") && (await this.woread_auth()) && (await this.woread_login()) && (_0x34e1e3 = await this.request(_0x5bb516.copy(_0x1e8afe)));
    return _0x34e1e3;
  }
  async woread_auth(_0x1a675c = {}) {
    let _0x388646 = false;
    try {
      let _0x12a8de = _0x5bb516.time("yyyyMMddhhmmss");
      const _0x117efb = {
        timestamp: _0x12a8de
      };
      let _0x4d8b44 = this.encode_woread(_0x117efb),
        _0x4b3de2 = Date.now().toString(),
        _0x491c0c = _0x280505.MD5(_0x3863a6 + _0x1d868a + _0x4b3de2).toString();
      const _0x35ee16 = {
        sign: _0x4d8b44
      };
      const _0x362a6e = {
        fn: "woread_auth",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/app/auth/" + _0x3863a6 + "/" + _0x4b3de2 + "/" + _0x491c0c,
        json: _0x35ee16
      };
      let {
          result: _0x51588e
        } = await this.request(_0x362a6e),
        _0x5a1c0d = _0x5bb516.get(_0x51588e, "code", -1);
      if (_0x5a1c0d == "0000") {
        _0x388646 = true;
        this.woread_accesstoken = _0x51588e?.["data"]?.["accesstoken"];
        this.got = this.got.extend({
          headers: {
            accesstoken: this.woread_accesstoken
          }
        });
      } else {
        let _0x246b6f = _0x51588e?.["message"] || "";
        this.log("阅读专区获取accesstoken失败[" + _0x5a1c0d + "]: " + _0x246b6f);
      }
    } catch (_0x33b2ff) {
      console.log(_0x33b2ff);
    } finally {
      return _0x388646;
    }
  }
  async woread_login(_0x25f434 = {}) {
    let _0x30d9c5 = false;
    try {
      let _0x2205a0 = {
          phone: this.mobile,
          timestamp: _0x5bb516.time("yyyyMMddhhmmss")
        },
        _0x212cad = this.encode_woread(_0x2205a0);
      const _0x537445 = {
        sign: _0x212cad
      };
      const _0x2a6ad9 = {
        fn: "woread_login",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/account/login",
        json: _0x537445
      };
      let {
          result: _0x891fab
        } = await this.request(_0x2a6ad9),
        _0x28eaec = _0x5bb516.get(_0x891fab, "code", -1);
      if (_0x28eaec == "0000") {
        _0x30d9c5 = true;
        let {
          userid: _0x39b3cb,
          userindex: _0x1f8025,
          token: _0x5d8be8,
          verifycode: _0x48fc34
        } = _0x891fab?.["data"];
        this.woread_token = _0x5d8be8;
        this.woread_verifycode = _0x48fc34;
        const _0xe46910 = {
          woread_userid: _0x39b3cb,
          woread_userindex: _0x1f8025,
          woread_token: _0x5d8be8,
          woread_verifycode: _0x48fc34
        };
        Object.assign(this, _0xe46910);
      } else {
        let _0x583215 = _0x891fab?.["message"] || "";
        this.log("阅读专区获取token失败[" + _0x28eaec + "]: " + _0x583215);
      }
    } catch (_0x1f89be) {
      console.log(_0x1f89be);
    } finally {
      return _0x30d9c5;
    }
  }
  async woread_getSeeVideoAddNumber(_0xb0d361, _0x1f1999 = {}) {
    try {
      let _0x40c36c = {
          activityIndex: _0xb0d361,
          ...this.get_woread_param()
        },
        _0xa38c0f = this.encode_woread(_0x40c36c);
      const _0x4ea8b9 = {
        sign: _0xa38c0f
      };
      const _0x350f44 = {
        fn: "woread_getSeeVideoAddNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getSeeVideoAddNumber",
        json: _0x4ea8b9
      };
      let {
          result: _0x51e85b
        } = await this.woread_api(_0x350f44),
        _0x25fb31 = _0x5bb516.get(_0x51e85b, "code", -1);
      if (_0x25fb31 == "0000") {
        _0x51e85b?.["data"] == -1 && (await this.woread_addUserSeeVideo(_0xb0d361));
      } else {
        let _0x4473ce = _0x51e85b?.["message"] || "";
        this.log("阅读活动[" + _0xb0d361 + "]查询抽奖视频失败[" + _0x25fb31 + "]: " + _0x4473ce);
      }
    } catch (_0x2a55a2) {
      console.log(_0x2a55a2);
    }
  }
  async woread_addUserSeeVideo(_0x39e979, _0x6eff61 = {}) {
    try {
      let _0x223001 = _0x6eff61.num || 5,
        _0x5c8dec = {
          activityIndex: _0x39e979,
          num: _0x223001,
          ...this.get_woread_param()
        },
        _0x307a70 = this.encode_woread(_0x5c8dec);
      const _0x43c995 = {
        sign: _0x307a70
      };
      const _0x354438 = {
        fn: "woread_addUserSeeVideo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/addUserSeeVideo",
        json: _0x43c995
      };
      let {
          result: _0x10bfb7
        } = await this.woread_api(_0x354438),
        _0x3c8a10 = _0x5bb516.get(_0x10bfb7, "code", -1);
      if (_0x3c8a10 == "0000") {
        this.log("阅读活动[" + _0x39e979 + "]看视频增加抽奖次数成功");
      } else {
        let _0x499a60 = _0x10bfb7?.["message"] || "";
        this.log("阅读活动[" + _0x39e979 + "]看视频增加抽奖次数失败[" + _0x3c8a10 + "]: " + _0x499a60);
      }
    } catch (_0x6572d3) {
      console.log(_0x6572d3);
    }
  }
  async woread_getActivityNumber(_0x44d4e6, _0x52d345 = {}) {
    try {
      let _0x443fa3 = {
          activeIndex: _0x44d4e6,
          ...this.get_woread_param()
        },
        _0x5848b8 = this.encode_woread(_0x443fa3);
      const _0x1ce192 = {
        sign: _0x5848b8
      };
      const _0x568226 = {
        fn: "woread_getActivityNumber",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity/getActivityNumber",
        json: _0x1ce192
      };
      let {
          result: _0x546768
        } = await this.woread_api(_0x568226),
        _0x38854f = _0x5bb516.get(_0x546768, "code", -1);
      if (_0x38854f == "0000") {
        let _0x45d8d6 = _0x546768?.["data"] || 0;
        this.log("阅读活动[" + _0x44d4e6 + "]可以抽奖" + _0x45d8d6 + "次");
        while (_0x45d8d6-- > 0) {
          await _0x5bb516.wait(5000);
          await this.woread_doDraw(_0x44d4e6);
        }
      } else {
        let _0x1da7a5 = _0x546768?.["message"] || "";
        this.log("阅读活动[" + _0x44d4e6 + "]查询抽奖次数失败[" + _0x38854f + "]: " + _0x1da7a5);
      }
    } catch (_0x466e1c) {
      console.log(_0x466e1c);
    }
  }
  async woread_addDrawTimes(_0x468f79, _0x50d3ca = {}) {
    try {
      let _0x8cf3f4 = {
          activetyindex: _0x468f79,
          ...this.get_woread_param()
        },
        _0x4dffd4 = this.encode_woread(_0x8cf3f4);
      const _0x5463f3 = {
        sign: _0x4dffd4
      };
      const _0x366366 = {
        fn: "woread_addDrawTimes",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/addDrawTimes",
        json: _0x5463f3
      };
      await _0x5bb516.wait_gap_interval(this.t_woread_draw, _0x28c433);
      let {
        result: _0x96e2d8
      } = await this.woread_api(_0x366366);
      this.t_woread_draw = Date.now();
      let _0x5f3be8 = _0x5bb516.get(_0x96e2d8, "code", -1);
      if (_0x5f3be8 == "0000") {
        this.log("阅读活动[" + _0x468f79 + "]打卡增加抽奖次数成功");
      } else {
        if (_0x5f3be8 != "9999") {
          let _0x25dae7 = _0x96e2d8?.["message"] || "";
          this.log("阅读活动[" + _0x468f79 + "]打卡增加抽奖次数失败[" + _0x5f3be8 + "]: " + _0x25dae7);
        }
      }
    } catch (_0x42f836) {
      console.log(_0x42f836);
    }
  }
  async woread_doDraw(_0x49f4f6, _0x5a6487 = {}) {
    try {
      let _0x472602 = {
          activeindex: _0x49f4f6,
          ...this.get_woread_param()
        },
        _0x511439 = this.encode_woread(_0x472602);
      const _0x4a80da = {
        sign: _0x511439
      };
      const _0x16f103 = {
        fn: "woread_doDraw",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/basics/doDraw",
        json: _0x4a80da
      };
      await _0x5bb516.wait_gap_interval(this.t_woread_draw, _0x28c433);
      let {
        result: _0x199a79
      } = await this.woread_api(_0x16f103);
      this.t_woread_draw = Date.now();
      let _0x346bcd = _0x5bb516.get(_0x199a79, "code", -1);
      if (_0x346bcd == "0000") {
        const _0x1b4a7c = {
          notify: true
        };
        this.log("阅读活动[" + _0x49f4f6 + "]抽奖: " + (_0x199a79?.["data"]?.["prizedesc"] || "空气"), _0x1b4a7c);
      } else {
        let _0x26315b = _0x199a79?.["message"] || "";
        this.log("阅读活动[" + _0x49f4f6 + "]抽奖失败[" + _0x346bcd + "]: " + _0x26315b);
      }
    } catch (_0x9b3f95) {
      console.log(_0x9b3f95);
    }
  }
  async woread_queryTicketAccount(_0x41b8a7 = {}) {
    try {
      let _0x1b32af = this.get_woread_param(),
        _0x44077f = this.encode_woread(_0x1b32af);
      const _0x3196c3 = {
        sign: _0x44077f
      };
      const _0x4acb25 = {
        fn: "woread_queryTicketAccount",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/phone/vouchers/queryTicketAccount",
        json: _0x3196c3
      };
      let {
          result: _0x586a2a
        } = await this.woread_api(_0x4acb25),
        _0xd684d = _0x5bb516.get(_0x586a2a, "code", -1);
      if (_0xd684d == "0000") {
        let _0x208881 = (_0x586a2a?.["data"]?.["usableNum"] / 100).toFixed(2);
        const _0x13a427 = {
          notify: true
        };
        this.log("阅读区话费红包余额: " + _0x208881, _0x13a427);
      } else {
        let _0x17c61a = _0x586a2a?.["message"] || "";
        this.log("查询阅读区话费红包余额失败[" + _0xd684d + "]: " + _0x17c61a);
      }
    } catch (_0xd4b33b) {
      console.log(_0xd4b33b);
    }
  }
  async woread_addReadTime(_0x53dc18 = {}) {
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
        } = _0x53dc18,
        _0x506463 = {
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
        _0x3c360f = this.encode_woread(_0x506463);
      const _0x1f0bdd = {
        sign: _0x3c360f
      };
      const _0x3d69bc = {
        fn: "woread_addReadTime",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/history/addReadTime",
        json: _0x1f0bdd
      };
      let {
          result: _0x2d42e8
        } = await this.request(_0x3d69bc),
        _0x3eddda = _0x5bb516.get(_0x2d42e8, "code", -1);
      if (_0x3eddda == "0000") {
        this.log("刷新读小说时间: " + _0x2d42e8?.["data"]?.["readtime"] / 60 / 1000 + "分钟");
        _0x2d42e8?.["data"]?.["readtime"] >= 3600000 && (this.read_stop = true);
      } else {
        let _0x988be5 = _0x2d42e8?.["message"] || "";
        this.log("刷新读小说时间失败[" + _0x3eddda + "]: " + _0x988be5);
      }
    } catch (_0x310907) {
      console.log(_0x310907);
    }
  }
  async rabblit_queryActivityData(_0x4976b7 = {}) {
    try {
      let _0x425892 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0xe9a67b = this.encode_woread(_0x425892);
      const _0x9d56e8 = {
        sign: _0xe9a67b
      };
      const _0x2bb286 = {
        fn: "rabblit_queryActivityData",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/queryActivityData",
        json: _0x9d56e8
      };
      let {
          result: _0x16d139
        } = await this.woread_api(_0x2bb286),
        _0x48ca99 = _0x5bb516.get(_0x16d139, "code", -1);
      if (_0x48ca99 == "0000") {
        let {
          totalcharpternums: _0x58fab9,
          totalreadnums: _0x4641ce,
          status: _0x49fa2e,
          activitystatus: _0x46a157
        } = _0x16d139?.["data"];
        if (_0x46a157 == 1) {
          this.need_read_rabbit = false;
          const _0x8625c8 = {
            notify: true
          };
          this.log("龟兔赛跑今天已完成", _0x8625c8);
          return;
        }
        this.need_read_rabbit = true;
        this.log("龟兔赛跑进度: " + _0x4641ce + "/" + _0x58fab9 + "分钟");
        if (_0x49fa2e == 1) {
          await this.rabblit_wakeRabbit();
        }
        if (_0x4641ce >= _0x58fab9) {
          await this.rabblit_finishActivity();
        }
      } else {
        let _0x4e4a6b = _0x16d139?.["message"] || "";
        _0x4e4a6b?.["includes"]("未参加") && !_0x4976b7.join_retry && (await this.rabblit_joinRuning()) ? (_0x4976b7.join_retry = true, await this.rabblit_queryActivityData(_0x4976b7)) : this.log("龟兔赛跑查询状态失败[" + _0x48ca99 + "]: " + _0x4e4a6b);
      }
    } catch (_0x3977ee) {
      console.log(_0x3977ee);
    }
  }
  async rabblit_joinRuning(_0x2e0ab5 = {}) {
    let _0x2f8955 = false;
    try {
      let _0xe0d987 = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x2ea25a = this.encode_woread(_0xe0d987);
      const _0x186307 = {
        sign: _0x2ea25a
      };
      const _0x210e6c = {
        fn: "rabblit_joinRuning",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/joinRuning",
        json: _0x186307
      };
      let {
          result: _0x907dcb
        } = await this.woread_api(_0x210e6c),
        _0x27f4ce = _0x5bb516.get(_0x907dcb, "code", -1);
      if (_0x27f4ce == "0000") {
        _0x2f8955 = true;
        this.log("龟兔赛跑报名成功");
      } else {
        let _0x37ba32 = _0x907dcb?.["message"] || "";
        this.log("龟兔赛跑报名失败[" + _0x27f4ce + "]: " + _0x37ba32);
      }
    } catch (_0x9607bb) {
      console.log(_0x9607bb);
    } finally {
      return _0x2f8955;
    }
  }
  async rabblit_wakeRabbit(_0xbb8198 = {}) {
    try {
      let _0x3ce3b3 = {
          activeIndex: 26,
          sactivitIndex: 7246,
          ...this.get_woread_param()
        },
        _0x1b33db = this.encode_woread(_0x3ce3b3);
      const _0x1ed6ad = {
        sign: _0x1b33db
      };
      const _0xb89b7 = {
        fn: "rabblit_wakeRabbit",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/wakeRabbit",
        json: _0x1ed6ad
      };
      await _0x5bb516.wait_gap_interval(this.t_woread_draw, _0x28c433);
      let {
        result: _0x569d83
      } = await this.woread_api(_0xb89b7);
      this.t_woread_draw = Date.now();
      let _0x4cefac = _0x5bb516.get(_0x569d83, "code", -1);
      if (_0x4cefac == "0000") {
        const _0x4df884 = {
          notify: true
        };
        this.log("龟兔赛跑唤醒兔子抽奖: " + (_0x569d83?.["data"]?.["prizedesc"] || "空气"), _0x4df884);
      } else {
        let _0x2e1778 = _0x569d83?.["message"] || "";
        this.log("龟兔赛跑唤醒兔子失败[" + _0x4cefac + "]: " + _0x2e1778);
      }
    } catch (_0x19b6c8) {
      console.log(_0x19b6c8);
    }
  }
  async rabblit_finishActivity(_0x4cbb03 = {}) {
    try {
      let _0x48048e = {
          activeIndex: 26,
          ...this.get_woread_param()
        },
        _0x4618e6 = this.encode_woread(_0x48048e);
      const _0x2f3cbb = {
        sign: _0x4618e6
      };
      const _0x25d12e = {
        fn: "rabblit_finishActivity",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/rabbitActivity/finishActivity",
        json: _0x2f3cbb
      };
      await _0x5bb516.wait_gap_interval(this.t_woread_draw, _0x28c433);
      let {
        result: _0x335d26
      } = await this.woread_api(_0x25d12e);
      this.t_woread_draw = Date.now();
      let _0x1143ea = _0x5bb516.get(_0x335d26, "code", -1);
      if (_0x1143ea == "0000") {
        this.need_read_rabbit = false;
        const _0x40a3ac = {
          notify: true
        };
        this.log("龟兔赛跑终点抽奖: " + (_0x335d26?.["data"]?.["prizedesc"] || "空气"), _0x40a3ac);
      } else {
        let _0x449c84 = _0x335d26?.["message"] || "";
        this.log("龟兔赛跑终点抽奖失败[" + _0x1143ea + "]: " + _0x449c84);
      }
    } catch (_0x2eb5b2) {
      console.log(_0x2eb5b2);
    }
  }
  async moonbox_queryActiveInfo(_0x36b323 = {}) {
    try {
      let _0x1c84a3 = this.get_woread_param(),
        _0x11e942 = this.encode_woread(_0x1c84a3);
      const _0xe4cb9f = {
        sign: _0x11e942
      };
      const _0x22bc00 = {
        fn: "moonbox_queryActiveInfo",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveInfo",
        json: _0xe4cb9f
      };
      let {
          result: _0x3b097f
        } = await this.woread_api(_0x22bc00),
        _0x24f16d = _0x5bb516.get(_0x3b097f, "code", -1);
      if (_0x24f16d == "0000") {
        let {
          activeId: _0x42a0f3,
          activeName: _0x57b5ab
        } = _0x3b097f?.["data"];
        _0x18dd5f = _0x42a0f3;
      } else {
        let _0x40a8e0 = _0x3b097f?.["message"] || "";
        this.log("阅光宝盒查询活动失败[" + _0x24f16d + "]: " + _0x40a8e0);
      }
    } catch (_0x352905) {
      console.log(_0x352905);
    }
  }
  async moonbox_queryCurTaskStatus(_0x1845f5 = {}) {
    try {
      let _0x32a61d = {
          activeIndex: _0x18dd5f,
          ...this.get_woread_param()
        },
        _0x2f433b = this.encode_woread(_0x32a61d);
      const _0x34060e = {
        sign: _0x2f433b
      };
      const _0x18b245 = {
        fn: "moonbox_queryCurTaskStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryCurTaskStatus",
        json: _0x34060e
      };
      let {
          result: _0x4b459d
        } = await this.woread_api(_0x18b245),
        _0x265647 = _0x5bb516.get(_0x4b459d, "code", -1);
      if (_0x265647 == "0000") {
        for (let _0x57f6e5 of _0x4b459d?.["data"] || []) {
          let {
            taskName: _0x4145e6,
            currentValue: _0x1caae4,
            taskValue: _0x578d00
          } = _0x57f6e5?.["taskDetail"];
          switch (_0x57f6e5.taskStatus) {
            case 0:
              {
                this.moonbox_task_record[_0x4145e6] = true;
                this.log("阅光宝盒[" + _0x4145e6 + "]进度: " + parseInt(_0x1caae4) + "/" + _0x578d00 + "分钟");
                break;
              }
            case 2:
              {
                await this.moonbox_completeActiveTask(_0x57f6e5);
              }
            case 1:
              {
                this.moonbox_task_record[_0x4145e6] = false;
                if (!this.moonbox_notified.includes(_0x4145e6)) {
                  this.moonbox_notified.push(_0x4145e6);
                  const _0x11a3a1 = {
                    notify: true
                  };
                  this.log("阅光宝盒任务[" + _0x4145e6 + "]已完成", _0x11a3a1);
                }
                break;
              }
          }
        }
      } else {
        let _0x1b6ece = _0x4b459d?.["message"] || "";
        _0x1b6ece?.["includes"]("未领取") && !_0x1845f5.activate_retry && (await this.moonbox_queryActiveTaskList()) ? (_0x1845f5.activate_retry = true, await this.moonbox_queryCurTaskStatus(_0x1845f5)) : this.log("阅光宝盒查询任务状态失败[" + _0x265647 + "]: " + _0x1b6ece);
      }
    } catch (_0x47b6d1) {
      console.log(_0x47b6d1);
    }
  }
  async moonbox_completeActiveTask(_0x10dd45, _0x2554d9 = {}) {
    try {
      let _0x13b1ef = {
          taskId: _0x10dd45.id,
          ...this.get_woread_param()
        },
        _0x30025b = this.encode_woread(_0x13b1ef);
      const _0x636fc5 = {
        sign: _0x30025b
      };
      const _0x48dbb7 = {
        fn: "moonbox_completeActiveTask",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/completeActiveTask",
        json: _0x636fc5
      };
      let {
          result: _0x4c8de6
        } = await this.woread_api(_0x48dbb7),
        _0x1f152b = _0x5bb516.get(_0x4c8de6, "code", -1);
      if (_0x1f152b == "0000") {
        const _0x2fdf02 = {
          notify: true
        };
        this.log("阅光宝盒[" + _0x4c8de6?.["data"]?.["taskDetail"]?.["taskName"] + "]领取奖励成功: " + _0x4c8de6?.["data"]?.["exchangeResult"]?.["materialGroupInfo"]?.["groupName"], _0x2fdf02);
      } else {
        let _0x5283e4 = _0x4c8de6?.["message"] || "";
        this.log("阅光宝盒[" + _0x10dd45?.["taskDetail"]?.["taskName"] + "]领取奖励失败[" + _0x1f152b + "]: " + _0x5283e4);
      }
    } catch (_0x44e261) {
      console.log(_0x44e261);
    }
  }
  async moonbox_queryActiveTaskList(_0x49ab3d = {}) {
    try {
      let _0x1e2440 = {
          activeIndex: _0x18dd5f,
          ...this.get_woread_param()
        },
        _0x8033a8 = this.encode_woread(_0x1e2440);
      const _0x398b67 = {
        sign: _0x8033a8
      };
      const _0x48e0e5 = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryActiveTaskList",
        json: _0x398b67
      };
      let {
          result: _0x5af342
        } = await this.woread_api(_0x48e0e5),
        _0x2c2acb = _0x5bb516.get(_0x5af342, "code", -1);
      if (_0x2c2acb == "0000") {
        let _0x4fe5af = _0x5af342?.["data"]?.["sort"](function (_0x3af2af, _0x18e8d3) {
            let _0x561334 = parseInt(_0x18e8d3.taskDetail.taskValue),
              _0x56dd0b = parseInt(_0x3af2af.taskDetail.taskValue);
            return _0x561334 - _0x56dd0b;
          }),
          _0x1c5378 = _0x4fe5af.filter(_0x43ebac => _0x43ebac.maxNum - _0x43ebac.receiveNum > 0 && _0x43ebac.taskDetail.materialGroup.groupName.includes("红包"));
        _0x1c5378?.["length"] ? await this.moonbox_receiveActiveTask(_0x1c5378) : this.log("没有可领取的阅光宝盒红包任务了");
      } else {
        let _0x4896cb = _0x5af342?.["message"] || "";
        this.log("阅光宝盒查询可领取任务失败[" + _0x2c2acb + "]: " + _0x4896cb);
      }
    } catch (_0x347cc7) {
      console.log(_0x347cc7);
    }
  }
  async moonbox_receiveActiveTask(_0x244b44, _0x284b00 = {}) {
    try {
      if (!_0x244b44.length) {
        return;
      }
      let _0x1de252 = _0x244b44.shift(),
        _0x1523b1 = _0x1de252?.["taskDetail"]?.["taskName"] || "",
        _0xaaa74c = {
          activeId: _0x18dd5f,
          taskId: _0x1de252.secondTaskId,
          ...this.get_woread_param()
        },
        _0x234c51 = this.encode_woread(_0xaaa74c);
      const _0x17ecf4 = {
        sign: _0x234c51
      };
      const _0x3b2c0d = {
        fn: "moonbox_queryActiveTaskList",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/receiveActiveTask",
        json: _0x17ecf4
      };
      let {
          result: _0x4e6d21
        } = await this.woread_api(_0x3b2c0d),
        _0x39f554 = _0x5bb516.get(_0x4e6d21, "code", -1);
      if (_0x39f554 == "0000") {
        this.moonbox_task_record[_0x1523b1] = true;
        this.log("领取阅光宝盒任务[" + _0x1523b1 + "]成功");
      } else {
        let _0x474883 = _0x4e6d21?.["message"] || "";
        this.log("领取阅光宝盒任务[" + _0x1523b1 + "]失败[" + _0x39f554 + "]: " + _0x474883);
        (_0x474883?.["includes"]("今天无法完成") || _0x474883?.["includes"]("领光了")) && _0x244b44.length > 0 && (await _0x5bb516.wait(500), await this.moonbox_receiveActiveTask(_0x244b44, _0x284b00));
      }
    } catch (_0x74d08) {
      console.log(_0x74d08);
    }
  }
  async moonbox_queryReadStatus(_0x49d64b = {}) {
    try {
      let _0x35a3f2 = {
          activeIndex: _0x18dd5f,
          ...this.get_woread_param()
        },
        _0x4948b2 = this.encode_woread(_0x35a3f2);
      const _0x2eea36 = {
        sign: _0x4948b2
      };
      const _0x513a00 = {
        fn: "moonbox_queryReadStatus",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/queryReadStatus",
        json: _0x2eea36
      };
      let {
          result: _0x5b8a8
        } = await this.woread_api(_0x513a00),
        _0x1310b6 = _0x5bb516.get(_0x5b8a8, "code", -1);
      if (_0x1310b6 == "0000") {
        switch (_0x5b8a8?.["data"]) {
          case "2":
            {
              this.log("阅光宝盒去阅读两分钟抽奖");
              const _0x175405 = {
                readTime: 2
              };
              await this.woread_addReadTime(_0x175405);
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
              this.log("阅光宝盒抽奖状态[" + _0x5b8a8?.["data"] + "]");
              break;
            }
        }
      } else {
        let _0x161d14 = _0x5b8a8?.["message"] || "";
        this.log("查询阅光宝盒抽奖次数失败[" + _0x1310b6 + "]: " + _0x161d14);
      }
    } catch (_0x25a32f) {
      console.log(_0x25a32f);
    }
  }
  async moonbox_drawReadActivePrize(_0x709852 = {}) {
    try {
      let _0x7cf986 = {
          activeIndex: _0x18dd5f,
          ...this.get_woread_param()
        },
        _0x3e1b10 = this.encode_woread(_0x7cf986);
      const _0x44f83f = {
        sign: _0x3e1b10
      };
      const _0x388e76 = {
        fn: "moonbox_drawReadActivePrize",
        method: "post",
        url: "https://10010.woread.com.cn/ng_woread_service/rest/activity423/drawReadActivePrize",
        json: _0x44f83f
      };
      let {
          result: _0x91720f
        } = await this.woread_api(_0x388e76),
        _0x336d52 = _0x5bb516.get(_0x91720f, "code", -1);
      if (_0x336d52 == "0000") {
        const _0x587164 = {
          notify: true
        };
        this.log("阅光宝盒抽奖: " + (_0x91720f?.["data"]?.["prizedesc"] || JSON.stringify(_0x91720f)), _0x587164);
      } else {
        let _0x42f7a0 = _0x91720f?.["message"] || "";
        this.log("阅光宝盒抽奖失败[" + _0x336d52 + "]: " + _0x42f7a0);
      }
    } catch (_0x13f44f) {
      console.log(_0x13f44f);
    }
  }
  async ltyp_login(_0x3fa0f3, _0x16735f = {}) {
    try {
      const _0x4c6fac = {
        "client-Id": _0x17779a,
        accessToken: ""
      };
      const _0x5f1fa3 = {
        clientId: _0x17779a,
        ticket: _0x3fa0f3
      };
      let _0x1f131c = {
          fn: "ltyp_login",
          method: "post",
          url: "https://panservice.mail.wo.cn/wohome/dispatcher",
          headers: _0x4c6fac,
          json: {
            header: this.get_ltyp_sign_header("HandheldHallAutoLogin"),
            body: _0x5f1fa3
          }
        },
        {
          result: _0x2992f9
        } = await this.request(_0x1f131c),
        _0x4bc911 = _0x5bb516.get(_0x2992f9, "STATUS", -1);
      if (_0x4bc911 == 200) {
        this.ltyp_token = _0x2992f9?.["RSP"]?.["DATA"]?.["token"];
        for (let _0x2c51e5 of _0x545960) {
          await this.ltyp_incentiveTimes(_0x2c51e5);
          await this.ltyp_lottery(_0x2c51e5);
        }
      } else {
        let _0x13969f = _0x2992f9?.["msg"] || "";
        this.log("联通云盘登录失败[" + _0x4bc911 + "]: " + _0x13969f);
      }
    } catch (_0x544018) {
      console.log(_0x544018);
    }
  }
  async ltyp_incentiveTimes(_0x33c594, _0x33d57b = {}) {
    try {
      const _0x156b4c = {
        "client-Id": _0x17779a,
        "Access-Token": this.ltyp_token
      };
      const _0x42e510 = {
        bizKey: "incentiveTimesPipeline",
        activityId: _0x33c594
      };
      const _0xc913a6 = {
        fn: "ltyp_incentiveTimes",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTimes",
        headers: _0x156b4c,
        searchParams: _0x42e510
      };
      let {
          result: _0xf1663a
        } = await this.request(_0xc913a6),
        _0x2a1b44 = _0x5bb516.get(_0xf1663a?.["meta"], "code", -1);
      if (_0x2a1b44 == 0) {
        let {
          isIncentiveTask = 0,
          taskType = 0,
          incentiveTimeTotal = 0,
          incentiveTimeDone = 0
        } = _0xf1663a?.["result"];
        if (isIncentiveTask) {
          for (let _0x320b9e = incentiveTimeDone; _0x320b9e < incentiveTimeTotal; _0x320b9e++) {
            await this.ltyp_incentiveTask(_0x33c594);
          }
        }
      } else {
        let _0x51c1a0 = _0xf1663a?.["meta"]?.["message"] || "";
        this.log("联通云盘查询任务失败[" + _0x2a1b44 + "]: " + _0x51c1a0);
      }
    } catch (_0x347dad) {
      console.log(_0x347dad);
    }
  }
  async ltyp_incentiveTask(_0x29a42a, _0x3e3acb = {}) {
    try {
      const _0x253fcc = {
        "client-Id": _0x17779a,
        "Access-Token": this.ltyp_token
      };
      const _0x221c76 = {
        activityId: _0x29a42a
      };
      const _0x2c2c20 = {
        fn: "ltyp_incentiveTask",
        method: "post",
        url: "https://panservice.mail.wo.cn/activity/v1/incentiveTask",
        headers: _0x253fcc,
        json: {}
      };
      _0x2c2c20.json.bizKey = "incentiveTaskPipeline";
      _0x2c2c20.json.bizObject = _0x221c76;
      let {
          result: _0x2ce647
        } = await this.request(_0x2c2c20),
        _0x3c5f0e = _0x5bb516.get(_0x2ce647?.["meta"], "code", -1);
      if (_0x3c5f0e == 0) {
        let {
          incentiveStatus = 0,
          incentiveMessage = ""
        } = _0x2ce647?.["result"];
        incentiveStatus == 1 ? this.log("联通云盘完成任务成功") : this.log("联通云盘完成任务失败[" + incentiveStatus + "]: " + incentiveMessage);
      } else {
        let _0x454b56 = _0x2ce647?.["meta"]?.["message"] || "";
        this.log("联通云盘完成任务错误[" + _0x3c5f0e + "]: " + _0x454b56);
      }
    } catch (_0x2d1111) {
      console.log(_0x2d1111);
    }
  }
  async ltyp_lottery_times(_0x27509d, _0x24ed4d = {}) {
    try {
      const _0x47a19e = {
        "client-Id": _0x17779a,
        token: this.ltyp_token
      };
      const _0x970c64 = {
        activityId: _0x27509d
      };
      const _0x4743 = {
        fn: "ltyp_lottery_times",
        method: "get",
        url: "https://panservice.mail.wo.cn/activity/v1/times",
        headers: _0x47a19e,
        searchParams: _0x970c64
      };
      let {
          result: _0x4c8bfe
        } = await this.request(_0x4743),
        _0x4ebd74 = _0x5bb516.get(_0x4c8bfe, "RSP_CODE", -1);
      if (_0x4ebd74 == 0) {
        let {
          times = 0
        } = _0x4c8bfe?.["DATA"];
        this.log("联通云盘可以抽奖" + times + "次");
        while (times-- > 0) {
          await _0x5bb516.wait(1000);
          await this.ltyp_lottery(_0x27509d);
        }
      } else {
        let _0x542832 = _0x4c8bfe?.["RSP_DESC"] || "";
        this.log("联通云盘查询抽奖次数失败[" + _0x4ebd74 + "]: " + _0x542832);
      }
    } catch (_0x3fc799) {
      console.log(_0x3fc799);
    }
  }
  async ltyp_lottery(_0x20ebba, _0x551908 = {}) {
    try {
      const _0x26b011 = {
        "client-Id": _0x17779a,
        "Access-Token": this.ltyp_token
      };
      const _0x14d954 = {
        activityId: _0x20ebba,
        type: 3
      };
      const _0xc24b74 = {
        lottery: _0x14d954
      };
      const _0x111203 = {
        fn: "ltyp_lottery",
        method: "post",
        url: "https://panservice.mail.wo.cn/wohome/v1/lottery",
        headers: _0x26b011,
        json: {}
      };
      _0x111203.json.bizKey = "newLottery";
      _0x111203.json.bizObject = _0xc24b74;
      let {
          result: _0x4c2f88
        } = await this.request(_0x111203),
        _0x5c4251 = _0x5bb516.get(_0x4c2f88?.["meta"], "code", -1);
      if (_0x5c4251 == 0) {
        let {
          prizeName = ""
        } = _0x4c2f88?.["result"];
        if (prizeName) {
          const _0x318843 = {
            notify: true
          };
          this.log("联通云盘抽奖: " + prizeName, _0x318843);
          await this.ltyp_lottery(_0x20ebba, _0x551908);
        }
      } else {
        let _0x257c61 = _0x4c2f88?.["meta"]?.["message"] || "";
        this.log("联通云盘抽奖错误[" + _0x5c4251 + "]: " + _0x257c61);
      }
    } catch (_0x2611b5) {
      console.log(_0x2611b5);
    }
  }
  async act_517_userAccount(_0x3ec314 = {}) {
    try {
      const _0x499076 = {
        fn: "act_517_userAccount",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/userAccount"
      };
      {
        let {
            result: _0x34bdec,
            statusCode: _0x4cc9fb
          } = await this.request(_0x5bb516.copy(_0x499076)),
          _0x4971d8 = _0x5bb516.get(_0x34bdec, "code", _0x4cc9fb);
        if (_0x4971d8 == "0000") {
          await this.act_517_taskList();
        } else {
          let _0x119b58 = _0x34bdec?.["message"] || _0x34bdec?.["msg"] || "";
          this.log("517活动进入主页失败[" + _0x4971d8 + "]: " + _0x119b58);
          return;
        }
      }
      {
        let {
            result: _0x39a169,
            statusCode: _0x2ed1b7
          } = await this.request(_0x5bb516.copy(_0x499076)),
          _0x39964 = _0x5bb516.get(_0x39a169, "code", _0x2ed1b7);
        if (_0x39964 == "0000") {
          let {
            chances: _0x384d03
          } = _0x39a169?.["data"];
          this.log("517活动可以抽奖" + _0x384d03 + "次");
          let _0x52f56a = false;
          while (_0x384d03-- > 0) {
            if (_0x52f56a) {
              await _0x5bb516.wait(3000);
            }
            _0x52f56a = true;
            await this.act_517_lottery();
          }
        } else {
          let _0x5442e0 = _0x39a169?.["message"] || _0x39a169?.["msg"] || "";
          this.log("517活动查询抽奖次数失败[" + _0x39964 + "]: " + _0x5442e0);
        }
      }
      {
        let {
            result: _0x28899f,
            statusCode: _0x3be5c0
          } = await this.request(_0x5bb516.copy(_0x499076)),
          _0x2a01f7 = _0x5bb516.get(_0x28899f, "code", _0x3be5c0);
        if (_0x2a01f7 == "0000") {
          let {
            amount: _0x104de4,
            targetAmount: _0x2e5125
          } = _0x28899f?.["data"];
          const _0x1b4067 = {
            notify: true
          };
          this.log("517活动现金进度: " + _0x104de4 + "/" + _0x2e5125, _0x1b4067);
        } else {
          let _0x2d2912 = _0x28899f?.["message"] || _0x28899f?.["msg"] || "";
          this.log("517活动查询进度失败[" + _0x2a01f7 + "]: " + _0x2d2912);
        }
      }
    } catch (_0x233563) {
      console.log(_0x233563);
    }
  }
  async act_517_bind(_0xab3966, _0x7e795d = {}) {
    try {
      const _0x2c3605 = {
        fn: "act_517_bind",
        method: "post",
        url: "https://activity.10010.com/2024517charges/openWindows/bind",
        json: {},
        valid_code: [401]
      };
      _0x2c3605.json.shareCode = _0xab3966;
      _0x2c3605.json.channel = "countersign";
      let {
        result: _0x1c28d2
      } = await this.request(_0x2c3605);
    } catch (_0x4bcd87) {
      console.log(_0x4bcd87);
    }
  }
  async act_517_lottery(_0x32e01d = {}) {
    try {
      const _0x3c54af = {
        fn: "act_517_lottery",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/lottery"
      };
      let {
          result: _0x5309de,
          statusCode: _0x2ea2d1
        } = await this.request(_0x3c54af),
        _0xdc04 = _0x5bb516.get(_0x5309de, "code", _0x2ea2d1);
      if (_0xdc04 == "0000") {
        _0x5309de?.["data"]?.["uuid"] ? (await _0x5bb516.wait(2000), await this.act_517_winningRecord(_0x5309de.data.uuid)) : this.log("517活动抽奖失败, 没有返回uuid");
      } else {
        let _0x48eaee = _0x5309de?.["message"] || _0x5309de?.["msg"] || "";
        this.log("517活动抽奖失败[" + _0xdc04 + "]: " + _0x48eaee);
      }
    } catch (_0x531842) {
      console.log(_0x531842);
    }
  }
  async act_517_winningRecord(_0x430d1d, _0x337ad9 = {}) {
    try {
      const _0x4a880c = {
        requestId: _0x430d1d
      };
      const _0x1c9416 = {
        fn: "act_517_winningRecord",
        method: "get",
        url: "https://activity.10010.com/2024517charges/lottery/winningRecord",
        searchParams: _0x4a880c
      };
      let {
          result: _0x4bb209,
          statusCode: _0x570db7
        } = await this.request(_0x1c9416),
        _0x116077 = _0x5bb516.get(_0x4bb209, "code", _0x570db7);
      if (_0x116077 == "0000") {
        if (_0x4bb209?.["data"]?.["isWin"] === "1") {
          let {
              prizeAmount: _0x445ace,
              prizeList: _0x395ca7,
              afterAmount: _0x5b505a,
              targetAmount: _0x4ffb86,
              showAmount = "0"
            } = _0x4bb209?.["data"],
            _0x29d3c5 = (_0x395ca7 || []).filter(_0x224e30 => _0x224e30.prizeName).map(_0x515c5c => _0x515c5c.prizeName).join(", ") || "";
          const _0x2c8365 = {
            notify: true
          };
          if (_0x29d3c5) {
            this.log("517活动抽奖: " + _0x29d3c5, _0x2c8365);
          }
          if (showAmount === "1") {
            this.log("517活动抽奖现金进度: +" + _0x445ace + " (" + _0x5b505a + "/" + _0x4ffb86 + ")");
          }
        } else {
          this.log("517活动抽奖: 空气");
        }
      } else {
        let _0x21f148 = _0x4bb209?.["message"] || _0x4bb209?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x116077 + "]: " + _0x21f148);
      }
    } catch (_0x1b23d2) {
      console.log(_0x1b23d2);
    }
  }
  async act_517_taskList(_0x36f0a3 = {}) {
    try {
      const _0x4af87e = {
        fn: "act_517_taskList",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/taskList"
      };
      let {
          result: _0x3a2784,
          statusCode: _0x409cdc
        } = await this.request(_0x4af87e),
        _0x5182f9 = _0x5bb516.get(_0x3a2784, "code", _0x409cdc);
      if (_0x5182f9 == "0000") {
        let _0x4c504a = _0x3a2784?.["data"]?.["taskList"] || [];
        for (let _0x4b00c0 of _0x4c504a) {
          let {
            completeNum = 0,
            maxNum: _0x5515fa,
            isComplete: _0x31f755,
            taskType: _0x435ace
          } = _0x4b00c0;
          if (_0x31f755) {
            continue;
          }
          if (_0x435ace == "5") {
            continue;
          }
          completeNum = parseInt(completeNum);
          _0x5515fa = parseInt(_0x5515fa);
          for (let _0x144116 = completeNum; _0x144116 < _0x5515fa; _0x144116++) {
            await this.act_517_completeTask(_0x4b00c0);
          }
        }
      } else {
        let _0x294431 = _0x3a2784?.["message"] || _0x3a2784?.["msg"] || "";
        this.log("查询517活动抽奖结果失败[" + _0x5182f9 + "]: " + _0x294431);
      }
    } catch (_0x3319c7) {
      console.log(_0x3319c7);
    }
  }
  async act_517_completeTask(_0x96f4b6, _0x224b30 = {}) {
    try {
      let _0x2a4178 = _0x96f4b6.title;
      const _0x1cdbc7 = {
        taskId: _0x96f4b6.taskId
      };
      const _0x4f78c1 = {
        fn: "act_517_completeTask",
        method: "get",
        url: "https://activity.10010.com/2024517charges/dotask/completeTask",
        searchParams: _0x1cdbc7
      };
      let {
          result: _0x26e50e,
          statusCode: _0x584989
        } = await this.request(_0x4f78c1),
        _0x24451f = _0x5bb516.get(_0x26e50e, "code", _0x584989);
      if (_0x24451f == "0000") {
        if (_0x26e50e?.["data"]) {
          let {
            num: _0x2504d8,
            title: _0x46829d
          } = _0x26e50e.data;
          this.log("完成任务[" + _0x46829d + "]成功: " + _0x2504d8 + "次抽奖机会");
        } else {
          this.log("完成任务[" + _0x2a4178 + "]失败没有获得抽奖机会");
        }
      } else {
        let _0x1589ab = _0x26e50e?.["message"] || _0x26e50e?.["msg"] || "";
        this.log("完成任务[" + _0x2a4178 + "]失败[" + _0x24451f + "]: " + _0x1589ab);
      }
    } catch (_0x33f0ea) {
      console.log(_0x33f0ea);
    }
  }
  get_wocare_body(_0x2e26b2, _0x4866b7 = {}) {
    const _0x570c00 = _0x5bb516.time("yyyyMMddhhmmssS"),
      _0x14233c = Buffer.from(JSON.stringify(_0x4866b7)).toString("base64");
    let _0x5a79bb = {
        version: _0xf6b7e,
        apiCode: _0x2e26b2,
        channelId: _0x516a2c,
        transactionId: _0x570c00 + _0x5bb516.randomString(6, _0x330846),
        timeStamp: _0x570c00,
        messageContent: _0x14233c
      },
      _0x28f913 = [];
    Object.keys(_0x5a79bb).sort().forEach(_0x2de285 => {
      _0x28f913.push(_0x2de285 + "=" + _0x5a79bb[_0x2de285]);
    });
    _0x28f913.push("sign=" + _0x28fd72);
    _0x5a79bb.sign = _0x280505.MD5(_0x28f913.join("&")).toString();
    return _0x5a79bb;
  }
  async wocare_api(_0x4105c8, _0x227099 = {}) {
    let _0x57c1a5 = this.get_wocare_body(_0x4105c8, _0x227099);
    const _0x55b4d6 = {
      fn: "wocare_" + _0x4105c8,
      method: "post",
      url: "https://wocare.unisk.cn/api/v1/" + _0x4105c8,
      form: _0x57c1a5
    };
    let _0x5a5ae6 = await this.request(_0x55b4d6);
    if (_0x5a5ae6?.["result"]?.["messageContent"]) {
      try {
        let _0x22edc4 = JSON.parse(Buffer.from(_0x5a5ae6.result.messageContent, "base64").toString());
        _0x5a5ae6.result.data = _0x22edc4?.["data"] || _0x22edc4;
        if (_0x22edc4?.["resultMsg"]) {
          _0x5a5ae6.result.resultMsg = _0x22edc4.resultMsg;
        }
      } catch (_0x4ea814) {
        this.log("解析联通祝福返回失败:");
        console.log(_0x4ea814);
      }
    }
    return _0x5a5ae6;
  }
  async wocare_getToken(_0x44c4fd, _0xcb8dc0 = {}) {
    let _0x80effe = false;
    try {
      let _0x548e94 = {
          fn: "wocare_getToken",
          method: "get",
          url: "https://wocare.unisk.cn/mbh/getToken",
          searchParams: {
            channelType: _0x2b3213,
            type: "02",
            ticket: _0x44c4fd,
            version: _0x24f474,
            timestamp: _0x5bb516.time("yyyyMMddhhmmssS"),
            desmobile: this.mobile,
            num: 0,
            postage: _0x5bb516.randomString(32),
            homePage: "home",
            duanlianjieabc: "qAz2m",
            userNumber: this.mobile
          }
        },
        {
          headers: _0x4d0f42,
          statusCode: _0x43b7d7
        } = await this.request(_0x548e94);
      if (_0x43b7d7 == 302) {
        if (_0x4d0f42?.["location"]) {
          let _0x4204c2 = new URL(_0x4d0f42.location),
            _0x44441d = _0x4204c2.searchParams.get("sid");
          _0x44441d ? (this.wocare_sid = _0x44441d, _0x80effe = await this.wocare_loginmbh()) : this.log("联通祝福没有获取到sid");
        } else {
          this.log("联通祝福没有获取到location");
        }
      } else {
        this.log("联通祝福获取sid失败[" + _0x43b7d7 + "]");
      }
    } catch (_0xf580ef) {
      console.log(_0xf580ef);
    } finally {
      return _0x80effe;
    }
  }
  async wocare_loginmbh(_0x5517db = {}) {
    let _0x4d8b57 = false;
    try {
      let _0x15a1e8 = "loginmbh";
      const _0x49e40c = {
        sid: this.wocare_sid,
        channelType: _0x2b3213,
        apiCode: _0x15a1e8
      };
      let {
          result: _0x42c0c3,
          statusCode: _0x16f42e
        } = await this.wocare_api(_0x15a1e8, _0x49e40c),
        _0x1f15f6 = _0x5bb516.get(_0x42c0c3, "resultCode", _0x16f42e);
      if (_0x1f15f6 == "0000") {
        _0x4d8b57 = true;
        let {
          token: _0x1d56a7
        } = _0x42c0c3?.["data"];
        this.wocare_token = _0x1d56a7;
      } else {
        let _0x3b4d33 = _0x42c0c3?.["resultMsg"] || _0x42c0c3?.["resultDesc"] || "";
        this.log("联通祝福登录失败[" + _0x1f15f6 + "]: " + _0x3b4d33);
      }
    } catch (_0x43d4ed) {
      console.log(_0x43d4ed);
    } finally {
      return _0x4d8b57;
    }
  }
  async wocare_getSpecificityBanner(_0x41d36f = {}) {
    try {
      let _0x2b0475 = "getSpecificityBanner";
      const _0x27eca8 = {
        token: this.wocare_token,
        apiCode: _0x2b0475
      };
      let {
          result: _0x389c57,
          statusCode: _0x3e10f5
        } = await this.wocare_api(_0x2b0475, _0x27eca8),
        _0x3f1ac0 = _0x5bb516.get(_0x389c57, "resultCode", _0x3e10f5);
      if (_0x3f1ac0 == "0000") {
        let _0x2a6e91 = _0x389c57?.["data"] || [];
        for (let _0x54f967 of _0x2a6e91.filter(_0x3e4647 => _0x3e4647.activityStatus === "0" && _0x3e4647.isDeleted === "0")) {
          await this.wocare_getDrawTask(_0x54f967);
          await this.wocare_loadInit(_0x54f967);
        }
      } else {
        let _0x594d74 = _0x389c57?.["resultMsg"] || _0x389c57?.["resultDesc"] || "";
        this.log("联通祝福进入活动失败[" + _0x3f1ac0 + "]: " + _0x594d74);
      }
    } catch (_0x38c49b) {
      console.log(_0x38c49b);
    }
  }
  async wocare_loadInit(_0x1f4ccb, _0x1300b5 = {}) {
    try {
      let _0x295a8c = "loadInit";
      const _0xd226b2 = {
        token: this.wocare_token,
        channelType: _0x2b3213,
        type: _0x1f4ccb.id,
        apiCode: _0x295a8c
      };
      let {
          result: _0x49fb52,
          statusCode: _0x57a5b6
        } = await this.wocare_api(_0x295a8c, _0xd226b2),
        _0x467520 = _0x5bb516.get(_0x49fb52, "resultCode", _0x57a5b6);
      if (_0x467520 == "0000") {
        let _0x4b436c = _0x49fb52?.["data"],
          _0x248140 = _0x4b436c?.["zActiveModuleGroupId"],
          _0x477cc0 = 0;
        switch (_0x1f4ccb.id) {
          case 2:
            {
              let _0x2495d8 = _0x4b436c?.["data"]?.["isPartake"] || 0;
              !_0x2495d8 && (_0x477cc0 = 1);
              break;
            }
          case 3:
            {
              _0x477cc0 = parseInt(_0x4b436c?.["raffleCountValue"] || 0);
              break;
            }
          case 4:
            {
              _0x477cc0 = parseInt(_0x4b436c?.["mhRaffleCountValue"] || 0);
              break;
            }
        }
        while (_0x477cc0-- > 0) {
          await _0x5bb516.wait(5000);
          await this.wocare_luckDraw(_0x1f4ccb, _0x248140);
        }
      } else {
        let _0x5879c2 = _0x49fb52?.["resultMsg"] || _0x49fb52?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x1f4ccb.name + "]查询活动失败[" + _0x467520 + "]: " + _0x5879c2);
      }
    } catch (_0x3035b2) {
      console.log(_0x3035b2);
    }
  }
  async wocare_getDrawTask(_0x29ce67, _0xa72b3e = {}) {
    try {
      let _0x6af97c = "getDrawTask";
      const _0x3b1a4e = {
        token: this.wocare_token,
        channelType: _0x2b3213,
        type: _0x29ce67.id,
        apiCode: _0x6af97c
      };
      let {
          result: _0x1ec442,
          statusCode: _0x387987
        } = await this.wocare_api(_0x6af97c, _0x3b1a4e),
        _0x1f2085 = _0x5bb516.get(_0x1ec442, "resultCode", _0x387987);
      if (_0x1f2085 == "0000") {
        let _0x5b6dbf = _0x1ec442?.["data"]?.["taskList"] || [];
        for (let _0x2a638b of _0x5b6dbf.filter(_0x2fdd6b => _0x2fdd6b.taskStatus == 0)) {
          await this.wocare_completeTask(_0x29ce67, _0x2a638b);
        }
      } else {
        let _0x152bb1 = _0x1ec442?.["resultMsg"] || _0x1ec442?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x29ce67.name + "]查询任务失败[" + _0x1f2085 + "]: " + _0x152bb1);
      }
    } catch (_0x587797) {
      console.log(_0x587797);
    }
  }
  async wocare_completeTask(_0x5719c3, _0x6d15f2, _0x3fdfc5 = "1", _0x143f5c = {}) {
    try {
      let _0x578a13 = _0x6d15f2.title,
        _0x3d0e14 = _0x3fdfc5 == "1" ? "领取任务" : "完成任务",
        _0x4d8c2b = "completeTask";
      const _0x127a0c = {
        token: this.wocare_token,
        channelType: _0x2b3213,
        task: _0x6d15f2.id,
        taskStep: _0x3fdfc5,
        type: _0x5719c3.id,
        apiCode: _0x4d8c2b
      };
      let {
          result: _0x195812,
          statusCode: _0x274308
        } = await this.wocare_api(_0x4d8c2b, _0x127a0c),
        _0x178588 = _0x5bb516.get(_0x195812, "resultCode", _0x274308);
      if (_0x178588 == "0000") {
        this.log(_0x3d0e14 + "[" + _0x578a13 + "]成功");
        _0x3fdfc5 == "1" && (await this.wocare_completeTask(_0x5719c3, _0x6d15f2, "4"));
      } else {
        let _0x337661 = _0x195812?.["resultMsg"] || _0x195812?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x5719c3.name + "]" + _0x3d0e14 + "[" + _0x578a13 + "]失败[" + _0x178588 + "]: " + _0x337661);
      }
    } catch (_0x14c3b6) {
      console.log(_0x14c3b6);
    }
  }
  async wocare_luckDraw(_0x498dac, _0x568afd, _0x2f7a81 = {}) {
    try {
      let _0x4f8ef6 = "luckDraw";
      const _0x3dd780 = {
        token: this.wocare_token,
        channelType: _0x2b3213,
        zActiveModuleGroupId: _0x568afd,
        type: _0x498dac.id,
        apiCode: _0x4f8ef6
      };
      let {
          result: _0x2873ae,
          statusCode: _0x440243
        } = await this.wocare_api(_0x4f8ef6, _0x3dd780),
        _0x1bd377 = _0x5bb516.get(_0x2873ae, "resultCode", _0x440243);
      if (_0x1bd377 == "0000") {
        let _0x584c6a = _0x5bb516.get(_0x2873ae?.["data"], "resultCode", -1);
        if (_0x584c6a == "0000") {
          let {
            prizeName: _0x5c77e1,
            prizeDesc: _0x3ce91b
          } = _0x2873ae?.["data"]?.["data"]?.["prize"];
          this.log("联通祝福[" + _0x498dac.name + "]抽奖: " + _0x5c77e1 + "[" + _0x3ce91b + "]");
        } else {
          let _0x1401f8 = _0x2873ae?.["resultMsg"] || _0x2873ae?.["resultDesc"] || "";
          this.log("联通祝福[" + _0x498dac.name + "]抽奖失败[" + _0x584c6a + "]: " + _0x1401f8);
        }
      } else {
        let _0x37bea2 = _0x2873ae?.["resultMsg"] || _0x2873ae?.["resultDesc"] || "";
        this.log("联通祝福[" + _0x498dac.name + "]抽奖错误[" + _0x1bd377 + "]: " + _0x37bea2);
      }
    } catch (_0x3b85ef) {
      console.log(_0x3b85ef);
    }
  }
  async card_618_authCheck(_0x4da739 = {}) {
    try {
      let _0x4b7ec8 = {
          fn: "card_618_authCheck",
          method: "post",
          url: "https://epay.10010.com/ps-pafs-auth-front/v1/auth/check",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo()
          }
        },
        {
          result: _0x33aae8
        } = await this.request(_0x4b7ec8),
        _0xdc1e84 = _0x5bb516.get(_0x33aae8, "code", -1);
      if (_0xdc1e84 == "0000") {
        let {
          mobile: _0x1d5587,
          sessionId: _0x32d4d3,
          tokenId: _0x424e8d,
          userId: _0x460392
        } = _0x33aae8?.["data"]?.["authInfo"];
        const _0x4010fd = {
          sessionId: _0x32d4d3,
          tokenId: _0x424e8d,
          userId: _0x460392
        };
        Object.assign(this, _0x4010fd);
        await this.card_618_queryUserCardInfo();
      } else {
        if (_0xdc1e84 == "2101000100") {
          let _0x239bdb = _0x33aae8?.["data"]?.["woauth_login_url"];
          await this.card_618_login(_0x239bdb);
        } else {
          let _0x5afc48 = _0x33aae8?.["msgInside"] || _0x33aae8?.["msg"] || "";
          this.log("618集卡获取tokenId失败[" + _0xdc1e84 + "]: " + _0x5afc48);
        }
      }
    } catch (_0x5c62e1) {
      console.log(_0x5c62e1);
    }
  }
  async card_618_login(_0x7db414, _0x29ef78 = {}) {
    try {
      let _0x2efd64 = _0x5bb516.time("yyyyMM") + "28ZFR";
      _0x7db414 += "https://epay.10010.com/ci-mcss-party-web/rainbow/?templateName=" + _0x2efd64 + "&bizFrom=225&bizChannelCode=225&channelType=WDQB";
      const _0x3b5e0c = {
        fn: "card_618_login",
        method: "get",
        url: "https://epay.10010.com/woauth2/login",
        searchParams: {}
      };
      _0x3b5e0c.searchParams.response_type = "web_token";
      _0x3b5e0c.searchParams.source = "app_sjyyt";
      _0x3b5e0c.searchParams.union_session_id = "";
      _0x3b5e0c.searchParams.device_digest_token_id = this.tokenId_cookie;
      _0x3b5e0c.searchParams.target_client_id = _0x27c966;
      _0x3b5e0c.searchParams.position = null;
      _0x3b5e0c.searchParams.redirect_url = "https://epay.10010.com/ci-mcss-party-web/cardSelection/?activityId=NZJK618CJHD";
      _0x3b5e0c.searchParams.bizFrom = _0x461698;
      _0x3b5e0c.searchParams.bizChannelCode = _0xb4f4c7;
      _0x3b5e0c.searchParams.channelType = "WDQB";
      let {
        headers: _0x393001,
        statusCode: _0x56928e
      } = await this.request(_0x3b5e0c);
      if (_0x393001?.["location"]) {
        let _0x373d1e = new URL(_0x393001.location);
        this.rptId = _0x373d1e.searchParams.get("rptid");
        this.rptId ? await this.card_618_authCheck() : this.log("618集卡获取rptid失败");
      } else {
        this.log("618集卡获取rptid失败[" + _0x56928e + "]");
      }
    } catch (_0x414a36) {
      console.log(_0x414a36);
    }
  }
  async card_618_queryUserCardInfo(_0x26f599 = {}) {
    try {
      let _0x4bb37d = {
          fn: "card_618_queryUserCardInfo",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/mouldCard/queryUserCardInfo",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            activityId: _0x1c6653.card_618
          }
        },
        {
          result: _0x400342
        } = await this.request(_0x4bb37d),
        _0x106856 = _0x5bb516.get(_0x400342, "code", -1);
      if (_0x106856 == "0000" && _0x400342?.["data"]?.["returnCode"] == 0) {
        let {
          userRemain = 0,
          isFirst = true
        } = _0x400342?.["data"];
        if (isFirst) {
          await this.card_618_unifyDraw("首次进入");
        }
        this.log("618集卡可以抽奖" + userRemain + "次");
        while (userRemain-- > 0) {
          await this.card_618_unifyDraw("抽奖");
        }
      } else {
        let _0x2969e6 = _0x400342?.["message"] || _0x400342?.["msg"] || "";
        this.log("618集卡进入主页失败[" + _0x106856 + "]: " + _0x2969e6);
      }
    } catch (_0x542965) {
      console.log(_0x542965);
    }
  }
  async card_618_unifyDraw(_0x5c2060, _0x2565cc = {}) {
    try {
      let _0x226cb7 = {
          fn: "card_618_unifyDraw",
          method: "post",
          url: "https://epay.10010.com/ci-mcss-party-front/v1/mouldCard/unifyDraw",
          headers: {
            bizchannelinfo: this.get_bizchannelinfo(),
            authinfo: this.get_epay_authinfo()
          },
          form: {
            bigActivityId: _0x1c6653.card_618,
            activityId: "NZJK618CJHD" + _0x1e5360[_0x5c2060],
            bizFrom: _0x461698
          }
        },
        {
          result: _0x2e42b9
        } = await this.request(_0x226cb7),
        _0x481999 = _0x5bb516.get(_0x2e42b9, "code", -1);
      if (_0x481999 == "0000" && _0x2e42b9?.["data"]?.["returnCode"] == 0) {
        let _0x32f05b = _0x2e42b9?.["data"]?.["prizeId"] || "空气",
          _0x39ff9a = _0xafd1ea[_0x32f05b] || _0x32f05b;
        const _0x2dc00d = {
          notify: true
        };
        this.log("618集卡[" + _0x5c2060 + "]: " + _0x39ff9a, _0x2dc00d);
      } else {
        let _0x381741 = _0x2e42b9?.["data"]?.["returnMsg"] || _0x2e42b9?.["msg"] || "";
        this.log("618集卡[" + _0x5c2060 + "]失败[" + (_0x2e42b9?.["data"]?.["returnCode"] || _0x481999) + "]: " + _0x381741);
      }
    } catch (_0x37411e) {
      console.log(_0x37411e);
    }
  }
  async sign_task() {
    await this.sign_getContinuous();
  }
  async ltcy_task() {
    let _0x3eaa5c = "https://web.wostore.cn/web/flowGame/index.html?channelId=GAMELTAPP_90006&pushid=99",
      {
        ticket: _0x25efc6
      } = await this.openPlatLineNew(_0x3eaa5c);
    if (!_0x25efc6) {
      return;
    }
    await this.game_login(_0x25efc6);
  }
  async ttlxj_task() {
    this.rptId = "";
    let _0xc456b = "https://epay.10010.com/ci-mps-st-web/?webViewNavIsHidden=webViewNavIsHidden",
      {
        ticket: _0x3940af,
        type: _0x55f08a,
        loc: _0xe85932
      } = await this.openPlatLineNew(_0xc456b);
    if (!_0x3940af) {
      return;
    }
    await this.ttlxj_authorize(_0x3940af, _0x55f08a, _0xe85932);
  }
  async epay_28_task() {
    this.rptId = "";
    let _0x193ef5 = new Date().getDate();
    if (_0x193ef5 >= 26 && _0x193ef5 <= 28) {
      await this.epay_28_authCheck();
      if (_0x110e7c.length) {
        let _0x480448 = _0x5bb516.randomList(_0x110e7c);
        await this.appMonth_28_bind(_0x480448);
      }
      await this.appMonth_28_queryChance();
    }
  }
  async draw_28_task() {
    let _0x47e543 = new Date().getDate();
    _0x47e543 == 28 && (await this.draw_28_queryChance());
  }
  async act_517_task() {
    let _0x150b21 = new Date("2024-05-10 00:00:00"),
      _0x5d5273 = new Date("2024-06-09 00:00:00"),
      _0x47c944 = Date.now();
    if (_0x47c944 > _0x150b21.getTime() && _0x47c944 < _0x5d5273.getTime()) {
      if (_0x151f69.length) {
        let _0x530b5d = _0x5bb516.randomList(_0x151f69);
        await this.act_517_bind(_0x530b5d);
      }
      await this.act_517_userAccount();
    }
  }
  async card_618_task() {
    let _0x24c7b3 = new Date("2024-05-31 00:00:00"),
      _0x4e5468 = new Date("2024-06-21 00:00:00"),
      _0x5c0889 = Date.now();
    _0x5c0889 > _0x24c7b3.getTime() && _0x5c0889 < _0x4e5468.getTime() && (this.rptId = "", await this.card_618_authCheck());
  }
  async flmf_task() {
    if (this.city.filter(_0xb33752 => _0xb33752.proCode == "091").length == 0) {
      return;
    }
    let _0x59c226 = "https://weixin.linktech.hk/lv-web/handHall/autoLogin?actcode=welfareCenter",
      {
        loc: _0xb50c14
      } = await this.openPlatLineNew(_0x59c226);
    if (!_0xb50c14) {
      return;
    }
    await this.flmf_login(_0xb50c14);
  }
  async ltyp_task() {
    let _0x30b26c = "https://panservice.mail.wo.cn/h5/activitymobile/lottery?activityId=WzaR7KkUJSpR+gDh7Fy6mA==&clientid=1001000003&appName=shouting",
      {
        ticket: _0x5f24c0
      } = await this.openPlatLineNew(_0x30b26c);
    if (!_0x5f24c0) {
      return;
    }
    await this.ltyp_login(_0x5f24c0);
  }
  async ltzf_task() {
    let _0x4c3018 = new URL("https://wocare.unisk.cn/mbh/getToken");
    _0x4c3018.searchParams.append("channelType", _0x2b3213);
    _0x4c3018.searchParams.append("homePage", "home");
    _0x4c3018.searchParams.append("duanlianjieabc", "qAz2m");
    let _0x2facbc = _0x4c3018.toString(),
      {
        ticket: _0xec3088
      } = await this.openPlatLineNew(_0x2facbc);
    if (!_0xec3088) {
      return;
    }
    if (!(await this.wocare_getToken(_0xec3088))) {
      return;
    }
    for (let _0x245fec of _0x1a0c5d) {
      await this.wocare_getDrawTask(_0x245fec);
      await this.wocare_loadInit(_0x245fec);
    }
  }
  async woread_draw_task(_0x549eac) {
    await this.woread_getSeeVideoAddNumber(_0x549eac);
    await this.woread_addDrawTimes(_0x549eac);
    await this.woread_getActivityNumber(_0x549eac);
  }
  async woread_task() {
    for (let _0x5bfe50 of _0x91bd0a) {
      await this.woread_draw_task(_0x5bfe50);
    }
    await this.moonbox_queryReadStatus();
    await this.woread_queryTicketAccount();
  }
  async woread_reading_task() {
    let _0x1085fb = Object.values(this.moonbox_task_record).filter(_0x18e83a => _0x18e83a === true).length;
    while (this.need_read_rabbit || _0x1085fb) {
      let _0x2cb0e8 = 2;
      const _0x28b0c9 = {
        readTime: _0x2cb0e8
      };
      await this.woread_addReadTime(_0x28b0c9);
      let _0x2bd299 = Date.now();
      if (_0x1085fb) {
        await this.moonbox_queryCurTaskStatus();
      }
      _0x1085fb = Object.values(this.moonbox_task_record).filter(_0x55471c => _0x55471c === true).length;
      if (this.need_read_rabbit) {
        await this.rabblit_queryActivityData();
      }
      let _0x47e696 = Date.now(),
        _0x3ce449 = 125000 + _0x2bd299 - _0x47e696;
      (this.need_read_rabbit || _0x1085fb) && _0x3ce449 > 0 && (this.log("等待2分钟..."), await _0x5bb516.wait(_0x3ce449));
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
    if (!_0x18dd5f) {
      await this.moonbox_queryActiveInfo();
    }
    await this.moonbox_queryCurTaskStatus();
  }
  async userTask() {
    _0x5bb516.log("\n------------------ 账号[" + this.index + "] ------------------");
    if (!_0x4a231a) {
      await this.sign_task();
    }
    await this.ttlxj_task();
    await this.ltyp_task();
    await this.epay_28_task();
    await this.draw_28_task();
    await this.act_517_task();
    await this.card_618_task();
    if (!_0x43e13f) {
      await this.ltzf_task();
    }
    await this.flmf_task();
    await this.woread_task();
  }
  async userTestTask() {
    _0x5bb516.log("\n------------------ 账号[" + this.index + "] ------------------");
    await this.ltyp_task();
  }
}
!(async () => {
  // if (!(await _0x4f7b0f())) {
  //   return;
  // }
  await _0x168a95();
  _0x5bb516.read_env(_0x4e574b);
  _0x5bb516.log("\n------------------------------------");
  _0x5bb516.log("首页签到设置为: " + (_0x4a231a ? "不" : "") + "运行");
  _0x5bb516.log("联通祝福设置为: " + (_0x43e13f ? "不" : "") + "运行");
  _0x5bb516.log("------------------------------------\n");
  for (let _0x5b7bac of _0x5bb516.userList) {
    await _0x5b7bac.userLoginTask();
  }
  for (let _0x5693d0 of _0x5bb516.userList.filter(_0x5477d7 => _0x5477d7.valid)) {
    await _0x5693d0.userTask();
  }
  let _0x3e842e = _0x5bb516.userList.filter(_0x134eaa => _0x134eaa.valid && _0x134eaa.woread_verifycode && (_0x134eaa.need_read_rabbit || Object.values(_0x134eaa.moonbox_task_record).filter(_0x3a90fe => _0x3a90fe === true).length));
  // if (_0x3e842e.length) {
  //   let _0x26d532 = [];
  //   _0x5bb516.log("\n============ 开始刷阅读时长 ============");
  //   for (let _0x49bec6 of _0x3e842e) {
  //     _0x26d532.push(_0x49bec6.woread_reading_task());
  //   }
  //   await Promise.all(_0x26d532);
  // }
})().catch(_0x139475 => _0x5bb516.log(_0x139475)).finally(() => _0x5bb516.exitNow());
async function _0x4f7b0f(_0x9ff373 = 0) {
  let _0x35852b = false;
  try {
    const _0x19a761 = {
      fn: "auth",
      method: "get",
      url: _0x2050db,
      timeout: 20000
    };
    let {
      statusCode: _0x21390e,
      result: _0x45adcf
    } = await _0x5a7f2e.request(_0x19a761);
    if (_0x21390e != 200) {
      _0x9ff373++ < _0x56a4dc && (_0x35852b = await _0x4f7b0f(_0x9ff373));
      return _0x35852b;
    }
    if (_0x45adcf?.["code"] == 0) {
      _0x45adcf = JSON.parse(_0x45adcf.data.file.data);
      if (_0x45adcf?.["commonNotify"] && _0x45adcf.commonNotify.length > 0) {
        const _0x21bd51 = {
          notify: true
        };
        _0x5bb516.log(_0x45adcf.commonNotify.join("\n") + "\n", _0x21bd51);
      }
      _0x45adcf?.["commonMsg"] && _0x45adcf.commonMsg.length > 0 && _0x5bb516.log(_0x45adcf.commonMsg.join("\n") + "\n");
      if (_0x45adcf[_0x592491]) {
        let _0x196763 = _0x45adcf[_0x592491];
        _0x196763.status == 0 ? _0x5c887a >= _0x196763.version ? (_0x35852b = true, _0x5bb516.log(_0x196763.msg[_0x196763.status]), _0x5bb516.log(_0x196763.updateMsg), _0x5bb516.log("现在运行的脚本版本是：" + _0x5c887a + "，最新脚本版本：" + _0x196763.latestVersion)) : _0x5bb516.log(_0x196763.versionMsg) : _0x5bb516.log(_0x196763.msg[_0x196763.status]);
      } else {
        _0x5bb516.log(_0x45adcf.errorMsg);
      }
    } else {
      _0x9ff373++ < _0x56a4dc && (_0x35852b = await _0x4f7b0f(_0x9ff373));
    }
  } catch (_0x249d6d) {
    _0x5bb516.log(_0x249d6d);
  } finally {
    return _0x35852b;
  }
}
async function _0x168a95() {
  let _0x5d3b67 = false;
  try {
    const _0x56ce8a = {
      fn: "getTaskUrl",
      method: "get",
      url: _0x1e357b
    };
    let {
      statusCode: _0x77fef,
      result: _0x596393
    } = await _0x5a7f2e.request(_0x56ce8a);
    if (_0x77fef != 200) {
      return Promise.resolve();
    }
    if (_0x596393?.["code"] == 0) {
      _0x596393 = JSON.parse(_0x596393.data.file.data);
      _0x545960 = _0x596393?.["ltyp_lottery"] || _0x545960;
      _0x91bd0a = _0x596393?.["woread_draw_id"] || _0x91bd0a;
      _0x110e7c = _0x596393?.["appMonth_28_share"] || _0x110e7c;
      _0x151f69 = _0x596393?.["act_517_share"] || _0x151f69;
    }
  } catch (_0x4aadb4) {
    _0x5bb516.log(_0x4aadb4);
  } finally {
    return _0x5d3b67;
  }
}
function _0x48e85d(_0x24a407) {
  return new class {
    constructor(_0x4f764e) {
      this.name = _0x4f764e;
      this.startTime = Date.now();
      const _0x62dd0e = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x62dd0e);
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
    log(_0x59a4eb, _0x479c47 = {}) {
      const _0x280418 = {
        console: true
      };
      Object.assign(_0x280418, _0x479c47);
      if (_0x280418.time) {
        let _0x396805 = _0x280418.fmt || "hh:mm:ss";
        _0x59a4eb = "[" + this.time(_0x396805) + "]" + _0x59a4eb;
      }
      if (_0x280418.notify) {
        this.notifyStr.push(_0x59a4eb);
      }
      if (_0x280418.console) {
        console.log(_0x59a4eb);
      }
    }
    get(_0x39ceb6, _0x4dfd00, _0xea0f16 = "") {
      let _0x37d34e = _0xea0f16;
      _0x39ceb6?.["hasOwnProperty"](_0x4dfd00) && (_0x37d34e = _0x39ceb6[_0x4dfd00]);
      return _0x37d34e;
    }
    pop(_0x1739ae, _0x18bf31, _0x4df99e = "") {
      let _0x54ee3d = _0x4df99e;
      _0x1739ae?.["hasOwnProperty"](_0x18bf31) && (_0x54ee3d = _0x1739ae[_0x18bf31], delete _0x1739ae[_0x18bf31]);
      return _0x54ee3d;
    }
    copy(_0x5b4fed) {
      return Object.assign({}, _0x5b4fed);
    }
    read_env(_0x1a2194) {
      let _0x6d0a15 = _0x37842d.map(_0x3617cc => process.env[_0x3617cc]);
      for (let _0x196585 of _0x6d0a15.filter(_0x19919d => !!_0x19919d)) {
        let _0x75a8e9 = _0x19f641.filter(_0x330fe3 => _0x196585.includes(_0x330fe3)),
          _0x2b7093 = _0x75a8e9.length > 0 ? _0x75a8e9[0] : _0x19f641[0];
        for (let _0x2c2337 of _0x196585.split(_0x2b7093).filter(_0x1551f7 => !!_0x1551f7)) {
          this.userList.push(new _0x1a2194(_0x2c2337));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x2375d3 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x37842d.map(_0x4844fb => "[" + _0x4844fb + "]").join("或"), _0x2375d3);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x35cb99, _0x476806, _0x1619e1 = {}) {
      while (_0x476806.idx < _0x5bb516.userList.length) {
        let _0x142e47 = _0x5bb516.userList[_0x476806.idx++];
        if (!_0x142e47.valid) {
          continue;
        }
        await _0x142e47[_0x35cb99](_0x1619e1);
      }
    }
    async threadTask(_0x1734f7, _0x3b5604) {
      let _0x1afbcc = [];
      const _0x1c1f64 = {
        idx: 0
      };
      while (_0x3b5604--) {
        _0x1afbcc.push(this.threads(_0x1734f7, _0x1c1f64));
      }
      await Promise.all(_0x1afbcc);
    }
    time(_0x2c795a, _0x3fd9c3 = null) {
      let _0x3a8739 = _0x3fd9c3 ? new Date(_0x3fd9c3) : new Date(),
        _0x4ea0f8 = {
          "M+": _0x3a8739.getMonth() + 1,
          "d+": _0x3a8739.getDate(),
          "h+": _0x3a8739.getHours(),
          "m+": _0x3a8739.getMinutes(),
          "s+": _0x3a8739.getSeconds(),
          "q+": Math.floor((_0x3a8739.getMonth() + 3) / 3),
          S: this.padStr(_0x3a8739.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x2c795a) && (_0x2c795a = _0x2c795a.replace(RegExp.$1, (_0x3a8739.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2e863f in _0x4ea0f8) new RegExp("(" + _0x2e863f + ")").test(_0x2c795a) && (_0x2c795a = _0x2c795a.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4ea0f8[_0x2e863f] : ("00" + _0x4ea0f8[_0x2e863f]).substr(("" + _0x4ea0f8[_0x2e863f]).length)));
      return _0x2c795a;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x3922a6 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x3922a6.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x247f22, _0x270936, _0x371f3a = {}) {
      let _0x10d425 = _0x371f3a.padding || "0",
        _0x35edad = _0x371f3a.mode || "l",
        _0x23e6af = String(_0x247f22),
        _0x476376 = _0x270936 > _0x23e6af.length ? _0x270936 - _0x23e6af.length : 0,
        _0x3dcef7 = "";
      for (let _0x21719e = 0; _0x21719e < _0x476376; _0x21719e++) {
        _0x3dcef7 += _0x10d425;
      }
      _0x35edad == "r" ? _0x23e6af = _0x23e6af + _0x3dcef7 : _0x23e6af = _0x3dcef7 + _0x23e6af;
      return _0x23e6af;
    }
    json2str(_0x25165a, _0x379528, _0x2752b9 = false) {
      let _0x504bb7 = [];
      for (let _0x4c7602 of Object.keys(_0x25165a).sort()) {
        let _0x475ec4 = _0x25165a[_0x4c7602];
        if (_0x475ec4 && _0x2752b9) {
          _0x475ec4 = encodeURIComponent(_0x475ec4);
        }
        _0x504bb7.push(_0x4c7602 + "=" + _0x475ec4);
      }
      return _0x504bb7.join(_0x379528);
    }
    str2json(_0x5db1db, _0x2fba2f = false) {
      let _0x263080 = {};
      for (let _0xd85afa of _0x5db1db.split("&")) {
        if (!_0xd85afa) {
          continue;
        }
        let _0x2e28ca = _0xd85afa.indexOf("=");
        if (_0x2e28ca == -1) {
          continue;
        }
        let _0x37b409 = _0xd85afa.substr(0, _0x2e28ca),
          _0x379a91 = _0xd85afa.substr(_0x2e28ca + 1);
        if (_0x2fba2f) {
          _0x379a91 = decodeURIComponent(_0x379a91);
        }
        _0x263080[_0x37b409] = _0x379a91;
      }
      return _0x263080;
    }
    randomPattern(_0x5baa66, _0x2d012 = "abcdef0123456789") {
      let _0x2a0741 = "";
      for (let _0x2a37c2 of _0x5baa66) {
        if (_0x2a37c2 == "x") {
          _0x2a0741 += _0x2d012.charAt(Math.floor(Math.random() * _0x2d012.length));
        } else {
          _0x2a37c2 == "X" ? _0x2a0741 += _0x2d012.charAt(Math.floor(Math.random() * _0x2d012.length)).toUpperCase() : _0x2a0741 += _0x2a37c2;
        }
      }
      return _0x2a0741;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-4xxx-4xxx-xxxxxxxxxxxx");
    }
    randomString(_0x3a1f9b, _0x3a546c = "abcdef0123456789") {
      let _0x3d2fa5 = "";
      for (let _0x57ba1f = 0; _0x57ba1f < _0x3a1f9b; _0x57ba1f++) {
        _0x3d2fa5 += _0x3a546c.charAt(Math.floor(Math.random() * _0x3a546c.length));
      }
      return _0x3d2fa5;
    }
    randomList(_0x41d341) {
      let _0x549150 = Math.floor(Math.random() * _0x41d341.length);
      return _0x41d341[_0x549150];
    }
    wait(_0xb1b58a) {
      return new Promise(_0xc35cf6 => setTimeout(_0xc35cf6, _0xb1b58a));
    }
    async exitNow() {
      await this.showmsg();
      let _0x4cb39a = Date.now(),
        _0x2c2de3 = (_0x4cb39a - this.startTime) / 1000;
      this.log("");
      const _0x376041 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2c2de3 + "秒", _0x376041);
      process.exit(0);
    }
    normalize_time(_0x4639b3, _0xcc6215 = {}) {
      let _0x69c1a6 = _0xcc6215.len || this.default_timestamp_len;
      _0x4639b3 = _0x4639b3.toString();
      let _0x5e6ecf = _0x4639b3.length;
      while (_0x5e6ecf < _0x69c1a6) {
        _0x4639b3 += "0";
      }
      _0x5e6ecf > _0x69c1a6 && (_0x4639b3 = _0x4639b3.slice(0, 13));
      return parseInt(_0x4639b3);
    }
    async wait_until(_0x2065e1, _0x5cf2ac = {}) {
      let _0xbdfb40 = _0x5cf2ac.logger || this,
        _0x50976d = _0x5cf2ac.interval || default_wait_interval,
        _0x53ae89 = _0x5cf2ac.limit || default_wait_limit,
        _0x476cc8 = _0x5cf2ac.ahead || default_wait_ahead;
      if (typeof _0x2065e1 == "string" && _0x2065e1.includes(":")) {
        if (_0x2065e1.includes("-")) {
          _0x2065e1 = new Date(_0x2065e1).getTime();
        } else {
          let _0x54c747 = this.time("yyyy-MM-dd ");
          _0x2065e1 = new Date(_0x54c747 + _0x2065e1).getTime();
        }
      }
      let _0x1e0ff5 = this.normalize_time(_0x2065e1) - _0x476cc8,
        _0x46e4bc = this.time("hh:mm:ss.S", _0x1e0ff5),
        _0x4177ca = Date.now();
      _0x4177ca > _0x1e0ff5 && (_0x1e0ff5 += 86400000);
      let _0x67e0c4 = _0x1e0ff5 - _0x4177ca;
      if (_0x67e0c4 > _0x53ae89) {
        const _0x2ec075 = {
          time: true
        };
        _0xbdfb40.log("离目标时间[" + _0x46e4bc + "]大于" + _0x53ae89 / 1000 + "秒,不等待", _0x2ec075);
      } else {
        const _0x3f33d7 = {
          time: true
        };
        _0xbdfb40.log("离目标时间[" + _0x46e4bc + "]还有" + _0x67e0c4 / 1000 + "秒,开始等待", _0x3f33d7);
        while (_0x67e0c4 > 0) {
          let _0xbb32bd = Math.min(_0x67e0c4, _0x50976d);
          await this.wait(_0xbb32bd);
          _0x4177ca = Date.now();
          _0x67e0c4 = _0x1e0ff5 - _0x4177ca;
        }
        const _0x459a1b = {
          time: true
        };
        _0xbdfb40.log("已完成等待", _0x459a1b);
      }
    }
    async wait_gap_interval(_0xd3c7e7, _0xb81f43) {
      let _0x5dd1dc = Date.now() - _0xd3c7e7;
      _0x5dd1dc < _0xb81f43 && (await this.wait(_0xb81f43 - _0x5dd1dc));
    }
  }(_0x24a407);
}