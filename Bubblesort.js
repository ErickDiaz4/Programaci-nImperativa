let numeros = [6, 5, 1, 2, 4, 3, 8, 7];

let temp

for (let i = 0; i < numeros.length; i++) {
  for (let j = 0; j < numeros.length; j++) {
    if (numeros[j] > numeros[j + 1]) {
      temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;
    }
  }
}

console.log(numeros);



let list = [12, 3, 5, 7, 1, 22, 47, 100];

const ordenamiento = (arr) => {
  let caja;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        caja = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = caja;
      }
    }
  }
};

let datos = ordenamiento(list);
console.log(list);

const posicion = (arr, buscado) => {
  let i = 0; //2(4-12)//3(6-47)
  let der = arr.length - 1; //7-100
  let medio; //1(3-7)//2(5-22)//3(6-47)
  let encontrado; //1(3-7)

  while (i <= der) {
    medio = Math.floor((i + der) / 2);
    encontrado = arr[medio];

    if (encontrado === buscado) {
      return medio;
    }
    if (encontrado > buscado) {
      der = medio - 1;
    } else {
      i = medio + 1;
    }

    i++;
  }
  return "No se encontro";
};

let elementos = posicion(list, 47);
console.log(elementos);


