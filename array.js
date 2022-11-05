//SINTAXIS
let arreglo = [];

//ELEMENTOS INICIALES 
let curso = ['html', 'css', 'javascript'];

//OBTENER UN VALOR DE UN ARREGLO
console.log(curso);
console.log(curso[0]);
console.log(curso[1]);
console.log(curso[2]);

//REEMPLAZAR ELEMENTOS 
curso[1] = 'php';
console.log(curso);

//  AGREGAR ELEMENTOS
curso[3] = 'phyton'
console.log(curso);

//LONGITUD DE UN ARREGLO 
console.log(curso.length);

//TIPOS DE DATOS DE UN ARREGLO 
let nuevoArreglo = ['java',true ,12 ,function(){alert('hola')}, {nombre: 'juan'}];

//METODOS POP / PUSH , SHIFT /UNSHIFT
let numeros = ['uno','dos','tres'];
console.log(numeros);
numeros.push('cuatro'); //PUSH AGREGA UN ELEMENTO AL FINAL
console.log(numeros)
numeros.pop() //POP ELIMINA EL ULTIMO ELEMENTO 
console.log(numeros);
numeros.unshift('cero'); // UNSHIFT AGREGA UN ELEMENTO AL INICIO 
console.log(numeros);
numeros.shift() // SHIFT ELIMINA EL PRIMER ELEMENTO 
console.log(numeros)

//ARREGLOS MULTIDIMENCIONALES 
let matriz = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matriz[1][2])

