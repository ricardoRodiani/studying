let mudaVetor = (vetor1, vetor2) => {
    for(i = 0; i < vetor2.length; i++){
        vetor1[i] = vetor1[i] + vetor2[i] // a recebe a + b = a+b
        vetor2[i] = vetor1[i] - vetor2[i] // b recebe a+b-b = a
        vetor1[i] = vetor1[i] - vetor2[i] // a recebe a+b-a = b
    }
}

let vetor1 = [1, 2, 3]
let vetor2 = [2, 7, 9]
mudaVetor(vetor1, vetor2)
console.log('Novo vetor A: ' + vetor1)
console.log('Novo vetor B: ' + vetor2)