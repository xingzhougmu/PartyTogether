//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    items: [
      { name: 'OPT1', value: '2017.7.15 - 2017.7.16', checked: 'true'},
      { name: 'OPT2', value: '2017.7.22 - 2017.7.23' },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  radioChange:function(){
    console.log('radio 发生了change事件')
  }
})
