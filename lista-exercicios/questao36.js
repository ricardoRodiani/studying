function produtoVetor([], valor) {
    let vetor = arguments[0].map(a => a * valor)
    console.log(vetor)
}

function produtoVetor5([], valor) {
    let vetor = arguments[0].map(a => a > 5 ? a * valor : a)
    console.log(vetor)
}

produtoVetor([1, 2, 3, 4, 9], 3)
produtoVetor5([1, 2, 3, 4, 9], 3)
produtoVetor5([6, 5, 5, 7], 2)