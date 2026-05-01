// Mostrar o botão após as mensagens aparecerem
setTimeout(() => {
    document.getElementById('btn-comecar').classList.remove('hide');
    document.getElementById('btn-comecar').classList.add('fade-in');
}, 5000);

const btn = document.getElementById('btn-comecar');
const fase1 = document.getElementById('fase1');
const fase2 = document.getElementById('fase2');
const musica = document.getElementById('trilha');

btn.addEventListener('click', () => {
    // 1. Fade out da primeira tela
    fase1.classList.add('fade-out');
    
    setTimeout(() => {
        fase1.classList.add('hide');
        fase2.classList.remove('hide');
        fase2.classList.add('fade-in');
        
        // 2. Iniciar música (navegadores só permitem após clique)
        musica.play();
        
        // 3. Iniciar gatinhos
        gerarGatinhos();
    }, 1000);
});

function gerarGatinhos() {
    const container = document.getElementById('container-gatinhos');
    const caixaTexto = document.querySelector('.caixa-texto');

    // Lista com todos os seus arquivos da pasta
    const linksGatinhos = [
        'gato1.png', 'gato2.png', 'gato3.png', 'gato4.png', 'gato5.png',
        'gifgato1.gif', 'gifgato2.gif', 'gifgato3.gif'
    ];

    setInterval(() => {
        const img = document.createElement('img');
        
        // Sorteia um índice da lista acima
        const indiceSorteado = Math.floor(Math.random() * linksGatinhos.length);
        img.src = linksGatinhos[indiceSorteado];
        
        const rect = caixaTexto.getBoundingClientRect();
        let x, y;
        let colisao = true;

        while (colisao) {
            // Sorteia posição (ajuste 120 para o tamanho médio das suas imagens)
            x = Math.random() * (window.innerWidth - 120);
            y = Math.random() * (window.innerHeight - 120);

            const margem = 30;
            const dentroHorizontal = x + 120 > rect.left - margem && x < rect.right + margem;
            const dentroVertical = y + 120 > rect.top - margem && y < rect.bottom + margem;

            if (!(dentroHorizontal && dentroVertical)) {
                colisao = false;
            }
        }

        img.style.left = x + "px";
        img.style.top = y + "px";
        img.style.position = "absolute";
        img.style.width = "120px"; // Tamanho fixo para os gatinhos
        
        container.appendChild(img);
        
        // Remove a imagem após 3 segundos (tempo do fade no CSS)
        setTimeout(() => img.remove(), 3000);
    }, 700); // Cria um novo gatinho a cada 0.7 segundos
}

// Tempos de surgimento (em milissegundos)
setTimeout(() => {
    // 1. Faz a imagem aparecer (após a msg 1 e 2 começarem o fade)
    const img = document.getElementById('img-intermediaria');
    img.classList.remove('hide');
    img.classList.add('fade-in');
}, 3000); 

setTimeout(() => {
    // 2. Faz o botão aparecer por último
    const btn = document.getElementById('btn-comecar');
    btn.classList.remove('hide');
    btn.classList.add('fade-in');
}, 5000);