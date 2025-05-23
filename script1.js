
  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');

    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // Fechar ao clicar em link (opcional)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  });


document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.slides');
  const slideItems = document.querySelectorAll('.slide');
  const btnAnterior = document.querySelector('.anterior');
  const btnProximo = document.querySelector('.proximo');
  const indicadores = document.querySelectorAll('.indicador');
  
  let currentIndex = 0;
  const totalSlides = slideItems.length;
  
  // Função para atualizar a posição do carrossel
  function updateCarrossel() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Atualiza indicadores
      indicadores.forEach((ind, index) => {
          ind.classList.toggle('ativo', index === currentIndex);
      });
  }
  
  // Evento para próximo slide
  btnProximo.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarrossel();
  });
  
  // Evento para slide anterior
  btnAnterior.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateCarrossel();
  });
  
  // Eventos para os indicadores
  indicadores.forEach((ind, index) => {
      ind.addEventListener('click', () => {
          currentIndex = index;
          updateCarrossel();
      });
  });
  
  // Auto-play (opcional)
  let intervalo = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarrossel();
  }, 5000);
  
  // Pausa o auto-play quando o mouse está sobre o carrossel
  document.querySelector('.carrossel').addEventListener('mouseenter', () => {
      clearInterval(intervalo);
  });
  
  // Retoma o auto-play quando o mouse sai
  document.querySelector('.carrossel').addEventListener('mouseleave', () => {
      intervalo = setInterval(() => {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateCarrossel();
      }, 5000);
  });
});