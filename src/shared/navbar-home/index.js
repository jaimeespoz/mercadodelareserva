'use strict';

// import '../../globalstyles.css';
import './navbar-home.css';

const /* {HTMLElement} */ navBarHomeModal = document.createElement('div');
navBarHomeModal.classList.add('navbar-home');
navBarHomeModal.innerHTML = `
    <div class="home-logo">
        <span>Mercado de la</span>
        <span>Reserva</span>
    </div>
    <div>
        <ul class="home-menu">
            <li class="home-menu-links"><span class="text-title-medium">Inicio</span></li>
            <li class="home-menu-links"><span class="text-title-medium">Servicios</span></li>
            <li class="home-menu-links"><span class="text-title-medium">Acerca de</span></li>
            <li class="home-menu-links"><span class="text-title-medium">Contacto</span></li>
        </ul>
    </div>
`;

export { navBarHomeModal };
