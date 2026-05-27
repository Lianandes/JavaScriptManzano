let numero, resultado;

numero = parseInt(prompt("Digite um número inteiro: "));

if (numero < 0){
    window.alert(`O número é negativo! Em positivo é: ${numero * -1}`)
} else{
    window.alert(`O número é positivo!`)
}

