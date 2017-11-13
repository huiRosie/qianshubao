var config = require('../../common/script/config');
var fetch = require('../../common/script/fetch');

var app = getApp();

Page({
  data: {
    newsClassList:[],
    newsList:[],
    currentId:0,
    currentPage:1,
    showLoading:true,
    visiable:false
  },
  onLoad: function () {
    var that = this
    fetch.fetchNewsClassList(config.apiList.newsClassListUrl, that)
    fetch.fetchNewsList(config.apiList.newsListUrl, { categoryId: 0, numPerPage: 10 }, that)
       
  },
  changeClass:function(e){
    var that = this
    let id = e.currentTarget.id;
    console.log(id);
    if (id) {
      that.setData({newsList: []})
      that.setData({currentId:id})
      fetch.fetchNewsList(config.apiList.newsListUrl,{categoryId:id}, that)
    }
  },
  onPullDownRefresh: function (e) {
    // wx.showNavigationBarLoading()
    // var that = this
    // let id = e.currentTarget.id;
    // that.setData({
    //   showLoading:true
    // })
    // fetch.fetchNewsList(config.apiList.newsListUrl, { categoryId:id,currentPage:1, numPerPage: 10 },that)
  },
  onReachBottom:function(e){
    var that = this
    let id = that.data.currentId;
    let currentPage = that.data.currentPage;
    fetch.fetchNewsList(config.apiList.newsListUrl, { categoryId:id, currentPage: currentPage, numPerPage: 10 }, that)
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
  viewNewsDetail:function(e){
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id='+data.id,
    })
  }
})