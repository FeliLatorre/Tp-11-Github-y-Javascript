let pokemones = [
  { nombre: "Pikachu", nivel: 12, tipo: ["Eléctrico"], foto: "pikachu.png", hp: 35, hp_total: 35, evolución: true },
  { nombre: "Charmander", nivel: 10, tipo: ["Fuego"], foto: "charmander.png", hp: 39, hp_total: 39, evolución: true },
  { nombre: "Squirtle", nivel: 9, tipo: ["Agua"], foto: "squirtle.png", hp: 44, hp_total: 44, evolución: true },
{ nombre: "Gengar", nivel: 15, tipo: ["Fantasma-veneno"], foto: "", hp: 40, hp_total: 50, evolución: true },
];

let opcion;
do {
  opcion = prompt("1=Mostrar  2=Cargar  3=Restar HP  4=Salir");

  if (opcion === "1") {
    console.log(pokemones);
    for (let i = 0; i < pokemones.length; i++) {
      console.log(pokemones[i].nombre);
    }
  }

  if (opcion === "2") {
    let nombre = prompt("Nombre:");
    let nivel = Number(prompt("Nivel:"));
    let tipo = prompt("Tipos separados por coma:").split(",");
    let foto = prompt("Foto (url):");
    let hp_total = Number(prompt("HP total:"));
    let hp = hp_total;
    let evolucion = prompt("¿Evoluciona? (si/no)") === "si";

    let nuevo = { nombre: nombre, nivel: nivel, tipo: tipo, foto: foto, hp: hp, hp_total: hp_total, evolución: evolucion };
    pokemones.push(nuevo);

    console.log(pokemones);
    for (let i = 0; i < pokemones.length; i++) {
      console.log(pokemones[i].nombre);
    }
  }

  if (opcion === "3") {
    let nombre = prompt("A qué Pokémon restar HP:");
    let daño = Number(prompt("Cuánto HP restar:"));
    let encontrado = false;

    for (let i = 0; i < pokemones.length; i++) {
      if (pokemones[i].nombre.toLowerCase() === nombre.toLowerCase()) {
        pokemones[i].hp = pokemones[i].hp - daño;
        if (pokemones[i].hp < 0) {
          pokemones[i].hp = 0;
        }
        console.log(pokemones[i].nombre + " ahora tiene " + pokemones[i].hp + "/" + pokemones[i].hp_total);
        encontrado = true;
      }
    }

    if (encontrado === false) {
      console.log("Pokémon no encontrado.");
    }

    console.log(pokemones);
    for (let i = 0; i < pokemones.length; i++) {
      console.log(pokemones[i].nombre);
    }
  }

} while (opcion !== "4");
