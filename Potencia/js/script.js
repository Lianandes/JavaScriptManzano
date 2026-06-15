let base, expoente, resultado;

base = parseInt(prompt("Qual a base? "));
expoente = parseInt(prompt("Qual o expoente? "));

resultado = base ** expoente;

window.alert(`O resultado da potencia da base ${base} elevado a ${expoente} é: ${resultado}`)