'use strict'

const wrapper = document.querySelector('.wrapper');
const colors = wrapper.querySelector('.colors');
const btn = wrapper.querySelector('button');

function rand_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bg_color = `rgb(${x},${y},${z})`;
    return bg_color;
}

btn.addEventListener('click', () => {
    colors.insertAdjacentHTML('beforeend', `
    <div class="block" style="width: 95px; height: 50px; background-color: ${rand_bg_color()}; cursor: pointer;"></div>
    `);

    colors.querySelectorAll('.block').forEach(elem => {
        elem.addEventListener('click', (e) => {
            e.target.remove();
        })
    });
});