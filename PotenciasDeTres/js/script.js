let resultado;
const base = 3;

for (let expoente = 0; expoente < 16; expoente++){
    resultado = base ** expoente;
    if(resultado == 0){
        resultado = 1;
    } else{
        resultado = resultado;
    }
    alert(`O resultado da ${base} elevada a ${expoente} é: ${resultado}`)
}

