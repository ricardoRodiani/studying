// Função sem retorno
function imprimmirSoma(a, b) {
    console.log(a + b)
}

imprimmirSoma(2, 3)
imprimmirSoma(2)
imprimmirSoma(2, 10, 4, 5, 6 , 7, 8)
imprimmirSoma()

// Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())