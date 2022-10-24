var pesquisas = []
var mediaIdade = 0
var soma = 0
var maiorIdade = 0
var menorIdade = 999;
var pessimoQuant = 0
var otimoBomQuant = 0
var mQuant = 0
var fQuant = 0

function pesquisa(idade, sexo, opniao) {
    this.idade = idade
    this.sexo = sexo
    this.opniao = opniao
}

var mediaIdade = (pesquisas) => {
    var soma = 0
    this.pesquisas.forEach(ele => {
        soma += ele.idade
    })
    return (soma / pesquisas.length)
}

for (let index = 0; index < 45; index++) {
    idade = parseInt(prompt("Sua Idade"));
    sexo = prompt("Seu sexo, M - masculino F- Feminino")
    opniao = parseInt(prompt("Nota: ótimo=4,bom=3,regular=2,péssimo=1"));
    pesquisas.push(new pesquisa(idade, sexo, opniao))
}

pesquisas.forEach(ele => {
    soma += ele.idade
    if (ele.idade < menorIdade)
        menorIdade = ele.idade
    if (ele.idade > maiorIdade)
        maiorIdade = ele.idade
    if (ele.opniao == 1)
        pessimoQuant++;
    if (ele.opniao > 2)
        otimoBomQuant++
        if (ele.sexo == 'm' || ele.sexo == 'M')
            mQuant++
            else
                fQuant++
})

alert("A media de idade é: " + (soma / pesquisas.length))
alert(`A pessoa mais velha tem: ${maiorIdade} anos e a mais nova tem ${menorIdade}`)
alert(`${pessimoQuant} Pessoas responderam com pessimo`)
alert(`${(otimoBomQuant/pesquisas.length) * 100}% das pessoas responderam bom ou otimo`)
alert(`${mQuant} Homens e  ${fQuant} mulheres responderam `)