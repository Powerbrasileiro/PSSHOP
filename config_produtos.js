const meuBotao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

meuBotao.addEventListener("click", () => {
    mensagem.style.display = "block";
    const botaoPosicao = meuBotao.getBoundingClientRect();
    mensagem.style.top = `${botaoPosicao.bottom + -300}px`;
    mensagem.style.left = `${botaoPosicao.center}px`;

    // Configura um temporizador para esconder a mensagem após 15 segundos (15000 milissegundos)
    setTimeout(() => {
        mensagem.style.display = "none";
    }, 5000);
});

mensagem.addEventListener("click", () => {
    mensagem.style.display = "none";
});