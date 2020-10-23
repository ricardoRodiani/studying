function diaUtil(dia) {
    switch(dia%7){
        case 1:
            console.log('Não é dia útil')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log('É dia útil')
            break
        case 7:
            console.log('Não é dia útil')
            break
        default:
            console.log('Dia inválido!') 
    }
}

diaUtil(3)
diaUtil(7)
diaUtil(1)
diaUtil(13)
diaUtil(-13)
diaUtil(51)