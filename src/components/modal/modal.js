import './modal.css';

const body = document.querySelector('body');
const fullScreen = document.createElement('div');
fullScreen.classList.add('fullScreen');
body.appendChild(fullScreen);
const divModal = document.createElement('div');
divModal.classList.add('div-modal');
const modal = document.createElement('div');
modal.classList.add('modal');
const title = document.createElement('div');
title.classList.add('title-modal');
title.textContent = 'Выберете псевдоним';
modal.appendChild(title);
divModal.appendChild(modal);
body.appendChild(divModal);
