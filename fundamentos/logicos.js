function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprar32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprar32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return{ comprarSorvete, comprarTv50, comprar32, manterSaudavel } // obj reduzido
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))