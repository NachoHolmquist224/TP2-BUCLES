let sumador = 0
do{
    const num = parseInt(prompt("Ingresa un numero"))
    if(isNaN(num)){
        alert("Ingresaste un valor erroneo")
    }
    else{
        sumador += num;
    }
}
while(confirm("Desea ingresar otro numero?"))
alert(`El numero total es: ${sumador}`);