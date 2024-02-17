// trabajando con arrays
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5,];

const edadesMenores_mayores = (array) => {
  let resultadoEdadesMenores = [];
  let resultadoEdadesMayores = []
  let resultadoEdadesIguales = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 18) {
        resultadoEdadesMenores.push( array[i] )
    }
    if (array[i] > 18) {
      resultadoEdadesMayores.push(array[i]);
    }
    if (array[i] === 18) {
      resultadoEdadesIguales.push(array[i]);
    }
  }
  return resultadoEdadesIguales
};

let retorno = edadesMenores_mayores(edades)
console.log(retorno);

const promedioEdades = (array) => {
  let resultadoEdadesMenores = 0;
  for (let i = 0; i < array.length; i++) {
    resultadoEdadesMenores += array[i];
  }
  let promedio = resultadoEdadesMenores / array.length;
  return promedio;
};


let resultadoPromedio = promedioEdades(edades);
console.log(resultadoPromedio);

const incrementandoEdades = (array) => {
    let sumador = 1

  for (let i = 0; i < array.length; i++) {
    array[i] += sumador
  }
  return edades
};


let guardandoRetur = incrementandoEdades(edades);
console.log(guardandoRetur);


//Trabajando con objetos literales

const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: 3253.4,
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: 3229.45,
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: 1360.19,
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: true,
    saldo: 3627.12,
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: 1616.52,
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: 1408.68,
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];


const cuentas = {
    listadoCuentas : arrayCuentas,
    proceso : function (arr) {
        let nuevasCuentas = []
        let cuentasMayores = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].edadTitular < 30) {
                nuevasCuentas.push(arr[i])
            }if (arr[i].edadTitular >= 30) {
            cuentasMayores.push(arr[i]);
          }
        }
        return cuentasMayores
    }
}

let lista = cuentas.proceso(cuentas.listadoCuentas)
console.log(lista);


const propietarios = {
    cuentas : arrayCuentas,
    buscandotitular : function (nombre) {
        let titular = []
        for (let i = 0; i <  this.cuentas.length; i++){
            if (this.cuentas[i].titular === nombre){
                titular.push(this.cuentas[i])
            }
        }
        return titular
    }
}

let resultado = propietarios.buscandotitular("Arlene Barr");
console.log(resultado);




const generarID = (cuenta) => {
    for (let i = 0; i < cuenta.length; i++) {
        cuenta[i].id = i + 1
    }
}
generarID(arrayCuentas)
console.log(arrayCuentas);



const filtrarPorSaldo = (cuentas , saldo, valor) => {
    let atrayendo = generarID(arrayCuentas)
    let acumuladorCuentas = []
    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].saldo === saldo){
            cuentas[i].saldo += valor
            acumuladorCuentas.push(cuentas[i])
        }
    }
    return acumuladorCuentas
}

let resultado2 = filtrarPorSaldo(arrayCuentas, 1360.19, 1000.0);
console.log(resultado2);