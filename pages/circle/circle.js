
Page({
  data: {
    toView: 'fund',
    scrollLeft: 100,
    newsList: []
  },
  onLoad: function () {
    

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
  viewNewsDetail: function (e) {
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id=' + data.id,
    })
  }
})