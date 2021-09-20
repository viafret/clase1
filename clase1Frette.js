//Definimos las variables
let nombre;
let apellido;
let age;
let year;

//Pedimos ingresar el nombre del usuario
nombre = prompt("Ingrese su Nombre");
apellido = prompt("Ingrese su Apellido");

//Mostramos el mensaje en consola
console.log("Usted se ha logueado como: " + nombre + apellido);

//Mostramos el mensaje en ventana
alert("Usted se ha logueado como: " + nombre + " " + apellido);

//Solicitamos al usuario su edad
age = prompt("Ingrese el año de su nacimiento");

//Mostramos el año de nacimiento
year = 2021 - parseInt(age);
alert("Su edad es: " + year);
