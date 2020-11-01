//variavel tipo var tem dois escopos: global ou de função

//variavel global
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}

//variavel global ficara vísivel fora do bloco de código onde foi definida
//! evitar variável global por motivo de segurança, sobrescrita ou comportamento inesperado
console.log (sera)

// variavel var no escopo de função só é acessivel dentro dela
function teste () {
    var local = 123
    console.log(local)
}
teste()

// dá erro ao tentar acessar variavel definida dentro de uma função
console.log(local)  //erro



