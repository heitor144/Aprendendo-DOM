

// Função para armazenar em um objeto os valores digitados pelo usuário
function salvarInfos() {

  // Limpar qualquer conteúdo anterior nas divs de alerta e resultado
  document.getElementById("alerta").textContent = ``;
  document.getElementById("alerta").removeAttribute('style');
  document.getElementById("alerta").setAttribute('style', 'display: none');
  document.getElementById("resultado").textContent = ``;
  document.getElementById("resultado").removeAttribute('style');
  document.getElementById("resultado").setAttribute('style', 'display: none');

  // Obter valores de nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone dos campos de entrada
  var pessoa = {};
  pessoa.nome = document.getElementById("infoNome").value;
  pessoa.sobrenome = document.getElementById("infoSobrenome").value;
  pessoa.cpf = document.getElementById("InfoCPF").value;
  pessoa.sexo = document.getElementById("infoSexo").value;
  pessoa.datanasc = document.getElementById("infoDataNasc").value;
  pessoa.cep = document.getElementById("infoCep").value;
  pessoa.rua = document.getElementById("infoRua").value;
  pessoa.bairro = document.getElementById("infoBairro").value;
  pessoa.cidade = document.getElementById("infoCidade").value;
  pessoa.estado = document.getElementById("infoEstado").value;
  pessoa.pais = document.getElementById("infoPais").value;
  pessoa.telefone = document.getElementById("infoTel").value;

  // Verificar se o valor inserido nos campos são válidos
  var hoje = new Date();
  if ((pessoa.datanasc < hoje) || (pessoa.nome === null) || pessoa.sobrenome === null ||
    (pessoa.cpf === null) || (pessoa.sexo === null) || (pessoa.datanasc === null) ||
    (pessoa.cep === null) || (pessoa.rua === null) || (pessoa.bairro === null) ||
    (pessoa.cidade === null) || (pessoa.estado === null) || (pessoa.pais === null) ||
    (pessoa.telefone === null)) {
    // Se os valores não forem válidos, exibir mensagem de alerta e interromper a execução da função
    document.getElementById("alerta").textContent = `Por favor, digite valores válidos!`;
    document.getElementById("alerta").removeAttribute('style');
    return;
  }
  else {

  }

  // Exibir as informações na div "resultado"
  var resultadoHtml = `
  <h2>Informações Recebidas:</h2>
  <p><strong>Nome:</strong> ${pessoa.nome}</p>
  <p><strong>Sobrenome:</strong> ${pessoa.sobrenome}</p>
  <p><strong>CPF:</strong> ${pessoa.cpf}</p>
  <p><strong>Sexo:</strong> ${pessoa.sexo}</p>
  <p><strong>Data de Nascimento:</strong> ${pessoa.datanasc}</p>
  <p><strong>CEP:</strong> ${pessoa.cep}</p>
  <p><strong>Rua:</strong> ${pessoa.rua}</p>
  <p><strong>Bairro:</strong> ${pessoa.bairro}</p>
  <p><strong>Cidade:</strong> ${pessoa.cidade}</p>
  <p><strong>Estado:</strong> ${pessoa.estado}</p>
  <p><strong>País:</strong> ${pessoa.pais}</p>
  <p><strong>Telefone:</strong> ${pessoa.telefone}</p>
`;

  document.getElementById("resultado").innerHTML = resultadoHtml;
  document.getElementById("resultado").style.display = "block";
}

// Função para validar valores digitados nos campos que recebem apenas letras
function validarLetras(elemento) {
  elemento.value = elemento.value.replace(/[^a-zA-Z]/g, '');
}

$(document).ready(function () {
  $('#InfoCPF').mask('000.000.000-00');
  $('#infoTel').mask('(00) 00000-0000');
  $('#infoCep').mask('00000-000');
  $('#infoCep').keyup(function () {
    var infoCep = $(this).val().replace(/\D/g, '');
    if (infoCep.length == 8) {
      $.getJSON('https://viacep.com.br/ws/' + infoCep + '/json/', function (data) {
        if (!("erro" in data)) {
          $('#infoRua').val(data.logradouro).prop('readonly', true);
          $('#infoBairro').val(data.bairro).prop('readonly', true);
          $('#infoCidade').val(data.localidade).prop('readonly', true);
          $('#infoEstado').val(data.uf).prop('readonly', true);
        } else {
          console.log('CEP não encontrado.');
        }
      });
    } else {
      $('#rua, #bairro, #infoCidade, #infoEstado').prop('readonly', false).val('');
    }
  });
});

