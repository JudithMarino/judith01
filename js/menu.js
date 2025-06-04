// Script para menú hamburguesa responsivo
window.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  const links = document.querySelectorAll('.sidebar ul li a');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('active');
    });
    // Cierra el menú al hacer clic en un enlace
    links.forEach(link => {
      link.addEventListener('click', function() {
        sidebar.classList.remove('active');
      });
    });
  }
});
