const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    const x = parseFloat(liczba.value);

    let licznik = x * x;
    let mianownik = Math.pow(1 + Math.abs(x), 2);
    let obliczone = licznik / mianownik;

    wynik.innerHTML = `
     Dla x = <strong>${x}</strong>> <br>
     Wartość wyrażenia wynosi: <strong>${obliczone.toFixed(2)}</strong>
    `
})