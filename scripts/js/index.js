const navSlide = () => {
    const expand = document.querySelector('.expand');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    expand.addEventListener('click',()=> {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        //Expand animation
        expand.classList.toggle('toggle');
    });
}
navSlide();

function sliderheight() {
    
    const clientHeight = document.getElementById('slide').clientHeight;

    document.getElementById("slide-container").style.height = `${clientHeight}px`;

    window.addEventListener("resize", sliderheight);
}
sliderheight();


const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.button');
let currSlide = 0;

var manualNav = function(man) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        buttons.forEach((button) => {
            button.classList.remove('active');
        });
    });

    slides[man].classList.add('active');
    buttons[man].classList.add('active');

    buttons.forEach((button, curr) => {
        button.addEventListener('click', () => {
            manualNav(curr);
            currSlide = curr;
        });
    });
}
manualNav(0);