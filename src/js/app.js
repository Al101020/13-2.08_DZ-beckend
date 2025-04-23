// TODO: write code here
import '../components/chat/chat';
import '../components/modal/modal';

// --- начало
window.addEventListener('beforeunload', (event) => {
  // закрытие окна
  event.preventDefault();
});
// --- конец

const ws = new WebSocket('ws://localhost:3000/ws'); // console.log(ws);
// -------------------------
const chat = document.querySelector('#chat');
const chatMessages = chat.querySelector('.messages');
const users = document.querySelector('#users'); // console.log(users);
users.innerHTML = '';

const inputText = chat.querySelector('.input-text');

inputText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    let inputTextValue = document.querySelector('.input-text').value;
    const message = document.createElement('div');
    message.classList.add('message-my');
    message.textContent = inputTextValue;

    if (message.textContent === '') return;
    ws.send(message.textContent);
    inputTextValue = ''; // удаление текста

    chatMessages.appendChild(message);
  }
});

ws.addEventListener('open', (e) => {
  console.log(e);

  console.log('ws open');
});

ws.addEventListener('close', (e) => {
  console.log(e);

  console.log('ws close');
});

ws.addEventListener('error', (e) => {
  console.log(e);

  console.log('ws error');
});

ws.addEventListener('message', (e) => {
  console.log(e.data);

  const data = JSON.parse(e.data);
  users.innerHTML = '';
  data.forEach((elem) => {
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
    users.appendChild(divUser);
  });

  console.log('ws message');
});

// --------------------------

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
