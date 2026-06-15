let nota1, nota2, nota3, nota4, media;

nota1 = parseFloat(prompt("Qual é sua primeira nota? "));
nota2 = parseFloat(prompt("Qual é sua segunda nota? "));
nota3 = parseFloat(prompt("Qual é sua terceira nota? "));
nota4 = parseFloat(prompt("Qual é a quarta nota? "));

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media < 5){
    window.alert(`Você foi reprovado: ${media.toFixed(2)}`)
} else{
    window.alert(`Você foi aprovado! ${media.toFixed(2)}`)
}

