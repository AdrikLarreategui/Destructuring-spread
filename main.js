// Ejercicio destructuring empleados

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const empleada2 = empleados.find(empleado => empleado.name === "Ana");
if(empleada2) {
  const { name, email } = empleada2;
  const empleada2YEmail = { name, email };
  //console.log(JSON.stringify(empleada2YEmail))
}

const empleado1 = empleados.find(empleado => empleado.email ="Luis@gmail.com")
if(empleado1) {
  const { email } = empleado1;
  const empleado1ConEmail = { email }
  //console.log(JSON.stringify(empleado1ConEmail))
}

 
//Ejercicio destructuring Pokemon

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
      "primary": "Overgrow",
      "hidden": "Chlorophyll"
  },
  stats: {
      hp: 45,
      attack: 49,
      deffense: 59,
      speed: 45
  },
  moves: [
      "Growl", "Tackle", "Vine Whip", "Razor Leaf"
  ]
};

const { name:nombre, type, ability, stats, moves } = pokemon;
// //console.log("Nombre:", nombre)

//console.log("Tipo:", type)

const [ Tackle ] = moves;
//console.log("Movimiento:", "Tackle")



//Ejercicio mergear Pokemon:


const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
      primary: "Static",
      hidden: "Lightning rod"
  },
  stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      speed: 90
  },
  moves: [
      "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
  ]
};

const mergearbichos = {...pokemon, ...pikachu};

//console.log(mergearbichos);


//Ejercicio suma números

function sumAllNumbers(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
const suma = sumAllNumbers(7,4,1)
//console.log(suma)


//Ejercicio suma solo números

function addOnlyNums(...argumentos) {
  return argumentos
    .filter(argumentos => typeof argumentos === 'number')
    .reduce((total, num) => total + num, 0);
}

const soloNumeros = addOnlyNums(1, " ", 3, "4", 5, "abc");
//console.log(soloNumeros); 

// Ejercicio contar argumentos

function countTheArgs(...arguments) {
  return arguments.length
}
const countingArguments = countTheArgs(1, " ", 3, "4", 5, "abc")
//console.log(countingArguments)
