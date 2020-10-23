function comprar(opcao) {
    switch(opcao){
        case 'Hatch':
            return 'Compra efetuada com sucesso!'
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(comprar('Hatch'))
console.log(comprar('Sedan'))
console.log(comprar('Motocicleta'))
console.log(comprar('Caminhonete'))
console.log(comprar('Lancha'))
console.log(comprar('Hatch'))