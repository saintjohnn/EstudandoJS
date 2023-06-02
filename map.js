/*
const cores = ['blue','red','green','black','pink']

let c = cores.map((cor,i)=>{
    return cores 
})

console.log(c)
*/

/*
const num = [0,1,2,3,4,5,6,7]

let produto = num.map(number => number * 2)

console.log(produto)
*/

/*
const listaDePessoasAprovadas = [
    '1@ex.com',
    '2@ex.com',
    '3@ex.com'
]

let listasEmails = []

listasEmails = listaDePessoasAprovadas.map((email,i)=>{
    return {email: email, nota:i}
})

console.log(listasEmails)
*/

/*
const pessoas = [
    {
        id: 1,
        nome: 'Joaquim',
        idade:25,
        pais:'Brasil',
        estado: 'RS',
        cpf:'123456789'
    },
    {
        id:2,
        nome:'Renato',
        idade:30,
        pais:'Portugal',
        estado: 'BH',
        cpf:'21202120'
    }
]

let = pessoasSimplificado = pessoas.map( dados =>{
    let pessoa = {}
    pessoa.nome = dados.nome
    pessoa.estado = dados.idade
    return pessoa
})

console.log(pessoasSimplificado)
console.log(pessoas)
*/

/*
const arr = [
    1,
    '2',
    true,
    3,
    [1,'3',[1,'hjh',{name:"Bruna"}]],
    '3e',
    5,
    10,
    null,
    NaN,
    "NaN",
    '6',
    '22',
    "",
    "23",
    "1"

]

function transformaString(arr){
    const value1 = arr.filter((valor)=>{
        if (typeof valor === "string") {
            return valor            
        }
    })
    console.log(value1)

    const value2 = value1.filter((valor)=>{
        return Number(valor)
    })
    console.log(value2)

    const finalValue = value2.map((valor)=>{
        return valor * 2
    })
    console.log(finalValue)
}

transformaString(arr)
*/


const arr = [
    1,
    '2',
    true,
    3,
    [1,'3',[1,'hjh',{name:"Bruna"}]],
    '3e',
    5,
    10,
    null,
    NaN,
    "NaN",
    '6',
    '22',
    "",
    "23",
    "1"

]


function dobroDasStringsNumericas(arr){    
    const getsStringsFromArr = arr.filter((valor)=>{
        if (typeof valor === "string") {
            return valor            
        }
    })
    

    const convertStringsToNumber = getsStringsFromArr.filter((valor)=>{
        return Number(valor)
    })
    

    const getsDouble = convertStringsToNumber.map(valor => valor * 2)
        return getsDouble
}

console.log(dobroDasStringsNumericas(arr))

function getArray(arr){
    const calc = dobroDasStringsNumericas(arr).reduce((acumulador,atual)=>{
        return acumulador + (atual**2)-1
    },0)
    return calc
}

console.log(getArray(arr))
