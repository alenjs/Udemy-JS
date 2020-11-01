var funcs = []

for (var i = 0; i < 10; i++){
    funcs.push( function(){console.log(i)} )
}

//acessar os valores adicionados durante o loop
// a função function() não consegue acessar a var i dentro do laço por causa do escopo
funcs[2]()
funcs[8]()
