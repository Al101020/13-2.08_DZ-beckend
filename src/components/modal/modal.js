import './modal.css';
import UserStateApi, { infoError } from '../chat/UserStateApi';

// console.log(infoError);

window.api = new UserStateApi('http://localhost:3000/new-user'); // console.log(window.api.you);

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
  const textInput = document.querySelector('.input-text-modal');

  const info = document.querySelector('.modal-info');
  (async () => {
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
    window.api.add({ name: textInput.value }); // Запрос на регистрацию нового пользователя
    // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

    try {
      setTimeout(() => {
        if (!window.api.you) {
          // console.log(infoError);
          // info.textContent = 'ошибка: возможно неполадки на сервере или такой псевдоним уже есть';
          const constInfoErr = infoError[0];
          info.textContent = constInfoErr;
          info.classList.add('textRed');
          textInput.value = ''; // удаляем текст из окна

          return;
        }
        // if (window.api.you) {
        //   console.log(window.api.you);
        // }
        fullScreen.classList.add('displayNone');
        divModal.classList.add('displayNone');

        const divUsers = document.querySelector('#users');

        // --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
        // нужно проверить есть ли YOU в window.api.usersAreConnected , window.api.you
        if (window.api.you) {
          // console.log('You в Api есть');
          // console.log(window.api.usersAreConnected);

          const divYou = document.createElement('div'); // добавляем себя - 'You'
          divYou.classList.add('user');
          const div_ = document.createElement('div');
          div_.classList.add('user');
          div_.textContent = '- ';
          divYou.appendChild(div_);
          const you = document.createElement('div');
          you.classList.add('inline');
          you.classList.add('niсkYou');
          you.textContent = 'You';

          divYou.appendChild(you);

          // добавить id пользавателя
          const idUser = document.createElement('div');
          idUser.classList.add('idUser'); // displayNone
          idUser.classList.add('displayNone');
          idUser.textContent = window.api.you.id;
          divYou.appendChild(idUser);
          // добавить name пользавателя You
          const nameYou = document.createElement('div');
          nameYou.classList.add('nameYou'); // displayNone
          nameYou.classList.add('displayNone');
          nameYou.textContent = window.api.you.name;
          divYou.appendChild(nameYou);

          divUsers.appendChild(divYou);
        } else {
          console.log('You в Api нет');
        }
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
modalInfo.textContent = 'Введите псевдоним(<= 10 символов)';
modal.appendChild(modalInfo);
// --------------------------------------------

divModal.appendChild(modal);
body.appendChild(divModal);

// const
// window.onload = function() { textInput.focus(); };
