let valor1, valor2, valor3, valor4;

valor1 = parseInt(prompt("Digite um valor inteiro: "));
valor2 = parseInt(prompt("Digite o segundo valor inteiro: "));
valor3 = parseInt(prompt("Digite o terceiro valor inteiro: "));
valor4 = parseInt(prompt("Digite o quarto valor inteiro: "));

if (valor1 % 2 === 0 && valor1 % 3 === 0) {
    window.alert(`O ${valor1} é dividivel por 2 e 3. `)
} else if (valor2 % 2 === 0 && valor2 % 3 === 0){
    window.alert(`O ${valor2} é divisivel por 2 e 3.`)
} else if (valor3 % 2 === 0 && valor3 % 3 === 0){
    window.alert(`O ${valor3} é divisivel por 2 e 3.`)
} else if (valor4 % 2 === 0 && valor4 % 3 === 0){
    window.alert(`O ${valor4} é divisivel por 2 e 3.`)
}

