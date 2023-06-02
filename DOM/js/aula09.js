const titulo = document.querySelector("h1")
titulo.textContent = 'FIGHT THE POWER'
//titulo.innerHTML = 'POWER'

const imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'https://serialcookies.com.br/wp-content/uploads/2020/03/Tengen-toppa-gurren-lagann-wallpapers-4.png')

imagem.setAttribute('width', '300px')

/* (O metodo setAttribute significa setar um atributo,ou seja,configura-lo. Ele tem basicamente 2 parametros: o primeiro e o nome do atributo que ira ser setado,e o segundo parametro e o valor que ira ser definido para esse atributo) */ 

/* MANIPULAR CSS */

//document.querySelector("h1").style.color = "red"

titulo.style.color = "red"
titulo.style.backgroundColor = "black"
titulo.style.borderRadius = "5px"
titulo.style.border = '2px solid red'

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'azul')
//box[0].removeAttribute('class')

/* MODOS DE COR */

const tela = document.querySelector('main')

const btnDark = document.querySelector('#btdark')

const btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault()
    console.log('modo dark')
    tela.classList.add('dark')
    tela.classList.remove('light')
}

function modoLight() {
    //event.preventDefault()
    console.log('modo light')
    tela.classList.remove('dark')
    tela.classList.add('light')
}



