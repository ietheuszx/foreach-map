/*
Questão 06 – Crie um algoritmo usando o método forEach() para imprimir 
apenas os elementos pares de um array? 
*/

let pb = [1, 2, 3, 4, 5]
let pares = pb.forEach(function(num){
    if (num % 2 == 0) {
        console.log(num)
    }
})