function opcoes(ganha, perde, label) {
    this.ganha = ganha,
        this.perde = perde,
        this.label = label
}

var tesoura = new opcoes("papel", "pedra", "tesoura");
var papel = new opcoes("pedra", "tesoura", "papel");
var pedra = new opcoes("tesoura", "papel", "pedra");

function checarResultado(opcao) {
    robo = pegarTipo(Math.floor(Math.random() * 3) + 1);
    if (opcao.label == robo.perde)
        alert("O robo escolheu: " + robo.label + " Voce ganhou");
    else if (opcao.label == robo.ganha)
        alert("O robo escolheu: " + robo.label + " Voce perdeu");
    else
        alert("O robo escolheu: " + robo.label + " Empatou");
}


function pegarTipo(n) {
    switch (n) {
        case 1:
            return tesoura;
            break;
        case 2:
            return papel;
            break;
        case 3:
            return pedra;
            break;
        default:
            return undefined;
    }
}


while (1) {
    var opcoesEscol = prompt("Escolha um numero 1- tesoura 2- papel 3-pedra, 4 para fechar");
    try {
        if (parseInt(opcoesEscol) == 4)
            break;
        var tipoEscolhido = pegarTipo(parseInt(opcoesEscol));
        if (tipoEscolhido == undefined)
            alert("Opção invalida")
        else
            checarResultado(tipoEscolhido);
    } catch (error) {

    }

}