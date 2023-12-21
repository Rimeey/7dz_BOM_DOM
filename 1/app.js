'use strict'

const wrapper = document.querySelector('.wrapper');
const count = wrapper.querySelector('.count');
const counter = wrapper.querySelector('.counter');

counter.addEventListener('click', (e)=>{
  if(e.target.matches('.plus')) {
    count.textContent = +count.textContent + 1;
  }
  if(e.target.matches('.minus') && +count.textContent > 0) {
    count.textContent = +count.textContent - 1;
  }
})