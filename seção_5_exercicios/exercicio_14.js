//  * ATIVIDADE *

// escreva um loop for ou while que exiba qual numero é par e qual é impar
//o contador deve iniciar em 0 até 50

for (let i = 0; i <= 50; i++) {
        
    if (i % 2 == 0) {
        console.log(`O número ${i} é par`)
    } else {
        console.log(`O número  é ${i} impar`)
    }  
}


let x = 0
while (x < 50) {  
    x++
    if (x % 2 == 0) {
        console.log(`O número ${x} é par`)
    } else {
        console.log(`O número  é ${x} impar`)
    }  
}

