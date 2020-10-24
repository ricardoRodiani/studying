function paresAte100() {
    let resultado = 'Pares até 100: '
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            resultado += `${i} `
        }
    }
    console.log(resultado)
}
paresAte100()