const app = getApp()

Page({
  data: {
    
  },
  onLoad() {
    
  },
  freeTell: function () {
    wx.makePhoneCall({
      phoneNumber: '13812345678',
      fail: function(){

      }
    })

  }
})
