const form = document.getElementById('form-addContato');
let linhas = '';
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const inputnome_contato = document.getElementById('nome_contato').value;
  const inputnumero_tel = document.getElementById('numero_tel').value;

  //validar número de telefone
  const telefoneRegex = /^(\(\d{2}\) \d{5}-\d{4})|(\d{4}-\d{4})$/;

  if (!telefoneRegex.test(inputnumero_tel)) {
    alert('Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX ou XXXX-XXXX.');
    return;
  }

  let linha = `<tr>`;
  linha += `<td>${inputnome_contato}</td>`;
  linha += `<td>${inputnumero_tel}</td>`;
  linha += `</tr>`;

  linhas += linha;
  
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
  
  alert(`Contato ${inputnome_contato} foi adicionado`);
});