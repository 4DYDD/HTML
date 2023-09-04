let header = document.querySelectorAll('.header');

// let Adit = target.querySelector('.Adit');
// let Lana = target.querySelector('.Lana');
// let Rafi = target.querySelector('.Rafi');
// let Andria = target.querySelector('.Andria');
// let Qori = target.querySelector('.Qori');

header.forEach(heder => {
    let toggle = "samting";
    heder.addEventListener('click', (event) => {

        let target = event.target;

        let card = target.parentElement;

        let content = card.querySelector('.content');
        let contentp = content.querySelector('.content--p');
        let header_content = target.querySelector('.header--content');

        if (toggle === "samting") {

            card.style.height = '80vh';
            card.style.gap = '0.7px';

            contentp.style.opacity = "1";
            content.style.height = '30vh';
            content.style.padding = '10px';


            header_content.style.opacity = '1';
            header_content.style.filter = 'blur(10px)';
            header_content.style.height = '100%';

            if (header_content.classList.contains('AditP')) {
                header_content.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(169, 109, 32, 1))";
            }

            if (header_content.classList.contains('LanaP')) {
                header_content.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(28, 98, 70, 1))";
            }

            if (header_content.classList.contains('RafiP')) {
                header_content.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(83, 50, 21, 1))";
            }

            if (header_content.classList.contains('AndriaP')) {
                header_content.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(74, 189, 228, 1))";
            }

            if (header_content.classList.contains('QoriP')) {
                header_content.style.backgroundImage = "linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(98, 40, 135, 1))";
            }

            toggle = "nating";
        }
        else {

            card.style.height = '50vh';
            card.style.gap = '0.5px';

            contentp.style.opacity = "0";
            content.style.height = '0vh';
            content.style.padding = '0px';

            header_content.style.opacity = '0';
            header_content.style.filter = 'blur(0px)';
            header_content.style.height = '0%';

            toggle = "samting";
        }
    });
});
