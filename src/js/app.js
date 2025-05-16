// TODO: write code here
import '../components/chat/chat';
import '../components/modal/modal';
import addUsersAndMessageToChat from '../components/chat/addUsersAndMessageToChat';
import '../components/chat/inputTextChat'; // console.log(window.api);

const users = document.querySelector('#users'); // console.log(users); // ещё пустой
// const chat = document.querySelector('#chat');
// const chatMessages = chat.querySelector('.messages'); // console.log(chatMessages); // ещё пустой

const ws = new WebSocket('ws://localhost:3000/ws'); // console.log(ws);

// --- подписываемся на закрытие окна: пытаемся отключится.
window.addEventListener('beforeunload', (event) => {
  event.preventDefault();

  // if (window.api.you) {}

  // ws.send(
  //   JSON.stringify({
  //     type: 'exit',
  //     user: {
  //       // id: window.api.you.id,
  //       name: window.api.you.name,
  //     },
  //   }),
  // );
}); // --- конец закрытие окна

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
  e.preventDefault();
  console.log(e); // console.log(e.data); // console.log(window.api);

  console.log('ws message');

  const data = JSON.parse(e.data);

  // console.log(users);
  users.innerHTML = ''; // всё удалили    console.log(data);
  // console.log(users);

  addUsersAndMessageToChat(data, e);
});
// -------------------------------------------------------
const textModal = document.querySelector('.input-text-modal'); // console.log(textModal);

function focusModal() {
  textModal.focus();
}
window.onload = focusModal(); // устанавливаем фокус на текстовое модального окна
