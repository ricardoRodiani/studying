function triangleType(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoA === ladoC) {
        return console.log('Triângulo Equilátero!')
    } else if(ladoA == ladoB || ladoC === ladoA || ladoB === ladoC) {
        return console.log('Triângulo Isóceles!')
    } else {
        return console.log('Triângulo Escaleno!')
    }
}

triangleType(1, 1, 1)
triangleType(1, 2, 1)
triangleType(2, 2, 1)
triangleType(1, 2, 2)
triangleType(1, 2, 3)
triangleType(2, 2, 2)