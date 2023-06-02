/*
- Funcoes sao blocos de codigos reutilizaveis
- Ou seja,evitamos a repeticao logica de um programa em diversas partes do codigo
- A funcao precisa ser invocada para ser executada
*/




/*
let corSite = "azul"
function resetaCor(){
    corSite = "amarelo"
}

console.log(corSite)
resetaCor()
console.log(corSite)
*/

/*
function dizerNome(nome){
    console.log("O nome:" + nome)
}

dizerNome("Pedro")
dizerNome("John")
dizerNome("Shaye")
*/

/*
function produto(a,b) {
    return a * b;
}

console.log(produto(10,10))
*/

/*
const minhaFuncao = (mensagem) => {
    console.log("minhaFuncao executada", mensagem)
    return "minhaFuncao executada" + mensagem
}

console.log(minhaFuncao("hello"))
*/

/*
const dobrar = number => number * number

console.log(dobrar(2))
*/


function criarPessoa(nome) {
    return {nome}
}

const pessoa = criarPessoa
const john = pessoa("John")
console.log(john)

const pessoa0 = name => {
    return {name}
}

console.log(pessoa0("John"))
 


