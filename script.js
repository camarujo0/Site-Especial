// Mostrar o botão após as mensagens aparecerem
setTimeout(() => {
    document.getElementById('btn-comecar').classList.remove('hide');
    document.getElementById('btn-comecar').classList.add('fade-in');
}, 5000);

const btn = document.getElementById('btn-comecar');
const fase1 = document.getElementById('fase1');
const fase2 = document.getElementById('fase2');
const musica = document.getElementById('trilha');
const imgVolume = document.getElementById('img-intermediaria');

// --- LÓGICA DA FASE 1 (Aparecimento gradual) ---

// 1. A imagem de volume aparece após 2 segundos
setTimeout(() => {
    imgVolume.classList.remove('hide');
    imgVolume.classList.add('fade-in');
}, 2000);

// 2. O botão "Vamos!" aparece após 4 segundos
setTimeout(() => {
    btn.classList.remove('hide');
    btn.classList.add('fade-in');
}, 4000);

// --- TRANSIÇÃO PARA FASE 2 ---

btn.addEventListener('click', () => {
    fase1.classList.add('fade-out');
    
    setTimeout(() => {
        fase1.classList.add('hide');
        fase2.classList.remove('hide');
        fase2.classList.add('fade-in');
        
        musica.play().catch(e => console.log("Erro ao tocar áudio:", e));
        gerarGatinhos();
    }, 1000);
});

// --- LÓGICA DOS GATINHOS ---

function gerarGatinhos() {
    const container = document.getElementById('container-gatinhos');
    const caixaTexto = document.querySelector('.caixa-texto');

    const linksGatinhos = [
        'gato1.png', 'gato2.png', 'gato3.png', 'gato4.png', 'gato5.png',
        'gifgato1.gif', 'gifgato2.gif', 'gifgato3.gif'
    ];

    setInterval(() => {
        const img = document.createElement('img');
        const indiceSorteado = Math.floor(Math.random() * linksGatinhos.length);
        img.src = linksGatinhos[indiceSorteado];
        
        const tamanhoGato = window.innerWidth < 768 ? 80 : 120; 
        img.style.width = tamanhoGato + "px";

        const rect = caixaTexto.getBoundingClientRect();
        let x, y;
        let colisao = true;
        let tentativas = 0;

        while (colisao && tentativas < 15) {
            x = Math.random() * (window.innerWidth - tamanhoGato);
            y = Math.random() * (window.innerHeight - tamanhoGato);

            const margem = 40;
            const dentroHorizontal = x + tamanhoGato > rect.left - margem && x < rect.right + margem;
            const dentroVertical = y + tamanhoGato > rect.top - margem && y < rect.bottom + margem;

            if (!(dentroHorizontal && dentroVertical)) {
                colisao = false;
            }
            tentativas++;
        }

        img.style.left = x + "px";
        img.style.top = y + "px";
        img.style.position = "absolute";
        
        container.appendChild(img);
        setTimeout(() => img.remove(), 3000);
    }, 700); 
}
setTimeout(() => {
    // 2. Faz o botão aparecer por último
    const btn = document.getElementById('btn-comecar');
    btn.classList.remove('hide');
    btn.classList.add('fade-in');
}, 5000);
