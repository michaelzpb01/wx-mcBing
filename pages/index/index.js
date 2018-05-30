//index.js
//获取应用实例
var app = getApp();
Page({
    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 500,
        circular: false,
        indicatorActiveColor: '#ff6600',
        indicatorColor: 'rgba(255, 255, 0, .3)',
        areaIndex: 0,
        area: ['北京', '广州', '上海', '深圳'],
        question: {
            questionName: "你认为心口不一的人是一个有缺点的人吗？",
            option: [
                {
                    to: 4,
                    num: 1,
                    text: "是"
                },
                {
                    to: 2,
                    num: 2,
                    text: "否"
                },
                {
                    to: 3,
                    num: 3,
                    text: "不清楚"
                }
            ]
        },
        questionLis: [
            {//1
                questionName: "你认为心口不一的人是一个有缺点的人吗？",
                option: [
                    {
                        to: 4,
                        num: 1,
                        text: "是"
                    },
                    {
                        to: 2,
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 3,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            },
            {//2
                questionName: "你是一个谨慎的人吗？",
                option: [
                    {
                        to: 3,
                        num: 1,
                        text: "是"
                    },
                    {
                        to: 5,
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 4,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
            ,
            {//3
                questionName: "你会经常刻意回避一个问题吗？",
                option: [
                    {
                        to: 4,
                        num: 1,
                        text: "是"
                    },
                    {
                        to: 6,
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 5,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
            ,
            {//4
                questionName: "你经常会在很多选择中犹豫不决吗？",
                option: [
                    {
                        to: 5,
                        num: 1,
                        text: "是"
                    },
                    {
                        to: 6,
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 7,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
            ,
            {//5
                questionName: "你会明明很在乎一个人却不承认吗？",
                option: [
                    {
                        to: 8,
                        num: 1,
                        text: "是"
                    },
                    {
                        to: 6,
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 7,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
            ,
            {//6
                questionName: "你的想法很灵活吗？",
                option: [
                    {
                        to: 7,
                        num: 1,
                        text: "是"
                    },
                    {
                        to: 9,
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 8,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
            ,
            {//7
                questionName: "在陌生人面前你也不会掩饰吗？",
                option: [
                    {
                        to: 8,
                        num: 1,
                        text: "是"
                    },
                    {
                        to: 10,
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 9,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
            ,
            {//8
                questionName: "你总是不愿意将自己的真实想法透露给别人吗？",
                option: [
                    {
                        to: "A",
                        num: 1,
                        text: "是"
                    },
                    {
                        to: 9,
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 10,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
            ,
            {//9
                questionName: "你我还是不顾后果有话直说吗？",
                option: [
                    {
                        to: "D",
                        num: 1,
                        text: "是"
                    },
                    {
                        to: "C",
                        num: 2,
                        text: "否"
                    },
                    {
                        to: 10,
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
            ,
            {//10
                questionName: "你总是临时改变主意吗？",
                option: [
                    {
                        to: "B",
                        num: 1,
                        text: "是"
                    },
                    {
                        to: "D",
                        num: 2,
                        text: "否"
                    },
                    {
                        to: "C",
                        num: 3,
                        text: "不清楚"
                    }
                ]
            }
        ],
        answer:{
            "A":"你总是心口不一!!!!你是一个非常谨慎的人，你我还是不愿意将自己的真实想法透露给别人，即使那个人是你的父母或者最好的朋友，所以别人与你相处变得非常困难，他们总是觉得你在逃避一些问题，而你不愿说的那些事开始让他们疏远你，他们也不会再对你完全敞开心扉，因为无论是友情还是爱情都是平等的，他们会觉得你不信任他们，他们也会逐渐不信任你。",
            "B": "你经常心口不一!!!!你是一个头脑非常灵活的人，你经常会有很多想法，同一时间内，你可能想要做很多事，你总是在这些事中犹豫不决，所以别人会觉得你变数太大，很多小事根本不用考虑地非常仔细，可是你偏偏想要将这件事规划好，所以别人也会觉得不耐烦，其实很多小方面的问题别人不会太在乎甚至会包容你，不过一些很重要的决定你也这样对待，他们会逐渐厌倦。",
            "C": "你偶尔心口不一!!!!你在一般情况下都会有话直说，因为你知道友情建立在信任的基础上，如果你不能向别人敞开心扉，那么别人又怎么会向你敞开心扉？所以你将自己的人际关系处理得非常好，别人也喜欢和你做朋友。不过你也会又心口不一的时候，当你遇见真爱时，你甚还会耍一些小心机，你明明很希望对方关注到你，可是说出口的全是不在乎的话，所以在这方面你还是比较幼稚的。",
            "D": "你从不心口不一!!!!你是一个有话直说，非常耿直的人，你周围的人都很欣赏你，因为你总是很大胆，有什么想法都会直接说出来，也从来不怕别人嘲笑你，他们觉得跟你在一起很轻松，因为他们不用去费心思猜测你的想法，在你面前他们也会变得很坦诚。可是在陌生人面前你还是要委婉一点，因为别人习惯了谨慎，他们会觉得你一根筋，所以即使你是一个心思单纯的人也要小心自己说话的方式。",
        }
    },
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    },
    bindPickerChange: function (e) {
        this.setData({
            areaIndex: e.detail.value
        })
    },
    onload: function (e){
      console.log(1)
      
    },
    bindGetUserInfo: function (e) {
      console.log(e.detail.userInfo)
    },
    optionSel:function(e){
        var _this = this;
        const minuTo = e.currentTarget.dataset.to;
        // console.log(minuTo);
        // console.log(this.data)
        if (typeof minuTo == "number") {
            const toNum = e.currentTarget.dataset.to - 1;
            this.setData({ question: this.data.questionLis[toNum] });
        }else{
            wx.showModal({
                content: _this.data.answer[minuTo],
                success: function (res) {
                    _this.setData({ question: _this.data.questionLis[0] });
                }
            })
        }

    }
})
console.log(app.data)
