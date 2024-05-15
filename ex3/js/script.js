

// Função para armazenar em um objeto os valores digitados pelo usuário
function verificarNota() {

  // Limpar qualquer conteúdo anterior nas divs de alerta e resultado
  document.getElementById("alerta").textContent = ``;
  document.getElementById("alerta").removeAttribute('style');
  document.getElementById("alerta").setAttribute('style', 'display: none');
  document.getElementById("resultado").textContent = ``;
  document.getElementById("resultado").removeAttribute('style');
  document.getElementById("resultado").setAttribute('style', 'display: none');

  // Obter valores de nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone dos campos de entrada
  var aluno = {};
  aluno.nome = document.getElementById("alunoNome").value;
  aluno.matricula = document.getElementById("alunoMatricula").value;
  aluno.disciplina = document.getElementById("alunoDisciplina").value;
  aluno.nota = document.getElementById("alunoNota").value;

  // Verificar se o valor inserido nos campos são válidos
  if ((aluno.nome === "") || (aluno.matricula === "" ) ||
    (aluno.disciplina === "" ) || (isNaN(aluno.nota)) || (aluno.nota === "") || (aluno.nota < 0)) {
    // Se os valores não forem válidos, exibir mensagem de alerta e interromper a execução da função
    document.getElementById("alerta").textContent = `Por favor, digite valores válidos!`;
    document.getElementById("alerta").removeAttribute('style');
    return;
  }

  // Exibir as informações na div "resultado"
  if (aluno.nota >= 60){
    aluno.situacao = "aprovado"
    var resultadoHtml = `<h2 style="color: green;">Aluno ${aluno.situacao}.</h2>`;
  }
  else if (aluno.nota >= 50){
    aluno.situacao = "em recuperação";
    var resultadoHtml = `<h2 style="color: blue;" >Aluno ${aluno.situacao}.</h2>`;
  }
  else{
    aluno.situacao = "reprovado";
    var resultadoHtml = `<h2 style="color: red;">Aluno ${aluno.situacao}.</h2>`;
  }

  document.getElementById("resultado").innerHTML = resultadoHtml;
  document.getElementById("resultado").style.display = "block";
}

// Função para validar valores digitados nos campos que recebem apenas letras
function validarLetras(elemento) {
  elemento.value = elemento.value.replace(/[^a-zA-Z]/g, '');
}

function validarNota(elemento) {
  var nota = elemento.value;
  
  // Verificar se o valor é um número decimal menor que 100
  if ((isNaN(nota)) || parseFloat(nota) > 100) {
      alert("Por favor, digite um valor numérico e menor ou igual que 100.");
      elemento.value = ""; // Limpar o campo se a nota for inválida
  }
}
