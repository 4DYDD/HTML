let kolom1 = document.getElementById('kolom1');
let kolom2 = document.getElementById('kolom2');

let hitung = document.querySelector('.hitung');
let ulang = document.querySelector('.ulang');

let tumpukan = document.querySelector('.tumpukan');

kolom1.value = 'masukkan nilai pertama';
kolom2.value = 'masukkan nilai kedua';

kolom1.addEventListener('focus', () => {

    if (kolom1.value === 'masukkan nilai pertama') {
        kolom1.disabled = true;
        kolom1.style.color = "rgba(255, 255, 255, 0)";
        setTimeout(() => {
            kolom1.style.color = "rgba(162, 120, 66, 1)";
            kolom1.value = '';
        }, 300);

        setTimeout(() => {
            kolom1.disabled = false;
            kolom1.focus();
        }, 600);
    }
});

kolom1.addEventListener('blur', () => {

    if (kolom1.value === '') {
        kolom1.disabled = true;
        kolom1.style.color = "rgba(255, 255, 255, 0)";
        setTimeout(() => {
            kolom1.style.color = "rgba(162, 120, 66, 1)";
            kolom1.value = 'masukkan nilai pertama';
        }, 300);

        setTimeout(() => {
            kolom1.disabled = false;
        }, 600);
    }
});


kolom2.addEventListener('focus', () => {

    if (kolom2.value === 'masukkan nilai kedua') {
        kolom2.disabled = true;
        kolom2.style.color = "rgba(255, 255, 255, 0)";
        setTimeout(() => {
            kolom2.style.color = "rgba(162, 120, 66, 1)";
            kolom2.value = '';
        }, 300);

        setTimeout(() => {
            kolom2.disabled = false;
            kolom2.focus();
        }, 600);
    }
});

kolom2.addEventListener('blur', () => {

    if (kolom2.value === '') {
        kolom2.disabled = true;
        kolom2.style.color = "rgba(255, 255, 255, 0)";
        setTimeout(() => {
            kolom2.style.color = "rgba(162, 120, 66, 1)";
            kolom2.value = 'masukkan nilai kedua';
        }, 300);

        setTimeout(() => {
            kolom2.disabled = false;
        }, 600);
    }
});

ulang.addEventListener('click', () => {

    if (kolom1.value === '' || kolom2.value === '') {
        ulang.disabled = true;
        setTimeout(() => {
            kolom1.style.color = "rgba(255, 255, 255, 0)";
            kolom2.style.color = "rgba(255, 255, 255, 0)";
        }, 600);

        setTimeout(() => {
            kolom1.value = 'masukkan nilai pertama';
            kolom2.value = 'masukkan nilai kedua';
            kolom1.style.color = "rgba(162, 120, 66, 1)";
            kolom2.style.color = "rgba(162, 120, 66, 1)";
        }, 900);

        setTimeout(() => {
            ulang.disabled = false;
        }, 1200);
    }


    else {
        ulang.disabled = true;
        kolom1.style.color = "rgba(255, 255, 255, 0)";
        kolom2.style.color = "rgba(255, 255, 255, 0)";

        setTimeout(() => {
            kolom1.value = 'masukkan nilai pertama';
            kolom2.value = 'masukkan nilai kedua';
            kolom1.style.color = "rgba(162, 120, 66, 1)";
            kolom2.style.color = "rgba(162, 120, 66, 1)";
        }, 300);

        setTimeout(() => {
            ulang.disabled = false;
        }, 600);
    }

});

hitung.addEventListener('click', () => {
    alert(parseInt(kolom1.value) + parseInt(kolom2.value));
});

tumpukan.addEventListener('click', () => {
    tumpukan.style.top = '-35%';
});