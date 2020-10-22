function retornaDinheiro(valor) {
    valorEmReais = `R$ ${valor.toFixed(2).replace(".", ",")}`
    console.log(valorEmReais)
}

retornaDinheiro(0.1 + 0.2)