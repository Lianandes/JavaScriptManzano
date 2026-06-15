let valor1, valor2, valor3, soma;

valor1 = parseFloat(prompt("Digite um valor: "));
valor2 = parseFloat(prompt("Digite o segundo valor: "));
valor3 = parseFloat(prompt("Digite o terceiro valor: "));

soma = ((valor1 * valor1) + (valor2 * valor2) + (valor3 * valor3));

window.alert(`A soma dos três quadrados são ${soma}`)