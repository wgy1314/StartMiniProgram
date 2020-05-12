Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "跑跑冠哥",
    age: "27",
    students: [{
        id: 1,
        name: "ff",
        age: 122
      },
      {
        id: 2,
        name: "df",
        age: 125
      },
      {
        id: 3,
        name: "dd",
        age: 121
      },
      {
        id: 4,
        name: "gfggdf",
        age: 12
      },
      {
        id: 5,
        name: "ddd",
        age: 122
      }
    ],
    counter: 0
  },
  handleBtnClick() {
    this.setData({
      // 无法用 i++
      counter: this.data.counter+1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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