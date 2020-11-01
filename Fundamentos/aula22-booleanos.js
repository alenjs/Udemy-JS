let isAtivo = false
console.log (isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log (!! isAtivo)
console.log ('os verdadeiros...')
console.log (!! 3, "numeros")
console.log (!! -1,'numero negativo') 
console.log (!! ' ', 'string' ) 
console.log (!! [], 'array') 
console.log (!! {}, 'objeto literal')
console.log (!! Infinity, 'Infinity =  divisao por zero') 
console.log (!! (isAtivo = 0), 'conteudo zero assume como falso')

console.log ('os falsos')
console.log (!! 0, 'zero sempre é falso')
console.log (!! '', 'string vazia sempre é falso')
console.log (!! null, 'nulo')
console.log (!! NaN, 'not a number')
console.log (!! undefined, 'undefined')
console.log (!! (isAtivo = false), 'atribuir falso')

console.log('pra finalizar')
console.log (!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log (nome || 'Desconhecido') //saber o nome de uma variavel para formularios
//muito comum em javascript para saber se usuario digitou



