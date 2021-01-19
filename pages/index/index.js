// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  onLoad() {
    
  },
  freeTell: function () {
    wx.makePhoneCall({
      phoneNumber: '13812345678',
    })

  }
})
