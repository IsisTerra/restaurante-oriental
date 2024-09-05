// Arquivo js para requisições a API restaurante

function cb1(res) {
    return res.json();
}

// Temaki

function verInformacoesTemaki() {
    const id = document.getElementById("65e9ce80dc2eb24ff325159e").id;
    const url = `https://restaurante-oriental.fly.dev/produtos/${id}`;

    fetch(url).then(cb1).then(respostaTemaki);
}

function respostaTemaki(dados) {
    const prato = dados;

    const nome = document.getElementById("titulo-temaki");
    nome.innerText = prato.produto;
    const imagem = document.getElementById("imagem-temaki");
    imagem.src = prato.imagem;
    const descricao = document.getElementById("descricao-temaki");
    descricao.innerText = prato.descricao;

    imagem.style.width = "300px"
    imagem.style.height = "180px"

    const botao = document.getElementById("btnTemaki");
    botao.style.display = "none";

    const botaoPedir = document.getElementById("btnPedirTemaki");
    botaoPedir.style.backgroundColor = "#ee8a37"
    botaoPedir.style.color = "#fff"

    const botoes = document.getElementById("botoesTemaki");
    botoes.style.marginTop = "125px"

}

// Sashimi

function verInformacoesSashimi() {
    const id = document.getElementById("65e9cf158be6715a394a75fd").id;
    const url = `https://restaurante-oriental.fly.dev/produtos/${id}`;

    fetch(url).then(cb1).then(respostaSashimi);
}

function respostaSashimi(dados) {
    const prato = dados;

    const nome = document.getElementById("titulo-sashimi");
    nome.innerText = prato.produto;
    const imagem = document.getElementById("imagem-sashimi");
    imagem.src = prato.imagem;
    const descricao = document.getElementById("descricao-sashimi");
    descricao.innerText = prato.descricao;

    imagem.style.width = "300px"
    imagem.style.height = "180px"

    const botao = document.getElementById("btnSashimi");
    botao.style.display = "none";

    const botaoPedir = document.getElementById("btnPedirSashimi");
    botaoPedir.style.backgroundColor = "#ee8a37"
    botaoPedir.style.color = "#fff"

    const botoes = document.getElementById("botoesSashimi");
    botoes.style.marginTop = "125px"
}

// Niguiri

function verInformacoesNiguiri() {
    const id = document.getElementById("65e9cf80dc2eb24ff325159f").id;
    const url = `https://restaurante-oriental.fly.dev/produtos/${id}`;

    fetch(url).then(cb1).then(respostaNiguiri);
}

function respostaNiguiri(dados) {
    const prato = dados;

    const nome = document.getElementById("titulo-niguiri");
    nome.innerText = prato.produto;
    const imagem = document.getElementById("imagem-niguiri");
    imagem.src = prato.imagem;
    const descricao = document.getElementById("descricao-niguiri");
    descricao.innerText = prato.descricao;

    imagem.style.width = "300px"
    imagem.style.height = "180px"

    const botao = document.getElementById("btnNiguiri");
    botao.style.display = "none";

    const botaoPedir = document.getElementById("btnPedirNiguiri");
    botaoPedir.style.backgroundColor = "#ee8a37"
    botaoPedir.style.color = "#fff"

    const botoes = document.getElementById("botoesNiguiri");
    botoes.style.marginTop = "125px"
}

// Hot Roll

function verInformacoesHotRoll() {
    const id = document.getElementById("65e9d0c940a364278022f880").id;
    const url = `https://restaurante-oriental.fly.dev/produtos/${id}`;

    fetch(url).then(cb1).then(respostaHotRoll);
}

function respostaHotRoll(dados) {
    const prato = dados;

    const nome = document.getElementById("titulo-hotRoll");
    nome.innerText = prato.produto;
    const imagem = document.getElementById("imagem-hotRoll");
    imagem.src = prato.imagem;
    const descricao = document.getElementById("descricao-hotRoll");
    descricao.innerText = prato.descricao;

    imagem.style.width = "300px"
    imagem.style.height = "180px"

    const botao = document.getElementById("btnHotRoll");
    botao.style.display = "none";

    const botaoPedir = document.getElementById("btnPedirHotRoll");
    botaoPedir.style.backgroundColor = "#ee8a37"
    botaoPedir.style.color = "#fff"

    const botoes = document.getElementById("botoesHotRoll");
    botoes.style.marginTop = "125px"
}

// Sushi

function verInformacoesSushi() {
    const id = document.getElementById("65e9d12f40a364278022f881").id;
    const url = `https://restaurante-oriental.fly.dev/produtos/${id}`;

    fetch(url).then(cb1).then(respostaSushi);
}

function respostaSushi(dados) {
    const prato = dados;

    const nome = document.getElementById("titulo-sushi");
    nome.innerText = prato.produto;
    const imagem = document.getElementById("imagem-sushi");
    imagem.src = prato.imagem;
    const descricao = document.getElementById("descricao-sushi");
    descricao.innerText = prato.descricao;

    imagem.style.width = "300px"
    imagem.style.height = "180px"

    const botao = document.getElementById("btnSushi");
    botao.style.display = "none";

    const botaoPedir = document.getElementById("btnPedirSushi");
    botaoPedir.style.backgroundColor = "#ee8a37"
    botaoPedir.style.color = "#fff"

    const botoes = document.getElementById("botoesSushi");
    botoes.style.marginTop = "125px"
}

// Yakisoba

function verInformacoesYakisoba() {
    const id = document.getElementById("65e9d1a7dc8bb23fd629d1e6").id;
    const url = `https://restaurante-oriental.fly.dev/produtos/${id}`;

    fetch(url).then(cb1).then(respostaYakisoba);
}

function respostaYakisoba(dados) {
    const prato = dados;

    const nome = document.getElementById("titulo-yakisoba");
    nome.innerText = prato.produto;
    const imagem = document.getElementById("imagem-yakisoba");
    imagem.src = prato.imagem;
    const descricao = document.getElementById("descricao-yakisoba");
    descricao.innerText = prato.descricao;

    imagem.style.width = "300px"
    imagem.style.height = "180px"

    const botao = document.getElementById("btnYakisoba");
    botao.style.display = "none";

    const botaoPedir = document.getElementById("btnPedirYakisoba");
    botaoPedir.style.backgroundColor = "#ee8a37"
    botaoPedir.style.color = "#fff"

    const botoes = document.getElementById("botoesYakisoba");
    botoes.style.marginTop = "125px"
}