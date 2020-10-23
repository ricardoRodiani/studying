let avaliaAluno = nota => {
    let arrendondar = nota => {  
        if(nota % 5 > 2 && nota >= 38) {
            return nota + 5 - (nota % 5)
        } else {
            return nota
        }
    }
    let novaNota = arrendondar(nota)
    if(novaNota >= 40) {
        console.log(`Aprovado, nota = ${novaNota}`)
    } else {
        console.log(`Reprovado, nota = ${novaNota}`)
    }
}

avaliaAluno(30)
avaliaAluno(100)
avaliaAluno(69)
avaliaAluno(54)
avaliaAluno(39)
avaliaAluno(38)
avaliaAluno(41)
avaliaAluno(42)
avaliaAluno(37)
avaliaAluno(23)