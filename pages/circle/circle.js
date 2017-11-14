var config = require('../../common/script/config');
var fetch = require('../../common/script/fetch');
var app = getApp();
Page({
  data: {
    circleList: [],
    circleImgList:[],
    currentPage:1,
    visiable:false
  },
  onLoad: function () {
    var that = this;
    // console.log(that)
    if (app.globalData.appUserId){
      fetch.fetchCircleList(config.apiList.circleListUrl, { appUserId: app.globalData.appUserId}, that)
      
    }else{
      
    }
  },
  onReachBottom: function (e) {
    var that = this
    let id = that.data.currentId;
    let currentPage = that.data.currentPage;
    fetch.fetchCircleList(config.apiList.circleListUrl, { appUserId: 26, currentPage: currentPage }, that)
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  circleVote: function (e){
    var that = this;
    console.log(app.globalData.appUserId)
    console.log(e)
    var activeId = e.currentTarget.dataset.activeid;
    fetch.fetchCircleVote(config.apiList.circleVoteUrl, {appUserId: app.globalData.appUserId,activeId:activeId}, that)
  },
  viewCircleDetail: function (e) {
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../circleDetail/circleDetail?id=' + data.id,
    })
  }
})