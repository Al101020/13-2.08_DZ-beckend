// TODO: write code here
import '../components/chat/chat';
import '../components/modal/modal';

// import inputTextChat from '../components/chat/inputTextChat';
// -------------------------
// const chat = document.querySelector('#chat');
// const chatMessages = chat.querySelector('.messages');
const users = document.querySelector('#users'); // console.log(users);
// users.innerHTML = '';

console.log(window.api);

window.addEventListener('beforeunload', (event) => {
  // закрытие окна и выход пользователя - 1 вариант
  event.preventDefault();
  window.api.remove({ user: window.api.you }); // при закрытии окна не понятно: получилось?
  // window.api.remove({ user: window.api.you.name }); // при закрытии окна не понятно: получилось?
  // в консоли тоже нет ни чего   // 2-й варинт:   // ws.close
  // ws.send(JSON.parse({ type: "exit", user: window.api.you.name })); // нифига
}); // --- конец закрытие окна

const ws = new WebSocket('ws://localhost:3000/ws'); // console.log(ws);

// export default function inputTextChat() {
// export function inputText() {
console.log('input text - Выполнить желаемые действия здесь(сообщение в чат)');

const chat = document.querySelector('#chat');
// console.log(chat);
console.log(users);
const chatMessages = chat.querySelector('.messages');
console.log(chatMessages);
const inputText = chat.querySelector('.input-text');
console.log(inputText);

inputText.addEventListener('keypress', (event) => {
  // подписываемся на отправку сообщения
  if (event.key === 'Enter') {
    event.preventDefault();
    const inputTextValue = document.querySelector('.input-text').value;

    const message = document.createElement('div'); // создаём сообщение
    message.classList.add('message-my');
    message.textContent = inputTextValue;

    if (message.textContent === '') return;

    // ошибка ищем://console.log(chatMessages);//console.log(message);//console.log(inputTextValue);
    chatMessages.appendChild(message);

    // пример от преподователя: { type: 'send', message: value, user: this.user }

    // ws.send({ type: 'send', message: inputTextValue, user: window.api.you.name });
    // ----- Сервер отключается -----

    // ws.send(JSON.parse(inputTextValue)); // is not valid JSON, но не отключается
    // ws.send(JSON.parse({ message: inputTextValue })); //

    // ws.send(JSON.parse({ inputTextValue })); // is not valid JSON

    // ws.send(JSON.parse({ type: "send", message: inputTextValue, user: window.api.you.name }));
    // в предыдущей строке: is not valid JSON

    // ws.send({ type: 'send', message: inputTextValue, user: window.api.you.name });
    // тоже самое без: JSON.parse
    console.log(window.api.you.id);
    console.log(window.api.you.name);
    // ws.send({ type: 'send', message: inputTextValue, user: window.api.you });
    // ----- Сервер отключается -----     // зато нет ошибки: is not valid JSON
    ws.send({
      type: 'send',
      message: inputTextValue,
      user: {
        id: window.api.you.id,
        name: window.api.you.name,
      },
    });

    // ws.send(JSON.parse({ message: inputTextValue, user: window.api.you.name }));
    // в предыдущей тоже строке: is not valid JSON

    inputText.value = ''; // удаление текста
  }
});
// }

// inputTextChat();

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
  // console.log(e);
  console.log(e.data); // console.log(window.api);

  const data = JSON.parse(e.data);

  users.innerHTML = '';
  data.forEach((elem) => {
    // перебираем всех подключенных пользователей
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

  console.log('ws message');
});

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

if (window.api.you) {
  // если YOU есть
  console.log(window.api.you);
}
