window.onload = function() {
    var arrUrl = ['images/banner1.jpg', 'images/banner2.jpg', 'images/banner3.jpg'];
    var num = 0;
    var Oimg = document.getElementById('img');
    var Oul = document.getElementById('square');
    var Oli = Oul.getElementsByTagName('li');
    var Oprev = document.getElementById('prev');
    var Onext = document.getElementById('next');

    clearInterval(timer);

    function turnactive(nu) {
        for (var i = 0; i < arrUrl.length; i++) {
            Oli[i].className = '';
        }
        Oli[nu].className = 'active';
    }
    //左焦点
    Oprev.onclick = function() {
        num--;
        if (num == -1) {
            num = arrUrl.length - 1;
        }
        Oimg.src = arrUrl[num];
        turnactive(num);
    };
    Oprev.onmouseover = function() {
        clearInterval(timer);
    };
    Oprev.onmouseout = function() {
        timer = setInterval(clickR, 2000);
    };
    //右焦点
    Onext.onclick = clickR;
    Onext.onmouseover = function() {
        clearInterval(timer);
    };
    Onext.onmouseout = function() {
        timer = setInterval(clickR, 2000);
    };

    function clickR() {
        num++;
        if (num == arrUrl.length) {
            num = 0;
        }
        Oimg.src = arrUrl[num];
        turnactive(num);
    }
    var timer = setInterval(clickR, 2000);
    Oimg.onmouseover = function() {
        clearInterval(timer);
    };
    Oimg.onmouseout = function() {
        timer = setInterval(clickR, 2000);
    };
    //给每个li添加事件
    for (var i = 0; i < arrUrl.length; i++) {
        Oli[i].index = i;
        Oli[i].onmouseover = function() {
            this.getElementsByTagName('img')[0].style.display = 'block';
            this.getElementsByTagName('img')[0].src = arrUrl[this.index];
            clearInterval(timer);
        };
        Oli[i].onmouseout = function() {
            this.getElementsByTagName('img')[0].style.display = 'none';
            timer = setInterval(clickR, 2000);
        };
        Oli[i].onclick = function() {
            Oimg.src = arrUrl[this.index];
            turnactive(this.index);
        }
    }

};