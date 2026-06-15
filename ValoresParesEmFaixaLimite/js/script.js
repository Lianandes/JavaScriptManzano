let soma = 0, media, contagem = 0;

// i vai receber a faixa dos 50 e vai até 70.
for(let i = 50; i <= 70; i++){
    // Se durante os numeros que aparecem for Par(Diferente da sobra 1), vai fazer as somas. A contagem vai contar quantas vezes apareceu numeros.
    if(i % 2 !== 1){
        soma = soma + i;
        contagem++
    }
}

media = soma / contagem;

window.alert(`A soma dos números pares são: ${soma}`);
window.alert(`A média aritmética é: ${media}`);