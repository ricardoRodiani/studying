function valorPlano(idade) {
    let total = 100
    if(idade < 10){
        total += 80
    } else if(idade < 30) {
        total += 50
    } else if(idade < 60){
        total += 95
    } else{
        total += 130
    }
    return total
}

console.log(valorPlano(23))
console.log(valorPlano(7))
console.log(valorPlano(13))
console.log(valorPlano(30))
console.log(valorPlano(60))
console.log(valorPlano(67))