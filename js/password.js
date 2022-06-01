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


