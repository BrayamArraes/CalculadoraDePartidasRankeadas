// função para calcular nivel

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Laço de repetição para verificar outros Heróis
let continuar = true;
while (continuar) {
    let heroi = prompt("Digite o nome do Herói: ");
    let vitorias = Number(prompt("Digite quantas vitórias você tem: "));
    let derrotas = Number(prompt("Digite quantas derrotas você tem: "));

    let resultado = calcularNivel(vitorias, derrotas);

    console.log("o Heroi " + heroi, "tem um salde de " + resultado.saldoVitorias,"e está no nível de " + resultado.nivel)
    let resposta = prompt("Deseja calcular outro herói? (s/n)").toLowerCase();
    if (resposta !== "s") {
        continuar = false;
    }
}