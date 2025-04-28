///ejercicio 1///
const nombre = "kevin";
const edad = 20;
let mascotas = true;
console.log(`
Nombre: ${nombre}
Edad: ${edad}
Tiene mascotas?: ${mascotas}`);

///ejercicio 2///
let numeroA = 8;
let numeroB = 2;

console.log(numeroA + numeroB)
console.log(numeroA - numeroB)
console.log(numeroA * numeroB)
console.log(numeroA / numeroB)

///ejercicio 3///
function recibirNombre(nombre){
    return `Hola ${nombre}, como estas\n`;
  }
  console.log(recibirNombre("kevin"))
  
  //Ejercicio 4///
  const frutas = ['Pera','cereza','Frutilla','manzana','mango'];
  console.log("Nombres de frutas: ");
  for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
  }

  //Ejercicio 5///
const numeros = [3, 18, 6];
const numerosMultiplicados = numeros.map(numero => numero * 2);

console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);

//Ejercicio 6///
const Personas = [{Nombre: "Kevin", Edad: 20},
                  {Nombre: "alexander", Edad: 20},
                  {Nombre: "Roberto", Edad: 21,
                  }]

console.log("\nNombres de las personas:");
Personas.forEach(persona => console.log(persona.Nombre));

///Ejercicio 7///
var arrayNumeros = [1,5,6,3,7,10,20];
let Mayores = arrayNumeros.filter(mayor => mayor > 5);
console.log("\nNumeros mayores a 5: ", Mayores);

///Ejercicio 8///
var arrayNumeros = [1,5,6,3,7,10,20];
let Suma = arrayNumeros.reduce((total, numero) => {
  return total + numero;
});
console.log("La suma total del array es: ", Suma);

///Ejercicio9///
async function esperarSegundos() {
  await new Promise(msg => setTimeout(msg, 2000));
  return "2 segundos pasaron :v";
}

async function mensaje() {
  const mensaje = await esperarSegundos();
  console.log(mensaje);
}

mensaje();

