for (var i = 0; i < 10; i++) { // var i não tem escopo de bloco, ou seja, esta visível fora do bloco também
    console.log(i)
}

console.log('i =', i)