let valor1, valor2;

valor1 = parseInt(prompt("Digite um valor: "));
valor2 = parseInt(prompt("Digite outro valor: "));

if (valor1 > valor2){
    window.alert(`O ${valor1} é maior que ${valor2}. Diferença de ${valor1 - valor2}`);
}else{
    window.alert(`O ${valor2} é maior que ${valor1}. Diferença de ${valor2 - valor1}`);
}