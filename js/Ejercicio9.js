const pantalla = document.getElementById("pantalla")

for (let i = 1; i <= 500; i++){
    
    if(i%4 === 0){
        pantalla.innerHTML += `${i} es multiplo de 4 <br>`
    }
    else if(i%9 === 0){
        pantalla.innerHTML += `${i} es multiplo de 9 <br>`
    }
    else{
        pantalla.innerHTML += i + "<br>"
    }

    if (i%5 === 0){
        pantalla.innerHTML += "---------------------------- <br>"
    }
}