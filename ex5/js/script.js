

// Função para armazenar em um objeto os valores digitados pelo usuário
function calculaArea() {

  // Limpar qualquer conteúdo anterior nas divs de alerta e resultado
  document.getElementById("alerta").textContent = ``;
  document.getElementById("alerta").removeAttribute('style');
  document.getElementById("alerta").setAttribute('style', 'display: none');
  document.getElementById("resultado").textContent = ``;
  document.getElementById("resultado").removeAttribute('style');
  document.getElementById("resultado").setAttribute('style', 'display: none');

  // Obter o valor vindo do campo de entrada
  var comp = document.getElementById("comp").value;
  var larg = document.getElementById("larg").value;
  // Verificar se o valor inserido no campos é válido
  if ((comp <= 0) || (larg <= 0) || (isNaN(comp)) || (isNaN(larg))) {
    // Se os valores não forem válidos, exibir mensagem de alerta e interromper a execução da função
    document.getElementById("alerta").textContent = `Por favor, digite um valor válido!`;
    document.getElementById("alerta").removeAttribute('style');
    return;
  }

  //Calcula a área e classifica o terreno
  var area = comp * larg;
  var resultado = 0.0;
  if (area < 100){
    resultado = `TERRENO POPULAR.`;
  }
  else if ((area >= 100) || (area < 200)){
    resultado = `TERRENO MASTER`;
  }
  else{
    resultado = `TERRENO VIP`;
  }

  var resultadoHtml = `<h2>A área do terreno é de ${area} metros². Sua classificação é de ${resultado}</h2>`;
  document.getElementById("resultado").innerHTML = resultadoHtml;
  document.getElementById("resultado").style.display = "block";
}

