const body = document.querySelector('body');

function chat() {
  const windowChat = document.createElement('div');
  windowChat.id = 'window-chat';
  const divUsers = document.createElement('div');
  divUsers.id = 'users';
  const divYou = document.createElement('div'); // добовляем себя
  divYou.classList.add('user');
  const div_ = document.createElement('div');
  div_.classList.add('user');
  div_.textContent = '-';
  divYou.appendChild(div_);
  const You = document.createElement('div');
  You.classList.add('inline');
  You.classList.add('niсkName');
  You.textContent = 'You';
  divYou.appendChild(You);
  divUsers.appendChild(divYou);
  windowChat.appendChild(divUsers);
  const divChat = document.createElement('div');
  divChat.id = 'chat';
  const messages = document.createElement('div');
  messages.classList.add('messages');
  divChat.appendChild(messages);

  const inputMessage = document.createElement('div');
  inputMessage.classList.add('inputMessage');
  const form = document.createElement('form');
  form.classList.add('formInput');
  const input = document.createElement('input');
  input.classList.add('inputText');
  input.type = 'text';
  form.appendChild(input);
  inputMessage.appendChild(form);
  divChat.appendChild(inputMessage);
  windowChat.appendChild(divChat);
  body.appendChild(windowChat);
}

chat();
