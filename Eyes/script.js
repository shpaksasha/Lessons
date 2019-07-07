
document.onmousemove = function (event) {
  const w = document.querySelector('.eyes_1').clientWidth/2;
  const x = event.x-w;
  const y = event.y-w;
  console.log(x+' '+y);

  moveEyes('.eyes_1', x, y);
  moveEyes('.eyes_2', x, y);


  console.log(`equals2: ${o === o1}`);
  console.log(`equals3: ${o === o2}`);

  function arctg(x,y) {
    if (x !== 0 && y > 0) return Math.PI/2 - Math.atan(x/y);
    if (x !== 0 && y < 0) return Math.PI + Math.atan(y/x);
  }


  function moveEyes(selector, x, y) {
    document.querySelector(selector).style.transform = 'rotate(' +arctg(x, y) + 'rad)';
  }
};