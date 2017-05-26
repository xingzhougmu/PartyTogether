//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    items: [
      { name: '2017.7.08', value: '2017.7.08 - 2017.7.09', checked: 'true' },
      { name: '2017.7.15', value: '2017.7.15 - 2017.7.16' },
    ],
    logo: '../../resources/logo.png',
    mode: "aspectFit",
    // pickerHidden: true,
    // chosen: '',
    will_attend: true,
    date_checked: true,
    input_name: '',
    errorMessage : '',
    animationData: {}
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
    /*
    console.log('form发生了submit事件，携带数据为：')
    console.log('form发生了submit事件，携带数据为：Name: ', e.detail.value.input_name)
    console.log('form发生了submit事件，携带数据为：Phone: ', e.detail.value.input_phone)
    console.log('form发生了submit事件，携带数据为：Attend: ', e.detail.value.input_attend)
    console.log('form发生了submit事件，携带数据为：Date: ', e.detail.value.input_date)
    */
    var _this = this
    /*********************    
    wx.redirectTo({
      url:'create_photo'
    })
    **********************/
    if (e.detail.value.input_name == "" || e.detail.value.input_phone== "") {
      this.showErrorMessage("请填写姓名和电话！");
      return;
    }
    
    wx.showToast({
      title: '正在提交...',
      icon: 'loading',
      duration: 10000
    })
    wx.request({
      url: 'https://partytogetherbackend.azurewebsites.net/api/party',
      data:
      {
        Name: e.detail.value.input_name,
        Phone: e.detail.value.input_phone,
        Date: e.detail.value.input_date,
        Will_Attend: e.detail.value.input_attend,
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json; charset=UTF-8'
      },
      success: function (res) {
        var statusCode = res.statusCode
        var resMsg = res.data
        if (statusCode == 200 && resMsg == "created") {
          wx.redirectTo({
            url: '../created/created?name=' + e.detail.value.input_name,
          })
        }
        else if (resMsg == "failed") {
          this.showErrorMessage("保存失败，请重试！");
        }
        else {
          // undefined error happened!
        }
      },
      fail: function () {
        this.showErrorMessage("保存失败，请重试！");
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })
  },

  formReset: function (e) {
    // console.log('form发生了reset事件')
    // console.log('form发生了submit事件，携带数据为：Name: ', e.detail.value.input_name)
    this.setData({
      date_checked: true,
      will_attend: true,
    })

    wx.redirectTo({
      url: '../failed/failed',
    })
  },

  radioChange: function () {
    console.log('radio 发生了change事件')

  },

  showErrorMessage : function(message) {
    this.setData({
      errorMessage : message
    });
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.translateY(30).step()
    this.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.translateY(-30).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 3000)
  }
})
