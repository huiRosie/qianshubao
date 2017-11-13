//app.js
App({
  globalData: {
    userInfo: null,
    appUserId:12
  },
  onLaunch: function () {
    // 获取用户信息
    this.getUserInfo();
    // 初始化缓存
    this.initStorage();
  },
  getUserInfo: function () {
    var that = this;
    // 登录
    wx.login({
      success:res => {
        if(res.code){
          // 获取用户信息
          wx.getUserInfo({
            success: res => {
              console.log(res.userInfo);
              that.globalData.userInfo = res.userInfo;
              // 可以将 res 发送给后台解码出 unionId
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (that.userInfoReadyCallback) {
                that.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          console.log('获取用户登录状态失败'+res.errMsg);
        }
        
      }
    })

  }, 
  initStorage:function(){
    wx.getStorageInfo({
      success: function(res) {
        console.log(res);
        var personInfo = {
          nickName: '',
          gender: '',
          avatarUrl: '',
          city: '',
          province: '',
          country: '',
          language: ''
        }
        if(!('person_info' in res.keys)){
          wx.setStorage({
            key: 'person_info',
            data: personInfo,
          })
        }
      },
    })
  },
  // getUserInfo: function () {
  //   // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //       // 获取用户信息
  //       wx.getSetting({
  //         success: res => {
  //           if (res.authSetting['scope.userInfo']) {
  //             // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //             wx.getUserInfo({
  //               success: res => {
  //                 // 可以将 res 发送给后台解码出 unionId
  //                 this.globalData.userInfo = res.userInfo

  //                 // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //                 // 所以此处加入 callback 以防止这种情况
  //                 if (this.userInfoReadyCallback) {
  //                   this.userInfoReadyCallback(res)
  //                 }
  //               }
  //             })
  //           }
  //         }
  //       })
  //     }
  //   })

  // },
  viewNewsDetail: function (e) {
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id=' + data.id,
    })
  }
})