do{
    const dni = parseInt(prompt("Ingresa tu DNI:"));
    const resto = dni % 23;

    if(isNaN(dni)){
        alert("Ingresaste un valor erroneo")
    }
    else{
        switch(resto){
            case 0:
                alert("Tu letra es: T")
                break;
            case 1:
                alert("Tu letra es: R")
                break;
            case 2:
                alert("Tu letra es: W")
                break;
            case 3:
                alert("Tu letra es: A")
                break;
            case 4:
                alert("Tu letra es: G")
                break;
            case 5:
                alert("Tu letra es: M")
                break;
            case 6:
                alert("Tu letra es: Y")
                break;
            case 7:
                alert("Tu letra es: F")
                break;
            case 8:
                alert("Tu letra es: P")
                break;
            case 9:
                alert("Tu letra es: D")
                break;
            case 10:
                alert("Tu letra es: X")
                break;
            case 11:
                alert("Tu letra es: B")
                break;
            case 12:
                alert("Tu letra es: N")
                break;
            case 13:
                alert("Tu letra es: J")
                break;
            case 14:
                alert("Tu letra es: Z")
                break;
            case 15:
                alert("Tu letra es: S")
                break;
            case 16:
                alert("Tu letra es: Q")
                break;
            case 17:
                alert("Tu letra es: V")
                break;
            case 18:
                alert("Tu letra es: H")
                break;
            case 19:
                alert("Tu letra es: L")
                break;
            case 20:
                alert("Tu letra es: C")
                break;
            case 21:
                alert("Tu letra es: K")
                break;
            case 22:
                alert("Tu letra es: E")
                break;
        }
       
    }

}
while(confirm("Desea ingresar otro DNI?"))


