// mendapatkan referensi elemen audio dan div
let audio = document.getElementById("musik");
let gambarguweh = document.getElementById("gambarguweh");
let samting = document.getElementById("samting");

let vh = window.innerHeight / 100;

audio.volume = 0;
audio.pause();


// menambahkan event listener untuk scroll
window.addEventListener("scroll", function () {
    // mendapatkan posisi atas dan bawah gambarguweh
    let top = gambarguweh.getBoundingClientRect().top;

    // memeriksa apakah div berada di dalam layar
    if (top <= 50 * vh) {
        // memutar musik jika belum dimainkan

        gambarguweh.style.borderRadius = "0%";
        gambarguweh.style.boxShadow = "0px 0px 1px 1px yellow, 0px 0px 5px 2px rgb(255, 255, 255)";
        gambarguweh.style.opacity = "1";
        gambarguweh.style.filter = "brightness(1)";

        if (audio.paused) {


            audio.play();
            const intervalbabi = setInterval(() => {

                if (audio.volume >= 0.9) {
                    clearInterval(intervalbabi);
                    console.log("interval Ksabar");
                }
                audio.volume += 0.01;

            }, 10);

        }

    } else {

        gambarguweh.style.borderRadius = "50%";
        gambarguweh.style.boxShadow = "";
        gambarguweh.style.opacity = "0";
        gambarguweh.style.filter = "brightness(5)";

        if (!audio.paused) {

            const intervalkntl = setInterval(() => {
                if (audio.volume <= 0.01) {
                    console.log("interval Kisabar");
                    audio.pause();
                    clearInterval(intervalkntl);
                }
                audio.volume -= 0.01;

            }, 100);

        }
    }


});