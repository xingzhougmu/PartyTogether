//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    items: [
      { name: '2017.7.15', value: '2017.7.15 - 2017.7.16', checked: 'true' },
      { name: '2017.7.22', value: '2017.7.22 - 2017.7.23' },
    ],
    logo: '../../resources/logo.png',
    mode: "aspectFit",
    // pickerHidden: true,
    // chosen: '',
    will_attend: true,
    date_checked: true,

  },
  //事件处理函数
  /*
  pickerConfirm: function (e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel: function (e) {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow: function (e) {
    this.setData({
      pickerHidden: false
    })
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
*/
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：')
    console.log('form发生了submit事件，携带数据为：Name: ', e.detail.value.input_name)
    console.log('form发生了submit事件，携带数据为：Phone: ', e.detail.value.input_phone)
    console.log('form发生了submit事件，携带数据为：Attend: ', e.detail.value.input_attend)
    console.log('form发生了submit事件，携带数据为：Date: ', e.detail.value.input_date)
    var _this = this
    /*********************    
    wx.redirectTo({
      url:'create_photo'
    })
    **********************/

    wx.request({
      url: 'http://partytogetherbackend.azurewebsites.net/api/party',
      data:
      {
        Name: e.detail.value.input_name,
        Phone: e.detail.value.input_phone,
        Date: e.detail.value.input_date
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json; charset=UTF-8'
      },
      success: function (res) {
        var err = res.data.error
        if (err) {
          _this.setData({
            error: err
          })
          console.log("Error Encountered: ", err)
        }
        else {
          wx.redirectTo({
            url: '../created/created'
          })
        }
      },
      fail: function () {
        // fail
        wx.redirectTo({
          url: '../created/created'
        })
      },
      complete: function () {
        // complete
      }
    })
  },

  formReset: function () {
    console.log('form发生了reset事件')
    this.setData({
      date_checked: true,
      will_attend: true,
    })

    wx.redirectTo({
      url: '../created/created'
    })

  },

  radioChange: function () {
    console.log('radio 发生了change事件')

  }
})
