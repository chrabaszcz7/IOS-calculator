let wynik = document.getElementById('wynik');
let delete1 = document.getElementById('delete1');
let AC = document.getElementById('AC');
let procent = document.getElementById('procent');
let dzielenie = document.getElementById('dzielenie');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let mnozenie = document.getElementById('mnozenie');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let odejmowanie = document.getElementById('odejmowanie');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let dodawanie = document.getElementById('dodawanie');
let zamiana = document.getElementById('zamiana');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');
let rownasie = document.getElementById('rownasie');




function addnumber(number) {
    if (number === ".") {
        let lastNumber = wynik.textContent.split(/[\+\-\x\÷]/).pop();
        if (!lastNumber.includes(".")) {
            wynik.textContent += number;
        }
    } else {
        if (wynik.textContent == "0") {
            wynik.textContent = number;
        } else {
            wynik.textContent += number;
        }
    }
    wynik.scrollLeft = wynik.scrollWidth;
}



one.addEventListener('click',()=>{addnumber("1")})
two.addEventListener('click',()=>{addnumber("2")})
three.addEventListener('click',()=>{addnumber("3")})
four.addEventListener('click',()=>{addnumber("4")})
five.addEventListener('click',()=>{addnumber("5")})
six.addEventListener('click',()=>{addnumber("6")})
seven.addEventListener('click',()=>{addnumber("7")})
eight.addEventListener('click',()=>{addnumber("8")})
nine.addEventListener('click',()=>{addnumber("9")})
zero.addEventListener('click',()=>{addnumber("0")})
dot.addEventListener('click',()=>{addnumber(".")})

function dodajznak(znak) {
    let w = wynik.textContent;
    let lastChar = w[w.length - 1];
    if (["+","-","x","÷"].includes(lastChar)) return;

    wynik.textContent += znak;
}



dodawanie.addEventListener('click',()=>{dodajznak("+")})
odejmowanie.addEventListener('click',()=>{dodajznak("-")})
mnozenie.addEventListener('click',()=>{dodajznak("x")})
dzielenie.addEventListener('click',()=>{dodajznak("÷")})



    
function kalkulator() {
    let expr = wynik.textContent;
    let jsExpr = expr.replace(/x/g, "*").replace(/÷/g, "/");
    try {
        let wynikKoncowy = eval(jsExpr);
        wynik.textContent = wynikKoncowy;
    } catch(e) {
        wynik.textContent = "Error";
    }
}


rownasie.addEventListener('click',()=>{
    kalkulator();
})

function acc(){
    wynik.textContent="0";
}

AC.addEventListener('click',()=>{
    acc();
})

function usunOstatni() {
    wynik.textContent = wynik.textContent.slice(0, -1);
    if (wynik.textContent === "") {
        wynik.textContent = "0";
    }
}
delete1.addEventListener('click',()=>{
    usunOstatni();
})


function zamianaznaku(){

    let cwel=parseFloat(wynik.textContent);

    if(!isNaN(cwel)){
        wynik.textContent = cwel*-1;
    }
}
zamiana.addEventListener('click',()=>{
    zamianaznaku();
})


function procenty(){
    let cwelus = parseFloat(wynik.textContent);
    if(!isNaN(cwelus)){
        wynik.textContent = cwelus*(0.01);
    }
}

procent.addEventListener('click',()=>{
    procenty();
})