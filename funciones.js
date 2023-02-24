document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer = document.querySelector('.slider-container');

  if (!sliderContainer) return; // Comprobación de existencia

  const rightArrow = sliderContainer.querySelector('.right-arrow');
  if (!rightArrow) return; // Comprobación de existencia

  const imageVideoContainer = sliderContainer.querySelector('.image-video-container');
  if (!imageVideoContainer) return; // Comprobación de existencia

  rightArrow.addEventListener('click', function() {
    imageVideoContainer.classList.toggle('show-video');
    console.log("El archivo JavaScript se cargó correctamente");
    console.log("Se hizo clic en la flecha");
  });

  // Encontrar todos los botones de navegación y agregar un listener a cada uno
  const sliderArrows = sliderContainer.querySelectorAll('.slider-arrow');
  sliderArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      // Encontrar la imagen/video que está actualmente activa
      const currentImage = document.querySelector('.slider-image-container.show-video');

      // Encontrar la siguiente imagen/video a mostrar
      let nextImage;
      if (arrow.classList.contains('right-arrow')) {
        nextImage = currentImage.nextElementSibling;
        if (!nextImage) {
          nextImage = document.querySelector('.slider-image-container:first-child');
        }
      } else {
        nextImage = currentImage.previousElementSibling;
        if (!nextImage) {
          nextImage = document.querySelector('.slider-image-container:last-child');
        }
      }

      // Comprobación de existencia antes de cambiar la clase "show-video" de la imagen/video actual y siguiente
      if (currentImage && nextImage) {
        currentImage.classList.remove('show-video');
        nextImage.classList.add('show-video');
      }
    });
  });

  // Definir la función nextSlide
  function nextSlide() {
    // Encontrar la imagen/video que está actualmente activa
    const currentImage = document.querySelector('.slider-image-container.show-video');

    // Encontrar la siguiente imagen/video a mostrar
    let nextImage = null;
    if (currentImage) {
      nextImage = currentImage.nextElementSibling;
      if (!nextImage) {
        nextImage = document.querySelector('.slider-image-container:first-child');
      }
    }

    // Si nextImage sigue siendo nulo, no hay elementos en la lista de imágenes.
    // En ese caso, no hacemos nada.
    if (!nextImage) {
      return;
    }

    // Cambiar la clase "show-video" de la imagen/video actual y siguiente
    if (currentImage) {
      currentImage.classList.remove('show-video');
    }
    nextImage.classList.add('show-video');
  }

  // Agregar el listener al botón de siguiente
  const nextButton = document.querySelector('.right-arrow');
  nextButton.addEventListener('click', nextSlide);
});