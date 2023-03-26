let text= document.getElementById('text');
/* sol- sağ ağaç için
let tree-left= document.getElementById('tree-left');
let tree-right = document.getElementById('tree-right');
   sol-sağ kapı için
let gate-left = document.getElementById('gate-left');
let gate-right = document.getElementById('gate-right');
*/
let eyeLeft = document.getElementById('eyeLeft')
let eyeRight = document.getElementById('eyeRight')
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    eyeLeft.style.left = value * 0.5 + 'px';
    eyeRight.style.left = value * -0.5 + 'px';
    //tree-left.style.left = value * -1.5 +'px';
    //tree-right.style.left = value * 1.5 +'px';
    //gate-left.style.left = value * 0.5 +'px';
    //gate-right.style.left = value * -0.5 +'px';
});

