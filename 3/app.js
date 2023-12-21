'use strict'

const p = document.querySelector('p');
const pallitra = document.querySelector('.pallitra');

pallitra.addEventListener('click', (e)=>{
    p.style.color = e.target.style.backgroundColor;
});