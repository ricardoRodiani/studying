function jurosSimples(capital, taxa, tempo) {
    const montante = capital * (1 + taxa * tempo)
    return montante
}

function jurosCompostos(capital, taxa, tempo) {
    const montante = capital * Math.pow((1 + taxa), tempo)
    return montante
}

console.log(`Montante final usando juros simples = R$${jurosSimples(1000, 0.25, 12).toFixed(3).replace('.',',')}`)
console.log(`Montante final usando juros simples = R$${jurosCompostos(2000, 0.04, 4).toFixed(3).replace('.',',')}`)