// const botaoForm = document.querySelector(".form-button");
//
// botaoForm.addEventListener('click', function(event) {
//   event.preventDefault();
//
//   const tabelaMsg = document.querySelector('#tabelaForm');
//   const linhatabelaMsg = document.createElement('tr');
//   const colunatabelaMsg = document.createElement('td');
//   colunatabelaMsg.className = "alert alert-danger m-auto";
//
//   const nome = document.querySelector("#nomeFormContato").value;
//   const email = document.querySelector("#emailFormContato").value;
//   const telefone = document.querySelector("#telefoneFormContato").value;
//   const msgErroFormNome = "Preencha seu nome";
//   const msgErroFormEmail = "Preencha seu Email";
//   const msgErroFormTelefone = "Preencha seu Telefone";
//
//
//
//   if (nome === null || nome === '') {
//       colunatabelaMsg.textContent = msgErroFormNome;
//       linhatabelaMsg.appendChild(colunatabelaMsg);
//       tabelaMsg.appendChild(linhatabelaMsg);
//
//   } else if (email === null || email === '') {
//       colunatabelaMsg.textContent = msgErroFormEmail;
//       linhatabelaMsg.appendChild(colunatabelaMsg);
//       tabelaMsg.appendChild(linhatabelaMsg);
//
//   } else if (telefone === null || telefone === '') {
//       colunatabelaMsg.textContent = msgErroFormTelefone;
//       linhatabelaMsg.appendChild(colunatabelaMsg);
//       tabelaMsg.appendChild(linhatabelaMsg);
//   }
//
//
//
// })
