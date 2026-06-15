let celsius, resultado;

for(celsius = 10; celsius <= 100; celsius += 10){
    resultado = (9 * celsius + 160) / 5;
    window.alert(`O resultado do ${celsius}°C de 10 em 10 é: ${resultado}`);
}