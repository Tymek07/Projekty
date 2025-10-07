const temperatura = document.querySelector('#stopnie')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener("click", function () {
    let c = parseFloat(temperatura.value)

    let k = c + 273.15
    let f = (c * 9/5) + 32

    wynik.innerHTML = `
        <p>Temperatura: ${c.toFixed(2)} °C</p>
        <p>W Kelwinach: ${k.toFixed(2)} K</p>
        <p>W Fahrenheitach: ${f.toFixed(2)} °F</p>
        
 
    `
})