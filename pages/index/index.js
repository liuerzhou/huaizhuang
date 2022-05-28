// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      userInfo: {},
      hasUserInfo: false,
      canIUseGetUserProfile: false,
      localPath:"请选择位置",
    },
    getLocalPath: function(){
      var that = this;
      wx.chooseLocation({
         success: function(res){
           that.setData({localPath: res.address}),
           console.log(that.data.localPath)
         }    
      })  
    },
    getLocalPath: function(){
      var that = this;
      wx.chooseAddress({
        success: (result) => {
          console.l
        },
      })
      wx.chooseLocation({
         success: function(res){
           that.setData({localPath: res.address}),
           console.log(that.data.localPath)
         }    
      })  
    },
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      if (wx.getUserProfile) {
        console.log("onload")
        this.setData({
          canIUseGetUserProfile: true
        })
      }
    },
    getUserProfile() {
      console.log("getUserprofile")
      // 推荐使用 wx.getUserProfile 获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          console.log(res.userInfo)
          console.log(this.data.userInfo)
        }
      })   
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})