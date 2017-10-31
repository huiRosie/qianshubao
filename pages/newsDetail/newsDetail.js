// pages/newsDetail/newsDetail.js
var config = require('../../common/script/config');
var fetch = require('../../common/script/fetch');
var wxParse = require('../../wxParse/wxParse');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsDetail:[],
    newsList:[],
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var newsId = options.id;
    fetch.fetchNewsDetail(config.apiList.newsDetailUrl,{newsId: newsId},that)
    fetch.fetchLatestNewsList(config.apiList.latestNewsListUrl, {numPerPage:5},that)
    
  },
  viewNewsDetail: function (e) {
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id=' + data.id,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})