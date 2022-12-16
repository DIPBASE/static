function searchApp() {
    document.getElementsByClassName("appSelector")[0].innerHTML = "<div class=\"loadingPic\" id=\"appLoading\"></div>";
    var app = document.getElementById('appsearchkey').value;
    $.ajax({
        async: true,
        url: "/order/app_search",
        contentType: 'application/json',
        data: JSON.stringify({
            name: app,
        }),//
        type: "POST",
        success: function (data) {
            var appSelector = document.getElementsByClassName("appSelector")[0];
            appSelector.style.height = "350px";
            var str = "";
            for (var i = 0; i < data.length; i++) {
                str = str +
                    "<div class=\"appSelectorApp\" onclick='appSelected(\"" + data[i]['name'] + ":" + data[i]['pkg'] + "\")'>" +
                    " <img class=\"appSelectorIcon\" src=\"" + data[i]['iconUrl'] + "\" style=';background-size: contain;'>" +
                    "\n" +
                    "<div class=\"appSelectorName\">\n" +
                    data[i]['name'] +
                    "</div>\n" +
                    "<div class=\"appSelectorPkg\">\n" +
                    "<p class=\"appSelectorPkgName\">" + data[i]['pkg'] + "</p>\n" +
                    "</div>" +
                    "</div>";
            }
            appSelector.innerHTML = str;
        },
        error: function () {
            //$.MsgBox.Alert('app搜索器出错，请联系客服');
        }
    });
}

document.getElementById('appsearchkey').onkeydown = function (e) {
    if (e.keyCode == 13) {
        searchApp();
        return 0;
    }
};

function appSelected(str) {
    document.getElementById('keyword').value += str + '\n';
    toast('已添加目标APP', 0.8);
}

//$pattern='/ |[\x{0020}]|\(|\-|\[|\_|\——|\'|\/\*|\*|[\x{ff08}]/';