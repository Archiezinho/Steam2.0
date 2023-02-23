/* entrada de dados:
usuario = imput aonde será escrito o usuario;
email = imput aonde será escrito o email;
telefone = imput aonde será escrito o telefone;
lblErroUsuario = paragrafo usado para o erro de ususario;
lblErroEmail = paragrafo usado para o erro de email;
lblErroTelefone = paragrafo usado para o erro de telefone;
*/
function validarCampos() {
    if (usuario.value === "" || email.value === "" || telefone.value === "" || validatorUsuario(usuario.value) !== true || validatorEmail(email.value) !== true || validatorTelefone(telefone.value) !== true) {
        if (usuario.value === "" || validatorUsuario(usuario.value) !== true) {
            lblErroUsuario.textContent = '*Você precisa preencher o seu usuario Corretamente!!';
        }
        else {
            lblErroUsuario.textContent = "";
        }
        if (email.value === "" || validatorEmail(email.value) !== true) {
            lblErroEmail.textContent = '*Você precisa preencher seu Email Corretamente!!';
        }
        else {
            lblErroEmail.textContent = "";
        }
        if (telefone.value === "" || validatorTelefone(telefone.value) !== true) {
            lblErroTelefone.textContent = '*Você precisa preencher seu Telefone Corretamente!!';
        }
        else {
            lblErroTelefone.textContent = "";
        }
        return false;
    }
    else {
        return true;
    }
}
function validatorEmail(EMAIL) {
    let emailPattern = /^([_a-zA-Z0-9-]+)*@[a-zA-Z]+(\.[a-zA-Z]+)*(\.[a-zA-Z]{2,4})$/;
    return emailPattern.test(EMAIL);
}
function validatorTelefone(TELEFONE) {
    var telefonePattern = /^\(?(\d{2})\)?[ ]?(\d{5})[- ]?(\d{4})$/;
    return telefonePattern.test(TELEFONE);
}
function validatorUsuario(USUARIO) {
    var usuarioPattern = /^([_a-zA-Z0-9-]{2,50})$/
    return usuarioPattern.test(USUARIO);
}