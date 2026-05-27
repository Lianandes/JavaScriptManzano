let numero1, numero2, quadrado1, quadrado2, resultado;

numero1 = parseInt(prompt("Digite um número inteiro: "));
numero2 = parseInt(prompt("Digite outro número inteiro: "));

quadrado1 = numero1 * numero1;
quadrado2 = numero2 * numero2;
resultado = quadrado1 - quadrado2;

window.alert(`O quadrado um deu ${quadrado1} e o dois deu ${quadrado2}, a diferença é de ${resultado}`)