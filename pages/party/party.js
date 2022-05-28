// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLogin: false,
        dataList: [
          "lzl","ldh","cl"
        ],
        imageList: ["/static/index/index.png", "/static/index/index.png"]
    },
    changeLogin: function(){
        console.log("changeLogin")
        this.setData({isLogin: ! this.isLogin})
    },

    uploadImage: function(){
      var that = this;
      wx.chooseImage({
        count: 5,
        sizeType: ['original', 'compressed'],
        success:function(res){ 
          that.setData({
            imageList: res.tempFilePaths
          })
        }
      })
    },

    /**
     * 点击跳转报名
     */
    clickMeToSignUp:function(){
        console.log("点击跳转到报名页")
        wx.navigateTo({
            url: '/pages/signup/signup'
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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