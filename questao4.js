/*
Questão 04 – Crie um algoritmo usando o método forEach() para encontrar a 
soma de todos os números em um array?
*/

var array = [1, 2, 3, 4, 5]
var soma = 0;

array.forEach(function(num){
    soma+=num
})
console.log(soma)