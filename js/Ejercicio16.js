const text = prompt("Ingresa una cadena de texto:");
const pantalla = document.getElementById("pantalla");
let acumuladora = "";

for (let i = text.length - 1; i >= 0; i--) {
    acumuladora += text.charAt(i);
}  

pantalla.innerHTML = `La frase al revés es: ${acumuladora}`