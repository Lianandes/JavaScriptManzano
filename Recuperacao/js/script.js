let nota1, nota2, nota3, nota4, media, recuperar, resultado;

nota1 = parseFloat(prompt("Digite sua primeira nota? "));
nota2 = parseFloat(prompt("Digite sua segunda nota? "));
nota3 = parseFloat(prompt("Digite sua terceira nota? "));
nota4 = parseFloat(prompt("Digite sua quarta nota: "));

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media < 7){
    recuperar = parseFloat(prompt("Digite sua nota de recuperação: "));
    resultado = media + recuperar;
    if (recuperar < 7){
        window.alert(`Você foi reprovado. ${resultado}`)
    } else{
        window.alert(`Você foi aprovado! ${resultado}`)
    }
} else{
    window.alert(`Você foi aprovado! ${media}`)
}