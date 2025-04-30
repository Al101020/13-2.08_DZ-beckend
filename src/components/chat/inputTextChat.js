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
