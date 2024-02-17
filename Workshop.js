//Jugando con objetos literales

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

const banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        return this.clientes[i];
      }
    }
    return "no fue encontrado";
  },
  deposito: function (titular, dinero) {
    let clienteEncontrado = this.consultarCliente(titular);
    clienteEncontrado.saldoEnPesos += dinero;
    return "su deposito es de " + dinero;
  },
  extraccion: function (titular, extracto) {
    let clienteDepositado = this.consultarCliente(titular);
    clienteDepositado.saldoEnPesos -= extracto;
    if (clienteDepositado < 0) {
      return "saldo insuficiente";
    } else {
      return "su nuevo saldo es " + clienteDepositado.saldoEnPesos;
    }
  },
};

let depositando = banco.deposito("Ramon Connell", 1000);
console.log(depositando);
console.log(banco.consultarCliente("Ramon Connell"));

let extraccionando = banco.extraccion("Ramon Connell", 1000); 
console.log(extraccionando);
console.log(banco.consultarCliente("Ramon Connell"));



//2)
let estudiantes = [
  {
    Nombre: "Camilo Sanchez",
    legajo: 12345,
    notas: [8, 7, 9, 6],
  },
  {
    Nombre: "Erick Diaz",
    legajo: 54321,
    notas: [7, 9, 8, 9],
  },
  {
    Nombre: "Oscar Morales",
    legajo: 98765,
    notas: [9, 9, 8, 7],
  },
  {
    Nombre: "Leadth Martinez",
    legajo: 24680,
    notas: [5, 7, 5, 8],
  },
  {
    Nombre: "Maicol Saavedra",
    legaj: 13579,
    notas: [8, 8, 9, 7],
  },
];

const validarPromedio = {
  socios: estudiantes,
  aula: function (nombre) {
    for(let i = 0; i < this.socios.length; i++){
      if(this.socios[i].Nombre === nombre){
        return this.socios[i]
      }  
    }
    return 'no se encontro'
  },
  resultadoPromedio: function(nombre){
    let estudiante = this.aula(nombre)
    let acumulador = 0
    for(let i = 0; i < estudiante.notas.length; i++){
      acumulador += estudiante.notas[i]
    }
    let promedio = acumulador /= estudiante.notas.length
    return 'su promedio final es de ' + promedio
  }
}

console.log(validarPromedio.aula("Maicol Saavedra"));
let mediando = validarPromedio.resultadoPromedio("Maicol Saavedra");
console.log(mediando);




// 1).
const loopDePares = (numero) => {
  for (let i = 0; i <= numero; i++){
    if (i % 2 === 0){
      console.log(`El numero ${i} es par`);
    }else if(i % 2 !== 0){
      console.log(i);
    }
  }
}

console.log(loopDePares(100));

//2)
const sumando = (numero) => {
  let ccr = 0;
  for (let i = 0; i <= numero; i++) {
    ccr += i;
  }
  return ccr;
};
let sumandoAndo = sumando(10);
console.log(sumandoAndo);

//3)
const datos = (n1) => {

  let acr = []
  for (let i = 0; i <= n1; i++) {
    acr.push(i)
  }
  return acr
}
let datafono = datos(10)
console.log(datafono);

//4)
let palabra = "hola";

const cambio = (texto) => {
  palabra = texto.split("");
};

cambio(palabra);
console.log(palabra);

//5)
const arrayHandler = (x, y) => {
  if (x.length !== y.length) {
    return "no es el mismo largo";
  }
  for (let i = 0; i < x.length; i++) {
    console.log(`Soy ${x[i]} y yo soy ${y[i]}`);
  }
};
console.log(arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"]));

let array = [1,2,3,4,5]

const sumando2 = (array) => {
  let contador = 0
  for (let i = 0; i < array.length; i++) {
    contador += array[i]
  }
  let promedio = contador / array.length
  return promedio
}
let resultado = sumando2(array)
console.log(resultado);

let numeros = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const ordenamiento = (arr) => {
  let caja;

  for (let i = 0; (i = arr.length); i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        caja = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = caja;
      }
    }
  }
};

let prueba = ordenamiento(numeros);
console.log(prueba);






