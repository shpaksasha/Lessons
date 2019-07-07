var images = document.getElementsByClassName('sImg')[0];
var begin = 0;
autoSlider();

function autoSlider(){
    var timer = setTimeout(slider, 3000);
    //clearTimeout(timer);//полностью останавливает слайдер
    }

function slider() {
    var offset = (begin -= 800);
    if (offset <= -3200){
        begin = 800;
        //clearTimeout(timer);//останавливает слайдер после выполнения данного условия
    }
    images.style.left = offset + 'px';
    autoSlider();
}