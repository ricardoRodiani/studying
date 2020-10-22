function retornaDinheiro(valor) {
    const array = valor.toFixed(2).split('.')
    return console.log(`R$${array[0]},${array[1]}`)
}

retornaDinheiro(0.1+0.2)