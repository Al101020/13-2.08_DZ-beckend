const userS = document.querySelector('#users');
const users = document.querySelectorAll('.user');
console.log(users);

export default function addUsersFromApi(usersAreConnected) {
  console.log('--- Запустилась функция: addUsersFromApi.js');
  // console.log(window.api.usersAreConnected.length);
  // console.log(usersAreConnecte

  if (window.api.usersAreConnected.length === 0 && users.length === 0) {
    console.log('подключенных пользователей нет в api, вернём');
    usersAreConnected.forEach((elem) => {
      window.api.usersAreConnected.push(elem);
    });
    // console.log(window.api.usersAreConnected);
  }

  // console.log(window.api.usersAreConnected);

  if (users.length === 0) {
    console.log(users);
    console.log('--- пользователей на странице нет');
  }

  // перебираем подключенных пользоватей(сохранёных) в window.api

  for (let i = 0; i < window.api.usersAreConnected.length; i++) {
    // console.log(window.api.usersAreConnected[i]);

    const divUser = document.createElement('div'); // возвращаем Users из window.api
    divUser.classList.add('user');
    const div_ = document.createElement('div');
    div_.textContent = '- ';
    divUser.appendChild(div_);
    const user = document.createElement('div');
    user.classList.add('inline');
    user.classList.add('niсk');
    user.textContent = window.api.usersAreConnected[i].name;
    divUser.appendChild(user);
    // добавить id пользавателя
    const idUser = document.createElement('div');
    idUser.classList.add('idUser');
    idUser.classList.add('displayNone');
    idUser.textContent = window.api.usersAreConnected[i].id;
    divUser.appendChild(idUser);

    userS.appendChild(divUser);
  }

  if (window.api.you) {
    console.log('data - не массив и You в Api есть');
    // теперь нужно проверить на странице есть You чтобы пометить
    const allUsers = document.querySelectorAll('.user');
    console.log(allUsers);
    console.log(window.api);
    // ---

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

    userS.appendChild(divYou);
  }

  // console.log(window.api);
  // console.log(window.api.usersAreConnected);

  // нужно проверить есть ли YOU на странице
  if (window.api.you) {
    const idUsers = document.querySelectorAll('.idUser');
    // console.log(idUsers[0].textContent);
    idUsers.forEach((elem) => {
      if (elem.textContent === window.api.you.id) {
        // console.log(elem.textContent);
        // console.log(window.api.you.id);
        console.log('такой элемент есть, или You уже на странице, добовлять не надо');
      }
    });
  }

  if (!window.api.you) {
    console.log('You в Api НЕТ');
    console.log(window.api.usersAreConnected);

    const divUsers = document.querySelector('#users');

    const divYou = document.createElement('div'); // добавляем себя - 'You'
    divYou.classList.add('user');
    const div_ = document.createElement('div');
    div_.classList.add('user');
    div_.textContent = '- ';
    divYou.appendChild(div_);
    const you = document.createElement('div');
    you.classList.add('inline');
    you.classList.add('niсkYou');
    you.textContent = `You(${window.api.you.name})`;

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
  }
}
