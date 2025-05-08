// TODO: write code here
import '../components/chat/chat';
import '../components/modal/modal';
import addUsers from '../components/addUsers';
// ---

import '../components/chat/inputTextChat';

console.log(window.api);

const users = document.querySelector('#users');
console.log(users); // ещё пустой

const chat = document.querySelector('#chat');
const chatMessages = chat.querySelector('.messages');
console.log(chatMessages); // ещё пустой

const ws = new WebSocket('ws://localhost:3000/ws'); // console.log(ws);

// window.addEventListener('beforeunload', (event) => {
// закрытие окна и выход пользователя
// event.preventDefault();
//  - 2 вариант через WS // работает, но тогда нет ни кого
// ws.send(
//   JSON.stringify({
//     type: 'exit',
//     // message: inputTextValue,
//     user: {
//       id: window.api.you.id,
//       name: window.api.you.name,
//     },
//   }),
// ); // ----- Сервер не отключается ----- // нужно: stringify
// }); // --- конец закрытие окна

ws.addEventListener('open', (e) => {
  console.log(e); // console.log(e.data);

  console.log('ws open');
});

ws.addEventListener('close', (e) => {
  console.log(e);

  alert('Сервер недоступен');
  console.log('ws close');
});

ws.addEventListener('error', (e) => {
  console.log(e);

  console.log('ws error, сервер недоступен');
});

ws.addEventListener('message', (e) => {
  e.preventDefault(); // console.log(e);  // console.log(e.data); // console.log(window.api);
  const data = JSON.parse(e.data);
  users.innerHTML = ''; // всё удалили    console.log(data);
  addUsers(data); // --- функция addUsers - сработала

  // if (!Array.isArray(data)) {
  // } // console.log('data - не массив');

  console.log('ws message');
});
