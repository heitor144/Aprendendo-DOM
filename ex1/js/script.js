

// Função para armazenar em um objeto os valores digitados pelo usuário
function calcular() {

  // Limpar qualquer conteúdo anterior nas divs de alerta e resultado
  document.getElementById("alerta").textContent = ``;
  document.getElementById("alerta").removeAttribute('style');
  document.getElementById("alerta").setAttribute('style', 'display: none');
  document.getElementById("resultado").textContent = ``;
  document.getElementById("resultado").removeAttribute('style');
  document.getElementById("resultado").setAttribute('style', 'display: none');

  // Obter o valor vindo do campo de entrada
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;
  // Verificar se o valor inserido no campos é válido
  if ((peso <= 0) || (altura <= 0) || (isNaN(peso)) || (isNaN(altura))) {
    // Se os valores não forem válidos, exibir mensagem de alerta e interromper a execução da função
    document.getElementById("alerta").textContent = `Por favor, digite valores válidos!`;
    document.getElementById("alerta").removeAttribute('style');
    return;
  }

  //Calcula e classifica o IMC
  var resultado = 0.0;
  resultado = peso / (altura * altura);
  resultado = resultado.toFixed(2);
  
  var classific = '';
  if (resultado < 18.5){
    classific = `Abaixo do Peso.`;
  }
  else if ((resultado >= 18.5) || (resultado < 24.9)){
    classific = `Peso Normal`;
  }
  else if ((resultado >= 30) || (resultado < 34.9)){
    classific = `Obesidade Grau I`;
  }
  else if ((resultado >= 35) || (resultado < 39.9)){
    classific = `Obesidade Grau II`;
  }
  else{
    classific = `Obesidade Grau III`;
  }

  var resultadoHtml = `<h2>O IMC é ${resultado}. Sua classificação é de ${classific}</h2>`;
  document.getElementById("resultado").innerHTML = resultadoHtml;
  document.getElementById("resultado").style.display = "block";
}

