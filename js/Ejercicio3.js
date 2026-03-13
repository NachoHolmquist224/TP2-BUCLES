let acumuladora = ""
do{
    const cadena = prompt("Ingresa una cadena de texto")
    acumuladora += cadena;
}
while(confirm("Desea ingresar otra cadena?"))
alert(acumuladora);

    

