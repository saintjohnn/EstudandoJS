let idades = [16,20,19,18,17]

/*
function verificaMaiorQue18 (idade){
    if(idade >= 18) {
        return idade
    }
}
*/

let idadesMaioresQue18 = idades.filter(verificaMaiorQue18 => {
    if (verificaMaiorQue18 > 18){
        return "verificaMaiorQue18"
    }
})

//console.log(idades)
console.log(idadesMaioresQue18)