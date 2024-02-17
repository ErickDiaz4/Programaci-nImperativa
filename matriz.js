// Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.

let matriz = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4],
];

const recorrido = (mat) => {
  let acc = 0
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++ ){
      if (mat[i][j] >= 10 && mat[i][j] < 1000){
        acc += mat[i][j]  
      }
    }
  }
  return acc
};

let sumatoria = recorrido(matriz)
console.log(sumatoria);





let semanasDias = [
  [1135, 2500, 900, 1600, 2800, 3650, 1100],
  [1750, 1890, 1900, 1300, 898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 4500, 2560],
  [800, 1250, 1430, 2100, 1980, 1270, 950],
];


// Ejercicio N2

const totalSemanas = (semanas, diasDesacomodados) => {
  let dias = diasDesacomodados - 1;
  let sum = 0;

  for (let i = 0; i < semanas[dias].length; i++) {
    sum += semanas[dias][i];
  }
  return sum;
};

let sumatoriaSmenaDias = totalSemanas(semanasDias, [3]);
console.log(sumatoriaSmenaDias);

//Ejercicio N3
const estadisticas = (arr,arrsemanas,arrdias) => {
  let semana = arrsemanas - 1
  let dia = arrdias - 1
  let diaElejido = []
  let estadistica = {}
  for (let i = 0; i < arr[semana].length; i++){
    diaElejido = arr[semana][dia]
  }
  return estadistica = {
    numeroDeSemana: semana,
    diaDeSemana: dia,
    gasto: diaElejido
  }
}

let arrayDeDias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado","domingo",];
let resultadoPrueba = estadisticas(semanasDias, [4], [7] )
console.log(
  `La semana seleccionada es la numero ${resultadoPrueba.numeroDeSemana + 1}, 
  el dia ${arrayDeDias[resultadoPrueba.diaDeSemana]}, con un gasto total de ${resultadoPrueba.gasto}`
)

//Ejercicio N4
const estadisticaDelMes = arr => {
  let sumatoriaMensual = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sumatoriaMensual += arr[i][j]
    }
  }
  return `El gasto total del mes es ${sumatoriaMensual}`}

let mes = estadisticaDelMes(semanasDias)
console.log(mes);



// Ejercicio N5
const semanaMasGatos = arr => {
  let inicializacion = arr[0][0]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > inicializacion) {
        inicializacion = arr[i][j]
      }
    }
  }
  return inicializacion
}

let gastosSemanales = semanaMasGatos(semanasDias)
console.log(gastosSemanales);
