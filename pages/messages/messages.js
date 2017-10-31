var config = require('../../common/script/config');
var fetch = require('../../common/script/fetch');

var app = getApp();

Page({
  data: {
    newsClassList:[],
    newsList:[],
    currentId:0
  },
  onLoad: function () {
    fetch.fetchNewsClassList(config.apiList.newsClassListUrl,this)
    fetch.fetchNewsList(config.apiList.newsListUrl, { categoryId: 0,numPerPage:20},this)
   
  },
  changeClass:function(e){
    // console.log(e);
    let id = e.currentTarget.id;
    if (id) {
      this.setData({ currentId: id })
      fetch.fetchNewsList(config.apiList.newsListUrl, { categoryId: id }, this)
    }
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