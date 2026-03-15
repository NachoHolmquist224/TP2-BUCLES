const pantalla = document.getElementById("pantalla");
const filas = parseInt(prompt("Ingresa el numero de filas:"));
const columnas = parseInt(prompt("Ingresa el numero de columnas:"));
let num = filas * columnas;


document.writeln(`<table class="table table-striped"> <tbody id="pantalla"></tbody>`)

for (let i = 1; i <= filas; i++) {
    document.writeln(`<tr>`)
    for (let j = 1; j <= columnas; j++) {
    document.writeln(`<td>${num}</td>`)
    num--;
}
    document.writeln(`</tr>`)
}

document.writeln(`</tbody></table>`)

