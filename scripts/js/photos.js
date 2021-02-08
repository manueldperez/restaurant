function sliderheight() {
    
    const clientHeight = document.getElementById('slide').clientHeight;

    document.getElementById("slide-container").style.height = `${clientHeight}px`;

    window.addEventListener("resize", sliderheight);
}
sliderheight();

const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.button');
let currSlide = 0;

const manualNav = (man) => {
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

const repeat = (actClass) => {
    let active = document.getElementsByClassName('active');
    let curr = 0;

    const repeater = () => {
        setTimeout(() => {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            slides[curr].classList.add('active');
            buttons[curr].classList.add('active');
            curr++;

            if (slides.length == curr) {
                curr = 0;
            }
            if (curr >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
}
repeat();