//app.js
App({
    onLaunch: function () {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    getUserInfo: function (cb) {
        console.log(1)
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    globalData: {

        userInfo: null
    },
    toLogin: function () {
        wx.navigateTo({
            url: '/pages/toLogin/toLogin',
        })
    },
    ready: function () {
        console.log(1)
        return Promise((resolve, reject) => {
            const userkey = wx.getStorageSync('userkey')
            const userId = wx.getStorageSync('userId')
            const sessionData = wx.getStorageSync('sessionData')
            // 检查用户是否具有登陆态
            if (!userkey || !userId || !sessionData) {
                // 如果未登录就前往登录界面
                this.toLogin()

            } else {
                // 如果有就只要更改一下Promise，以继续执行后续操作
                resolv2()
            }

        })

    }
})
