'use strict';

// import '../../globalstyles.css';
import './footer.css';

// import { enConstruccionModal } from '../enconstruccion';

import logo from '/src/assets/images/logo.png';

// const footerModal = function () {
const /* {HTMLElement} */ footerModal = document.createElement('div');
footerModal.innerHTML = `
    <div class="contenedor">
        <div class="contenido">
            <div class="frame-footer">
                <div class="wrapper-footer">
                    <div class="layer-footer">
                        <div>
                            <a href="/">
                                <img src="${logo}" class="logo-chico" alt="" />
                            </a>
                        </div>
                        <div>
                            <span class="text-title-large"
                                >Unidad de Vecinos</span
                            >
                            <span class="text-title-large"
                                >Reserva de Aculeo</span
                            >
                            <span class="text-body-small"
                                >Const.: Octubre-2024</span
                            >
                            <span class="text-body-small">Comuna de Paine</span>
                            <span class="text-body-small"
                                >Region Metropolitana</span
                            >
                        </div>
                    </div>
                    <div class="layer-footer">
                        <div class="col-footer">
                            <span class="text-title-large">Contacto</span>
                            <span class="text-body-large mt-2">Direccion:</span>
                            <span class="text-body-small">Parcela xx</span>
                            <span class="text-body-small"
                                >Condominio Parque Cantillana</span
                            >
                            <span class="text-body-small"
                                >(ex Alto Laguna)</span
                            >
                            <span class="text-body-small"
                                >Ruta G-546 - Klm. 19,5</span
                            >
                            <span class="text-body-small">Comuna de Paine</span>
                            <span class="text-body-large mt-2">Email:</span>
                            <span class="text-body-small"
                                >contacto@reservadeaculeo.cl</span
                            >
                            <span class="text-body-large mt-2">Telefono:</span>
                            <span class="text-body-small">+56 9 1234 1234</span>
                        </div>
                        <div class="col-footer">
                            <span class="text-title-large">Incorporacion</span>
                            <ul>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Contacto</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Contacto</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Proxima Reunion</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Tema x Tema x Tema x</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="col-footer">
                            <span class="text-title-large"
                                >Nuestra Comunidad</span
                            >
                            <ul>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Tema x Tema x Tema x</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Tema x Tema x Tema x</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Tema x Tema x Tema x</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Tema x Tema x Tema x</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div class="col-footer">
                            <span class="text-title-large">Otra Info</span>
                            <ul>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Tema x Tema x Tema x</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Tema x Tema x Tema x</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        class=""
                                        data-opcion-xx
                                    >
                                        <span class="text text-label-large"
                                            >Tema x Tema x Tema x</span
                                        >
                                        <div class="state-layer"></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export { footerModal };
