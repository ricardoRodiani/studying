function imprimirParesEImpares() {
    let qtdImpar = 0
    let qtdPar = 0
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] % 2 == 0){
            qtdPar++
        } else {
            qtdImpar++
        }
    }
    console.log(`Qtd pares = ${qtdPar}\nQtd impares = ${qtdImpar}`)
}

imprimirParesEImpares(1, 2, 3, 4, 5, 10, 500, 25)