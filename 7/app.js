'use strict'

const up = document.querySelector('.up');
up.style.display = 'none';

window.addEventListener('scroll', function () {
    if (this.scrollY > 199) {
        up.style.display = null;
    } else {
        up.style.display = 'none';
    }
})

up.addEventListener('click', function(e){
    window.scrollTo(0,0);
})