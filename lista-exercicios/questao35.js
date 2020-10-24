const vetorPilha = [1, 2, 3, 4 ,5]
const vetorAdiciona = [6, 7, 8, 9, 10]
let vetorTotal = []
for(let i = 0; i < vetorAdiciona.length; i++){
    vetorTotal[i] = vetorPilha[i] + vetorAdiciona[i]
}
console.log(vetorTotal)