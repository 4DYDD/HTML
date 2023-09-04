let content = document.querySelector('.content');
let contentp = document.querySelector('.content--p');

let header = document.querySelector('.header');

let card = document.querySelector('.card');

let toggle = "samting";

header.addEventListener('click', () => {

    if (toggle == "samting") {
        card.style.height = '50vh';
        card.style.gap = '0.5px';

        contentp.style.opacity = "0";
        content.style.height = '0vh';
        content.style.padding = '0px';

        toggle = "nating";
    }
    else {
        card.style.height = '80vh';
        card.style.gap = '0.7px';

        contentp.style.opacity = "1";
        content.style.height = '30vh';
        content.style.padding = '10px';
        toggle = "samting";
    }
});