import './modal.css';
import UserStateApi from '../UserStateApi';

window.api = new UserStateApi('http://localhost:3000/new-user');
// import { status } from '../UserStateApi';
// api.add({ name: 'User' }); // команда в консоле браузера

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

btnModal.addEventListener('click', (e) => {
  e.preventDefault();
  (async () => {
    const textInput = document.querySelector('.input-text-modal').value;
    console.log(textInput);
    // console.log(api);

    window.api.add({ name: textInput });

    fullScreen.classList.add('displayNone');
    divModal.classList.add('displayNone');

    // const request = fetch('http://localhost:3000');
    // const result = await request;
    // console.log(result);

    // const text = await result.text();
    // console.log(text);
  })();
});

formModal.appendChild(btnModal);

modal.appendChild(formModal);

divModal.appendChild(modal);
body.appendChild(divModal);
