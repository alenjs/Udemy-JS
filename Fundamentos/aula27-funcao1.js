//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// as funçoes em js são flexiveis, use a seu favor, exemplos

//soma um valor+Undefined = NaN
imprimirSoma(2)

//pega os dois parametros e ignora os demais
imprimirSoma(2, 10,04,5,6,7,8)

//soma dois undefined = NaN
imprimirSoma()



//funcao com retorno
function soma (a, b=0){
    //valor padrão da variavel b é zero nesta função, novidade do ES6
    return a + b 
}
console.log (soma(2,3 ))

//vai somar com valor padrão em b
console.log(soma(2))
