let pa = (n, a1, r) => {
    let vetorSoma = []
    let soma = 0
    let an
    for(let i = 1; i <= n; i++){
        an = a1 + (i - 1)*r
        vetorSoma.push(an)
        soma += an
    }
    return `[${vetorSoma}] = ${soma}`
}

let pg = (n, a1, r) => {
    let vetorSoma = []
    let soma = 0
    let an
    for (let i = 1; i <= n; i++) {
        an = a1 * Math.pow(r, (i-1))
        vetorSoma.push(an)
        soma += an
    }
    return `[${vetorSoma}] = ${soma}`
}

console.log(pa(10, 2, 3))
console.log(pg(10, 2, 3))