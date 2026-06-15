let valor1, valor2, valor3, soma, quadrado;

valor1 = parseFloat(prompt("Digite um valor: "));
valor2 = parseFloat(prompt("Digite o segundo valor: "));
valor3 = parseFloat(prompt("Digite o terceiro valor: "));

soma = valor1 + valor2 + valor3;
quadrado = soma * soma;

window.alert(`A soma dos três valores é ${soma} e o seu quadrado é ${quadrado}cm²`)