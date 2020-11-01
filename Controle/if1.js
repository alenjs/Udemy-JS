function seForVerdadeeuFalo(valor) {
    //compara se veradeiro como boolean e imprime na tela
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

//util para comparar valores e executar o bloco de código associado
//lembrando que alguns valores são falso por default em JS

seForVerdadeeuFalo()
seForVerdadeeuFalo(null)
seForVerdadeeuFalo(undefined)
seForVerdadeeuFalo(NaN)
seForVerdadeeuFalo('')
seForVerdadeeuFalo(0)
seForVerdadeeuFalo(-1)
seForVerdadeeuFalo(' ')
seForVerdadeeuFalo('alguem')
seForVerdadeeuFalo([1,2])
seForVerdadeeuFalo(Object)
seForVerdadeeuFalo([])
seForVerdadeeuFalo({})

