const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums) {
    if(x == 5) break // não age sobe if, age no bloco mais próximo do tipo while/for/stwitch
    console.log(`${x} = ${nums[x]}`)
}

for ( y in nums ) {
    if (y == 5) continue // "pula" no continue
    console.log(`${y} = ${nums[y]}`)
}

externo:
for( a in nums ) {
    for(b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`par = ${a},${b}`)
    }
}

console.log('Fim!')