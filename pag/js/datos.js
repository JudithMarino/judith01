const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    body.classList.toggle('show');
  });
});
