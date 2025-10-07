const count = document.querySelector('#count');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener("click", function () {
    let c = parseFloat(count.value);

    let mm = c * 25.3995;
    wynik.innerHTML = `
    Podana długość w calach: <br>${c}<br>
    Wartość w milimetrach: <br>${mm}<br>`

})
