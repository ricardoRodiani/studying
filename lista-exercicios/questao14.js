let msg = string => {
    switch(string){
        case 'Maçã':
            return 'Não vendemos essa fruta aqui!'
        case 'Kiwi':
            return 'Estamos com escassez de kiwis'
        case 'Melancia':
            return 'Aqui está, são R$3,00 o quilo'
        default:
            return 'Erro...'
    }
}

console.log(msg('Maçã'))
console.log(msg('Kiwi'))
console.log(msg('Melancia'))
console.log(msg('Banana'))