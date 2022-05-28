// pages/goods/goods.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //固定写法// 查询操作
        // var that = this;
        // wx.cloud.database().collection('goods').get(
        //     {
        //         success(res){
        //             console.log("success get", res)
        //             that.setData({
        //                 list: res.data
        //             })
        //         },
        //         fail(err){
        //             console.log("fail get",err)
        //         }
        //     }
        // ) 
        wx.cloud.database().collection('goods').get().then(res => {
            console.log("返回成功", res)
            this.setData({
                list: res.data
            })
        })
    },
    addGood: function(){
        wx.cloud.database().collection('goods').add({
            data: {
                name:'太白',
                price: 666
            }
        }).then(res=> {
            console.log("添加成功", res)
        }).catch(err => {
            console.log("添加失败", err)
        })
    },
    updateGood() {
        wx.cloud.database().collection('goods').doc('058dfefe628a481c0500d08d67cca1a5').update({
            data: {
                name:'太白',
                price: 444
            }
        }).then(res=> {
            console.log("修改成功", res)
        }).catch(err => {
            console.log("修改失败", err)
        })
    },
    removeGood(){
        wx.cloud.database().collection('goods').doc('058dfefe628a481c0500d08d67cca1a5').remove().then(res=> {
            console.log("删除成功", res)
        }).catch(err => {
            console.log("删除失败", err)
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