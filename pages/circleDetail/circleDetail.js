// pages/circleDetail/circleDetail.js
var config = require('../../common/script/config.js');
var fetch = require('../../common/script/fetch.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    circleDetail:[],
    circleImgList:[],
    circleCommentsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var activeId = options.id;
    fetch.fetchCircleDetail(config.apiList.circleDetailUrl, { activeId: activeId }, that);
    fetch.fetchCircleCommentsList(config.apiList.circleCommentsListUrl,{activeId:activeId,numPerPage:99999},that);
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