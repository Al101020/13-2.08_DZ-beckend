export default function inputTextChat() {
  // export function inputText() {
  console.log('input text - Выполнить желаемые действия здесь');

  const chat = document.querySelector('#chat');
  const chatMessages = chat.querySelector('.messages');

  const inputText = chat.querySelector('.input-text');

  inputText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      let inputTextValue = document.querySelector('.input-text').value;
      const message = document.createElement('div');
      message.classList.add('message-my');
      message.textContent = inputTextValue;

      if (message.textContent === '') return;

      // ws.send(message.textContent);

      inputTextValue = ''; // удаление текста
      chatMessages.appendChild(message);
    }
  });
}
