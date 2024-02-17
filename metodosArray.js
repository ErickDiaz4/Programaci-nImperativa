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

arrayCuentas.forEach( () => {
    console.log('Hola');
} )

const cuentasElegidas = arrayCuentas.map( cuenta => { return {nroCuenta : cuenta.nroCuenta, titularCuenta : cuenta.titularCuenta }}) 

console.log(cuentasElegidas);

const filtrando = arrayCuentas.filter( cuenta => cuenta.tipoDeCuenta === 'Cuenta Corriente' )
console.table(filtrando)

let nombre = 'Jacki Shurmer'
const encontrandoDato = arrayCuentas.find((cuenta) => cuenta.titularCuenta === nombre)
console.table(encontrandoDato)

// let nombre = "Jacki Shurmer";

// const validando = arrayCuentas.some((cuenta) => cuenta.titularCuenta === nombre);
// console.log(validando);