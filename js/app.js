$(function () {
  // Menu Responsive
  $(".menu-responsive").toggle();

  $(".menu-bars").on("click", function () {
    $(".menu-responsive").toggle("slow");
  });

  // Scroll click on menu


  // Progress Bar Animate
  window.sr = ScrollReveal();
  sr.reveal(".progress-bar", {
    origin: "left",
    duration: 2000,
    distance: "100%",
  });

  // Contact Text Animate
  const sentences = ["Desarrollador Web ?", "Diseñador 3D ?", "Tecnico Mecatronico?"];
  let i = 0;

  setInterval(function () {
    $(".text-animate").fadeOut(function () {
      $(this)
        .text(sentences[(i = (i + 1) % sentences.length)])
        .fadeIn();
    });
  }, 2500);
});

/**
 * JS para agregar boton volver a inicio
 */
let caja = document.getElementById("volver__arriba");
caja.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 1000) {
    caja.style.display = "flex";
  } else {
    caja.style.display = "none";
  }
});
