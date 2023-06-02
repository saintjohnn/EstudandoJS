/*
// SOMAR TODOS OS ITENS DO ARRAY
const numbers = [1,2,3,4,5,6,7,8,9]
const somar = numbers.reduce((valorAcumulado,valorAtual)=>{
    return valorAcumulado + valorAtual
},0)

console.log(somar)
*/


// RETORNAR O MAIOR VALOR DE UM ARRAY
const numeros = [20,35,90,100]

const maiorValorFinal = numeros.reduce((maiorValor,item)=>{
    return Math.max(maiorValor,item)
},0)

console.log(maiorValorFinal)
