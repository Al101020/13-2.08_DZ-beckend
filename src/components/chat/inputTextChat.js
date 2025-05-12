// export default function inputTextChat() {
//   // export function inputText() {
//   console.log('input text - Выполнить желаемые действия здесь');

//   const chat = document.querySelector('#chat');
//     // console.log(chat);
//   const chatMessages = chat.querySelector('.messages');
//     console.log(chatMessages);
//   const inputText = chat.querySelector('.input-text');
//     console.log(inputText);

//   inputText.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//       event.preventDefault();
//       let inputTextValue = document.querySelector('.input-text').value;

//       const message = document.createElement('div'); // создаём сообщение
//       message.classList.add('message-my');
//       message.textContent = inputTextValue;

//       if (message.textContent === '') return;

//       chatMessages.appendChild(message);

//       ws.send(inputTextValue);

//       message.textContent = ''; // удаление текста
//     }
//   });
// }

// import addUsers from '../addUsers';
// ------------------------------------------------------------------------------2025.05.07----------
console.log('--- Запустилась функция: inputTextChat.js');
const inputText = document.querySelector('.input-text');
const chatMessages = document.querySelector('.messages');
const ws = new WebSocket('ws://localhost:3000/ws'); // console.log(ws);// console.log(inputText);

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
  // console.log('input text - Выполнить желаемые действия здесь(сообщение в чат)');// по всем клавишам
  // подписываемся на отправку сообщения
  if (event.key === 'Enter') {
    // if (window.api.you) {
    //   console.log('- есть YOU');

    // } else if (!window.api.you) {
    //   console.log('- нет YOU');
    // };

    console.log('input text - Выполнить желаемые действия здесь(сообщение в чат)'); // по 'Enter'
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

    messageText.textContent = inputTextValue; // изменить

    if (messageText.textContent === '') return; // изменить
    // ошибка ищем://console.log(chatMessages);//console.log(message);//console.log(inputTextValue);
    chatMessages.appendChild(message);

    console.log(window.api);
    // addUsers(window.api.usersAreCnnected);

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
  }
});
