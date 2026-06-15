let mod, somadora = 0;

for (let numero = 1; numero <= 500; numero++) {
    if (numero % 2 !== 0) {
        continue;
    } else{
        somadora = somadora + numero;
    }
}

window.alert(`A somadora dos pares é: ${somadora}`);