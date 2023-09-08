let kolom1 = document.getElementById('kolom1');
let kolom2 = document.getElementById('kolom2');

let hitung = document.querySelector('.hitung');
let ulang = document.querySelector('.ulang');

let tepibawah = document.getElementById('tepibawah');
let tepiatas = document.getElementById('tepiatas');
let and = document.getElementById('and');
let or = document.getElementById('or');

let keterangannya = document.querySelector('.keterangannya');

let keterangan = document.querySelector('.keterangan');
let hasil = document.querySelector('.hasil');
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

    if (kolom1.value == "" || kolom2.value == "" || kolom1.value == "masukkan nilai pertama" || kolom2.value == "masukkan nilai kedua") {
        hitung.disabled = true;
        hitung.style.backgroundColor = "burlywood";
    } else {
        hitung.disabled = false;
        hitung.style.backgroundColor = "bisque";
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

    if (kolom1.value == "" || kolom2.value == "" || kolom1.value == "masukkan nilai pertama" || kolom2.value == "masukkan nilai kedua") {
        hitung.disabled = true;
        hitung.style.backgroundColor = "burlywood";
    } else {
        hitung.disabled = false;
        hitung.style.backgroundColor = "bisque";
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

    if (kolom1.value == "" || kolom2.value == "" || kolom1.value == "masukkan nilai pertama" || kolom2.value == "masukkan nilai kedua") {
        hitung.disabled = true;
        hitung.style.backgroundColor = "burlywood";
    } else {
        hitung.disabled = false;
        hitung.style.backgroundColor = "bisque";
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

    if (kolom1.value == "" || kolom2.value == "" || kolom1.value == "masukkan nilai pertama" || kolom2.value == "masukkan nilai kedua") {
        hitung.disabled = true;
        hitung.style.backgroundColor = "burlywood";
    } else {
        hitung.disabled = false;
        hitung.style.backgroundColor = "bisque";
    }
});

hitung.disabled = true;
hitung.style.backgroundColor = "burlywood";

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

        hitung.disabled = true;
        hitung.style.backgroundColor = "burlywood";

        ulang.disabled = true;
        kolom1.style.color = "rgba(255, 255, 255, 0)";
        kolom2.style.color = "rgba(255, 255, 255, 0)";

        tepibawah.style.color = "rgba(255, 255, 255, 0)";
        tepibawah.style.backgroundColor = "bisque";

        tepiatas.style.color = "rgba(255, 255, 255, 0)";
        tepiatas.style.backgroundColor = "bisque";

        and.style.color = "rgba(255, 255, 255, 0)";
        and.style.backgroundColor = "bisque";

        or.style.color = "rgba(255, 255, 255, 0)";
        or.style.backgroundColor = "bisque";

        keterangannya.style.color = "rgba(255, 255, 255, 0)";

        setTimeout(() => {
            keterangannya.innerText = "";
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
    let hasilajah = parseInt(kolom1.value) + parseInt(kolom2.value);
    let hasilhitung = hasilajah / 2;
    alert(hasilhitung);

    keterangannya.innerText = hasilhitung.toString();
    keterangannya.style.color = "rgba(162, 120, 66, 1)";
    setTimeout(() => {

        if (hasilhitung > 70) {
            tepibawah.style.color = "rgba(255, 255, 255, 0)";
            tepibawah.style.backgroundColor = "bisque";
            setTimeout(() => {
                tepibawah.value = "nilai diatas 70";
                tepibawah.style.color = "rgba(255,255,255, 1)";
                tepibawah.style.backgroundColor = "green";
            }, 300);
        } else if (hasilhitung < 70) {
            tepibawah.style.color = "rgba(255, 255, 255, 0)";
            tepibawah.style.backgroundColor = "bisque";

            setTimeout(() => {
                tepibawah.value = "nilai dibawah 70";
                tepibawah.style.color = "rgba(255,255,255, 1)";
                tepibawah.style.backgroundColor = "red";
            }, 300);
        }

        if (hasilhitung == 70) {
            tepibawah.style.color = "rgba(255, 255, 255, 0)";
            tepibawah.style.backgroundColor = "bisque";

            setTimeout(() => {
                tepibawah.value = "nilai sama dengan 70";
                tepibawah.style.color = "rgba(255,255,255, 1)";
                tepibawah.style.backgroundColor = "darkgreen";
            }, 300);
        }

        if (hasilhitung < 95) {
            tepiatas.style.color = "rgba(255, 255, 255, 0)";
            tepiatas.style.backgroundColor = "bisque";

            setTimeout(() => {
                tepiatas.value = "nilai dibawah 95";
                tepiatas.style.color = "rgba(255,255,255, 1)";
                tepiatas.style.backgroundColor = "green";
            }, 300);
        } else if (hasilhitung > 95) {
            tepiatas.style.color = "rgba(255, 255, 255, 0)";
            tepiatas.style.backgroundColor = "bisque";

            setTimeout(() => {
                tepiatas.value = "nilai diatas 95";
                tepiatas.style.color = "rgba(255,255,255, 1)";
                tepiatas.style.backgroundColor = "lightgreen";
            }, 300);
        }

        if (hasilhitung == 95) {
            tepiatas.style.color = "rgba(255, 255, 255, 0)";
            tepiatas.style.backgroundColor = "bisque";

            setTimeout(() => {
                tepiatas.value = "nilai sama dengan 95";
                tepiatas.style.color = "rgba(255,255,255, 1)";
                tepiatas.style.backgroundColor = "darkgreen";
            }, 300);
        }

        if (hasilhitung >= 70 && hasilhitung <= 95) {
            and.style.color = "rgba(255, 255, 255, 0)";
            and.style.backgroundColor = "bisque";

            setTimeout(() => {
                and.value = "true";
                and.style.color = "rgba(255,255,255,1)";
                and.style.backgroundColor = "green";
            }, 300);
        } else {
            and.style.color = "rgba(255, 255, 255, 0)";
            and.style.backgroundColor = "bisque";

            setTimeout(() => {
                and.value = "false";
                and.style.color = "rgba(255,255,255,1)";
                and.style.backgroundColor = "red";
            }, 300);
        }

        if (hasilhitung >= 70 || hasilhitung <= 95) {
            or.style.color = "rgba(255, 255, 255, 0)";
            or.style.backgroundColor = "bisque";

            setTimeout(() => {
                or.value = "true";
                or.style.color = "rgba(255,255,255,1)";
                or.style.backgroundColor = "green";
            }, 300);
        } else {
            or.style.color = "rgba(255, 255, 255, 0)";
            or.style.backgroundColor = "bisque";

            setTimeout(() => {
                or.value = "false";
                or.style.color = "rgba(255,255,255,1)";
                or.style.backgroundColor = "red";
            }, 300);
        }

    }, 500);

});

tumpukan.addEventListener('click', () => {
    tumpukan.style.top = '-35%';

    hasil.style.top = '82%';
    hasil.style.translateY = '-82%';

    keterangan.style.top = '18%';
    keterangan.style.translateY = '-18%';
});