// Factory com param

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Tênis Adidas', 300))
console.log(criarProduto('iPad', 1199.49))