var funcs = []

for (let i = 0; i < 10; i++){
    funcs.push( function(){console.log(i)} )
}

//acessar os valores adicionados durante o loop
// a função function() consegue acessar o valor de let i no momento certo
funcs[2]()
funcs[8]()
