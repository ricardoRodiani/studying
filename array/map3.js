Array.prototype.map2 = function (callback) {
    const array = []
    let elemento
    for(let i = 0; i < this.length; i++){
        elemento = callback(this[i], i, this)
        array.push(elemento)
    }
    return array
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

// Retornar um array apenas com os preços

const retornaJSON = e => JSON.parse(e)
const retornaPreco = e => e.preco
console.log(carrinho.map2(retornaJSON).map2(retornaPreco))