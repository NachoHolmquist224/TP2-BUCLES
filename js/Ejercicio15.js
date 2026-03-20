const text = prompt("Ingresa una cadena de texto:");
const pantalla = document.getElementById("pantalla");
let acumuladora = 0;

for (let i = 0; i < text.length; i++) {
    
    if(text.charAt(i) === "a" || text.charAt(i) === "e" || text.charAt(i) === "i" || text.charAt(i) === "o" || text.charAt(i) === "u"){
        acumuladora++;
    }
}  

pantalla.innerHTML = `La cantidad de vocales en la frase es: ${acumuladora}`