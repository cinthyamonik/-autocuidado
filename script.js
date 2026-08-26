const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    // Cria um controle de clique exclusivo para CADA botão
    let clicado = false;

    botao.addEventListener("click", function () {
        let spanContador = botao.querySelector("span");
        // Converte o texto do span atual para número inteiro
        let valorAtual = parseInt(spanContador.textContent);

        if (!clicado) {
            spanContador.textContent = valorAtual + 1;
            clicado = true;
            botao.style.backgroundColor = botao.classList.contains('btn-like') ? '#b3e5fc' : '#ffcdd2';
        } else {
            spanContador.textContent = valorAtual - 1;
            clicado = false;
            botao.style.backgroundColor = '#f0f0f0'; // Cor padrão do CSS
        }
    });
});