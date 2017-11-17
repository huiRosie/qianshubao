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
      // console.log(res.data.data);
      if(res.data.data.length==0){
        that.setData({
          visiable:true
        });
        wx.stopPullDownRefresh();
      }else{
        that.setData({
          newsList:that.data.newsList.concat(res.data.data),
          currentPage: ++that.data.currentPage
        })
      }
      
      
    },
    fail: function () {
      console.log(res.data.data)
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

// 手机号登陆，查看圈子
function fetchLogin(url,datas,that){
  wx.request({
    url: url,
    data: datas,
    method: 'POST',
    success: function (res) {
      console.log(res.data);
      if (res.data.data.length == 0) {

      } else {
        that.setData({
         
        })
      }
    },
    fail: function () {
      console.log(res)
    }
  })
}

// 获取圈子列表
function fetchCircleList(url, datas, that) {
  wx.request({
    url: url,
    data: datas,
    method: 'GET',
    success: function (res) {
      // console.log(res.data.data);
      if (res.data.data.length == 0) {
        that.setData({
          visiable: true
        });
        wx.stopPullDownRefresh();
      } else {
        that.setData({
          circleList: that.data.circleList.concat(res.data.data),
          currentPage: ++that.data.currentPage
        });
        var circleImageList=[];
        for (var i = 0; i < that.data.circleList.length;i++ ){
          if (that.data.circleList[i].appActive.activeImage != '' && that.data.circleList[i].appActive.activeImage != null){
            var circleImageList = that.data.circleList[i].appActive.activeImage.split(',');
            that.data.circleList[i].appActive.circleImageList = circleImageList;
          }
        }
        console.log(that.data.circleList);
      }

    },
    fail: function () {
      console.log(res.data.data)
      // message.show.call(that, {
      //   content: '网络开小差了',
      //   icon: 'offline',
      //   duration: 3000
      // })
    }
  })
}

// 获取圈子详情
function fetchCircleDetail(url, datas, that) {
  // message.hide.call(that)
  wx.request({
    url: url,
    data: datas,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      var circleImgList = [];
      that.setData({
        circleDetail: res.data.data,
        // content: wxParse.wxParse('content', 'html', res.data.data.curr.content, that)
      })
      if (res.data.data.activeImage != '' && res.data.data.activeImage != null) {
        circleImgList = res.data.data.activeImage.split(',');
        that.data.circleDetail.circleImgList = circleImgList;
      }
      console.log(that.data.circleDetail);
      console.log(res.data.data)
      // wx.setNavigationBarTitle({
      //   title: res.data.data.title
      // })
    },
    fail: function () {
      that.setData({
        newsDetail: '网络开小差了',
      })
    }
  })
}


// 获取圈子评论列表
function fetchCircleCommentsList(url, datas, that) {
  wx.request({
    url: url,
    data: datas,
    method: 'GET',
    header: {
      "Content-Type": "application/json,application/json"
    },
    success: function (res) {
      console.log(res.data.data)
      that.setData({
        circleCommentsList: res.data.data,
      })
    },
    fail: function () {
      that.setData({
        newsDetail: '网络开小差了',
      })
    }
  })
}

// 圈子点赞
function fetchCircleVote(url, datas, that) {
  wx.request({
    url: url,
    data: datas,
    method: 'POST',
    success: function (res) {
      console.log(res);
    },
    fail: function () {
      console.log(res);
    }
  })
}


module.exports = {
  fetchNewsClassList: fetchNewsClassList,
  fetchNewsList: fetchNewsList,
  fetchNewsDetail: fetchNewsDetail,
  fetchLatestNewsList: fetchLatestNewsList,
  fetchCircleList: fetchCircleList,
  fetchCircleDetail: fetchCircleDetail,
  fetchCircleCommentsList: fetchCircleCommentsList,
  fetchCircleVote: fetchCircleVote,
  fetchLogin: fetchLogin
}