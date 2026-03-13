const num = parseInt(prompt("Ingresa un numero:"));

if (isNaN(num) && num <= 0 && num > 50){
    alert("Ingresaste un valor erroneo");
}
else{
    for (let i = num; i >= 1; i--) {
     let linea = ""
     
     for (let j = 0; j<i; j++){
        linea += i
     }
     const pantalla = document.getElementById("pantalla")
     pantalla.innerHTML += linea + "<br>"
}
}