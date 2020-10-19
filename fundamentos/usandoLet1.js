let numero = 1
{
    let numero = 2
    console.log('dentro =', numero) // Procura no escopo menor antes de ir para o "global"
}
console.log('fora =', numero)