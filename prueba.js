// let nombre = "Erick Santiago Diaz Saavedra";

// console.log(nombre);

// if (true) {
//   let nombre = "Juan Andres Rojas Saavedra";

//   console.log(nombre);
// }

// let mi_Bebe = "Ximena Fajardo";

// console.log(mi_Bebe);

// let costo = 4.2;
// let costo2 = 8.2;

// console.log(costo + costo2);

// console.log(costo > costo2);

// otra cosa

// let nombre1 = "Ximena";
// let apellido = "Fajardo";

// console.log(`Hola ${nombre1} ${apellido} ¿como estas?`);

// Prueba

// let restar = function (numeroA, numeroB) {
//   return numeroA - numeroB;
// };

// console.log(restar(8, 1));

// function anterior(b) {
//   return b * 3 - 1;
// }

// let resultado = anterior(8);

// console.log(resultado);

// ejercicios mesas

// let test = (a) => {
//   return a * 2.54;
// };
// let resultado1 = test(10);
// console.log(resultado1);

// let test1 = (dato, dato1) => {
//   return `https:/${dato}.com${dato1}`;
// };
// let resultado2 = test1("digitalhouse", "!");
// console.log(resultado2);

// const test2 = (numero1) => {
//   return 365 * numero1;
// };

// let resultado3 = test2(7);
// console.log(resultado3);

// let test3 = (sueldo) => {
//   return sueldo / 40;
// };

// let resultado4 = test3(1200000);
// console.log(resultado4);

// let test4 = (a) => {
//   return a.toUpperCase();
// };

// let resultado5 = test4("hola");
// console.log(resultado5);

// let saludo = (nombre) => `hola ${nombre} ¿como estas?`;

// let answer = saludo("Erick");
// console.log(answer);

// console.log("_________________----");

// if and else if and else
// let clima = "soleado";
// let mood = "animado";

// if (clima === "lluvia" && mood === "pereza") {
//   console.log("relajemonos en casa");
// } else if (clima === "lluvia" || mood === "animado") {
//   console.log("vamos a parchar");
// } else {
//   console.log("No hagamos ni monda");
// }

// if

// const salimos = (prenda) => {
//   let prenda1 = "jean";

//   if (prenda === "Saco" && prenda1 === "jean") {
//     return "Esta haciendo la de frio";
//   } else if (prenda === "camiseta" || prenda1 === "jean") {
//     return "salgamos un ratico";
//   } else {
//     return "parchemonos in the house";
//   }
// };

// let Vamos = salimos("Saco");
// console.log(Vamos);

// const salimos2 = (prenda) => {
//   let prenda1 = "jean";

//   if (prenda === "Saco" && prenda1 === "jean") {
//   }

//   return prenda === "camisa" ? "deOne" : "nell";
// };

// let Vamos2 = salimos2("Saco");
// console.log(Vamos2);

// const cuantoPagar = (marcaDelAuto) => {
//   let base = 500;
//   let impuestoPorAuto = 0;

//   switch (marcaDelAuto) {
//     case "vw":
//       impuestoPorAuto = 200;
//       break;
//     case "renault":
//       impuestoPorAuto = 300;
//       break;
//     case "bmw":
//       impuestoPorAuto = 400;
//       break;
//     default:
//       impuestoPorAuto = 0;
//   }

//   return base + impuestoPorAuto;
// };

// let totalPagar = cuantoPagar("bmw");
// console.log(totalPagar);

// let loro = (texto) => {
//   for (texto = 1; texto < 6; texto++) {
//     console.log("repitindo el coro + texto ");
//   }
// };

// let coro = loro("texto");
// console.log(coro);

// console.log("-------------------");

// primer ejercicio

// const fraseUsuario = (usuario) => {
//   return usuario;
// };
// console.log(fraseUsuario("Hola a todos"));

// Segundo ejercicio

// const saludar = (nombre, apellido) => {
//   return `Hola ${nombre} ${apellido}!`;
// };

// console.log(saludar("Ximena", "Fajardo"));

// tercer ejercicio

// const namber = (n1, n2) => {
//   if (n1 >= 0 && n2 >= 0) {
//     return n1 + n2;
//   }
// };
// console.log(namber(20, 50));

// cuarto ejercicio

// const Date = (año) => {
//   return `su edad es ${2023 - año}`;
// };

// console.log(Date(2003));

//quinto ejercicio

// const juego = (numero) => {
//   if (10 === numero) {
//   }
//   return 10 === numero
//     ? "Felicitaciones, ese era!"
//     : "Lo siento intenta nuevamente";
// };
// let play = juego(10);
// console.log(play);

//sexto ejercicio

// const MostrarPares = (numero) => {
//   for (let i = 0; i <= numero; i = i + 2) {
//     console.log(i);
//   }
// };
// MostrarPares(100);

// const sumador = (n) => {

//   let masMas = 0
//   for (let i = 0; i <= n; i++){
//     masMas = masMas + i
//   }
//   return masMas
// }
// let resto = sumador(100)
// console.log(resto);

// const pares = (numero) => {

//   let contador = 0

//   for (let i = 0; i <= numero; i++){
//     if ((i % 2) === 0){
//       contador = contador + 1
//     }
//   }
//   return contador
// }

// let sumatoria = pares(100)
// console.log(sumatoria);

// const cifras = (n1) => {

//   if (n1 < 10){
//     return 10 - n1
//   }else if (n1 > 10){
//     return 100 - n1
//   }else {'ingrese un numero de dos sifras maximo'}
// }

// let solucion = cifras(5)
// console.log(solucion);

//Array

//.push, nos va a permitit agregar sobre un array un dato en particular, array ya creado

// let prueba = ['verde', 'naranja', 'amarillo']

// prueba.push('violeta', 'marron') //inserta al final

// prueba.pop () //saca el ultimo

// prueba.shift () // saca el primero

// prueba.unshift ('caramelito') //inserta al principio

// console.log(prueba);

//include: Parecido al indexOF-Pero regres un True o Un false

// let numerosDelUnoAlCinco = [
//   "Maria",
//   "Juan",
//   "Carlos",
//   "Santiago",
//   "Andres",
//   "Sebastian",
// ];

// numerosDelUnoAlCinco [0] = "Paula"
// numerosDelUnoAlCinco [1] = "Paula";
// numerosDelUnoAlCinco [2] = "Paula";
// numerosDelUnoAlCinco [3] = "Paula";
// numerosDelUnoAlCinco [4] = "Paula";
// let resulta = numerosDelUnoAlCinco
// console.log(resulta);

// numerosDelUnoAlCinco.pop()
// numerosDelUnoAlCinco.push('Sergio')
// console.log(numerosDelUnoAlCinco);

// let peliculas = [
//   "star wars",
//   "totoro",
//   "rocky",
//   "pulp fiction",
//   "la vida es bella",
// ];

// const mayuscula = () => {

//   let acc = []

//   for (i = 0; i < peliculas.length; i++){
//     acc.push(peliculas[i].toUpperCase())
//   }
//   return acc
// }

// let grita = mayuscula()
// console.log(grita);

// let arr1 = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
// let arr2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// const pelis = () => {

//   arr1.push(...arr2)

// let acc = []
// for(let i = 0; i < arr1.length; i++){

//   acc.push(arr1[i].toUpperCase())
// }

// let ultimoElemento = acc.pop()
// return acc

// }
// console.log(pelis());

// const comparando = () => {
//   let euroScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
//   let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];

//   if (JSON.stringify(euroScores) === JSON.stringify(asiaScores)){
//     return 'son iguales'
//   }else{return 'son distintos'}

// }
// console.log(comparando());

// const comparaciones = (euroScores, asiaScores) => {
//   if (euroScores.length !== asiaScores.length) {
//     return "ni lo intentemos";
//   } else {
//     for (let i = 0; i < euroScores.length; i++) {
//       if (euroScores[i] !== asiaScores[i]) {
//         return "efectivamente son distintos";
//       }
//     }
//     return "son iguales bro, casi que no";
//   }
// };

// let show = comparaciones(
//   [8, 10, 6, 8, 10, 6, 7, 9, 5],
//   [8, 10, 6, 8, 10, 6, 7, 9, 5]
// );
// console.log(show);

// reversNombres.reverse()
//console.log(reversNombres)

// let resultado20 = []

// let reversNombres = ["Julieta", "Mariana", "Ximena", "Daneila", "Carolina"];

// let resultado20 = []

// resultado20.push(reversNombres.pop());
// resultado20.push(reversNombres.pop());
// resultado20.push(reversNombres.pop());
// resultado20.push(reversNombres.pop());
// resultado20.push(reversNombres.pop());

// console.log(resultado20);

// const nombres = (reversNombres) => {
//   let nombresContrarios = [];
//   let longitud = reversNombres.length;

//   for (let i = 0; i < longitud; i++) {
//     nombresContrarios.push(reversNombres.pop());
//   }
//   return nombresContrarios;
// };
// console.log(nombres(["Julieta", "Mariana", "Ximena", "Daneila", "Carolina"]));

// let capitalizeWord = (word) => {
//   return word.toUpperCase();
// };
// let resultado0 = capitalizeWord("Hola mundo");
// console.log(resultado0);

// let mayuscula = function capitalizeWord(word) {
//   return word.toUpperCase();
// }
// console.log(mayuscula('hola mundo'));

// let numeros = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// const ordenamiento = (arr) => {
//   let caja;

//   for (let i = 0; (i = arr.length); i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] > arr[j + 1]) {
//         caja = arr[i];
//         arr[i] = arr[j + 1];
//         arr[j + 1] = caja;
//       }
//     }
//   }
// };

// let prueba = ordenamiento(numeros);
// console.log(prueba);
