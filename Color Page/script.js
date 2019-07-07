window.onload = function () {
    if (localStorage.getItem('bg')!==null){
      let cul = localStorage.getItem('bg');
      document.getElementsByTagName('body')[0].style.background = cul;
    }

    document.getElementsByClassName('green')[0].onclick = function () {
     document.getElementsByTagName('body')[0].style.background = 'green';
     localStorage.setItem('bg','green');
    };
    document.getElementsByClassName('red')[0].onclick = function () {
        document.getElementsByTagName('body')[0].style.background = 'red';
        localStorage.setItem('bg','red');
    }
};