let p = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]
const letraMinuscula = string => string.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
    // .then()