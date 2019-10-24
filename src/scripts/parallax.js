var parallax = (function(){
let //ph1 = document.querySelector('.parallax-header__item--1'),
    ph2 = document.querySelector('.parallax-header__item--2'),
    ph3 = document.querySelector('.parallax-header__item--3'),
    ph4 = document.querySelector('.parallax-header__item--4'),
    ph5 = document.querySelector('.parallax-header__item--5');
    pf1 = document.querySelector('.parallax-footer__item--1');


return {
    move:function(block,windowScroll,strafeAmount){
        let strafe = windowScroll / -strafeAmount + '%';
        let style = block.style;
        let transformString = 'translate3d(0,' +strafe+', 0)';

        style.top = strafe
        style.webkitTranfsorm = transformString;
        //style.transform = transformString;
    },
    init: function(wScroll){
        let startOffset = getOffset('start').bottom;
        let endOffset = getOffset('end').top;

        if (startOffset>0){
    //   this.move(ph1,wScroll,80);
       this.move(ph2,wScroll,170);
       this.move(ph3,wScroll,200);
       this.move(ph4,wScroll,250);
       this.move(ph5,wScroll,320);
        }
       if (endOffset<0){
        this.move(pf1,wScroll,300);

       }
    }
}
}());

function getOffset(block){
    let element = document.querySelector('.'+block),
        rect = element.getBoundingClientRect();
    return rect;
}

window.onscroll = function () {
    var wScroll = window.pageYOffset;

    parallax.init(wScroll);
}