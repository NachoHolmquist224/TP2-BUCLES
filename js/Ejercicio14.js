const texto = prompt("Ingresa una cadena de texto:");
const pantalla = document.getElementById("pantalla")

for(let i=0; i<texto.length; i++){
    pantalla.innerHTML += texto.charAt(i) + "-"
}