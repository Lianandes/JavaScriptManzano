let antes = 0, depois = 1, soma;

for(let i = 0; i < 15; i++){
    soma = antes + depois;
    window.alert(`${soma}`);

    antes = depois;
    depois = soma;
}