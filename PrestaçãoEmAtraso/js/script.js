let tempo, taxa, valor, atraso;

valor = parseFloat(prompt("Qual o valor? "));
tempo = parseFloat(prompt("Quanto tempo de atraso? "));
taxa = parseFloat(prompt("Quanto de taxa? "));

atraso = valor + (valor * taxa / 100) * tempo;

window.alert(`A prestação em atraso é: ${atraso}`)