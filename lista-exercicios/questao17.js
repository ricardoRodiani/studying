function aumento(salario, plano){
    switch(plano) {
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.2
        default:
            return 'Plano inválido!'
    }
}
console.log(aumento(1200, 'A'))
console.log(aumento(1500, 'A'))
console.log(aumento(1600, 'A'))
console.log(aumento(1780, 'B'))
console.log(aumento(1654, 'B'))
console.log(aumento(1400, 'C'))
console.log(aumento(1800, 'D'))