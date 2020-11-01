const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //chaves {x, y, z} representa o operador de desestruturação, novo operador do EC6
//const não recebe uma variável, mas extrai do objeto 'pessoa' os atributos nome e idade
console.log(pessoa)
console.log(nome, idade)


//outro exemplo do op.desestruturador
const {nome:n, idade: i} = pessoa // retire nome e idade do objeto pessoa e coloque nas variaveis n e i
console.log(n,i)

//exemplo com variáveis não definidas ainda no objeto
const {sobrenome, bemHumorada= true} = pessoa
//bemHumorada = true é o valor padrão caso não retorne nenhum valor
//sobrenome vai retornar undefined pois estava definida no objeto 'pessoa' ainda, não usar desta forma
console.log(sobrenome, bemHumorada)

const {endereço:{logradouro, numero, cep}} = pessoa
console.log(logradouro,numero, cep )


