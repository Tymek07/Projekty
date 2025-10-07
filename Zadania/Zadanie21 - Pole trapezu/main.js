const a = document.querySelector('#a')
const b = document.querySelector('#b')
const h = document.querySelector('#h')
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let liczba_a = parseFloat(a.value);
    let liczba_b = parseFloat(b.value);
    let liczba_h = parseFloat(h.value);

    let pole = (liczba_a + liczba_b)/2 * liczba_h;

    wynik.innerHTML = `
     Podano takie liczby: <br>
    a = ${liczba_a} <br>
    b = ${liczba_b} <br>
    h = ${liczba_h} <br>
    Pole trapeza o podanych bokach wynosi: <br>${pole}  
    `

})