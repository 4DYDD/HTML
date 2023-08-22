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

        gambarguweh.style.border = "1px solid black";

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

        gambarguweh.style.border = "0px solid black";

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