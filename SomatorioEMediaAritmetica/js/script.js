let soma = 0, media; //Precisa ter valor na variavel Soma, pois ela é vazia quando criada.

// O i é a quantidade de vezes que vai ser pedido o número. Numero vai ser a caixa de informação, e assim a soma 0 será 0 + numeroInformado.
for(i = 1; i <= 10; i++){
    let numero = parseInt(prompt(`Digite ${i} valor: `));
    soma = soma + numero;
}

media = soma / 10;

window.alert(`A somatoria total é: ${soma}`);
window.alert(`A média aritmética é: ${media}`);