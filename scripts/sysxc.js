const $ = new Env('书亦烧仙草')   //脚本名
const got = require('got'),
    crypto = require('crypto') //导入依赖模块
const envPrefix = 'sysxc'    //ck名
const envSplitor = ['\n', '&']  //支持多种分割，但要保证变量里不存在这个字符
const ckNames = [envPrefix + 'Cookie'] //可以支持多变量

//并发设置
const MAX_THREAD = parseInt(process.env[envPrefix + 'Thread']) || 1 //默认最大并发数
//超时时间，重试次数
const DEFAULT_TIMEOUT = 20000, DEFAULT_RETRY = 3

//GOT 封包
class BasicClass {
    constructor() {
        this.index = $.userIdx++
        this.name = ''
        this.valid = true

        //设置got的默认超时等参数
        this.got = got.extend({
            retry: { limit: 0 },
            timeout: DEFAULT_TIMEOUT,
            followRedirect: false,
        })
    }
    //给每个账户打印前面加上自己的名字
    log(msg, opt = {}) {
        var m = '', n = $.userCount.toString().length;;
        if (this.index) m += `账号[${$.padStr(this.index, n)}]`
        if (this.name) m += `[${this.name}]`
        $.log(m + msg, opt)
    }
    //使用自己的got实例发包,可以实现设置每个账号自己的默认UA等
    async request(opt) {
        var resp = null, count = 0
        var fn = opt.fn || opt.url
        opt.method = opt?.method?.toUpperCase() || 'GET'
        while (count++ < DEFAULT_RETRY) {
            try {
                var err = null
                const errcodes = ['ECONNRESET', 'EADDRINUSE', 'ENOTFOUND', 'EAI_AGAIN']
                await this.got(opt).then(t => {
                    resp = t
                }, e => {
                    err = e
                    resp = e.response
                })
                if (err) {
                    if (err.name == 'TimeoutError') {
                        this.log(`[${fn}]请求超时(${err.code})，重试第${count}次`)
                    } else if (errcodes.includes(err.code)) {
                        this.log(`[${fn}]请求错误(${err.code})，重试第${count}次`)
                    } else {
                        let statusCode = resp?.statusCode || -1
                        this.log(`[${fn}]请求错误(${err.message}), 返回[${statusCode}]`)
                        break
                    }
                } else {
                    break
                }
            } catch (e) {
                this.log(`[${fn}]请求错误(${e.message})，重试第${count}次`)
            };
        }
        let { statusCode = -1, headers = null, body = null } = resp
        if (body) try { body = JSON.parse(body) } catch { };
        return { statusCode, headers, result: body }
    }
}

let http = new BasicClass()

//任务封包
class UserClass extends BasicClass {
    //ck分割
    constructor(ck) {
        super()
        //定义账号
        let info = ck.split('#') //ck分割用#
        this.ck = info[0]
        this.checkvalid = true
        //默认发包参数
        this.got = this.got.extend({
            headers: {
                releaseVersion: "202452",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090217) XWEB/9129",
                auth: this.ck,
                "Content-Type": "application/json",
                "hostName": "scrm-prod.shuyi.org.cn",
                xweb_xhr: 1,
                "Terminal-Code": "member_wechat_micro",
                channel: "wechat_micro",
                Referer: "https://servicewechat.com/wxa778c3d895442625/418/page-frame.html"
            },
        })
    }
    aesEncrypt(key, data) {
        const cipher = crypto.createCipheriv('aes-128-ecb', key, '')
        let encrypted = cipher.update(data, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }
    aesDecrypt(key, encryptedData) {
        const decipher = crypto.createDecipheriv('aes-128-ecb', key, '');
        let decrypted = decipher.update(encryptedData, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
    async getTimestamp() {
        try {
            let options = {
                fn: 'getTimestamp',
                method: 'get',
                url: 'http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp'
            }
            let { result } = await this.request(options)
            // console.log(result);
            if (result?.ret[0].includes('SUCCESS')) {
                return result?.data?.t
            } else {
                console.log(result);
            }
        } catch (e) {
            console.log(e);
        }
    }
    async slidePost(slidingImage, backImage) {
        try {
            let data = {
                "gap": slidingImage,
                "bg": backImage
            }
            let options = {
                fn: "slidePost",
                method: "Post",
                url: "http://huakuai.xzxxn7.live/detect_slider_position",
                headers: {
                    'Content-Type': 'application/json',
                },
                json: data
            }
            let { statusCode, result } = await this.request(options)
            // console.log(JSON.stringify(result, null, 2));
            if (statusCode === 200) {
                return result
            } else {
                return null
            }
        } catch (error) {
            console.log(error)
        }
    }

    async SignInReward() {
        try {
            let options = {
                fn: "SignInReward",
                method: "Get",
                url: "https://scrm-prod.shuyi.org.cn/saas-gateway/api/agg-trade/v1/signIn/querySignInReward",
            }
            let { statusCode, result } = await this.request(options)
            // console.log(JSON.stringify(result, null, 2));
            if (result.resultCode === '0') {
                console.log("--------签到奖励--------")
                let prizeLists = result?.data?.prizeList || []
                for (let i = 0; i < prizeLists.length; i++) {
                    const prizeList = prizeLists[i],
                        signDays = prizeList.signDays,
                        groupLimitType = prizeList.groupLimitType,
                        signInRulesDetailId = prizeList.signInRulesDetailId,
                        couponInfoList = prizeList.couponInfoList,
                        couponName = couponInfoList[0]?.couponName,
                        couponTemplateId = couponInfoList[0]?.couponTemplateId,
                        remainingQuantity = couponInfoList[0]?.remainingQuantity
                    couponName && this.log("奖励要求：" + couponName + ",连续签到:" + signDays + "天," + (groupLimitType === "LIMITED" ? "需要" : "不需要") + "加入社群")
                    // 领取奖励
                }
                console.log("--------签到统计--------")
                this.log("本月连续签到 " + result?.data?.days + " 天", { notify: true })
            } else {
                this.log(result?.resultMsg)
            }
        } catch (error) {
            console.log(error)
        }
    }
    async SignInRecord() {
        this.valid = false
        try {
            let options = {
                fn: "SignInRecord",
                method: "Get",
                url: "https://scrm-prod.shuyi.org.cn/saas-gateway/api/agg-trade/v1/signIn/querySignInRecord",
            }
            let { statusCode, result } = await this.request(options)
            console.log(JSON.stringify(result, null, 2));
            if (result.resultCode === '0') {
                this.valid = true
                console.log("--------个人状态--------")
                this.log(result?.data?.joinedGroup ? "已" : "未" + "加入社群")
                if (result?.data?.supplementarySignCardStatus === "0") {
                    await this.getVcode()
                } else {
                    this.log("今日已签到", { notify: true })
                }
            } else {
                this.log(result?.resultMsg)
            }
        } catch (error) {
            console.log(error)
        }
    }
    async getVcode() {
        try {
            let options = {
                fn: 'getVcode',
                method: 'post',
                url: 'https://scrm-prod.shuyi.org.cn/saas-gateway/api/agg-trade/v1/signIn/getVCode',
                json: {
                    "captchaType": "blockPuzzle",
                    "clientUid": "",
                    "ts": Date.now()
                },
            }
            let { result } = await this.request(options)
            // console.log(result);
            if (result?.resultCode === "0000") {
                let VcodeToken = result.data.token,
                    VcodeKey = result.data.secretKey,
                    bg = result.data.originalImageBase64,
                    gap = result.data.jigsawImageBase64
                // console.log(VcodeToken, VcodeKey);
                while (this.checkvalid) {
                    this.log("触发滑块,请等待")
                    let x_pot = await this.slidePost(gap, bg)
                    if (x_pot) {
                        this.log("滑块验证中")
                        let x = x_pot?.x_coordinate,
                            pointStr = JSON.stringify({
                                "x": x,
                                "y": 5
                            })
                        let pointJson = this.aesEncrypt(VcodeKey, pointStr)
                        // console.log(aesRes, VcodeToken, VcodeKey);
                        await this.checkVcode(pointJson, VcodeToken, VcodeKey, pointStr)
                    } else {
                        this.log("滑块服务器连接错误")
                    }
                    await $.wait(2000)
                    this.log("等待2秒重试")
                }
            } else {
                this.log(result?.resultMsg)
            }
        } catch (e) {
            console.log(e);
        }
    }
    async checkVcode(pointJson, VcodeToken, VcodeKey, pointStr) {
        try {
            let options = {
                fn: "checkVcode",
                method: "post",
                url: 'https://scrm-prod.shuyi.org.cn/saas-gateway/api/agg-trade/v1/signIn/checkVCode',
                json: {
                    "captchaType": "blockPuzzle",
                    "pointJson": pointJson,
                    "token": VcodeToken
                }
            };
            let { result } = await this.request(options);
            // console.log(JSON.stringify(result, null, 2));
            if (result.resultCode === '0000') {
                let SignInParams = result?.data?.token + '---' + pointStr,
                    captchaVerification = this.aesEncrypt(VcodeKey, SignInParams)
                this.checkvalid = false
                this.log("滑块验证成功")
                await this.SignIn(captchaVerification)
            } else {
                this.log(result?.resultMsg)
            }
        } catch (e) {
            console.log(e);
        }
    }
    async SignIn(captchaVerification) {
        try {
            let options = {
                fn: "SignIn",
                method: "Post",
                // url: "https://scrm-prod.shuyi.org.cn/saas-gateway/api/agg-trade/v1/signIn/insertSignInV3",
                url: "https://scrm-prod.shuyi.org.cn/saas-gateway/api/agg-trade/v1/signIn/insertSignInV6",
                json: {
                    "captchaVerification": captchaVerification
                }
            }
            let { statusCode, result } = await this.request(options)
            // console.log(JSON.stringify(result, null, 2));
            if (result.resultCode === '0') {
                if (result?.data?.couponTemplateList) {
                    let List = result?.data?.couponTemplateList[0],
                        couponName = List.couponName,
                        couponTemplateId = List.couponTemplateId,
                        remainingQuantity = List.remainingQuantity
                    this.log("签到成功,本次获得" + couponName)
                } else {
                    this.log("签到成功,本次获得积分:" + result?.data?.pointRewardNum)
                }

            } else {
                this.log(result?.resultMsg)
            }
        } catch (error) {
            console.log(error)
        }
    }
    //做任务逻辑
    async userTask() {
        $.log(`\n============= 账号[${this.index}] =============`)
        await this.SignInRecord()
        if (!this.valid) return
        await this.SignInReward()
    }
}

//执行任务
!(async () => {
    // $.log(`最大并发数: ${MAX_THREAD}`)

    //封装的读取变量方法, 可以自己另外写也可以直接用, 读取到的账号会存入 $.userList 中
    if (!$.read_env(UserClass)) {
        return
    }
    //正常的做任务流程
    for (let user of $.userList) {
        await user.userTask()
    }

    //封装的并发方法, 想试的把下面的//删掉
    //await $.threadTask('userTask',MAX_THREAD);

})()
    .catch((e) => $.log(e))
    .finally(() => $.exitNow())

//全局变量
function Env(name) {
    return new class {
        constructor(name) {
            this.name = name
            this.startTime = Date.now()
            this.log(`[${this.name}]开始运行\n`, { time: true })
            this.notifyStr = []
            this.notifyFlag = true
            this.userIdx = 0
            this.userList = []
            this.userCount = 0
        }
        //log打印 this.log推送 console.log打印
        log(msg, options = {}) {
            let opt = { console: true }
            Object.assign(opt, options)
            if (opt.time) {
                let fmt = opt.fmt || 'hh:mm:ss'
                msg = `[${this.time(fmt)}]` + msg
            }
            if (opt.notify) this.notifyStr.push(msg)
            if (opt.console) console.log(msg)
        }
        //读取ck变量
        read_env(Class) {
            let envStrList = ckNames.map(x => process.env[x])
            for (let env_str of envStrList.filter(x => !!x)) {
                let sp = envSplitor.filter(x => env_str.includes(x))
                let splitor = sp.length > 0 ? sp[0] : envSplitor[0]
                for (let ck of env_str.split(splitor).filter(x => !!x)) {
                    this.userList.push(new Class(ck))
                }
            }
            this.userCount = this.userList.length
            if (!this.userCount) {
                this.log(`未找到变量，请检查变量${ckNames.map(x => '[' + x + ']').join('或')}`, { notify: true })
                return false
            }
            this.log(`共找到${this.userCount}个账号`)
            return true
        }
        //并发
        async threads(taskName, conf, opt = {}) {
            while (conf.idx < $.userList.length) {
                let user = $.userList[conf.idx++]
                if (!user.valid) continue
                await user[taskName](opt)
            }
        }
        async threadTask(taskName, thread) {
            let taskAll = []
            let taskConf = { idx: 0 }
            while (thread--) taskAll.push(this.threads(taskName, taskConf))
            await Promise.all(taskAll)
        }
        time(t, x = null) {
            let xt = x ? new Date(x) : new Date
            let e = {
                "M+": xt.getMonth() + 1,
                "d+": xt.getDate(),
                "h+": xt.getHours(),
                "m+": xt.getMinutes(),
                "s+": xt.getSeconds(),
                "q+": Math.floor((xt.getMonth() + 3) / 3),
                S: this.padStr(xt.getMilliseconds(), 3)
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (xt.getFullYear() + "").substr(4 - RegExp.$1.length)))
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)))
            return t
        }
        //推送
        async showmsg() {
            if (!this.notifyFlag) return
            if (!this.notifyStr.length) return
            var notify = require('./sendNotify')
            this.log('\n============== 推送 ==============')
            await notify.sendNotify(this.name, this.notifyStr.join('\n'))
        }
        //通用变量
        padStr(num, length, opt = {}) {
            let padding = opt.padding || '0'
            let mode = opt.mode || 'l'
            let numStr = String(num)
            let numPad = (length > numStr.length) ? (length - numStr.length) : 0
            let pads = ''
            for (let i = 0; i < numPad; i++) {
                pads += padding
            }
            if (mode == 'r') {
                numStr = numStr + pads
            } else {
                numStr = pads + numStr
            }
            return numStr
        }
        json2str(obj, c, encode = false) {
            let ret = []
            for (let keys of Object.keys(obj).sort()) {
                let v = obj[keys]
                if (v && encode) v = encodeURIComponent(v)
                ret.push(keys + '=' + v)
            }
            return ret.join(c)
        }
        str2json(str, decode = false) {
            let ret = {}
            for (let item of str.split('&')) {
                if (!item) continue
                let idx = item.indexOf('=')
                if (idx == -1) continue
                let k = item.substr(0, idx)
                let v = item.substr(idx + 1)
                if (decode) v = decodeURIComponent(v)
                ret[k] = v
            }
            return ret
        }
        randomPattern(pattern, charset = 'abcdef0123456789') {
            let str = ''
            for (let chars of pattern) {
                if (chars == 'x') {
                    str += charset.charAt(Math.floor(Math.random() * charset.length))
                } else if (chars == 'X') {
                    str += charset.charAt(Math.floor(Math.random() * charset.length)).toUpperCase()
                } else {
                    str += chars
                }
            }
            return str
        }
        randomString(len, charset = 'abcdef0123456789') {
            let str = ''
            for (let i = 0; i < len; i++) {
                str += charset.charAt(Math.floor(Math.random() * charset.length))
            }
            return str
        }
        randomList(a) {
            let idx = Math.floor(Math.random() * a.length)
            return a[idx]
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        //结束
        async exitNow() {
            await this.showmsg()
            let e = Date.now()
            let s = (e - this.startTime) / 1000
            this.log('')
            this.log(`[${this.name}]运行结束，共运行了${s}秒`, { time: true })
            process.exit(0)
        }
    }
        (name)
}
