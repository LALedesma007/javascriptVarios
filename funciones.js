function saludoInicial(){
    console.log('Hola mi nombre es Alejandro');
}
saludoInicial();

function saludoInicial(name){
    console.log(`Hola mi nombre es ${name}`);
}
saludoInicial('David');
saludoInicial('Jorge');


function sumaNumeros(a, b){
    let suma = a + b;
    console.log(suma);
}
sumaNumeros(8, 30)

//VARIABLES EXTERNAS E INTERNAS
let c = 10 

function sumaNumero(a, b){
    let suma = a + b + c;
    console.log(suma);
}
sumaNumero(8, 30)

let d = 10 

function sumaNum(a, b){
    let d = 5             // JAVASCRIPT VA A PRIORIZAR LA VARIABLE INTERNA d Y NO LA EXTERNA
    let suma = a + b + d;
    console.log(suma);
}
sumaNum(8, 30)
console.log(d) 