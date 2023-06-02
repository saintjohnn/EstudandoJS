/*
function verificaIdade(idade) {

    if (idade < 30 && idade >= 18){
        return("pode entrar")
    } else if (idade >= 30) {
        return("nao paga")
    }
    else {
        return("pode ir embora")
    }
}

console.log(verificaIdade())
*/

const numbers = compareNumbers(1,7)
console.log(numbers)

function compareNumbers(x,y){
    return x > y ? x : y;
}
