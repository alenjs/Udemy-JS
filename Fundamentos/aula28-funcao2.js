// armazendando uma função em uma variável

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
//Funções de uma única linha
//Palavra 'function' pode ser omitida
const soma = (a, b) => {
    return a+b
}
console.log(soma(2,3))

//retorno implicito para uma única linha/sentença de código
// sintaxe da função é extremamente curto, pode causar estranheza no código
const subtração = (a,b) => a - b
console.log(subtração(2, 3))


