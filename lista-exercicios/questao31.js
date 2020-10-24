function qtdNeg() {
    let qtdNeg = 0
    for(i in arguments){
        if(arguments[i] < 0){
            qtdNeg++
        }
    }
    return qtdNeg
}

console.log(qtdNeg(1, 2, 4, 5, 6, -1, -2, -9000, 4, 4, 5, -9000, -2))