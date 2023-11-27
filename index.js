//Declaração das varíaveis
let quantidadeVitorias = 100
let quantidadeDerrotas = 5
let saldoVitorias
let nivelDoHeroi

//Função que calcula a pontuação de vitórias do herói
function calcularPontuacao(quantidadeVitorias, quantidadeDerrotas) {
    let saldoVitorias = quantidadeVitorias - quantidadeDerrotas
    return saldoVitorias
}

saldoVitorias = calcularPontuacao(quantidadeVitorias, quantidadeDerrotas)

//Função que classifica o nível do herói
function classificarNivel(saldoVitorias) {
    let nivelDoHeroi
    if (saldoVitorias <= 10) {
        nivelDoHeroi = "Ferro"
    } else if (saldoVitorias <= 20) {
        nivelDoHeroi = "Bronze"
    } else if (saldoVitorias <= 50) {
        nivelDoHeroi = "Prata"
    } else if (saldoVitorias <= 80) {
        nivelDoHeroi = "Ouro"
    } else if (saldoVitorias <= 90) {
        nivelDoHeroi = "Diamante"
    } else if (saldoVitorias <= 100) {
        nivelDoHeroi = "Lendário"
    } else if (saldoVitorias > 100) {
        nivelDoHeroi = "Imortal"
    }
    return nivelDoHeroi
}

nivelDoHeroi = classificarNivel(saldoVitorias)

//Exibição da mensagem no console
console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivelDoHeroi}`)