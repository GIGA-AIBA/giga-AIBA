/*====== MENU =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*====== RELLAX =====*/
var rellax = new Rellax(".parallax");

/*====== ANIMATE GSAP ======*/
/*Navbar*/
gsap.from(".nav__logo", {
  opacity: 0,
  duration: 3,
  delay: 0.5,
  y: 30,
  ease: "expo.out",
});
gsap.from(".nav__toggle", {
  opacity: 0,
  duration: 3,
  delay: 0.7,
  y: 30,
  ease: "expo.out",
});
gsap.from(".nav__item", {
  opacity: 0,
  duration: 3,
  delay: 0.7,
  y: 35,
  ease: "expo.out",
  stagger: 0.2,
});

/*Text*/
gsap.from(".home__title", {
  opacity: 0,
  duration: 3,
  delay: 1.3,
  y: 35,
  ease: "expo.out",
});
gsap.from(".home__subtitle", {
  opacity: 0,
  duration: 3,
  delay: 1.1,
  y: 35,
  ease: "expo.out",
});

/*Scroll*/
gsap.from(".home__scroll", {
  opacity: 0,
  duration: 3,
  delay: 1.5,
  y: 25,
  ease: "expo.out",
});

/*====== SCROLL REVEAL SECTION ======*/
const sr = ScrollReveal({
  duration: 2500,
  reset: true,
});

/*Data*/
sr.reveal(".section__data", { origin: "left", distance: "70px" });

/*Imgs*/
sr.reveal(".section__img", { origin: "left", distance: "90px", delay: 200 });

const scrollContainer = document.querySelector(".scroll-container");
const bullets = document.querySelectorAll(".bullet"); // Все буллеты
const slides = document.querySelectorAll(
  ".content-box1, .content-box2, .content-box3, .content-box4"
); // Все слайды

let isDragging = false;
let startX;
let scrollLeft;

// Привязываем обработку событий мыши
scrollContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  scrollContainer.classList.add("dragging");
  startX = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  scrollContainer.classList.remove("dragging");
});

scrollContainer.addEventListener("mouseup", () => {
  isDragging = false;
  scrollContainer.classList.remove("dragging");
});

scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 3;
  scrollContainer.scrollLeft = scrollLeft - walk;
  updateBullets();
});

// Привязываем обработку сенсорных событий
scrollContainer.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("touchend", () => {
  isDragging = false;
  updateBullets();
});

scrollContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.touches[0].pageX - scrollContainer.offsetLeft;
  const walk = (x - startX) * 0.5;
  scrollContainer.scrollLeft = scrollLeft - walk;
});

// Функция для обновления активного буллета
function updateBullets() {
  const slideWidth = slides[0].offsetWidth + 10; // Ширина одного слайда + отступы
  const activeIndex = Math.round(scrollContainer.scrollLeft / slideWidth); // Текущий индекс слайда

  bullets.forEach((bullet, index) => {
    bullet.classList.toggle("active", index === activeIndex); // Обновляем класс "active"
  });
}

// Переход к слайду при клике на буллет
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    const slideWidth = slides[0].offsetWidth + 10; // Ширина одного слайда + отступы
    scrollContainer.scrollTo({
      left: index * slideWidth,
      behavior: "smooth", // Плавный переход
    });
    updateBullets(); // Обновляем буллеты
  });
});
function updateBullets() {
  const slideWidth = slides[0].offsetWidth + 10; // Ширина одного слайда + отступы
  const activeIndex = Math.round(scrollContainer.scrollLeft / slideWidth); // Текущий индекс слайда

  bullets.forEach((bullet, index) => {
    bullet.classList.toggle("active", index === activeIndex); // Обновляем класс "active" у буллетов
  });

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === activeIndex); // Обновляем класс "active" у слайдов
  });
}

// Плавный переход к слайду при клике на буллет
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    const slideWidth = slides[0].offsetWidth + 10; // Ширина одного слайда + отступы
    scrollContainer.scrollTo({
      left: index * slideWidth,
      behavior: "smooth", // Плавная прокрутка
    });
    updateBullets(); // Обновляем буллеты и слайды
  });
});
const detailsElements = document.querySelectorAll(".animated-details");

detailsElements.forEach((details) => {
  details.addEventListener("click", () => {
    // Закрыть все элементы, кроме текущего
    detailsElements.forEach((otherDetails) => {
      if (otherDetails !== details) {
        otherDetails.removeAttribute("open");
      }
    });
  });
});
const image = document.getElementById("image");
const audio = document.getElementById("audio");

// Меняем картинку и запускаем звук при наведении
image.addEventListener("mouseover", () => {
  image.src = "assets/img/poto2.jpeg"; // Заменяем на другое изображение
  audio.play(); // Воспроизводим звук
});

// Восстанавливаем картинку и останавливаем звук, когда мышь покидает картинку
image.addEventListener("mouseout", () => {
  image.src = "assets/img/poto.jpeg"; // Возвращаем оригинальное изображение
  audio.pause(); // Останавливаем звук
  audio.currentTime = 0; // Возвращаем звук в начало
});
