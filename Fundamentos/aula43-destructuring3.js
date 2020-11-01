// operador destruturador{} -> vai extrair as duas variaveis min e max sem precisar acessar dentro da função depois
function rand ( {min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//variaveis acessíveis fora do corpo da função
console.log (rand({max: 50, min: 40}))

//passar um objeto com min e max
const obj = {max:50, min:40}
console.log(rand(obj))

//passar só um parametro , já que max e min tem valor padrão 
console.log (rand({min:955}))

//passar um objeto vazio
console.log( rand({}))



