let flag = false;
document.onkeydown = function (event) {
//console.log(event);
    if (event.code == 'AltLeft') flag = true;
    if (event.code == 'KeyN' && flag){
        flag = false;
        console.log('Work');
    }
};
