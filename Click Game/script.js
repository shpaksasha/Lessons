let may = document.getElementsByClassName('click')[0];
//клик мышью
/*may.onclick = function () {
    this.style.background = 'orange';
};*/
//двойной клик
may.ondblclick = function () {
    this.style.background = 'red';
};
//клик правой кнопкой мыши
may.oncontextmenu = function () {
    this.style.background = 'purple';
    return false;
};
//мышь входит на элемент
may.onmouseover = function () {
    console.log('Ha ha ha');
    this.style.background = 'green';
};
//мышь уходит с элемента
may.onmouseleave = function () {
    this.style.background = 'blue';
};

/*КОШКИ МЫШКИ*/
/*document.onmousemove = function() {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('afterBegin', '<img src="https://banner2.kisspng.com/20180516/hkw/kisspng-computer-mouse-pointer-cursor-computer-icons-5afc24909a8bb6.300185591526473872633.jpg" class="finger">');
    let fin = document.getElementsByClassName('finger')[0];
    fin.style.position = 'fixed';

    document.onmousemove = function (event) {
        fin.style.left = event.clientX + 15 + 'px';
        fin.style.top = event.clientY + 15 + 'px';
    };
};*/
for (let i=0; i<9; i++){
    document.getElementsByClassName('game')[0].innerHTML += '<div class="block"></div>';
}
let hod =0;
document.getElementsByClassName('game')[0].onclick = function (event) {
    console.log(event);
    if (event.target.className == 'block'){
        checkWinner();
        if (hod%2 == 0) {
            event.target.innerHTML = 'X';
        }
        else {
            event.target.innerHTML = '0';
        }
        hod++;
    }
        function checkWinner() {
            let all = document.getElementsByClassName('block');
            //console.log(all);
            if (all[0].innerHTML == 'X' && all[1].innerHTML == 'X' && all[2].innerHTML == 'X' ){alert('Победили крестики !')};
            if (all[3].innerHTML == 'X' && all[4].innerHTML == 'X' && all[5].innerHTML == 'X') {alert('Победили крестики !');}
            if (all[6].innerHTML == 'X' && all[7].innerHTML == 'X' && all[8].innerHTML == 'X') {alert('Победили крестики !');}
            if (all[0].innerHTML == 'X' && all[3].innerHTML == 'X' && all[6].innerHTML == 'X') {alert('Победили крестики !');}
            if (all[1].innerHTML == 'X' && all[4].innerHTML == 'X' && all[7].innerHTML == 'X') {alert('Победили крестики !');}
            if (all[2].innerHTML == 'X' && all[5].innerHTML == 'X' && all[8].innerHTML == 'X') {alert('Победили крестики !');}
            if (all[0].innerHTML == 'X' && all[4].innerHTML == 'X' && all[8].innerHTML == 'X') {alert('Победили крестики !');}
            if (all[2].innerHTML == 'X' && all[4].innerHTML == 'X' && all[6].innerHTML == 'X') {alert('Победили крестики !');}
            //Победили нолики
            if (all[0].innerHTML == '0' && all[1].innerHTML == '0' && all[2].innerHTML == '0') {alert('Победили нолики !');}
            if (all[3].innerHTML == '0' && all[4].innerHTML == '0' && all[5].innerHTML == '0') {alert('Победили нолики !');}
            if (all[6].innerHTML == '0' && all[7].innerHTML == '0' && all[8].innerHTML == '0') {alert('Победили нолики !');}
            if (all[0].innerHTML == '0' && all[3].innerHTML == '0' && all[6].innerHTML == '0') {alert('Победили нолики !');}
            if (all[1].innerHTML == '0' && all[4].innerHTML == '0' && all[7].innerHTML == '0') {alert('Победили нолики !');}
            if (all[2].innerHTML == '0' && all[5].innerHTML == '0' && all[8].innerHTML == '0') {alert('Победили нолики !');}
            if (all[0].innerHTML == '0' && all[4].innerHTML == '0' && all[8].innerHTML == '0') {alert('Победили нолики !');}
            if (all[2].innerHTML == '0' && all[4].innerHTML == '0' && all[6].innerHTML == '0') {alert('Победили нолики !');}
        }
}