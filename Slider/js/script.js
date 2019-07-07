var images = document.getElementsByClassName('sImg')[0];
var begin = 0;
autoSlider();
//АВТОМАТИЧЕСКАЯ СРАБОТКА
function autoSlider(){
        var timer = setInterval(function(){
        var offset = (begin -= 800);
        if (offset <= -3200){
            begin = 800;
            //clearInterval(timer);
        }
        images.style.left = offset + 'px';
    }, 2000);
        //clearInterval(timer);
}
//ФУНКЦИЯ СРАБАТЫВАЕТ ПРИ НАЖАТИИ НА КНОПКУ
/*function slider() {
    var offset = (begin -= 800);
    if (offset <= -3200){
        begin = 800;
    }
    images.style.left = offset + 'px';
}*/
