// Arquivo js para contagem regressiva

function contagemRegressiva() {
    const cronometro = document.getElementById("cronometro");

    let horas = 23 - new Date().getHours();
    let minutos = 59 - new Date().getMinutes();
    let segundos = 59 - new Date().getSeconds();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    cronometro.innerHTML = `${horas} : ${minutos} : ${segundos}`;
}

setInterval(contagemRegressiva, 1000);

const estilo = document.getElementById("cronometro");
estilo.style.color = "#FFF2E7";
estilo.style.fontFamily = "'Abel', sans-serif";
estilo.style.fontSize = "22px";
estilo.style.textShadow = "#000 1px 2px 4px";
estilo.style.fontWeight = "600";

const estiloTexto = document.querySelector(".cronometro-texto")
estiloTexto.style.color = "#FFF2E7";
estiloTexto.style.fontFamily = "'Abel', sans-serif";
estiloTexto.style.fontSize = "20px"
estiloTexto.style.fontWeight = "500";