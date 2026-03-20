const texto = prompt("Ingresa una cadena de texto:");
const pantalla = document.getElementById("pantalla")

for(let i=0; i<texto.length; i++){
    
    if(texto.charAt(i) === "a" || texto.charAt(i) === "e" || texto.charAt(i) === "i" || texto.charAt(i) === "o" || texto.charAt(i) === "u"){
        pantalla.innerHTML += `La vocal "${texto.charAt(i)}" se encuentra en la posicion ${i}`
        break;
    }
}