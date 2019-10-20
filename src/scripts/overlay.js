import { AST_StatementWithBody } from "terser";

let btn = document.querySelector('.fullscr-btn');
let body = document.body;

btn.addEventListener('click',function(e){
    e.preventDefault;
    createModal();
})

function createModal(){
    let overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const overlayTemplate = document.querySelector('#overlayTemplate');
    overlay.innerHTML = overlayTemplate.innerHTML;

    body.appendChild(overlay);

    let cross = document.querySelector('.cross');
    cross.addEventListener('click',function(e){
        e.preventDefault;
        overlay.style.display = 'none';
        overlay.remove('overlay');
    })

    return;
}