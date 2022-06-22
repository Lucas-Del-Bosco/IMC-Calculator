const calcular = document.getElementById('calcular');

function imc() {
   let nome = document.getElementById('nome').value;
   let altura = document.getElementById('altura').value;
   let peso = document.getElementById('peso').value;
   let resultado = document.getElementById('resultado');

   if(nome !== '' && altura !== '' && peso !== '') {
      
      const valorIMC = (peso / (altura * altura)).toFixed(1);

      let classificacao = '';

      if (valorIMC < 18.5) {
         classificacao = 'abaixo do peso.'
      } else if (valorIMC < 25) {
         classificacao = 'com peso ideal.'
      } else if (valorIMC < 30) {
         classificacao = 'acima do peso.'
      } else if (valorIMC < 35) {
         classificacao = 'com obesidade grau I'
      } else if (valorIMC < 40) {
         classificacao = 'com obesidade grau II'
      } else {
         classificacao = 'com obesidade grau III'
      }
      
      resultado.innerText = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
   } else {
      resultado.innerText = 'Preencha todos os campos!!!'
   }
}

calcular.addEventListener('click', imc);
