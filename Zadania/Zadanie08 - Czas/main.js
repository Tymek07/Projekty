const czas = document.querySelector('#time');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener("click", function () {
    let s = parseInt(czas.value);

    let g = Math.floor(s / 3600);
    let m = Math.floor((s % 3600) / 60);
    let sek = s % 60;

    wynik.innerHTML = `
    Wynosi: ${g} godzin, ${m} minut, ${sek} sekund
    `
})