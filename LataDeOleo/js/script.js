let raio, altura, volume;

const NumeroPi = 3.14;

altura = parseFloat(prompt("Qual a altura da lata de óleo? "));
raio = parseFloat(prompt("Qual o raio da lata de óleo? "));

volume = NumeroPi * (raio * raio) * altura;

window.alert(`O volume da lata de óleo é: ${volume}`)