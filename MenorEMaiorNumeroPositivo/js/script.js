let maior, menor;
let numero = parseInt(prompt("Digite um valor positivo: "));

while (numero >= 0) { // roda enquanto o número for positivo
    
    if (maior === undefined) { // primeiro número lido
        maior = numero;
        menor = numero;
    } else {
        if (numero > maior) maior = numero;
        if (numero < menor) menor = numero;
    }

    numero = parseInt(prompt("Digite um valor positivo: ")); // lê o próximo
}

window.alert("Maior valor: " + maior);
window.alert("Menor valor: " + menor);