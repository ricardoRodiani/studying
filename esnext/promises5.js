const { reject } = require("lodash");

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.1)
    .then(valor => console.log(`Valor: ${valor}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))