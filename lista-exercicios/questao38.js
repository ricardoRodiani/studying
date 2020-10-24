function imparesEntre([inicio = 0, fim = 100]) {
    if(inicio > fim) [inicio, fim] = [fim, inicio]
    let impares = []
    for(let i = inicio; i <= fim; i++){
        if(i % 2 != 0){
            impares.push(i)
        }
    }
    return impares
}
console.log(imparesEntre([0, 100]))
console.log(imparesEntre([100, 99]))
console.log(imparesEntre([5, 15]))
console.log(imparesEntre([3, 10]))
console.log(imparesEntre([18, 6]))
console.log(imparesEntre([100, 0]))