function calculadora(a, b, op) {
    switch(op){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Operador inválido!'
    }
}

console.log(calculadora(2, 3, '+'))
console.log(calculadora(2, 3, '-'))
console.log(calculadora(2, 3, '/').toFixed(2))
console.log(calculadora(2, 3, '*'))
console.log(calculadora(2, 3, '('))
