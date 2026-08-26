const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    // Cria um controle de clique exclusivo para CADA botão
    let clicado = false;

    botao.addEventListener("click", function () {
        let spanContador = botao.querySelector("span");
        // Converte o texto do span atual para número inteiro
        let valorAtual = parseInt(spanContador.textContent);
 // --- Referências do Guia de Respiração ---
    const btnStartBreath = document.getElementById('btn-start-breath');
    const breathCircle = document.getElementById('breath-circle');

    btnStartBreath.addEventListener('click', () => {
        btnStartBreath.disabled = true; // Desativa o botão temporariamente
        breathCircle.innerText = "Inspire...";
        breathCircle.classList.add('expand');

        // Tempo de inspiração (4 segundos)
        setTimeout(() => {
            breathCircle.innerText = "Expire...";
            breathCircle.classList.remove('expand');
            
            // Tempo de expiração (4 segundos)
            setTimeout(() => {
                breathCircle.innerText = "Pronto!";
                btnStartBreath.disabled = false; // Reativa o botão
            }, 4000);
        }, 4000);

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