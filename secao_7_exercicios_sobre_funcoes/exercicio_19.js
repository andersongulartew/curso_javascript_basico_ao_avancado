// * ATIVIDADE *
// escreva uma função que retorne um número aleatório;
// o numero máximo retornado deve ser passado via parametro;

function numeroAleatorio(num) {
    return Math.floor(Math.random() * num ) + 1;
}
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(100));
console.log(numeroAleatorio(50));