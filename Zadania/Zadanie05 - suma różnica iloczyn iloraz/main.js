const liczba_a = document.querySelector("#a");
const liczba_b = document.querySelector("#b");
const wynika = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let suma = a+b;
    let różnica = a-b;
    let iloraz = a/b;
    let iloczyn = a*b;
    let iloraz_całkowity = Math.floor(iloraz);
    let reszta = a % b;

    wynik.innerHTML = `
    a = ${a}<br>
    b = ${b}<br>
    suma = ${suma}<br>
    różnica = ${różnica}<br>
    iloraz = ${iloraz}<br>
    iloczyn = ${iloczyn}<br>
    iloraz całkowity = ${iloraz_całkowity} <br>
    reszta z dzielenia = ${reszta} <br> `
})