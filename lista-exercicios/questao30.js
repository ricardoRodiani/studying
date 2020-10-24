function maiorEMenor() {
    let vetor = Object.values(arguments).sort((a, b) => {return a - b;})
    let maior = vetor[vetor.length-1]
    let menor = vetor[0]
    console.log(`Maior = ${maior} Menor = ${menor}`)
}

maiorEMenor(1, 2, 3, 4, 0, 789, 99, 100)