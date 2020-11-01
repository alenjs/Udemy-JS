//par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec (){
    const saudacao = 'falaa' //contexto léxico 2
    return saudacao
}

//variaveis com mesmo nome em contextos diferentes (dentro e fora de uma função)
//não causam conflito, porém melhor evitar declarar

/* declarar um objeto usando coleção de par chave/valor
inclusive um objetos aninhados
*/
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log (saudacao)
console.log(exec())
console.log(cliente)


