const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

// Desafio 2: Algum aluno é bolsista?

const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
})
const algumBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
})

console.log(todosBolsistas ? 'Sim são todos bolsistas' : 'Não são todos bolsistas')
console.log(algumBolsista ? 'Sim, temos pelo menos 1 bolsista' : 'Não temos nenhum bolsistas')