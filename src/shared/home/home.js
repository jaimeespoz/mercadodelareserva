'use strict';

// import '../../globalstyles.css';
import './home.css';

// import Foto01 from '../../assets/images/11.jpg';

const /* {HTMLElement} */ homeModal = document.createElement('div');
// homeModal.style.backgroundImage = Foto01;
// homeModal.style.backgroundPosition = 'center';
// homeModal.style.backgroundSize = 'cover';
homeModal.innerHTML = `
  <section class="home-hero-section">
    <div class="home-content">
      <h2 class="text-headline-large">Sitio abierto</h2>
      <h2 class="text-headline-large">a toda la Comunidad</h2>
      <h2 class="text-headline-large">de Aculeo</h2>
      <p class="text-title-medium mt-4 mb-2">
        Con informacion util de uso frecuente para todos los vecinos.</p>  
       <p class="text-title-medium mt-4 mb-2">Dando expecial cabida a todos los Emprendedores del sector.
      </p>
      <h3 class="mt-5 mb-6">Gratuito por todo el año 2025</h3>
      <button type="button" class="text-body-medium mt-10">Continuar...</button>
    </div>
  </section>
`;

export { homeModal };
