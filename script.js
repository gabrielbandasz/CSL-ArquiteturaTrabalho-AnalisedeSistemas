const projectImages = document.querySelectorAll('.project-image img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('expandedImage');
const closeModal = document.querySelector('.close-modal');

projectImages.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src; // <-- Use o src normal
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById("footerContactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const feedback = this.querySelector('.form-feedback');
  feedback.textContent = "Mensagem enviada com sucesso!";
  this.reset();

  // Esconder a mensagem após 4 segundos
  setTimeout(() => {
    feedback.textContent = "";
  }, 4000);
});


// Carrossel Automático + Manual
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

let currentSlide = 0;

function updateSlidePosition() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlidePosition();
});

// Auto-Rotação
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlidePosition();
}, 5000); // muda a cada 5 segundos