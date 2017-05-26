// Created.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sub_ok: '../../resources/subok.png',
    check_mark: '../../resources/check-mark.png',
    complete: '../../resources/Complete.png',
    welcome_msg: '../../resources/welcome.png',
    mode: "aspectFit",
    latitude: 32.035225,
    longitude: 118.855317,
    markers: [{
      latitude: 32.035225,
      longitude: 118.855317,
      // title: 'NJUST',
      iconPath: '../../resources/location.png'
    }],
    submit_name:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      submit_name: options.name
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