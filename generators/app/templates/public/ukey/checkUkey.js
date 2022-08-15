

$(document).ready(function() {
    var config = {
        license : "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",
        exportKeyAble : false,
        disableExeUrl : true
    };
    try {
        TCA.config(config);
        return;
    } catch (e) {
        if (e instanceof TCACErr) {
            // alert(e.toStr());
        } else {
            // alert("初始化失败 !!!");
        }
    }

    setInterval(initCaCertList, 5000);
});


function initCaCertList() {
    ukeyLogin();
}

function ukeyLogin(){
    try {
        var certs = CertStore.listAllCerts();
        // 如果检查到证书不存在，跳转到OA系统
        if (certs.size() == 0) {
            // console.log("检查到证书不存在");
            var msg = checkLogin();
            if(msg=="2"){//ukey已登陆
                window.location.href = "/platform/login/logout";
            }
            return;
        }else{
            // 此处可能会有性能问题;
            for (var i = 0; i<certs.size(); i++) {
                var cert = certs.get(i);
                var subject =cert.subject();
                var subStr = subject.split(",");
                var cert_account = subStr[2].substring(3);
                console.log("cert_account:"+cert_account);
                var account = subject.split("CN=")[1].split(",")[0];
                // console.log("account:"+account);
                dologing(account);
            }
        }
    } catch (e) {
        if (e instanceof TCACErr) {
            // alert(e.toStr());
        } else {
            // alert("获取证书列表失败!!!");
        }
    }
}

function dologing(account){
    $("#ukeyusername").val(account);
    $("#ukeyloginForm").ajaxSubmit({
        dataType: 'json',
        beforeSubmit: function (arr, form, options) {},
        success: function (data, statusText, xhr, form) {
            if (data.code == 0) {
                window.location.href = "/platform/home";
            }else if (data.code == 4) {
                alert("用户名错误");
            }
        }
    });
}

function checkLogin(){
    var msg = "";
    $.ajax({
        url : "/platform/login/checLogin",
        type : "post",
        async : false,
        cache:false,//清除浏览器缓存
        dataType: 'json',
        success: function(data){
            var code = data.code;
            if(code==0){
                msg = "0";
            }else if(code==1){
                msg =  "1";
            }else if(code==2){
                msg =  "2";
            }
        }
    });
    return msg;
}



 
