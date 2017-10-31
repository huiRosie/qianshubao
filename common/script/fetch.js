var config = require('./config.js');
var wxParse = require('../../wxParse/wxParse');
// 获取产品分类列表

// 获取新闻资讯分类列表
function fetchNewsClassList(url,that) {
  wx.request({
    url: url,
    method: 'GET',
    success: function (res) {
      that.setData({
        newsClassList: res.data.data
      })
      // console.log(that);
    },
    fail: function () {
      // message.show.call(that, {
      //   content: '网络开小差了',
      //   icon: 'offline',
      //   duration: 3000
      // })
    }
  })
}

// 获取新闻资讯列表
function fetchNewsList(url, datas,that) {
  wx.request({
    url: url,
    data: datas,
    method: 'GET',
    success: function (res) {
      that.setData({
        newsList: res.data.data
      })
      // console.log(that);
    },
    fail: function () {
      // message.show.call(that, {
      //   content: '网络开小差了',
      //   icon: 'offline',
      //   duration: 3000
      // })
    }
  })
}

// 获取资讯详情
function fetchNewsDetail(url,datas,that) {
  // message.hide.call(that)
  wx.request({
    url: url,
    data:datas,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      that.setData({
        newsDetail: res.data.data.curr,
        content: wxParse.wxParse('content','html',res.data.data.curr.content,that)
      })
      // console.log(res.data.data)
      // wx.setNavigationBarTitle({
      //   title: res.data.data.title
      // })
      // wx.stopPullDownRefresh()
      // typeof cb == 'function' && cb(res.data)
    },
    fail: function () {
      that.setData({
        newsDetail: '网络开小差了',
      })
      // message.show.call(that, {
      //   content: '网络开小差了',
      //   icon: 'offline',
      //   duration: 3000
      // })
    }
  })
}

// 获取最新新闻资讯列表
function fetchLatestNewsList(url, datas, that) {
  wx.request({
    url: url,
    data: datas,
    method: 'GET',
    success: function (res){
      that.setData({
        newsList: res.data.data
      })
      // console.log(that);
    },
    fail: function () {
      // message.show.call(that, {
      //   content: '网络开小差了',
      //   icon: 'offline',
      //   duration: 3000
      // })
    }
  })
}

module.exports = {
  fetchNewsClassList: fetchNewsClassList,
  fetchNewsList: fetchNewsList,
  fetchNewsDetail: fetchNewsDetail,
  fetchLatestNewsList: fetchLatestNewsList
}