import './chat.css';
// import { inputText } from './inputText';
// { UserStateApi } from '../UserStateApi';

const body = document.querySelector('body');

function chat() {
  const windowChat = document.createElement('div');
  windowChat.id = 'window-chat';
  const divUsers = document.createElement('div');
  divUsers.id = 'users';

  windowChat.appendChild(divUsers);
  const divChat = document.createElement('div');
  divChat.id = 'chat';
  const messages = document.createElement('div');
  messages.classList.add('messages');
  divChat.appendChild(messages);

  const inputMessage = document.createElement('div');
  inputMessage.classList.add('input-message');
  const form = document.createElement('form');
  form.classList.add('form-input');
  const input = document.createElement('input');
  input.classList.add('input-text');
  input.type = 'text';
  // ------------------------------------------------------
  input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputText = document.querySelector('.input-text').value;
      console.log(inputText);

      const message = document.createElement('div');
      message.classList.add('message-my');
      message.textContent = inputText;
      messages.appendChild(message);
    }
  });
  form.appendChild(input);
  inputMessage.appendChild(form);
  divChat.appendChild(inputMessage);
  windowChat.appendChild(divChat);
  body.appendChild(windowChat);
}

chat();
