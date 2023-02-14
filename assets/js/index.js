navegador=navigator.userAgent; //busco el "userAgent" del usuario.
//lista de palabras del "userAgent" en los móviles
moviles=["Mobile","iPhone","iPod","BlackBerry","Opera Mini","Sony","MOT","Nokia","samsung"];
detector=0; //Variable que detectará si se usa un móvil
for (i in moviles) { //comprobar en la lista ...
   //si el método "indexOf" no devuelve -1, indica que la palabra está en el "userAgent"
   compruebo=navegador.indexOf(moviles[i]); 
   if (compruebo>-1) { 
      detector=1; //Si es un móvil, cambio el valor del detector
      }
   }
if (detector==1) { //si es un móvil redirecciono la página.
   location.href="mantenimiento.php"; //Se redirecciona hacia la versión móvil.
   }

/**
   * Porfolio isotope and filter
   */
window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });

      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });