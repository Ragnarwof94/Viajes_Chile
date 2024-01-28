# Documentación del Sitio Web Viajes Chile

## Tabla de Contenidos

- [Introducción](#introducción)
- [Estructura HTML](#estructura-html)
  - [Etiquetas Meta](#etiquetas-meta)
  - [Título](#título)
  - [Favicon](#favicon)
  - [Bootstrap y Estilos Personalizados](#bootstrap-y-estilos-personalizados)
- [Encabezado](#encabezado)
  - [Barra de Navegación](#barra-de-navegación)
  - [Sección de Carrusel](#sección-de-carrusel)
- [Sección Quiénes Somos](#sección-quiénes-somos)
- [Sección Destacados](#sección-destacados)
- [Sección de Contacto](#sección-de-contacto)
- [Pie de Página](#pie-de-página)
- [Dependencias de JavaScript](#dependencias-de-javascript)

## Introducción

Este documento proporciona documentación para el código HTML del sitio web Viajes Chile. El sitio está diseñado para una agencia de viajes e incluye secciones para el hogar, sobre nosotros, destinos destacados, información de contacto y enlaces a redes sociales.

## Estructura HTML

### Etiquetas Meta

- **charset:** UTF-8
- **viewport:** width=device-width, initial-scale=1.0

### Título

- Título del sitio web: "Viajes Chile"

### Favicon

- El favicon es una imagen PNG ubicada en el directorio "./assets/img/".

### Bootstrap y Estilos Personalizados

- Se utiliza Bootstrap 5.3.2 para el estilo.
- Los estilos personalizados se definen en el archivo "./assets/css/style.css".

## Encabezado

### Barra de Navegación

- Barra de navegación fija con un logotipo de marca y enlaces de navegación.
- Los enlaces de navegación incluyen Inicio, Quiénes Somos, Destacados, Contacto y Redes Sociales.
- Barra de navegación receptiva para pantallas más pequeñas.

### Sección de Carrusel

- Carrusel de imágenes con imágenes panorámicas con un intervalo de 10 segundos para desplazamiento automático.
- Botones de navegación para control manual.

## Sección Quiénes Somos

- Sección que presenta "¿Quiénes Somos?".
- Tres columnas que proporcionan información sobre la experiencia de la agencia de viajes, incluyendo iconos de un avión, una montaña y una ruta.

## Sección Destacados

- Sección que destaca destinos destacados.
- Tarjetas para cada destino con una imagen, título y descripción.

## Sección de Contacto

- Sección para el contacto del usuario con un formulario.
- Campos del formulario incluyen Nombre, Asunto y Mensaje.
- Botón de envío para enviar el formulario.

## Pie de Página

- Sección de pie de página que contiene el nombre de la empresa ("VIAJES CHILE") y enlaces a redes sociales.
- Iconos de redes sociales incluyen GitHub, LinkedIn, Twitter y Facebook.

## Dependencias de JavaScript

- jQuery (versión 3.7.1) se utiliza para la funcionalidad de JavaScript.
- Popper.js (versión 2.11.8) para la posición de tooltips y popovers.
- Bootstrap (versión 5.3.2) para el diseño receptivo y funcionalidad adicional de JavaScript.
- Se incluye JavaScript personalizado desde el archivo "./assets/js/script.js".

Esta documentación proporciona una descripción general de la estructura y funcionalidad del sitio web. Consulte las secciones respectivas para obtener información detallada sobre cada parte del sitio.


# Estilos CSS para el Sitio Web Viajes Chile

## Fuentes

Se importa la fuente "Raleway" desde Google Fonts con los pesos 400 y 700.

## Reset de Estilos Globales

Se establecen estilos iniciales para el cuerpo y otros elementos con márgenes y rellenos a cero.

## Estilos Generales del Cuerpo

- Se utiliza la fuente "Raleway" como la fuente principal.
- El fondo del cuerpo es negro (#000000) y el color del texto es blanco (#ffffff).

## Estilos de la Barra de Navegación (Navbar)

- La barra de navegación tiene posición fija en la parte superior, transición de color de fondo y se ajusta al ancho de la pantalla.
- Enlaces de navegación en color blanco (#FFFFFF).
- La marca (logo) de la barra de navegación tiene un margen a la izquierda.

## Secciones Específicas

### Quiénes Somos

- Espaciado superior de 50px.

### Destacados

- Espaciado superior de 50px.
- Imágenes de las tarjetas se ajustan a una altura máxima de 150px con object-fit: cover.

### Tarjetas (Cards)

- Los cuerpos de las tarjetas tienen un fondo azul claro (#0DCAF0) y texto blanco (#FFFFFF).
- El texto de la tarjeta tiene un margen inferior de 50px.

### Contacto

- Espaciado superior de 50px.
- Los elementos del formulario tienen un margen inferior de 10px.
- La altura del área de texto del formulario es de 200px.

### Botones

- Margen superior de 3px.
- Los botones en general tienen un margen inferior de 25px.
- El botón de envío del formulario tiene un fondo azul claro (#0DCAF0) y texto blanco (#ffffff).

## Pie de Página (Footer)

- Fondo del pie de página de color azul claro (#0DCAF0).
- Espaciado superior de 20px y espaciado inferior de 15px.
- Título del pie de página tiene un margen a la izquierda.

## Media Queries

- A partir de 768px (pantallas medianas y más grandes):
  - Alineación del elemento con la clase "ms-auto" se ajusta a la derecha.

## Iconos de Redes Sociales

- Estilos específicos para los iconos de redes sociales con colores personalizados.

## Tooltips

- Estilos personalizados para los tooltips con fondo y texto de color definidos.

Este documento proporciona una descripción de los estilos CSS utilizados en el sitio web Viajes Chile. Consulte las secciones respectivas para obtener información detallada sobre cada conjunto de estilos.

# Scripts JavaScript para el Sitio Web Viajes Chile

## Smooth Scroll

Se utiliza el efecto de desplazamiento suave al hacer clic en enlaces internos del sitio.

```javascript
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

  # Cambio de color en la barra de navegación durante el desplazamiento
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
```

# Event Listener para el Formulario de Contacto

```javascript
# Asegurarse de que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
  # Seleccionar el formulario de contacto por su ID
  let form = document.querySelector('#Contacto form');
  
  # Agregar un Event Listener para el evento de envío del formulario
  form.addEventListener('submit', function(event) {
      # Prevenir el comportamiento predeterminado de envío del formulario
      event.preventDefault();
  
      # Mostrar un mensaje de alerta indicando que el mensaje fue enviado correctamente
      alert('Su mensaje ha sido enviado correctamente');
  });
});
```


# Inicialización de Tooltips para el Botón de Enviar

```javascript
# Asegurarse de que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
  # Seleccionar el botón de enviar por su ID
  var button = document.querySelector('#Contacto button');
  
  # Configurar atributos para el tooltip en el botón de enviar
  button.setAttribute('data-toggle', 'tooltip');
  button.setAttribute('data-placement', 'right');
  button.setAttribute('title', 'Haz clic para enviar tu mensaje');

  # Inicializar todos los tooltips en el documento usando jQuery
  $(function () {
      $('[data-toggle="tooltip"]').tooltip()
  });
});
```

https://github.com/Ragnarwof94/Viajes_Chile link GitHub Page
