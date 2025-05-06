// TODO: write code here
import '../components/chat/chat';
import '../components/modal/modal';

function addZero(num) {
  if (num >= 0 && num <= 9) {
    return `0${num}`;
  }
  return num;
}

const users = document.querySelector('#users');

console.log(window.api);

window.addEventListener('beforeunload', (event) => {
  // закрытие окна и выход пользователя - 1 вариант
  event.preventDefault();
  window.api.remove({ user: window.api.you }); // при закрытии окна не понятно: получилось?
}); // --- конец закрытие окна

const ws = new WebSocket('ws://localhost:3000/ws'); // console.log(ws);

console.log('input text - Выполнить желаемые действия здесь(сообщение в чат)');

const chat = document.querySelector('#chat'); // console.log(chat);
console.log(users);
const chatMessages = chat.querySelector('.messages');
console.log(chatMessages);
const inputText = chat.querySelector('.input-text');
console.log(inputText);

function timeDate(date) {
  // формируем Время и Дату
  return `${addZero(date.getHours())}.${addZero(date.getMinutes())} ${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1,
  )}.${addZero(date.getFullYear())}`;
}

inputText.addEventListener('keypress', (event) => {
  // подписываемся на отправку сообщения
  if (event.key === 'Enter') {
    event.preventDefault();
    const inputTextValue = document.querySelector('.input-text').value;

    const message = document.createElement('div'); // создаём сообщение

    message.classList.add('message-you'); // нужно добавить User и дату

    const messageUser = document.createElement('div'); // User
    messageUser.classList.add('messageUser');
    const date = new Date();

    // messageUser.textContent = window.api.you.name + ', дата: ' + date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
    messageUser.textContent = `You, ${timeDate(date)}`;
    // messageUser.textContent = updateTime();

    message.appendChild(messageUser);

    const messageText = document.createElement('div'); // Text
    messageText.classList.add('messageText');
    message.appendChild(messageText);

    const messageNickYou = document.createElement('div'); // мой Nick
    messageNickYou.classList.add('messageNickYou');
    messageNickYou.classList.add('displayNone');
    messageNickYou.textContent = window.api.you.name;
    message.appendChild(messageNickYou);

    const messageIdYou = document.createElement('div'); // мой ID
    messageIdYou.classList.add('messageIdYou');
    messageIdYou.classList.add('displayNone');
    messageIdYou.textContent = window.api.you.id;
    message.appendChild(messageIdYou);

    messageText.textContent = inputTextValue; // изменить

    if (messageText.textContent === '') return; // изменить
    // ошибка ищем://console.log(chatMessages);//console.log(message);//console.log(inputTextValue);
    chatMessages.appendChild(message);

    // пример от преподователя: { type: 'send', message: value, user: this.user }

    // console.log(window.api.you.id);
    // console.log(window.api.you.name);

    ws.send(
      JSON.stringify({
        type: 'send',
        message: inputTextValue,
        user: {
          id: window.api.you.id,
          name: window.api.you.name,
        },
      }),
    ); // ----- Сервер не отключается ----- // нужно: stringify

    inputText.value = ''; // удаление текста

    // if (window.api.you) {
    //   console.log('- YOU');

    // } else if (!window.api.you) {
    //   console.log('- нет YOU');
    // };
  }
});

ws.addEventListener('open', (e) => {
  console.log(e); // console.log(e.data);

  console.log('ws open');
});

ws.addEventListener('close', (e) => {
  console.log(e);

  alert('Сервер отключился');
  console.log('ws close');
});

ws.addEventListener('error', (e) => {
  console.log(e);

  console.log('ws error, сервер недоступен');
});

ws.addEventListener('message', (e) => {
  e.preventDefault(); // console.log(e);  // console.log(e.data); // console.log(window.api);
  const data = JSON.parse(e.data);

  users.innerHTML = '';
  if (!Array.isArray(data)) {
    // console.log('data - не массив');

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
      window.api.usersAreConnected.push(elem); // добавляем в API(сохраняем пользователей)

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
  // Теперь нужно проверить есть ли YOU в подключенных пользователях
  // console.log('Теперь нужно проверить есть ли YOU в подключенных пользователей');
  // console.log('массив');
  // console.log(window.api.usersAreConnected);
  // console.log('ищем YOU');

  if (window.api.you) {
    // если YOU есть, нужно добавить в
    // console.log(window.api.you);
    if (!window.api.usersAreConnected.includes(window.api.you)) {
      window.api.usersAreConnected.push(window.api.you); // добавил в api
      // console.log(window.api.usersAreConnected);
      // console.log(window.api.you);
    }

    // const users = document.querySelector('#users');

    const userYou = document.createElement('div'); // создаём UserYou
    userYou.classList.add('user');
    const div_ = document.createElement('div');
    div_.textContent = '- ';
    userYou.appendChild(div_);
    const user = document.createElement('div');
    user.classList.add('inline');
    user.classList.add('niсkYou');
    user.textContent = 'You';
    userYou.appendChild(user);
    // добавить id пользавателя
    const idUser = document.createElement('div');
    idUser.classList.add('idUser'); // displayNone
    idUser.classList.add('displayNone');
    idUser.textContent = window.api.you.id;
    userYou.appendChild(idUser);
    // добавить name пользавателя You
    const nameYou = document.createElement('div');
    nameYou.classList.add('nameYou'); // displayNone
    nameYou.classList.add('displayNone');
    nameYou.textContent = window.api.you.name;
    userYou.appendChild(nameYou);

    users.appendChild(userYou);
  } else {
    // console.log('YOU нет ещё');
  }

  console.log('ws message');
});
// ---

// --------------------------(это из SSE)

// const eventSource = new EventSource('http://localhost:3000/sse');

// eventSource.addEventListener('open', (e) => {
//     console.log(e);

//     console.log('open!!!');
// });

// eventSource.addEventListener('error', (e) => {
//     console.log(e);

//     console.log('error!!!');
// });

// eventSource.addEventListener('message', (e) => {
//     console.log(e);

//     console.log('message!!!');
// });
// -------------------------------------------------------------------------
