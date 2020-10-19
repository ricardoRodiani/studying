const nome = 'Rebeca'
const concantenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concantenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)