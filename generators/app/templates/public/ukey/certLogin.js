function initUkey() {
	var config = {
        "license" : "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",
        exportKeyAble : false,
        disableExeUrl : true
	};
	try{
		TCA.config(config);
		initCertList();
		checkUkeyIs();
		//检查ＫＥＹ是否存在
		//setInterval("checkUkeyIs()",5000);
		return;
	}catch(e){
		 if (e instanceof TCACErr) {
             var sure =confirm("没有检测到证书助手，请下载并安装证书助手！");
             if (sure == true){
                 window.location.href="/static/admin/ukey/TopEsa.zip";
             }
		 } else {
			//alert("未知错误！");
             $("#errorLogin-ca").html("未知错误！");
             $("#errorLogin-ca").fadeIn();
		 }
	}
}

function LoginCA(){
	var loginType = $("#loginType").val();
	var checkRes = cert_Check();
    if(checkRes == true){
        $("#loginFormCA").ajaxSubmit({
            dataType: 'json',
            beforeSubmit: function (arr, form, options) {},
            success: function (data, statusText, xhr, form) {
                if (data.code == 0) {
                    window.location.href = "/platform/home";
                }else if (data.code == 4) {
                    //alert("系统中找不到此用户，请联系系统管理员");
                    $("#errorLogin-ca").html("系统中找不到此用户，请联系系统管理员");
                    $("#errorLogin-ca").fadeIn();
                }else{
                   // alert(data.msg);
                    $("#errorLogin-ca").html(data.msg);
                    $("#errorLogin-ca").fadeIn();
				}
            }
        });
	}
}


function cert_Check() {
	try{
		var certs = CertStore.listAllCerts(); // 此处可能会有性能问题
		var selectedCertSN = $("#username-ca").val();
		var cert = certs.bySerialnumber(selectedCertSN).get(0);
		//获取签名数据
		var tosign = "<%% =System.currentTimeMillis() %>";
		var signedData = cert.signMessage(tosign);
		$("#signedData").val(signedData);
		if (signedData.length <= 0) {
			//alert("证书登录签名失败！");
            $("#errorLogin-ca").html("证书登录签名失败");
            $("#errorLogin-ca").fadeIn();
			return false;
		}
		return true;
	}catch(e){
		//alert("证书登录签名失败！");
        $("#errorLogin-ca").html("证书登录签名失败");
        $("#errorLogin-ca").fadeIn();
		return false;
	}
}


function initCertList() {
	try {
		var certs = CertStore.listAllCerts();
		$("#username-ca").empty();
		var count = certs.size();
		if (count <= 0) {
			$("#username-ca").append("<option value='0'>没有找到证书");
			return;
		}
		for ( var i = 0; i < count; i++) {
			var cert = certs.get(i);
			var cn = getCNFromSubject(cert);
			addOption(cert.serialNumber(), cn);
		}
	} catch (e) {
		if (e instanceof TCACErr) {
			//alert(e.toStr());
            $("#errorLogin-ca").html(e.toStr());
            $("#errorLogin-ca").fadeIn();
		} else {
			//alert("获取证书列表失败!!!");
            $("#errorLogin-ca").html("获取证书列表失败!!!");
            $("#errorLogin-ca").fadeIn();
		}
	}
}

function getSelectedCert() {
	try {
		var certs = CertStore.listAllCerts(); // 此处可能会有性能问题
		var selectedCertSN = $("#username-ca").val();
		//alert(selectedCertSN);
		var r = certs.bySerialnumber(selectedCertSN);
		return r.get(0);
	} catch (e) {
		if (e instanceof TCACErr) {
			//alert(e.toStr());
            $("#errorLogin-ca").html(e.toStr());
            $("#errorLogin-ca").fadeIn();
		} else {
			//alert("获取证书失败！");
            $("#errorLogin-ca").html("获取证书失败!");
            $("#errorLogin-ca").fadeIn();
		}
	}
}

function getCNFromSubject(cert) {
	try {
		var t = cert.subject().match(/(S(?!N)|L|O(?!U)|OU|SN|CN|E)=([^=]+)(?=, |$)/g);
		for ( var i = 0; i < t.length; i++) {
			if (t[i].indexOf("CN=") === 0)
				return t[i].substr(3, t[i].length);
		}
		return null;
	} catch (e) {
		if (e instanceof TCACErr) {
			//alert(e.toStr());
            $("#errorLogin-ca").html(e.toStr());
            $("#errorLogin-ca").fadeIn();
		} else {
			//alert("获取证书CN失败!!!");
            $("#errorLogin-ca").html("获取证书CN失败!!!");
            $("#errorLogin-ca").fadeIn();
		}
	}
}

function addOption(oValue, oName) {
	var sid = document.getElementById("username-ca");
	var myOption = document.createElement("option");
	sid.appendChild(myOption);
	myOption.text = oName;
	if (oName){
		$('#ca-hidden-name').val(oName);
	}
	myOption.value = oValue;
}


//检查key是否存在
function checkUkeyIs(){
	var certs = CertStore.listAllCerts(); // 此处可能会有性能问题
	//如果检查到证书不存在，跳转到OA系统
	//alert("====login======:"+certs.size());
	if(certs.size() != 0){
		initCertList();
	}
}

$(document).ready(function() {
    initUkey();
    $('#btn-ca-login').bind('click', LoginCA);
    $('#username-ca').change(function () {
        var username = $(this).find("option:selected").text();
        $('#ca-hidden-name').val(username);
    });
});
