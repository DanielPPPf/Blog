const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    const itemType = item.getAttribute('data-type');
    const itemSrc = item.querySelector('img, video').getAttribute('data-src');

    if (itemType === 'image') {
      const image = new Image();
      image.src = itemSrc;
      image.onload = () => {
        modalContent.innerHTML = '';
        modalContent.appendChild(image);
        modal.style.display = 'block';
      };
    } else if (itemType === 'video') {
      const video = document.createElement('video');
      video.setAttribute('