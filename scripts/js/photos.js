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