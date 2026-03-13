const edad = parseInt(prompt("Ingresa tu edad:"));

if (isNaN(edad)){
    alert("Ingresaste un valor erroneo")
}
else if (edad > 18){
    alert("Ya puedes conducir.")
}
else
    alert("Aun no puedes conducir");