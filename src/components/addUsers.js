// export default class UserStateApi {
//   constructor() {}
// }
const users = document.querySelector('#users');

export default function addUsers(data) {
  console.log('--- Запустилась функция: addUsers.js');
  // console.log(data);

  if (!Array.isArray(data)) {
    console.log('data - не массив, значит сообщение в чат!!!');
    console.log(data);
    // if (window.api.usersAreConnected.includes(window.api.you)) {
    //   console.log('YOU в API подключенных есть');
    // } else {
    //   console.log('YOU в API подключенных нет'); // нужно добавить на страницу YOU
    // }

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
    console.log('--- если Data - массив, значит формируем список User');
    console.log(data);
    console.log(window.api.usersAreConnected);
    window.api.usersAreConnected = [];

    data.forEach((elem) => {
      window.api.usersAreConnected.push(elem); // добавляем в API(сохраняем подкл. пользователей)

      // перебираем всех подключенных пользователей
      // console.log(elem);
      // if (!window.api.usersAreConnected.includes(elem)) {
      //   console.log('--------------------------');// не работает
      //   console.log(elem);
      //   console.log(window.api.usersAreConnected);
      //   console.log('Elem-ента НЕТ в подключенных');
      //   console.log('--------------------------');
      //   window.api.usersAreConnected.push(elem); // добавляем в API(сохраняем подкл. пользователей)
      // }
      // if (!window.api.usersAreConnected.includes(elem)) {
      //   console.log('--------------------------');// не работает
      //   console.log(elem);
      //   console.log(window.api.usersAreConnected);
      //   console.log('Elem-ента НЕТ в подключенных');
      //   console.log('--------------------------');
      //   window.api.usersAreConnected.push(elem); // добавляем в API(сохраняем подкл. пользователей)
      // }

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

    console.log(window.api);
    if (window.api.you) {
      console.log('You в Api есть');
      // console.log(window.api.usersAreConnected);
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
  }
  // console.log(data);
}
