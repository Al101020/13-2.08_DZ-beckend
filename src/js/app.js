// TODO: write code here
import '../components/chat/chat';
import '../components/modal/modal';

// import UserStateApi from '../components/UserStateApi';
// const userStateApi = new UserStateApi;
// console.log(userStateApi.yuo);

// не могу получить список уже зарегистрированных пользователей от сервера?

const ws = new WebSocket('ws://localhost:3000/ws');
console.log(ws);
// -------------------------
const chat = document.querySelector('#chat');
// const chatMessages = chat.querySelector('.messages');
const inputText = chat.querySelector('.input-text');

// const chatInfo = chat.querySelector('.chat-info');
// console.log(chat);
// console.log(chatMessage);
//     console.log(inputText);
// console.log(inputText);

// .input-text

inputText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    let inputTextValue = document.querySelector('.input-text').value;
    console.log(inputTextValue);

    const message = document.createElement('div');
    message.classList.add('message-my');
    message.textContent = inputTextValue;

    if (!message) return;
    ws.send(message);
    inputTextValue = '';

    //   chatMessages.appendChild(message);
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
  console.log(e);
  console.log(e.data);

  console.log('ws message');
});

// --------------------------

// const eventSource = new EventSource('http://localhost:3000');

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
