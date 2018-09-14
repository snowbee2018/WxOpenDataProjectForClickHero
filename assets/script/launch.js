// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        content : cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        const self = this;
        wx.onMessage(self.onMessage.bind(self));

        wx.getFriendCloudStorage({
            keyList: ["test_cloud_storage"],
            success: function (res) {
                console.log(res);
                let friends = res.data;
                console.log("getFriendCloudStorage success");
                // do something
                // for (let i = 0; i < 5; i++) {
                //     let friend = res.data[i];
                //     if (!_self.preSettingData(friend, ' stop getting friends\' infos')) {
                //         return;
                //     }
                // }
            },
            fail: function (res) {
                console.log(res);
            }
        });

        wx.getUserCloudStorage({
            keyList: ["test_cloud_storage"],
            success: function (res) {
                console.log("getUserCloudStorage success");
                console.log(res);
                let friends = res.data;
                // do something
                // for (let i = 0; i < 5; i++) {
                //     let friend = res.data[i];
                //     if (!_self.preSettingData(friend, ' stop getting friends\' infos')) {
                //         return;
                //     }
                // }
            },
            fail: function (res) {
                console.log(res);
            }
        });
    },

    onMessage(data) {
        const self = this;
        console.log("WxOpenData onMessage");
        console.log(data);
        // do some thing
        // if (data.nickName && data.avatarUrl) {
        //     _self.showUserData(data.nickName, data.avatarUrl);
        //     // fill the content by the blank targets.
        //     (function () {
        //         for (let i = 0; i < 5; i++) {
        //             let node = cc.instantiate(_self.prefab);
        //             node.parent = _self.content;
        //         }
        //     })();
        // };
        if (data.msgName == "HelloMsg") {
            self.content.string = "收到主域发来的消息：" + data.msgContent;
        }
        
    },

    // update (dt) {},
});
