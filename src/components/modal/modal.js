import './modal.css';

const body = document.querySelector('body');

const fullScreen = document.createElement('div');
fullScreen.classList.add('full-screen');
body.appendChild(fullScreen);

const divModal = document.createElement('div');
divModal.classList.add('div-modal');

const modal = document.createElement('div');
modal.classList.add('modal');
const title = document.createElement('div');
title.classList.add('title-modal');
title.textContent = 'Выберете псевдоним';
modal.appendChild(title);

const formModal = document.createElement('form');
formModal.classList.add('form-input');
const inputModal = document.createElement('input');
inputModal.classList.add('input-text-modal');
inputModal.type = 'text';
formModal.appendChild(inputModal);
const btnModal = document.createElement('button');
btnModal.classList.add('btn-modal');
btnModal.textContent = 'Продолжить';
formModal.appendChild(btnModal);

modal.appendChild(formModal);

divModal.appendChild(modal);
body.appendChild(divModal);
