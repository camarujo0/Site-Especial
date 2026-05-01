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

    const linksGatinhos = [
        'gato1.png', 'gato2.png', 'gato3.png', 'gato4.png', 'gato5.png',
        'gifgato1.gif', 'gifgato2.gif', 'gifgato3.gif'
    ];

    setInterval(() => {
        const img = document.createElement('img');
        
        // 1. Sorteia a imagem
        const indiceSorteado = Math.floor(Math.random() * linksGatinhos.length);
        img.src = linksGatinhos[indiceSorteado];
        
        // 2. Define o tamanho adaptável (Movi para dentro do intervalo)
        const tamanhoGato = window.innerWidth < 768 ? 80 : 120; 
        img.style.width = tamanhoGato + "px";

        const rect = caixaTexto.getBoundingClientRect();
        let x, y;
        let colisao = true;

        // 3. Lógica da Hitbox
        while (colisao) {
            x = Math.random() * (window.innerWidth - tamanhoGato);
            y = Math.random() * (window.innerHeight - tamanhoGato);

            const margem = 30;
            const dentroHorizontal = x + tamanhoGato > rect.left - margem && x < rect.right + margem;
            const dentroVertical = y + tamanhoGato > rect.top - margem && y < rect.bottom + margem;

            if (!(dentroHorizontal && dentroVertical)) {
                colisao = false;
            }
        }

        // 4. Aplica posição e renderiza
        img.style.left = x + "px";
        img.style.top = y + "px";
        img.style.position = "absolute";
        
        container.appendChild(img);
        
        setTimeout(() => img.remove(), 3000);
    }, 700); 
}function gerarGatinhos() {
    const container = document.getElementById('container-gatinhos');
    const caixaTexto = document.querySelector('.caixa-texto');

    const linksGatinhos = [
        'gato1.png', 'gato2.png', 'gato3.png', 'gato4.png', 'gato5.png',
        'gifgato1.gif', 'gifgato2.gif', 'gifgato3.gif'
    ];

    setInterval(() => {
        const img = document.createElement('img');
        
        // 1. Sorteia a imagem
        const indiceSorteado = Math.floor(Math.random() * linksGatinhos.length);
        img.src = linksGatinhos[indiceSorteado];
        
        // 2. Define o tamanho adaptável (Movi para dentro do intervalo)
        const tamanhoGato = window.innerWidth < 768 ? 80 : 120; 
        img.style.width = tamanhoGato + "px";

        const rect = caixaTexto.getBoundingClientRect();
        let x, y;
        let colisao = true;

        // 3. Lógica da Hitbox
        while (colisao) {
            x = Math.random() * (window.innerWidth - tamanhoGato);
            y = Math.random() * (window.innerHeight - tamanhoGato);

            const margem = 30;
            const dentroHorizontal = x + tamanhoGato > rect.left - margem && x < rect.right + margem;
            const dentroVertical = y + tamanhoGato > rect.top - margem && y < rect.bottom + margem;

            if (!(dentroHorizontal && dentroVertical)) {
                colisao = false;
            }
        }

        // 4. Aplica posição e renderiza
        img.style.left = x + "px";
        img.style.top = y + "px";
        img.style.position = "absolute";
        
        container.appendChild(img);
        
        setTimeout(() => img.remove(), 3000);
    }, 700); 
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
