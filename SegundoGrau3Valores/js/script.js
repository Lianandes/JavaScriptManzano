let valor1, valor2, valor3, triangulo, calculoMaior, calculoMenor;

valor1 = parseInt(prompt("Digite um valor: "));
valor2 = parseInt(prompt("Digite o segundo valor: "));
valor3 = parseInt(prompt("Digite mais um valor: "));

triangulo = (valor2 * valor2) - 4 * valor1 * valor3; 
// Conferir se vai ser menor ou maior.
calculoMaior = (-valor2 + Math.sqrt(triangulo)) / 2 * valor1
calculoMenor = (-valor2 - Math.sqrt(triangulo)) / 2 * valor1

window.alert(`Esse é o triângulo: ${triangulo}`)
window.alert(`Esse é o final: For menor é ${calculoMenor} for maior é ${calculoMaior}`)