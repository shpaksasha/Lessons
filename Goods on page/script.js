window.onload = function () {
    var goods = {
        "2801": {
            "name": "постельный комплект, двушка",
            "cost": 450,
            "img": '<img src="img/1.png">',
            "storage": "yes"
        },
        "2802": {
            "name": "постельный комплект, полуторка",
            "cost": 340,
            "img": '<img src="img/2.jpg">',
            "storage": "no"
        }
    };
    console.log(goods);
    var out = document.getElementsByClassName('out')[0];
    for (var key in goods) {
        out.innerHTML += 'Название: ' + goods[key].name + '<br>';
        out.innerHTML += 'Цена: ' + goods[key].cost + '<br>';
        out.innerHTML += 'В наличии: ' + goods[key].storage + '<br>';
        out.innerHTML += goods[key].img;
        out.innerHTML += '<hr>';
    }
    //ПРОКРУТКА СКРОЛА
    let scrolled, timer;
document.getElementsByClassName('top')[0].onclick = function (){
    scrolled = window.pageYOffset;
    //window.scrollTo(0,0);
    Top();
}
function Top() {
   if (scrolled >0){
     window.scrollTo(0, scrolled);
     scrolled = scrolled -160;//100 - scroll speed
       timer = setTimeout(Top, 100);
   }
   else{
       clearTimeout(timer);
       window.scrollTo(0,0);
   }
}
document.querySelector('.menu').onmouseenter = menuShow;
document.querySelector('.menu').onmouseleave = menuHide;
document.onkeydown = function (event) {
    //console.log(event);
    if (event.code == 'KeyM') menuShow();
    if (event.code == 'Escape') menuHide();
};

function menuShow() {
   document.querySelector('.menu').style.left = 0;
}
function menuHide() {
    document.querySelector('.menu').style.left = '-280px';
}
};