//tirar 
function rand ( [min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] //destructuring para inverter as variaveis [x,y]= [y, x] sem usar var temporaria
    const valor =  Math.random() * (max - min) + min
    return Math.floor(valor) //arredonda para menor inteiro abaixo
}
console.log(rand([50, 40]))
//passar apenas 1
console.log(rand([992]))

//passar uma array vazia
console.log(rand([]))


