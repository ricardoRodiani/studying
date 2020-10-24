function estaoIntervalo() {
    let contDentro = 0
    let contFora = 0
    for(i = 0; i < arguments.length; i++) {
        if(arguments[i] >= 10 && arguments[i] <= 20){
            contDentro++
        } else {
            contFora++
        }
    }
    return `Valores fora do intervalo = ${contFora}, dentro do intervalo = ${contDentro}`
}

console.log(estaoIntervalo(1, 2, 3, 4, 5, 10, 12, 20, 21))