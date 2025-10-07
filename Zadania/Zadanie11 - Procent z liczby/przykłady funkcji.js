function powitanie1() {
    return `<><><><><><><><>`
}
console.log(powitanie1())

function sredniaLiczb(l1,l2,l3,l4) {
    return (l1+l2+l3+l4)/4
}

console.log(sredniaLiczb(2,2,2,2))

function powitanie(imie) {
    return `Witaj ${imie}!!!! Miło Cię widzieć`
}

console.log(powitanie(`Tymek`))

function sredniageometryczna(l1,l2,l3,l4){
    return Math.pow(l1*l2*l3*l4, 0.25)
}

console.log(sredniageometryczna(2,2,5,7).toFixed(3))

function ilorazLiczb(l1, l2){
    return l1/l2
}

console.log(ilorazLiczb(2,2))


function sumaRoznica(l1, l2){
    let suma = l1+l2
    let roznica = l1-l2
    let iloczyn = l1 * l2
    let iloraz = l1 / l2
    let reszta = l1 % l2
    let wynik = `suma = ${suma} roznica = ${roznica} iloczyn = ${iloczyn}  iloraz = ${iloraz}  reszta = ${reszta}`
    return wynik
}

console.log(sumaRoznica(2,2))