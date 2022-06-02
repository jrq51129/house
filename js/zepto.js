// 导航列表
var list = document.querySelector('.list');
// 找到要点击的每个li
var listLi = document.querySelectorAll('.list li');

var li_a = document.querySelectorAll('.list a');

// 显示隐藏的每个li
var someListLi = document.querySelectorAll('.someList>li');

var someList = document.getElementsByClassName('someList')[0];
// 蒙版
var hide_ = document.querySelector('.hide');


for (var i = 0; i < listLi.length; i++) {
    listLi[i].setAttribute('index', i);

    listLi[i].onclick = function () {
        list.style.position = 'fixed';
        list.style.top = 0;
        list.style.left = 0;
        hide_.style.display = 'block';

        var index = this.getAttribute('index');
        console.log(index);

        for (var j = 0; j < li_a.length; j++) {
            li_a[j].className = '';
            li_a[index].className = 'active';
        }

        for (var k = 0; k < someListLi.length; k++) {
            someListLi[k].style.display = 'none';
            someListLi[index].style.display = 'block';
            someList.style.display = 'block';
        }
    }
    hide_.onclick = function () {
        list.style.position = '';
        hide_.style.display = 'none';
        console.log(someList);
        someList.style.display = 'none';
    }
}
