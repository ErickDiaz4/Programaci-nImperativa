

const cambiandoNumeros = () => {

    let listaNumeros = []

    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            // console.log('fizzbuzz');
            listaNumeros.push("fizzbuzz");
        }else if (i % 3 === 0){
            // console.log('fizz');
            listaNumeros.push("fizz");
        }else if(i % 5 === 0){
            // console.log('buzz');
            listaNumeros.push("buzz");
        }else{
            // console.log(i);
            listaNumeros.push(i)
        }
    }
    return listaNumeros
}
let resultado = cambiandoNumeros()
console.log(resultado);


let arr = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

const valores = (n1,n2) => n1[n2]

let guardandoValores = valores(arr,3)
console.log(guardandoValores);


const meses = (mes) => {
    let cantidadDeDias = new Date(2023,mes,0).getDate()
    return cantidadDeDias
}

let resultado2 = meses(12)
console.log(resultado2);

const invertirNumero = (numeros) => {
    return numeros.toString().split('').reverse().join('')

}

console.log(invertirNumero(32443));

let array2 = [
  3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
  100,
];

const imprimirRepetidos = (array) => {
  let valoresIguales = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        valoresIguales.push(array[i]);
      }
    }
  }
  return valoresIguales;
};

let resultado3 = imprimirRepetidos(array2);
console.log(resultado3);