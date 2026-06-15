let numero;

for(numero = 0; numero < 21; numero++){
    if(numero % 2 !== 0){
        window.alert("Números impares! " + numero);
    }else{
        continue;
    }
}