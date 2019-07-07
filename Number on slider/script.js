let range = document.querySelector('.number');
let rangeNum = document.querySelector('.num');
range.oninput = function () {
    //console.log(this.value);
    rangeNum.style.left = this.value - 10 + 'px';
    rangeNum.innerHTML = this.value;
};

