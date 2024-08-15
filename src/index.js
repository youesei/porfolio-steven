document.addEventListener('DOMContentLoaded', () => {
  const navElement = document.querySelector('#dev-name'); // Elemento que debe ocultarse en el nav

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      const { isIntersecting } = entry;
      console.log(entry);
      if (isIntersecting) {
        console.log('AAAAAAA')
      }
    });
  };

  const options = {
    root: null, // Observa respecto al viewport
    threshold: [0.1, 0.9]// Detecta intersecciones al 10% de visibilidad
  };

  const observer = new IntersectionObserver(observerCallback, options);

  // Observa las secciones 2 y 3
  console.log(document.querySelector('#projects-list'))
  observer.observe(document.querySelector('#projects-list'));
  // observer.observe(document.querySelector('#section3'));
  // observer.observe(document.querySelector('#section1'));
})