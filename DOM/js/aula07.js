/* Arquivo JS aula 07 DOM */

/*

DOM = Document Object Model
Arvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento HTML que formam os conteudos.

navigator
window
 location
 document -> html -> head e body
 history

*/

/* 

PARA MANIPULAR O DOM PRECISAMOS:

- indicar qual objeto usar,depois chamar um metodo(funcao) para selecionar ele, seus dados, trazer informacoes, etc.

-> .querySelector()

- selecionar elemento com base na tag, #id ou .class

*/

const titulo = document.querySelector("h1")

/* 

.textContent

- a propriedade ou atributo textContent serve para acessar ou alterar conteudo de um elemento que foi selecionado

*/ 

titulo.textContent = 'SCRIPT'
titulo.style.color = 'blue'
titulo.style.backgroundColor = 'black'
titulo.style.borderRadius = '3px' 
titulo.style.border = '3px solid red'

/* 

.querySelectorAll()

- seleciona todos os elementos com base na TAG, #ID ou .CLASS

*/

const testando = document.querySelectorAll('.box')
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
testando[0].textContent = "FIGHT THE POWER"

/*

Existem tambem os metodos:

.getElementsByTagName()
.getElementsById()
.getElementsByClassName()

mas,prefira usar o . querySelector()

*/