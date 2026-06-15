let continuar = "Sim", areaTotal = 0;

while (continuar !== "Nao") {
    let nomeComodo, larguraComodo, comprimentoComodo;

    nomeComodo = prompt("Qual é o cômodo desejado? ");
    larguraComodo = parseFloat(prompt(`Qual a largura do ${nomeComodo}? `));
    comprimentoComodo = parseFloat(prompt(`Qual o comprimento do ${nomeComodo}? `));

    let area = larguraComodo * comprimentoComodo;
    areaTotal = areaTotal + area;

    window.alert(`A area do ${nomeComodo} escolhido é: que tem ${area}cm²`)
    continuar = prompt(`Quer adicionar mais algum comodo? `)
    continuar = continuar.toUpperCase();
}

window.alert(`A área total da residência é: ${areaTotal}m²`)