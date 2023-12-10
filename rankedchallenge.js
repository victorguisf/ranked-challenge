// Resultado de Partidas Ranqueadas


let wins = rankedPoints(120,50)
let elo = ""

function rankedPoints (numA, numB){
    let rankedMath = numA - numB
    return rankedMath
}

if(wins <= 10){
    elo = "Ferro"
}else if(wins >= 11 && wins <=20){
    elo = "Bronze"
}else if(wins >=21 && wins <=50){
    elo = "Prata"
}else if(wins >=51 && wins <= 80){
    elo = "Ouro"
}else if(wins >=81 && wins <=90){
    elo = "Diamante"
}else if(wins >=91 && wins <=100){
    elo = "Lendário"
}else if(wins >= 101){
    elo = "Imortal"
}

console.log("O Herói tem de saldo de " + wins + " está no nível de " + elo)