import './index.css';

import { enConstruccionModal } from './enconstruccion/index';

const d = document;

export default function ppal() {
    let menuToggle = d.querySelector('.toggle');
    let navigation = d.querySelector('.navigation');
    menuToggle.onclick = function () {
        menuToggle.classList.toggle('active');
        navigation.classList.toggle('active');
    };

    let list = d.querySelectorAll('.list');
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            let j = 0;
            while (j < list.length) {
                list[j++].className = 'list';
            }
            list[i].className = 'list active';
        };
    }
}

ppal();

const /** {Object} */ modal = enConstruccionModal();
modal.open();
