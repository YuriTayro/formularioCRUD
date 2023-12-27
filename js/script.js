var formulario = document.getElementById('form');
var nome = document.getElementById('nome');
var email = document.getElementById('email');
var senha = document.getElementById('password')
var confirmacaoSenha = document.getElementById('passwordConfirmation');

formulario.addEventListener('submit', (event) => {
    event.preventDefault()

    validarInputs();
})


function validarInputs () {
    var nomeValue = nome.value;
    var emailValue = email.value;
    var senhaValue = senha.value;
    var confirmacaoSenhaValue = confirmacaoSenha.value;

    // Validação do nome
    if (nomeValue === '') {
        setError(nome, 'O nome é obrigatório.');
    } else {
        setSuccess(nome);
    }

    // Validação do email
    if (emailValue === '') {
        setError(email, 'O e-mail é obrigatório.');
    } else if (!validarEmail(emailValue)) {
        setError(email, 'Digite um e-mail válido.');
    } else {
        setSuccess(email);
    }

    // Validação da senha
    if (senhaValue === '') {
        setError(senha, 'A senha é obrigatória.');
    } else if (senha.value.length < 8) {
        setError(senha, 'A senha deve conter no mínimo 8 caracteres.');
    } else {
        setSuccess(senha);
    }

    //  Validação confirmação de senha
    if (confirmacaoSenhaValue === '') {
        setError(confirmacaoSenha, 'A confirmação da senha é obrigatória.');
    } else if (confirmacaoSenhaValue !== senhaValue) {
        setError(confirmacaoSenha, 'As senhas precisam ser iguais.');
    } else {
        setSuccess(confirmacaoSenha);
    }
}

// Função para adeicionar a mensagem e a borda de erro 
function setError (input, message) {
    var controleForm = input.parentElement;
    var span = controleForm.querySelector('span');

    // Adiciona a mensagm de erro
    span.innerText = message;

    // Adiciona a classe de erro
    controleForm.className = "controle-form error";
}

// Função para adicionar a classe de sucesso
function setSuccess (input) {
    var controleForm = input.parentElement;

    // Adiciona a classe de sucesso
    controleForm.className = "controle-form success";
}

//Regex para validar e-mail
function validarEmail (email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
}