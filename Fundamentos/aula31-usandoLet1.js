//variavel var e let com mesmo nome, mas em escopos diferentes
var numero = 1
{
    // variavel let tem escopo do bloco onde foi definida
    let numero = 2
    console.log ('dentro de =', numero)
}
console.log('fora de =', numero)

