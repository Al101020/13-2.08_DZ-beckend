// console.log('--- Запустилась функция: inputTextChat.js');

// import addUsersAndMessageToChat from './addUsersAndMessageToChat';

const inputText = document.querySelector('.input-text');
const chatMessages = document.querySelector('.messages');

const ws = new WebSocket('ws://localhost:3000/ws'); // console.log(ws);// console.log(inputText);

// ws.addEventListener('open', (e) => {
//   console.log(e); // console.log(e.data);

//   console.log('ws open');
// });

// ws.addEventListener('close', (e) => {
//   console.log(e);

//   alert('Сервер недоступен');
//   console.log('ws close');
// });

// ws.addEventListener('error', (e) => {
//   console.log(e);

//   console.log('ws error, сервер недоступен');
// });

// ws.addEventListener('message', (e) => {
//   e.preventDefault();
//   console.log(e); // console.log(e.data); // console.log(window.api);

//   console.log('ws message');

//   const data = JSON.parse(e.data);

//   // console.log(users);
//   users.innerHTML = ''; // всё удалили    console.log(data);
//   // console.log(users);

//   addUsersAndMessageToChat(data, e);
// });

function addZero(num) {
  // функция - нули добавляет в дате и время
  if (num >= 0 && num <= 9) {
    return `0${num}`;
  }
  return num;
}

function timeDate(date) {
  // формируем Время и Дату
  return `${addZero(date.getHours())}.${addZero(date.getMinutes())} ${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1,
  )}.${addZero(date.getFullYear())}`;
}

inputText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    // console.log('input text - Выполнить желаемые действия здесь(сообщение в чат)'); // по 'Enter'
    event.preventDefault();
    const inputTextValue = document.querySelector('.input-text').value;

    const message = document.createElement('div'); // создаём сообщение

    message.classList.add('message-you'); // нужно добавить User и дату

    const messageUser = document.createElement('div'); // User
    messageUser.classList.add('messageUser');
    const date = new Date();

    messageUser.textContent = `You, ${timeDate(date)}`;

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

    messageText.textContent = inputTextValue;

    if (messageText.textContent === '') return;
    chatMessages.appendChild(message);

    // console.log(window.api);

    ws.send(
      JSON.stringify({
        type: 'send',
        message: inputTextValue,
        user: {
          id: window.api.you.id,
          name: window.api.you.name,
        },
      }),
    );

    inputText.value = ''; // удаление текста
  }
});
