// Ejercicio empleados

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const empleada2 = empleados.find(empleado => empleado.name === "Ana");
if(empleada2) {
  const { name, email } = empleada2;
  const empleada2YEmail = { name, email };
  console.log(JSON.stringify(empleada2YEmail))
}

const empleado1 = empleados.find(empleado => empleado.email ="Luis@gmail.com")
if(empleado1) {
  const { email } = empleado1;
  const empleado1ConEmail = { email }
  //console.log(JSON.stringify(empleado1ConEmail))
}

 
//Ejercicio Pokemon

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
//console.log("Nombre:", nombre)

//console.log("Tipo:", type)

const [ Tackle ] = moves;
//console.log("Movimiento:", "Tackle")

