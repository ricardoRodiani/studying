function contemChars(str1, str2) {
    let contem
    let s1 = str1.toLowerCase()
    let s2 = str2.toLowerCase()
    for(let i = 0; i < s1.length; i++){
        for(let j = 0; j < s2.length; j++){
            if(s1[i] == s2[j]){
                contem = true
                break // quebra o laço loop próximo
            }
            else{
                contem = false
            }
        }
        if(!contem){
            return contem
        }
    }
    return contem
}

console.log(contemChars('abc', 'cbA'))