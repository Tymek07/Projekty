const Liczba_a = document.querySelector('#Liczba_a');
const Liczba_b = document.querySelector('#Liczba_b');
const wynik =  document.querySelector('#wynik');
const btn = document.querySelector('button');


btn.addEventListener('click', function(){
    let a = Liczba_a.value;
    let b = Liczba_b.value;
    let wynik_tekst='';

    if (a == parseInt(a) && (b == parseInt(b))) {
            if(b == 0) {
                wynik_tekst = 'Nie dzielimy przez 0!!!'
            }
            else
            {
                wynik_tekst =
                    `
                    a =  ${a}<br>
                    b = ${b}<br>
                    Iloraz = ${a/b}
                    `
            }
    }
    else
    {
        wynik_tekst="Podane liczby nie są całkowite!";
    }
    wynik.innerHTML = wynik_tekst;
})
