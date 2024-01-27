//Smooth Scroll
$(document).ready(function () {
  let $root = $("html, body");

  $('a[href^="#"]').click(function () {
    $root.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 100,
      },
      500
    );

    return false;
  });

  //Cambio de color al navbar en desplazamiento
  $(function () {
    $(window).scroll(function () {
      let navegador = $(".navbar");
      if ($(this).scrollTop() > 100) {
        navegador.css("background", "#0DCAF0");
      } else {
        navegador.css("background", "none");
      }
    });
  });
});

//Event Listener botón enviar//
document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('#Contacto form');
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Su mensaje ha sido enviado correctamente');
  });
});
