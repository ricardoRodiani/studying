const verifyScores = string => {
    const vectorScores = string.split(' ')
    let nRecords = 0
    let record = vectorScores[0]
    let worstScore = vectorScores[0]
    for(let i = 1; i < vectorScores.length; i++) {
        if(parseInt(vectorScores[i]) > parseInt(record)){
            record = vectorScores[i]
            nRecords++
        } else if(parseInt(vectorScores[i]) < parseInt(worstScore)) {
            worstScore = vectorScores[i]
        }
    }
    return [nRecords, vectorScores.indexOf(worstScore)+1]
}

console.log(verifyScores('10 20 20 8 25 3 0 30 1'))