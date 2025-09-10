document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contatoForm');
  const feedback = document.getElementById('form-feedback');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // impede o envio real do formulário

    // Mostra a mensagem de sucesso
    feedback.classList.remove('hidden');

    // Opcional: limpa os campos do formulário
    form.reset();
  });
});
