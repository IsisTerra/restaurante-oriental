// Arquivo js para validações do email nas páginas informações 1 e 2.

const campoEmail = document.querySelectorAll(".required");
const spanEmail = document.getElementById("span-email");
const spanCheckbox = document.getElementById("span-checkbox")
const checkbox = document.getElementById("checkbox");
const alerta = document.getElementById("alerta");
let email = document.getElementById("email").value;
const emailRegex = /\S+@\S+\.\S+/;
let resposta = 0;

// Validação E-mail

function emailTestar() {
    if (campoEmail[0].value.length == 0) {
        resposta = prompt("Por favor, preencha o seu e-mail: ");
        if (resposta == "") alert("Erro no preenchimento de e-mail");
    } else validarEmail();
}

function validarEmail() {
    if (campoEmail[0].value.length < 10) {
        spanEmail.innerHTML = "E-mail deve ter no mínimo 10 caracteres";
    } else preenchimentoEmail();
}

function preenchimentoEmail() {
    if (emailRegex.test(campoEmail[0].value)) {
        checkboxValidar();
    } else spanEmail.innerHTML = "Digite um e-mail válido. Ex.: exemplo@seuemail.com";
}

// Checkbox

function checkboxValidar() {
    spanEmail.innerHTML = "";
    const email = document.getElementById("email").value;
    if (checkbox.checked) {
        spanCheckbox.innerHTML = "";
        spanEmail.innerHTML = `E-mail ${email} cadastrado com sucesso!`;
        alerta.style.opacity = "0";
    } else marcarCheckbox();
}

function marcarCheckbox() {
    spanCheckbox.innerHTML = "Você precisa aceitar os termos de uso";
    alerta.style.backgroundColor = "red";
    alerta.style.opacity = "0.8";
    checkboxValidar();
}
