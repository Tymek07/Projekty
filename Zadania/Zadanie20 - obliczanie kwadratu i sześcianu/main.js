const a = document.querySelector('#a')
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let wartosc = parseFloat(a.value);

    let kwadrat = wartosc ** 2
    let szescian = wartosc ** 3

    wynik.innerHTML =`
    ${wartosc}<sup>2</sup> = ${kwadrat} <br>
    ${wartosc}<sup>3</sup> = ${szescian}
    `
})