function notas(valor) {
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0
    while(valor > 0){
        if(valor % 100 == 0){
            notas100++
            valor -= 100
        } else if(valor % 50 == 0){
            notas50++
            valor -= 50
        } else if(valor % 10 == 0){
            notas10++
            valor -= 10
        } else if(valor % 5 == 0){
            notas5++
            valor -= 5
        } else if(valor % 1 == 0) {
            notas1++
            valor -= 1
        }
    }
    let vetor = [notas100, notas50, notas10, notas5, notas1]
    return imprimirResultado(vetor, valor)
}

function imprimirResultado(params, valor) {
    let resultado = ''
    if(params[0] > 0){
        resultado += `${params[0]} nota(s) de R$100,00. `
    }
    if(params[1] > 0){
        resultado += `${params[1]} nota(s) de R$50,00. `
    }
    if(params[2] > 0){
        resultado += `${params[2]} nota(s) de R$10,00. `
    }
    if(params[3] > 0){
        resultado += `${params[3]} nota(s) de R$5,00. `
    }
    if(params[4] > 0){
        resultado += `${params[4]} nota(s) de R$1,00. `
    }
    return resultado
}

console.log(notas(14))
console.log(notas(18))
console.log(notas(289))
console.log(notas(300))
console.log(notas(50))