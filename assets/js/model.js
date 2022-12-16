function checkhttp() {
    var t = document.getElementById('keyword');
    if (true) {
        //document.getElementById('inputweb').src=t.value;
    } else {
        $.MsgBox.Alert("请输入http类的网址，例如:http://www.XXXX.com");
        t.value = "";
    }
}


let Message = function (message, time) {
    this.message = message;
    this.time = time;
};

//暴露给外部的方法
function toast(string, time) {
    time = time || 3;
    const message = new Message(string, time);
    message.showAndHide();
}

Message.prototype = {
    showAndHide() {
        //为Toast创建一个包裹和一个文字容器
        const messageWR = document.createElement('div')
        const messageEl = document.createElement('p');
        //比如你的WEB_APP 的根元素的id是main
        const main = document.getElementById('body');
        messageWR.appendChild(messageEl);
        main.appendChild(messageWR);
        messageEl.innerHTML = this.message;
        messageWR.className = 'tip-message-wrap'
        messageEl.className = 'tip-message';
        //在指定的时间后移除
        setTimeout(() => {
            messageWR.remove();
        }, this.time * 1000);
    },
};

function checkhttps() {
    var t = document.getElementById('keyword');
    if (true) {
        //document.getElementById('inputweb').src=t.value;
    } else {
        $.MsgBox.Alert("请输入https类的网址，例如:https://www.XXXX.com");
        t.value = "";
    }

}

function checkUrl() {
    var t = document.getElementById('keyword');
    if (true) {
        //document.getElementById('inputweb').src=t.value;
    } else {
        $.MsgBox.Alert("请输入https类的网址，例如:https://www.XXXX.com");
        t.value = "";
    }
}

function ishttpsUrl(str) {
    var v = new RegExp('^(?!mailto:)(?:(?:https)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
    return v.test(str);
}

function ishttpUrl(str) {
    var v = new RegExp('^(?!mailto:)(?:(?:http)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
    return v.test(str);
}

function isUrl(str) {
    var v = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
    return v.test(str);
}


document.getElementById('submitbutton').onclick = function () {

    var title = document.getElementById('basic-layout-tooltip').innerText;
    var keyword = document.getElementById('keyword').value;
    var input_province = document.getElementById('input_province').value;
    var input_city = document.getElementById('input_city').value;
    var input_timestart = document.getElementById('input_timestart').value;
    var input_timeend = document.getElementById('input_timeend').value;
    var input_age = document.getElementById('input_age').value;
    var input_sex = ($('input[name=input_sex]:checked').val());
    var input_shuliang = document.getElementById('input_shuliang').value;
    var zongji = document.getElementById('a-zongji').textContent;
    if (title.trim() == '') {
        $.MsgBox.Alert("致命错误1001，请联系客服");
        return;
    }
    if (keyword.trim() == '') {
        $.MsgBox.Alert("请完整填写关键信息");
        return;
    }
    if (input_province.trim() == '') {
        $.MsgBox.Alert("请选择省份");
        return;
    }
    if (input_city.trim() == '') {
        $.MsgBox.Alert("请选择城市");
        return;
    }
    if (input_timestart.trim() == '') {
        $.MsgBox.Alert("请选择起始时间（点击时间框右边日历可快速选择）");
        return;
    }
    if (input_timeend.trim() == '') {
        $.MsgBox.Alert("请选择起始时间（点击时间框右边日历可快速选择）");
        return;
    }

    //价格去后台再次计算
    $.ajax({
        async: false,
        url: "/user/ajax_create_order",
        data: JSON.stringify({
            title: title,
            keyword: keyword,
            input_province: input_province,
            input_city: input_city,
            input_timestart: input_timestart,
            input_timeend: input_timeend,
            input_age: input_age,
            input_sex: input_sex,
            input_shuliang: input_shuliang,
            zongji: zongji
        }),//
        type: "POST",
        contentType: 'application/json',
        success: function (data) {
            if (data.success) {
                $.MsgBox.Confirm("操作成功",
                    "模板已提交，模板提交后，将由人工进行数据提取操作，您可以在【信息中心】-【模板管理】查看提取进度",
                    function () {
                        top.location.replace("/layout");
                    });
            } else {
                $.MsgBox.Alert(data.message);
            }

        },
        error: function (data) {
            $.MsgBox.Alert("未知错误");
            return false;
        }
    });

}

$.MsgBox = {
    Alert: function (msg, title, moveable) {
        if (title == undefined) {
            title = "消息提示";
        }
        GenerateHtml("alert", msg, title);
        btnOk();
        btnNo();
    },
    Confirm: function (msg, title, callback) {
        GenerateHtml("confirm", title, msg);
        btnOk(callback);
        btnNo();
    },

}

//生成Html
var GenerateHtml = function (type, msg, title) {

    var _html = "";

    _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
    _html += '<a id="mb_ico">x</a><div id="mb_msg">' + msg + '</div><div id="mb_btnbox">';

    if (type == "alert") {
        _html += '<input id="mb_btn_ok" type="button" value="确定" />';
    }
    if (type == "confirm") {
        _html += '<input id="mb_btn_ok" type="button" value="确定" />';
        _html += '<input id="mb_btn_no" type="button" value="取消" />';
    }

    _html += '</div></div>';

    //必须先将_html添加到body，再设置Css样式
    $("body").append(_html);
    GenerateCss();
}

//生成Css
var GenerateCss = function () {

    $("#mb_box").css({
        width: '100%', height: '100%', zIndex: '99999', position: 'fixed',
        filter: 'Alpha(opacity=60)', backgroundColor: 'black', top: '0', left: '0', opacity: '0.6'
    });

    $("#mb_con").css({
        zIndex: '999999', width: '80%', position: 'fixed',
        backgroundColor: 'White', borderRadius: '15px'
    });

    $("#mb_tit").css({
        display: 'block', fontSize: '20px', color: '#444', padding: '10px 15px',
        backgroundColor: '#DDD', borderRadius: '15px 15px 0 0',
        borderBottom: '3px solid #009BFE', fontWeight: 'bold'
    });

    $("#mb_msg").css({
        padding: '20px', lineHeight: '28px',
        borderBottom: '1px dashed #DDD', fontSize: '25px'
    });

    $("#mb_ico").css({
        display: 'block', position: 'absolute', right: '10px', top: '9px',
        border: '1px solid Gray', width: '30px', height: '28px', textAlign: 'center',
        lineHeight: '16px', cursor: 'pointer', borderRadius: '12px', fontFamily: '微软雅黑'
    });

    $("#mb_btnbox").css({margin: '15px 0 10px 0', textAlign: 'center'});
    $("#mb_btn_ok,#mb_btn_no").css({width: '108px', height: '45px', color: 'white', border: 'none'});
    $("#mb_btn_ok").css({backgroundColor: '#168bbb'});
    $("#mb_btn_no").css({backgroundColor: 'gray', marginLeft: '20px'});


    //右上角关闭按钮hover样式
    $("#mb_ico").hover(function () {
        $(this).css({backgroundColor: 'Red', color: 'White'});
    }, function () {
        $(this).css({backgroundColor: '#DDD', color: 'black'});
    });

    var _widht = document.documentElement.clientWidth;  //屏幕宽
    var _height = document.documentElement.clientHeight; //屏幕高

    var boxWidth = $("#mb_con").width();
    var boxHeight = $("#mb_con").height();

    //让提示框居中
    $("#mb_con").css({top: (_height - boxHeight) / 2 + "px", left: (_widht - boxWidth) / 2 + "px"});
}


//确定按钮事件
var btnOk = function (callback) {
    $("#mb_btn_ok").click(function () {
        $("#mb_box,#mb_con").remove();
        if (typeof (callback) == 'function') {
            callback();
        }
    });
}

//取消按钮事件
var btnNo = function () {
    $("#mb_btn_no,#mb_ico").click(function () {
        $("#mb_box,#mb_con").remove();
    });
}
