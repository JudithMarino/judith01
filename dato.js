document.querySelectorAll('.summary').forEach((elem) => {
  elem.addEventListener('click', () => {
    const content = elem.parentElement.querySelector('.content')
    const isOpen = elem.parentElement.classList.toggle('open');
    content.style.height = isOpen ? content.scrollHeight + "px" : 0
  })
})