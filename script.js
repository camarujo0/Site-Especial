// 1. Definição de elementos
const btn = document.getElementById('btn-comecar');
const fase1 = document.getElementById('fase1');
const fase2 = document.getElementById('fase2');
const musica = document.getElementById('trilha');
const imgVolume = document.getElementById('img-intermediaria');

// --- CONTROLE DA FASE 1 ---

// Faz a imagem de volume aparecer após 3 segundos
setTimeout(() => {
    if(imgVolume) {
        imgVolume.classList.remove('hide');
        imgVolume.classList.add('fade-in');
    }
}, 3000);

// Faz o botão aparecer após 5 segundos
setTimeout(() => {
    if(btn) {
        btn.classList.remove('hide');
        btn.classList.add('fade-in');
    }
}, 5000);

// --- TRANSIÇÃO PARA FASE 2 ---

btn.addEventListener('click', () => {
    fase1.classList.add('fade-out');
    
    setTimeout(() => {
        fase1.classList.add('hide');
        fase2.classList.remove('hide');
        fase2.classList.add('fade-in');
        
        // Tenta tocar a música (alguns navegadores bloqueiam, o catch evita erro)
        musica.play().catch(e => console.log("Áudio bloqueado ou não encontrado"));
        
        // Inicia a chuva de gatinhos
        gerarGatinhos();
    }, 1000);
});

// --- LÓGICA DOS GATINHOS (APENAS UMA VEZ!) ---

function gerarGatinhos() {
    const container = document.getElementById('container-gatinhos');
    const caixaTexto = document.querySelector('.caixa-texto');

    const linksGatinhos = [
        'gato1.png', 'gato2.png', 'gato3.png', 'gato4.png', 'gato5.png',
        'gifgato1.gif', 'gifgato2.gif', 'gifgato3.gif'
    ];

    setInterval(() => {
        const img = document.createElement('img');
        
        // Sorteia a imagem
        const indiceSorteado = Math.floor(Math.random() * linksGatinhos.length);
        img.src = linksGatinhos[indiceSorteado];
        
        // Tamanho responsivo
        const tamanhoGato = window.innerWidth < 768 ? 80 : 120; 
        img.style.width = tamanhoGato + "px";

        // Hitbox contra sobreposição na mensagem
        const rect = caixaTexto.getBoundingClientRect();
        let x, y;
        let colisao = true;
        let tentativas = 0;

        while (colisao && tentativas < 10) {
            x = Math.random() * (window.innerWidth - tamanhoGato);
            y = Math.random() * (window.innerHeight - tamanhoGato);

            const margem = 30;
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
        
        // Remove após a animação de 3s do CSS
        setTimeout(() => img.remove(), 3000);
    }, 700); 
}
