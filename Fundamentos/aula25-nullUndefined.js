const produto ={}

//'A' preco nao definido
console.log ('A',produto.preco)

//'B' objeto vazio 
console.log('B', produto)

produto.preco = undefined//evite atribuir undefined
//'C'testa variavel preço -> undefined é falso por padrão
console.log('C',!!produto.preco)
console.log('C',produto)

//'D' exclui a variavel preco
//delete produto.preco
//console.log('D', produto)

//'E' cria preco novamente a aponta para null
produto.preco = null
console.log('E ', produto)





