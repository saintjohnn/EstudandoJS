// Divisivel por 3 -> Fizz
// Divisivel por 5 -> Buzz
// Divisivel por 3 e 5 -> FizzBuzz
// Nao divisivel por 3 ou 5 -> entrada
// Nao e um numero -> "It isn't a number"

/*
const ex = fizzbuzz(15)

function fizzbuzz(num){
    if (typeof num !== 'number') {
        return 'It is not a number'
    }
    if (num % 3 === 0 && num % 5 === 0){
        return 'FizzBuzz'
    }
    if (num % 3 === 0) {
        return 'Fizz'
    }
    if (num % 5 === 0) {
        return 'Buzz'
    }
}

console.log(ex)*/

const resultado = fizzBuzz()
console.log(resultado)

function fizzBuzz(valor){
    if (typeof valor !== 'number'){
        return "It isn't a number"
    }
    if (valor % 3 === 0 && valor % 5 === 0){
        return 'FizzBuzz'
    }
    if(valor % 3 === 0) {
        return 'Fizz'
    }
    if(valor % 5 === 0){
        return 'Buzz'
    }
    return valor
}