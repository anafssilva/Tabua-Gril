function validar() {
    var nome= formulario.nome;
    var email= formulario.email;
    var celular= formulario.celular;


    if(nome.value == ""){
    alert("Nome não informado!")
    nome.focus()
    return;}

    if(email.value == ""){
    alert("E-mail não informado!")
    email.focus();
    return;}

    if(celular.value == ""){
    alert("Número de celular não informado!")
    celular.focus();
    return;}
}

document.querySelector('input[name="btn_enviar"]').addEventListener('click', concatena);

function concatenar() {

    var js_nome = document.FormConcatena.f_nome.value;
    var js_sobrenome = document.FormConcatena.f_sobrenome.value;
    var js_nomecompleto = js_nome + ' ' + js_sobrenome;

    var ct_data = document.FormConcatena.f_data.value.split('-');
    var fmt_data = ct_data[2] + '/' + ct_data[1] + '/' + ct_data[0];

    if (js_nome == '' || ct_data == '') {
        window.alert('Por favor, preencha todos os campos');
    }
    else {
        window.alert('Olá ' + js_nomecompleto + ' reserva confirmada ' + fmt_data + '!!!');}
}