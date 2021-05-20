// SLIDER

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i) {
            i = 0;
        }
        if(i >= slides.length){
            return;
        }
        repeater();
        }, 7000);
    }
    repeater();
}
repeat();

// MOBILE NAV MENU
const menuIcon = document.getElementById('menu-icon');
const slideOutMenu = document.getElementById('slideout-menu');
const links = document.querySelectorAll('slide-nav-links li');
const bar = document.getElementById('bar')

menuIcon.addEventListener('click', () => {
    slideOutMenu.classList.toggle('open')
    bar.classList.toggle('rotate')
})

function fade(){
 links.classlist.toggle('fade')
}

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}



