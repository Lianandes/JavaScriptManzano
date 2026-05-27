let numero, contador = 1, resultado;

numero = parseInt(prompt("Digite um número inteiro: "));

for (contador > 11; resultado = numero * contador; contador++) { 
    if (contador > 10){
        break;
    }else{
        window.alert(`${numero} * ${contador} = ${resultado}`);
    }
}

