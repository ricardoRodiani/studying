function calculaPreco(cod, qtd) {
    switch(cod){
        case 100:
            return `Cachorro quente x${qtd} = R$${3*qtd}`
        case 200:
            return `Hambúrguer simples x${qtd} = R$${4*qtd}`
        case 300:
            return `Chessburguer x${qtd} = R$${5.5*qtd}`
        case 400:
            return `Bauru x${qtd} = R$${7.5*qtd}`
        case 500:
            return `Refrigerante x${qtd} = R$${3.5*qtd}`
        case 600:
            return `Suco x${qtd} = R$${2.8*qtd}`
        default:
            return 'Produto não existente!'
    }
}

console.log(calculaPreco(100, 3))
console.log(calculaPreco(100, 2))
console.log(calculaPreco(200, 4))
console.log(calculaPreco(300, 4))
console.log(calculaPreco(400, 5))
console.log(calculaPreco(500, 6))
console.log(calculaPreco(600, 2))
console.log(calculaPreco(700, 2))