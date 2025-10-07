const stop = document.querySelector('#stop');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let sto = parseFloat(stop.value);

    let rad = sto * (Math.PI/180)
    wynik.innerHTML = `
    Podana ilość stopni: <br>${sto}<br>
    Wartość przeliczona na radiany: <br>${rad}<br>`
})