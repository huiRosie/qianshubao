
var app = getApp();
Page({
  data: {
    
  },
  onLoad:function () {
    var that = this;
    if (app.globalData.userInfo) {
      that.setData({
        userInfo:app.globalData.userInfo
      })
    } else {
      //由于getUserInfo是网络请求，可能会在Page.onLoad之后才会返回
      //所以此处加入callback以防止这种情况
      app.userInfoReadyCallback = function(res){
        that.setData({
          userInfo: res.userInfo
        })
      }
    }
  }
})
