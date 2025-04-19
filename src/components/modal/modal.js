import './modal.css';
import UserStateApi from '../UserStateApi';

window.api = new UserStateApi('http://localhost:3000/new-user');

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
    const textInput = document.querySelector('.input-text-modal');
    console.log(textInput.value);

    window.api.add({ name: textInput.value });

    try {
      setTimeout(() => {
        if (!window.api.yuo) {
          console.log('ошибка: нужно попробовать ввести другое имя');
          textInput.value = '';

          // const users = document.querySelector('#users');
          // console.log(users);

          return;
        }
        fullScreen.classList.add('displayNone');
        divModal.classList.add('displayNone');

        const divUsers = document.querySelector('#users');

        const divYou = document.createElement('div'); // добовляем себя
        divYou.classList.add('user');
        const div_ = document.createElement('div');
        div_.classList.add('user');
        div_.textContent = '-';
        divYou.appendChild(div_);
        const You = document.createElement('div');
        You.classList.add('inline');
        You.classList.add('niсkName');
        You.textContent = 'You';
        divYou.appendChild(You);
        divUsers.appendChild(divYou);
      }, 1000);
    } catch (err) {
      console.error(err);
    }

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
