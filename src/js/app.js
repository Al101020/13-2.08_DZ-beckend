// TODO: write code here
import '../components/chat/chat';
import '../components/modal/modal';

// import { inputText } from '../components/chat/inputText';
import inputText from '../components/chat/inputTextChat';
// -------------------------
// const chat = document.querySelector('#chat');
// const chatMessages = chat.querySelector('.messages');
const users = document.querySelector('#users'); // console.log(users);
// users.innerHTML = '';

console.log(window.api);

// --- начало
window.addEventListener('beforeunload', (event) => {
  // закрытие окна и выход пользователя
  event.preventDefault();
  // console.log({ user: this.user }); // при закрытии окна эта строка бесполезна
  // window.api.remove({ user: this.user }); // не получилось
  window.api.remove({ user: window.api.you.name }); // при закрытии окна не понятно получилось?
  // window.api.remove({ user: this.user }); // не получилось
});
// --- конец

const ws = new WebSocket('ws://localhost:3000/ws'); // console.log(ws);
inputText();

ws.addEventListener('open', (e) => {
  console.log(e);
  console.log(e.data);

  console.log('ws open');
});

ws.addEventListener('close', (e) => {
  console.log(e);

  console.log('ws close');
});

ws.addEventListener('error', (e) => {
  console.log(e);

  console.log('ws error, сервер недоступен');
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
