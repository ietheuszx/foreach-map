/*
Questão 07 – Crie um algoritmo usando o método map() para calcular o 
quadrado de cada número em um array?
*/

let numeros = [1, 2, 3, 4, 5]
let dz7 = numeros.map(function(num){
    return num * num
})
console.log(dz7)