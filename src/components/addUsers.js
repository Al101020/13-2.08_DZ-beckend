// export default class UserStateApi {
//   constructor() {}
// }
const users = document.querySelector('#users');

export default function addUsers(data) {
  console.log('--- Запустилась функция: addUsers.js');
  console.log(data);

  if (!Array.isArray(data)) {
    // console.log('data - не массив');
    if (window.api.usersAreConnected.includes(window.api.you)) {
      console.log('YOU в API подключенных есть');
    } else {
      console.log('YOU в API подключенных нет'); // нужно добавить на страницу YOU
    }

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

      users.appendChild(divUser);
    } // - без ошибки     // return;
  } else if (Array.isArray(data)) {
    data.forEach((elem) => {
      // перебираем всех подключенных пользователей
      // console.log(elem);
      if (window.api.usersAreConnected.includes(elem)) {
        console.log('Elem есть в подключенных');
      }

      window.api.usersAreConnected.push(elem); // добавляем в API(сохраняем подкл. пользователей)

      const divUser = document.createElement('div'); // создаём User
      divUser.classList.add('user');
      const div_ = document.createElement('div');
      div_.textContent = '- ';
      divUser.appendChild(div_);
      const user = document.createElement('div');
      user.classList.add('inline');
      user.classList.add('niсk');
      user.textContent = elem.name;
      divUser.appendChild(user);
      // добавить id пользавателя
      const idUser = document.createElement('div');
      idUser.classList.add('idUser'); // displayNone
      idUser.classList.add('displayNone');
      idUser.textContent = elem.id;
      divUser.appendChild(idUser);

      users.appendChild(divUser);
    });
  }
}
