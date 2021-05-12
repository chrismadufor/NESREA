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
const links = document.querySelectorAll('slide-nav-links li')

menuIcon.addEventListener('click', function() {
    if (slideOutMenu.style.opacity == "1") {
        slideOutMenu.style.opacity = "0";
        slideOutMenu.style.pointerEvents = "none";
        menuIcon.style.color = 'rgb(49, 60, 61)'
    } else {
        slideOutMenu.style.opacity = "1";
        slideOutMenu.style.pointerEvents = "auto";
        // menuIcon.style.color = 'white'
    }
});

function fade(){
 links.classlist.toggle('fade')
}

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}



