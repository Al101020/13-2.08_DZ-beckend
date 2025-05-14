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

export default function messageToChat(data) {
  //   console.log('--- запустился - messageToChat.js');

  if (data.user.name !== window.api.you.name) {
    // console.log(data);
    // console.log('НЕТ, это сообщение не моё, нужно выставить сообщение в чат');

    const chatMessages = document.querySelector('.messages');
    console.log(chatMessages);

    const message = document.createElement('div'); // создаём сообщение

    message.classList.add('message-not-mine');

    const messageUser = document.createElement('div'); // User
    messageUser.classList.add('messageUser');
    // const timeDate = new Date();
    const date = new Date();

    messageUser.textContent = `${data.user.name}, ${timeDate(date)}`;

    message.appendChild(messageUser);

    const messageText = document.createElement('div'); // Text
    messageText.classList.add('messageText');
    messageText.textContent = data.message; // изменить
    message.appendChild(messageText);

    const messageNick = document.createElement('div'); // Nick
    messageNick.classList.add('messageNick');
    messageNick.classList.add('displayNone');
    messageNick.textContent = data.user.name;
    message.appendChild(messageNick);

    const messageId = document.createElement('div'); // мой ID
    messageId.classList.add('messageIdYou');
    messageId.classList.add('displayNone');
    messageId.textContent = data.user.id;
    message.appendChild(messageId);

    chatMessages.appendChild(message);
  }
}
