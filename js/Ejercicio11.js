const nombre1 = prompt("Ingresa el primer nombre:");
const edad1 = parseInt(prompt("Ingresa la edad de " + nombre1 + ":"));

const nombre2 = prompt("Ingresa el segundo nombre:");
const edad2 = parseInt(prompt("Ingresa la edad de " + nombre2 + ":"));

const nombre3 = prompt("Ingresa el tercer nombre:");
const edad3 = parseInt(prompt("Ingresa la edad de " + nombre3 + ":"));

let mayorEdad = Math.max(edad1, edad2, edad3);

if (mayorEdad === edad1) {
    const pantalla = document.getElementById("pantalla")
    pantalla.innerHTML= ("El o la mayor es: " + nombre1);
} else if (mayorEdad === edad2) {
    pantalla.innerHTML= ("El o la mayor es: " + nombre2);
} else {
    pantalla.innerHTML= ("El o la mayor es: " + nombre3);
}