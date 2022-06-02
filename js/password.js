window.onload = function () {


    var boxa = document.getElementById('boxa');
    var boxb = document.getElementById('boxb');
    var login_a = document.querySelectorAll('.login_a')[0];
    var login_b = document.querySelectorAll('.login_b')[0];
    // console.log(login_a, login_b);

    login_a.ontouchstart = function () {
        boxb.style.display = "block";
        boxa.style.display = "none";
    }
    login_b.ontouchstart = function () {
        boxb.style.display = "none";
        boxa.style.display = "block";
    }
}



var tel = document.getElementsByClassName('tel')[0];
var new_a = document.getElementsByClassName(' new_a')[0];
var agg = 0;
// console.log(tel,yzm, email, new_a, new_c);
// 填写正确手机号
tel.onblur = function () {
    var arr_ = /^1[3578]\d{9}$/;
    agg++;
    fu(agg);
}


new_a.onblur = function () {
    var arr = /^\w{6,10}$/;
    if (!arr.test(new_a.value)) {
        new_a.innerHTML = '请设置正确格式的密码:6-10位数';
    } else {
        agg++;
        fu(agg);
    }
}

var tijiao = document.querySelectorAll('.tijiao')[0];
tijiao.style.disabled = 'disabled';
function fu(a) {
    console.log(tijiao);
    if (a >= 2) {
        tijiao.removeAttribute('disabled');
    }
}

