const users = document.querySelector('#users');

// Здесь нужно вставить функцию для проверки объекта в массиве:
// function isInArray(id, arr) {
//   if (arr.some(e => e.id === id)) {
//     return true;
//   }
//   return false;
// }
// или
// (arr.find(item => item.id == {нужный id}) && true) || false
// или
// var hasId = arr.some(o => o.id === 2);

export default function addUsers(data) {
  console.log('--- Запустилась функция: addUsers.js');
  // console.log(data);
  // console.log(window.api.you); // при включении null
  console.log(window.api.usersAreConnected);
  const allUsers = document.querySelectorAll('.user');
  console.log(allUsers);

  data.forEach((elem) => {
    // перебираем всех подключенных пользователей      // window.api.usersAreConnected = [];
    // Нужно проверять есть ли такое имя на странице(и в массиве api), если есть не добавлять
    console.log(elem.name);
    // if () {};
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

  if (window.api.you) {
    console.log('You в Api есть');
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
  }
}

// export default function addUsers(data) {
//   // console.log('--- Запустилась функция: addUsersAndMessageToChat.js');   // console.log(data);
//   if (!Array.isArray(data)) {
//     // console.log('data - не массив, значит сообщение в чат!!!');

//     messageToChat(data); // добавляем сообщение в чат

//     // перебираем подключенных пользоватей(сохранёных) в window.api
//     for (let i = 0; i < window.api.usersAreConnected.length; i++) {
//       // console.log(window.api.usersAreConnected[i]);

//       const divUser = document.createElement('div'); // возвращаем Users из window.api
//       divUser.classList.add('user');
//       const div_ = document.createElement('div');
//       div_.textContent = '- ';
//       divUser.appendChild(div_);
//       const user = document.createElement('div');
//       user.classList.add('inline');
//       user.classList.add('niсk');
//       user.textContent = window.api.usersAreConnected[i].name;
//       divUser.appendChild(user);
//       // добавить id пользавателя
//       const idUser = document.createElement('div');
//       idUser.classList.add('idUser');
//       idUser.classList.add('displayNone');
//       idUser.textContent = window.api.usersAreConnected[i].id;
//       divUser.appendChild(idUser);

//       users.appendChild(divUser);
//     }

//     if (window.api.you) {
//       console.log('data - не массив и You в Api есть');
//       // теперь нужно проверить на странице есть You чтобы пометить
//       const allUsers = document.querySelectorAll('.user');
//       console.log(allUsers);
//       console.log(window.api);
//       // ---

//       const divYou = document.createElement('div'); // добавляем себя - 'You'
//       divYou.classList.add('user');
//       const div_ = document.createElement('div');
//       div_.classList.add('user');
//       div_.textContent = '- ';
//       divYou.appendChild(div_);
//       const you = document.createElement('div');
//       you.classList.add('inline');
//       you.classList.add('niсkYou');
//       you.textContent = 'You';

//       divYou.appendChild(you);

//       // добавить id пользавателя
//       const idUser = document.createElement('div');
//       idUser.classList.add('idUser'); // displayNone
//       idUser.classList.add('displayNone');
//       idUser.textContent = window.api.you.id;
//       divYou.appendChild(idUser);
//       // добавить name пользавателя You
//       const nameYou = document.createElement('div');
//       nameYou.classList.add('nameYou'); // displayNone
//       nameYou.classList.add('displayNone');
//       nameYou.textContent = window.api.you.name;
//       divYou.appendChild(nameYou);

//       users.appendChild(divYou);
//     }
//   } else if (Array.isArray(data)) {
//     // console.log('--- если Data - массив');
//     window.api.usersAreConnected = [];

//     data.forEach((elem) => {
//       // перебираем всех подключенных пользователей
//       window.api.usersAreConnected = [];
//       window.api.usersAreConnected.push(elem); // добавляем в API(сохраняем подкл. пользователей)

//       const divUser = document.createElement('div'); // создаём User
//       divUser.classList.add('user');
//       const div_ = document.createElement('div');
//       div_.textContent = '- ';
//       divUser.appendChild(div_);
//       const user = document.createElement('div');
//       user.classList.add('inline');
//       user.classList.add('niсk');
//       user.textContent = elem.name;
//       divUser.appendChild(user);
//       // добавить id пользавателя
//       const idUser = document.createElement('div');
//       idUser.classList.add('idUser'); // displayNone
//       idUser.classList.add('displayNone');
//       idUser.textContent = elem.id;
//       divUser.appendChild(idUser);

//       users.appendChild(divUser);
//     });

//     if (window.api.you) {
//       console.log('You в Api есть');
//       console.log(window.api.usersAreConnected);

//       const divUsers = document.querySelector('#users');

//       const divYou = document.createElement('div'); // добавляем себя - 'You'
//       divYou.classList.add('user');
//       const div_ = document.createElement('div');
//       div_.classList.add('user');
//       div_.textContent = '- ';
//       divYou.appendChild(div_);
//       const you = document.createElement('div');
//       you.classList.add('inline');
//       you.classList.add('niсkYou');
//       you.textContent = 'You';

//       divYou.appendChild(you);

//       // добавить id пользавателя
//       const idUser = document.createElement('div');
//       idUser.classList.add('idUser'); // displayNone
//       idUser.classList.add('displayNone');
//       idUser.textContent = window.api.you.id;
//       divYou.appendChild(idUser);
//       // добавить name пользавателя You
//       const nameYou = document.createElement('div');
//       nameYou.classList.add('nameYou'); // displayNone
//       nameYou.classList.add('displayNone');
//       nameYou.textContent = window.api.you.name;
//       divYou.appendChild(nameYou);

//       divUsers.appendChild(divYou);
//     } else {
//       // console.log('You в Api нет');
//     }
//   } // console.log(data);
// }
