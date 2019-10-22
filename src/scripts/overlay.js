import { AST_StatementWithBody } from "terser";

let btn = document.querySelector('.fullscr-btn');
let body = document.body;

btn.addEventListener('click',function(e){
    e.preventDefault;
    createModal();
})

function createModal(){
    const overlay = document.querySelector('.wrapper__aside');

    overlay.style.right = "0";

    let cross = document.querySelector('.cross');
    cross.addEventListener('click',function(e){
        e.preventDefault;
        overlay.style.right = '-1000px';
    })

    return;
}