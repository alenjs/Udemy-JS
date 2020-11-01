
function tratarErroELancar(erro) { //tratamento do erro 
   
    //seguem exemplos de tratamento do erro
    //throw new Error('Ocorreu um erro') //pode lançar essa mensagem com o log de erro normal
    //throw 10 //pode colocar somente para mostrar um código 10 numérico, sem o log normal de erro
    //throw true //pode pode mostrar um true/false
    throw {// pode mostrar/criar um outro objeto e/ou com os os dados do erro, onde é possível refinar o tratamento
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try { //tente fazer isso
        //exemplos de código com erro em cada linha para teste

        //console.log(obj.nome.toUpperCse() + '!!!') //método toUpperCase() escrito errado

        //console.log( c ) //variável não definida
        
        var ax = 
        console.log( Math.sqrt(ax) )   //variável não definida
        
    } catch (e) {// senão, pegue esse erro
        tratarErroELancar(e) // e faça isso, neste caso criou um função para tratar
    }

    finally { //mesmo que dê certo vai chamar esse procedimento
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)


