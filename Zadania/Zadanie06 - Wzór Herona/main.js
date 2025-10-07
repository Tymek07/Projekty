const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const liczba_c = document.querySelector('#c')
const wynik = document.querySelector("#wynik")
const btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);

    let p = (a+b+c) * 0.5
    let pole = Math.sqrt(p*(p-a)*(p-b)*(p-c))

    wynik.innerHTML = `
    Podano takie liczby: <br>
    a = ${a} <br>
    b = ${b} <br>
    c = ${c} <br>
    Pole trójkąta o podanych wartościach wynosi: <br>${pole}  
    `

})
