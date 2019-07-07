var radio = document.getElementsByName('fru');

for (var i=0; i<radio.length; i++){
    radio[i].onchange = testRadio;//onchange - функция которая срабатывает по изменению
}

function testRadio(){
    console.log(this.value);//this.value - отображает то значение, на котором произошло событие
}
//При нажатии на кнопку
function check(){
    var y = document.getElementsByName('fru');
    for (var i=0; i<y.length; i++){
        if (y[i].checked){//checked - свойство элемента input
            alert(y[i].value);//в сообщении выводиться надпись указанная в value
            break;//для прекращения цикла
        }
    }
}
//CSS Генератор
document.getElementsByClassName('s1')[0].oninput = CssGen;

function CssGen() {
    var div = document.getElementsByClassName('block')[0];
    var com = document.getElementsByClassName('coment')[0];//получаем textaria
    div.style.borderRadius = this.value + 'px';
    console.log(this.value);
    //border-radius: 30px;
    com.innerHTML = 'border-radius: '+this.value+'px;\n';
    com.innerHTML += '-webkit-border-radius: '+this.value+'px;';
}
//МАССИВ
var n = {
    "one": 24,
    "two": 45,
    "broken": " red bus",
    "multi plex": "ceater"
};
console.log(n.broken);
console.log(n["multi plex"]);
//ПЕРВОЕ СВОЙСТВО
var out = document.getElementsByClassName('out')[0];
for (var mas in n){
  out.innerHTML += mas+' - ' +n[mas]+ '<br>';
}
//ЗАДАЧА 1
var man ={
    "Name": "Sasha",
    "Age": 51,
    "Gender": "male",
    "Identification number": 235678432,
    "year": function () {
        return 2019 - this.Age;
    }
};
console.log(man);
console.log(man.year());
//ЗАДАЧА 2 Расчет суммы значений из массива
var m = {
    "masiv": [223, 34, 57, 733, 555],
    "summa": function () {
     var sum = 0;
     for (var i=0; i<this.masiv.length; i++){
         sum = sum + this.masiv[i];
        }
        return sum;
    }
};
console.log(m.summa());

//ТАЙМЕРЫ И ИНТЕРВАЛЫ
let setOut, sdvig = 0;
let test = document.getElementsByClassName('time')[0];
move();
function move() {
    test.style.marginLeft = sdvig +'px';
    sdvig += 10;
    setOut = setTimeout(move,50);
};

//let set = setInterval(move, 500);
document.getElementsByClassName('stop')[0].onclick =function (){
    //clearInterval(set);
    clearTimeout(setOut);
};
//ОБРАТНЫЙ ОТСЧЕТ
let fun, a = 10;
ob();
function ob(){
    document.getElementsByClassName('obrat')[0].innerHTML = a;
    a--;
    if (a<0){
        clearTimeout(fun);
        alert('Таймер остановлен !!!');
    }
    else {
        fun = setTimeout(ob, 1000);
    }
};
//Клавиши клавиатуры
/*document.onkeypress = function (event) {
    console.log(event.key);
}*/
/*let str ='';
document.getElementsByClassName('vod')[0].onkeypress = function (event) {
    console.log(event);
    str = str +event.key;
    console.log(str);
    if (event.keyCode<48 || event.keyCode>57){
        return false;
    }
};*/
/*document.onkeydown = function (event) {
    console.log(event);
}
document.onkeyup = function (event){
     console.log('Отпустил');
}*/
document.onwheel = function (event) {
    console.log(event);
    if (event.deltaY > 0){
        document.getElementsByClassName('line')[0].innerHTML = 'вниз';
    }
    else{
        document.getElementsByClassName('line')[0].innerHTML = 'вверх';
    }
}