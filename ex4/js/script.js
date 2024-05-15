

// Função para armazenar em um objeto os valores digitados pelo usuário
function calculaFatorial() {

  // Limpar qualquer conteúdo anterior nas divs de alerta e resultado
  document.getElementById("alerta").textContent = ``;
  document.getElementById("alerta").removeAttribute('style');
  document.getElementById("alerta").setAttribute('style', 'display: none');
  document.getElementById("resultado").textContent = ``;
  document.getElementById("resultado").removeAttribute('style');
  document.getElementById("resultado").setAttribute('style', 'display: none');

  // Obter o valor vindo do campo de entrada
  var valor = document.getElementById("numInt").value;

  // Verificar se o valor inserido no campos é válido
  if (valor < 0) {
    // Se os valores não forem válidos, exibir mensagem de alerta e interromper a execução da função
    document.getElementById("alerta").textContent = `Por favor, digite um valor válido!`;
    document.getElementById("alerta").removeAttribute('style');
    return;
  }

  // Exibir as informações na div "resultado"
  var resultadoString = '';
  var resultado = 1;
  for (let i = valor; i > 0; i--) {
    resultadoString += i;
    resultado *= i;
    if (i > 1) {
      resultadoString += ' x ';
    }
  }

  var resultadoHtml = `<h2>${valor}! = ${resultadoString} = ${resultado}</h2>`;
  document.getElementById("resultado").innerHTML = resultadoHtml;
  document.getElementById("resultado").style.display = "block";
}

