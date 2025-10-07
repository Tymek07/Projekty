/*//!*
let min = 5
let max = 10

function liczba_losowa(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}

console.log(liczba_losowa(100, 105));
//!**/


function losuj(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const liczba_min = document.querySelector('#min');
const liczba_max = document.querySelector('#max');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let min = parseFloat(liczba_min.value);
    let max = parseFloat(liczba_max.value);

    let p1 = losuj(min, max);
    let p2 = losuj(min, max);
    let p3 = losuj(min, max);
    let p4 = losuj(min, max);
    let p5 = losuj(min, max);

    let suma = p1 + p2 + p4 + p4 + p5 ;
    let iloczyn = p1 * p2 * p3 * p4 * p5;
    let srednia = suma / 5


    wynik.innerHTML = `
     p1 = ${p1}<br>
     p2 = ${p2}<br>
     p3 = ${p3}<br>
     p4 = ${p4}<br>
     p5 = ${p5}<br>
     Suma = ${suma}<br>
     Iloczyn = ${iloczyn}<br>
     Średnia = ${srednia}
    `;
});

