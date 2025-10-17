let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

function showSlides(n) {
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Botones manuales
prev.addEventListener("click", function() {
  slideIndex--;
  showSlides(slideIndex);
});

next.addEventListener("click", function() {
  slideIndex++;
  showSlides(slideIndex);
});

// Automático
function autoSlides() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlides, 4000); // cambia cada 4 segundos
}

// Iniciar
showSlides(slideIndex);
autoSlides();

// --- MENÚ FLOTANTE ---
const menuToggle = document.getElementById("menu-toggle");
const menuFlotante = document.getElementById("menu-flotante");

if (menuToggle && menuFlotante) {
  menuToggle.addEventListener("click", () => {
    menuFlotante.classList.toggle("active");
  });
}


