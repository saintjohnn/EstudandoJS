/*
    O metodo splice()

    - adiciona novos itens no array.
    - remove itens do array.

    O PRIMEIRO parametro especifica em que POSICAO adicionar / remover

    O SEGUNDO parametro define o numero de itens a serem removidos

    O restante dos parametros define os novos itens a serem adicionados
*/



const frutas = ["Uva","Jambo","Morango","Manga"]

console.log(frutas)

frutas.splice(3,1,"Caju")
console.log(frutas)

