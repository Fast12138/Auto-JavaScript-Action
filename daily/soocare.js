/*
学习记录五
素士牙刷
shysCookie=sessionCode##accessToken#soocasId#deviceId
多变量回车
*/

const $ = new Env('素士牙刷')
const got = require('got')
const envPrefix = 'soocareCookie'
const envSplitor = ['\n']  //支持多种分割，但要保证变量里不存在这个字符
const ckNames = [envPrefix + 'Cookie'] //可以支持多变量

//并发设置
const MAX_THREAD = parseInt(process.env[envPrefix + 'Thread']) || 1 //默认最大并发数
//超时时间，重试次数
const DEFAULT_TIMEOUT = 1000, DEFAULT_RETRY = 3

//发包通用定义
const default_Url = 'https://web1.soocare.com/soocasbrush'

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
        let info = ck.split('#') //ck分割用&
        this.sessionCode = info[0]
        this.accessToken = info[1]
        this.soocasId =info[2]
        this.deviceId = info[3]
        //默认发包参数
        this.got = this.got.extend({
            headers: {
                appKey: 'soocare',
                sessionCode: this.sessionCode,
                accessToken: this.accessToken,
                soocasId: this.soocasId,
                Connection: 'keep-alive',
                'User-Agent': 'Soocas Tooth Brush, X3 National, V3.1.9, Android',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept-Encodeing': 'zip',
            },
        })
    }
    //查询个人信息
    async getinfo() {
        this.valid = false
        try {
            let Object = {
                fn: '个人信息',
                method: 'Post',
                url: 'https://www.soocare.com/soocasuser/userdetail/all/getinfo',
                body: 'appKey=soocare&timestamp=1684048860982&sign=9a8e0e3862ad6800b8de063ec7994e44&soocasId=' + this.soocasId + '&accessToken=' + this.accessToken + '&sessionCode=' + this.sessionCode,
                timeout: 5000,
            }
            let { result } = await this.request(Object);
            // console.log(Object);
            // console.log(result);
            if (result?.code == 200) {
                this.valid = true
                this.log(`${result?.data?.mobilePhoneNo}数据有效！`, { notify: true })
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }
    //查询金币余额
    async currentgold() {
        try {
            let Object = {
                fn: '查询金币余额',
                method: 'Post',
                url: default_Url + '/gold/obtain/currentgold',
                headers: {
                    timestamp: '1684048860967',
                    sign: 'a6b9e1d4e065dec8ee58cecfb127d38d',
                },
                body: 'customerId=' + this.soocasId,
            }
            let { result } = await this.request(Object);
            //console.log(Object);
            // console.log(result);
            if (result?.code == 200) {
                this.log(`金币余额：${result?.data?.currentGold}`, { notify: true })
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
    }
    //同步数据
    async basedatas() {
        try {
            let time_1 = new Date(), time_2 = new Date();
            time_1.setHours(7, 0, 0, 0); //上午7点
            time_2.setHours(20, 0, 0, 0); //晚上20点
            let timestampRange = 3 * 3600 * 1000, // 3小时的时间范围Math.floor(Math.random() * 6)
                todayTimestamp_1 = time_1.getTime() + Math.random() * timestampRange,
                todayTimestamp_2 = time_2.getTime() + Math.random() * timestampRange,
                brushdatas = JSON.stringify([{
                    "batteryValue": 0.81,
                    "changeAreaTime": 38,
                    "deviceId": this.deviceId,
                    "jetLag": 28800,
                    "leftDownCout": 29,
                    "leftUpCount": 32,
                    "midDownCount": 20,
                    "midUpCount": 14,
                    "overPressCount": 0,
                    "rightDownCount": 24,
                    "rightUpCount": 31,
                    "timeStamp": todayTimestamp_1,
                    "unDefineCount": 0,
                    "unIdentify": 0,
                    "workTime": 150
                },
                {
                    "batteryValue": 0.81,
                    "changeAreaTime": 38,
                    "deviceId": this.deviceId,
                    "jetLag": 28800,
                    "leftDownCout": 30,
                    "leftUpCount": 25,
                    "midDownCount": 23,
                    "midUpCount": 15,
                    "overPressCount": 0,
                    "rightDownCount": 25,
                    "rightUpCount": 32,
                    "timeStamp": todayTimestamp_2,
                    "unDefineCount": 0,
                    "unIdentify": 0,
                    "workTime": 150
                }]);
            let Object = {
                fn: '同步数据',
                method: 'Post',
                url: default_Url + '/data/add/basedatas',
                headers: {
                    timestamp: '1684048908829',
                    sign: 'd5cee782a60f4fb4de19e28f320028ad',
                },
                body: 'customerId=' + this.soocasId + '&brushdatas=' + brushdatas,
            }
            let { result } = await this.request(Object);
            // console.log(Object);
            // console.log(result);
            if (result?.code == 200) {
                this.log(`同步数据：${result?.message}`)
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }
    //查看报告
    async checkreport() {
        await this.basedatas()
        try {
            let Object = {
                fn: '查看报告',
                method: 'Post',
                url: default_Url + '/gold/add/checkreport',
                headers: {
                    timestamp: '1684048860967',
                    sign: 'a6b9e1d4e065dec8ee58cecfb127d38d',
                },
                body: 'customerId=' + this.soocasId,
            }
            let { result } = await this.request(Object);
            //console.log(Object);
            // console.log(result);
            if (result?.code == 200) {
                this.log(`查看报告：${result?.message}`)
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }
    //分享
    async shareinfo() {
        await this.checkreport()
        try {
            let Object = {
                fn: '分享',
                method: 'Post',
                url: default_Url + '/gold/add/shareinfo',
                headers: {
                    timestamp: '1684048927725',
                    sign: '0cce28d331aa832c5f745247fb5b0033',
                },
                body: 'customerId=' + this.soocasId + '&sharePlatform=wechat',
            }
            let { result } = await this.request(Object);
            //console.log(Object);
            // console.log(result);
            if (result?.code == 200) {
                this.log(`分享：${result?.message}`)
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }
    //待领取金币详情
    async goldbubbles() {
        await this.shareinfo()
        try {
            let Object = {
                fn: '领取金币',
                method: 'Post',
                url: default_Url + '/gold/obtain/goldbubbles',
                headers: {
                    timestamp: '1684054527826',
                    sign: '02d915e7323b961b304ea9bae4a5aa83',
                },
                body: 'customerId=' + this.soocasId + '&sharePlatform=wechat',
            }
            let { result } = await this.request(Object);
            //console.log(Object);
            // console.log(result);
            if (result?.code == 200) {
                this.log(`金币待领取详情\n
                同步：${result?.data?.syncGold},
                分享：${result?.data?.shareGold},
                查看报告：${result?.data?.checkReportGold},
                完成三个任务：${result?.data?.finishTaskGold}`, { notify: true })
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }
    //领取分享金币
    async goldbubbles_1() {
        try {
            let Object = {
                fn: '领取分享金币',
                method: 'Post',
                url: default_Url + '/gold/add/goldbubble',
                headers: {
                    timestamp: '1684054527565',
                    sign: 'ee949dd2bab88ade71964f5b78283bc0',
                },
                body: 'customerId=' + this.soocasId + '&bubbleTypeArr=share',
            }
            let { result } = await this.request(Object);
            //console.log(Object);
            // console.log(result);
            if (result?.code == 200) {
                this.log(`领取分享金币：${result?.data?.currentGold}`)
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }
    //领取同步金币
    async goldbubbles_2() {
        try {
            let Object = {
                fn: '领取同步金币',
                method: 'Post',
                url: default_Url + '/gold/add/goldbubble',
                headers: {
                    timestamp: '1684597276304',
                    sign: '5084a0c3a971ba149a28085ab02470a8',
                },
                body: 'customerId=' + this.soocasId + '&bubbleTypeArr=sync,task',
            }
            let { result } = await this.request(Object);
            //console.log(Object);
            //console.log(JSON.stringify(result));
            if (result?.code == 200) {
                this.log(`领取同步金币：${result?.data?.currentGold}`)
            } else {
                this.log(result?.message)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }
    //领取报告金币
    async goldbubbles_3() {
        try {
            let Object = {
                fn: '领取报告金币',
                method: 'Post',
                url: default_Url + '/gold/add/goldbubble',
                headers: {
                    timestamp: '1684054528453',
                    sign: '406cb77fe36fe96b1e14ef5a37ba7136',
                },
                body: 'customerId=' + this.soocasId + '&bubbleTypeArr=report',
            }
            let { result } = await this.request(Object);
            //console.log(Object);
            // console.log(result);
            if (result?.code == 200) {
                this.log(`领取报告金币：${result?.data?.currentGold}`)
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }
    //金币记录
    async golddetail() {
        try {
            let Object = {
                fn: '金币记录',
                method: 'Post',
                url: default_Url + '/gold/obtain/golddetail',
                headers: {
                    timestamp: '1684597268875',
                    sign: '99e4256338ec7b5e70bdd1b79307e722',
                },
                body: 'customerId=' + this.soocasId + '&pageSize=20&currentPage=0',
            }
            let { result } = await this.request(Object);
            //console.log(Object);
            //this.log(JSON.stringify(result));
            if (result?.code == 200) {
                // 获取 'LIST' 属性中的所有元素
                let LIST_1 = result?.data[0].dayArr[0].hhmmArr;
                //this.log(JSON.stringify(LIST_1));
                // 遍历列表中的所有元素
                this.log(`金币记录,时间：${result?.data[0].dayName}`, { notify: true });
                if (LIST_1 != null) {
                    for (let i = 0; i < LIST_1.length; i++) {
                        // 获取当前元素的值
                        let content = LIST_1[i].content;
                        let goldCount = LIST_1[i].goldCount;
                        // 在控制台中打印该属性的值
                        this.log(`任务名称：${content},金币：${goldCount}`, { notify: true })
                    }
                }
            } else {
                this.log(result)
            }
        } catch (e) {
            console.log(e)
        }
        await $.wait(3000)
    }

    //做任务逻辑
    async userTask() {
        $.log(`\n============= 账号[${this.index}] =============`)
        await this.getinfo()
        if (!this.valid) return
        await this.currentgold()
        await this.goldbubbles()
        await this.goldbubbles_1()
        await this.goldbubbles_2()
        await this.goldbubbles_3()
        await this.golddetail()
        await this.currentgold()
    }
}

//执行任务
!(async () => {
    //$.log(`最大并发数: ${MAX_THREAD}`)

    //封装的读取变量方法, 可以自己另外写也可以直接用, 读取到的账号会存入 $.userList 中
    $.read_env(UserClass)

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
