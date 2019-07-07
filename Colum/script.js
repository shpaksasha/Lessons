window.onload = function () {
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    sameHeight();
    function sameHeight() {
        left.style.height = 'auto';
        right.style.height = 'auto';
       let leftH = left.offsetHeight;
       let rightH = right.offsetHeight;
       let max = Math.max(leftH, rightH);
       console.log(leftH);
        left.style.height = max+'px';
        right.style.height = max+'px';
    }
    window.onresize = sameHeight;
//определение устройства
    /*document.querySelector('.out').innerHTML = navigator.userAgent;
    console.log(navigator);
    if (navigator.userAgent.match('iPhone')|| navigator.userAgent.match('Android')|| navigator.userAgent.match('iPad')){
        alert('Mobile');
    }
    else{alert('Desktop');}*/

    let p = document.createElement('span');
    document.body.appendChild(p);
    p.innerHTML = 'Привет всем!';
    p.classList.add('more');
    console.log(p);

    let ph = document.querySelectorAll('div');//обращение ко всем элементам одновременно
    console.log(ph[0]);
};
