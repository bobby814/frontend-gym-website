let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

const typed = new Typed('.multiple-text', {
        strings: ['powerlifting','powerbuilder', 'dont wish, work for it '],
        typeSpeed:60,
        backspeed:60,
        backdelay:1000,
        loop:true,

      });