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
    const info = document.querySelector('.modal-info');

    window.api.add({ name: textInput.value });

    try {
      setTimeout(() => {
        if (!window.api.yuo) {
          info.textContent = 'ошибка: такой псевдоним уже есть';
          info.classList.add('textRed');
          textInput.value = ''; // удаляем текст из окна

          return;
        }
        fullScreen.classList.add('displayNone');
        divModal.classList.add('displayNone');

        const divUsers = document.querySelector('#users');

        const divYou = document.createElement('div'); // добовляем себя
        divYou.classList.add('user');
        const div_ = document.createElement('div');
        div_.classList.add('user');
        div_.textContent = '- ';
        divYou.appendChild(div_);
        const you = document.createElement('div');
        you.classList.add('inline');
        you.classList.add('niсkYuo');
        you.textContent = 'You';

        divYou.appendChild(you);
        divUsers.appendChild(divYou);
      }, 500);
    } catch (err) {
      console.error(err);
    }
  })();
});

formModal.appendChild(btnModal);

modal.appendChild(formModal);
// --------------------------------------------
const modalInfo = document.createElement('h6');
modalInfo.classList.add('modal-info');
modalInfo.textContent = 'Введите псевдоним(10 символов)';
modal.appendChild(modalInfo);
// --------------------------------------------

divModal.appendChild(modal);
body.appendChild(divModal);
