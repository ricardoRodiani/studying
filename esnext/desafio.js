const fs = require('fs')
const caminho = __dirname + '/dados.txt'

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (error, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)