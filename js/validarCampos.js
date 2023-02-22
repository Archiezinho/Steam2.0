function validarCampos() {
    if (usuario.value === "" || email.value === "" || telefone.value === "" || validatorUsuario(usuario.value) !== true || validatorEmail(email.value) !== true || validatorTelefone(telefone.value) !== true) {
        if (usuario.value === "" || validatorUsuario(usuario.value) !== true) {
            lblErrousuario.textContent = '*Você precisa preencher o seu usuario Corretamente!!';
        }
        else {
            lblErrousuario.textContent = "";
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
    let emailPattern = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;
    return emailPattern.test(EMAIL);
}
function validatorTelefone(TELEFONE) {
    var telefonePattern = /^\(?(\d{2})\)?[ ]?(\d{5})[-]?(\d{4})$/;
    return telefonePattern.test(TELEFONE);
}
function validatorUsuario(USUARIO) {
    var usuarioPattern = /^([a-z A-Z]{2,50})$/
    return usuarioPattern.test(USUARIO);
}