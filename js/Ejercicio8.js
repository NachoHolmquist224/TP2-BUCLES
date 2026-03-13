const num = parseInt(prompt("Ingresa un numero:"));
let acumuladora = "";

for (let i = 1; i <= num; i++) {
  acumuladora += i;
  const pantalla = document.getElementById("pantalla")
  pantalla.innerHTML += acumuladora + "<br>"
}

