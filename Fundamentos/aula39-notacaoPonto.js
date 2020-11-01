console.log(Math.ceil (6.1))

const obj1 = {}
obj1.nome = 'Bola'

function Obj (nome){
    this.nome = nome //torna público a varivel nome com notação ponto ('this'.)
    this.exec = function( a, b, ...args){ //rest parameter (...args)
        console.log(2,3,5,6,7,8,9,0)
    }
}

const obj2 = new Obj('Cadeira')

const obj3 = new Obj('mesa')

console.log (obj2.nome)
console.log (obj3.nome)
obj3.exec() // variavel recebe uma função /instanciada fora da função com 'this'


