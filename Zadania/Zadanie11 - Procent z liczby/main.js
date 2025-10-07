function procent_z_liczby(liczba, procent) {
    return liczba*procent/100;
}

/*
console.log(procent_z_liczby(120,50))

 */

const liczba = document.querySelector('#liczba');
const procent = document.querySelector('#procent')
const  wynik = document.querySelector('#wynik')
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let licz = parseFloat(liczba.value);
    let procents = parseFloat(procent.value);
    let wynik_liczba = procent_z_liczby(licz,procents);

    wynik.innerHTML = `
    podana liczba: ${licz}<br>  
    podany procent: ${procents}%<br>
    obliczony wynik: ${wynik_liczba}<br>
`
})