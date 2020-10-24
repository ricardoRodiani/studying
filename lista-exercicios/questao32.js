function mediaAritmetica() {
    let total = 0
    for(i in arguments) {
        total += arguments[i]
    }
    return total/arguments.length
}

console.log(mediaAritmetica(1, 2, 3, 6, 7, 8, 9, 10, 4 ,5))