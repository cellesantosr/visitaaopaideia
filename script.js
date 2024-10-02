// Capturando elementos
const plane = document.getElementById('plane');
const header = document.querySelector('header');
const trail = document.querySelector('.plane-trail'); // Novo elemento de rastro

// Função que executa ao rolar a página
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;
    
    // Limitar o efeito ao escopo do header
    if (scrollPosition <= headerHeight) {
        // Calcula a porcentagem da rolagem dentro do header
        const scrollPercent = scrollPosition / headerHeight;

        // Movendo o avião horizontalmente e verticalmente (diagonal)
        const planeMoveX = scrollPercent * 150; // Movimenta até 150vw (diagonal direita)
        const planeMoveY = scrollPercent * 50;  // Movimenta até 50vh (diagonal para baixo)

        // Aumentando o tamanho do avião
        const planeScale = 1 + (scrollPercent * 1.5); // Aumenta 50%

        // Aplicando a transformação ao avião
        plane.style.transform = `translate(${planeMoveX}vw, ${planeMoveY}vh) scale(${planeScale})`;
    }
});

window.addEventListener('scroll', function() {
    var airplane = document.getElementById('airplane');
    var scrollPosition = window.scrollY;

    // Se o scroll passar da altura da tela, esconder o avião
    if (scrollPosition > window.innerHeight) {
        airplane.style.display = 'none';
    } else {
        airplane.style.display = 'block'; // Mostrar o avião ao rolar para cima
    }
});