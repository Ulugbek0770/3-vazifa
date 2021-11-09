var num1 = +prompt("Birinchi soni kriting")
var num2 = +prompt("Ikkinchi soni kriting")
var num3 = +prompt("Uchinchi soni kriting")

if( num1 < num2 && num2 < num3) {
    alert(" O`rta son " + num2)
}
else if (num1 > num2 && num2 > num3){
    alert("O`rta  son " + num2)
}
else if ( num1 > num2 && num1 < num3){
    alert("Orta son " + num1)
}

else if (num1 < num2 && num1 > num3) {
    alert("O`rta son " + num1)
}

else if (num1 < num3 && num2 > num3) {
    alert("Orta son " + num3)
}
else if (num1 > num3 && num2 < num3){
    alert("O`rta son " + num3)
}

else{
    alert("Siz 2 yoki 3 ta bir hil son kritdingiz")


    // if( num1 == num2 && num2 < num3 && num2 > num3 && num3 > num1 && num3 < num1){
    //     alert("Siz 2 ta bir xil son kritdingiz")
    // }

    // else if (num2 == mun3 && num1 > num2 && num1 < num2 && num1 > num3 && num1 < num3 ){
    //     alert("Siz 2 ta bir xil son kritdingiz")
    // }
    // else if (num1 == num3 && num2 > num3 && num2 < num3 && num1 > num2 && num1 < num2){
    //     alert("Siz 2 ta bir xil son kritdingiz")
    // }
    // else{
    //     alert("Siz 3 ta bir xil son kritdingiz")
    // }
}