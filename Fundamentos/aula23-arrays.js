// primeiro elemento indice zero
/* 
! matrizes
*/
const valores  = [7.7, 8.9, 6.3, 9.2]
console.log (valores[0], valores[3])

/* extrapolar o índice não dá erro em js,
mas retorna um valor undefined, erro lógico
*/
console.log (valores[4], 'extrapola o indice') 
//extrapolar o índice

//adicionar valor no  índice
valores[4] = 10
console.log(valores)

console.log(valores.length, 'itens')

//metodo adiciona valores
valores.push({id:3}, false, null, 'teste')
console.log(valores,'tipos diferentes')
/* melhor não misturar tipos dentro da array */

console.log (valores.pop(), 'metodo retira o ultimo e retorna')

delete valores[0]
console.log(valores)

console.log (typeof valores, 'array é um tipo objeto')


