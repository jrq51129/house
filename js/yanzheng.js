var tel = document.getElementsByClassName('tel')[0];
var email = document.getElementsByClassName('email')[0];
var new_a = document.getElementsByClassName(' new_a')[0];
var new_c = document.getElementsByClassName('new_c')[0];
var agg = 0;
// console.log(tel,yzm, email, new_a, new_c);
// 填写正确手机号
tel.onblur = function () {
    var arr_ = /^1[3578]\d{9}$/;
    agg++;
    fu(agg);

}
// 获取验证码
var yzm = document.getElementsByClassName('yzm')[0];
var obj;
var timer;
var agg = 0;
yzm.onclick = function () {
    yzm.style.pointerEvents = 'none';
    var num_ = 60;
    obj = [];
    clearInterval(timer);
    timer = setInterval(function () {
        num_--;
        if (tel.value == '') {
            yzm.innerHTML = '发送验证码';
        } else if (num_ == 57) {
            for (var i = 0; i < 4; i++) {
                var num = Math.floor(Math.random() * 10);
                obj.push(num);
            }
            obj = obj.join('');
            alert('你的验证码为：' + obj);
        } else if (num_ == 0) {
            clearInterval(timer)
            num_ = 60;
            yzm.style.pointerEvents = "";
            yzm.innerHTML = '重新获取';

        } else if (num_ <= 60 && num_ >= 0) {

            yzm.innerHTML = num_ + '秒后重新发送';
        }

    }, 1000)


}
// 验证码
email.onblur = function () {
    if (email.value != obj) {
        email.innerHTML = '验证码错误';
    } else {
        agg++;
        fu(agg);
    }
}
// 设置新密码
new_a.onblur = function () {
    var arr = /^\w{6,10}$/;
    if (!arr.test(new_a.value)) {
        new_a.innerHTML = '请设置正确格式的密码:6-10位数';
    } else {
        agg++;
        fu(agg);
    }
}
// 确认密码
new_c.onblur = function () {
    if (new_a.value != new_c.value) {
        new_c.innerHTML = '密码不一致';
    } else {
        agg++;
        fu(agg);
    }
}
// 内容填充后提交
var tijiao = document.querySelectorAll('.tijiao')[0];
tijiao.style.disabled = 'disabled';
function fu(a) {
    console.log(tijiao);
    if (a >= 4) {
        tijiao.removeAttribute('disabled');

    }
}



