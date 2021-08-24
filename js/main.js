const btn = document.querySelector(".menu_toggle");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Scroll Reveal
ScrollReveal().reveal(".left_ani", {
  origin: "left",
  distance: "25rem",
  duration: 800,
  delay: 100,
});

ScrollReveal().reveal(".right_ani", {
  origin: "right",
  duration: 800,
  distance: "25rem",
  delay: 100,
});

ScrollReveal().reveal(".top_ani", {
  origin: "top",
  duration: 800,
  distance: "25rem",
  delay: 100,
});

ScrollReveal().reveal(".bottom_ani", {
  origin: "bottom",
  duration: 800,
  distance: "25rem",
  delay: 100,
});

//parallax

$(".stillness").parallax({
  imageSrc: "./img/slide_02.jpg",
});
// $('.alone').parallax({imageSrc: './img/slide_03.jpg'});

//slide slick
$(".slide_area").slick({
  arrows: false,
  autoplay: true,
  pauseOnHover: false,
});

$(".slide_area_02").slick({
  arrows: false,
  autoplay: true,
  fade: true,
});
