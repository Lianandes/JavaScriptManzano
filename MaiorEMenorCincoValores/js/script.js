let maior, menor;

// Cria variavel i que será o 1° valor e ele vai até o 5°. -> 1; 1 <= 5; 1+1-- 2; 2 <=5....
for (let i = 1; i <= 5; i++) {

    // O valor vai ser lido 5 vezes por causa do loop.
    let valor = parseInt(prompt("Digite o " + i + "º valor: "));
    
    // se o 1°valor for igual a 1°, vai ser maior e menor
    if (i === 1) {
        maior = valor; // primeiro número vira o maior
        menor = valor; // e o menor ao mesmo tempo
    } else {
        if (valor > maior) maior = valor; // achou um maior? atualiza
        if (valor < menor) menor = valor; // achou um menor? atualiza
    }
}

console.log("Maior valor: " + maior);
console.log("Menor valor: " + menor);