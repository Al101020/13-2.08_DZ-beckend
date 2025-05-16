import messageToChat from './messageToChat';
import addUsers from './addUsers';
import addUsersFromApi from './addUsersFromApi';

// const users = document.querySelector('#users');

export default function addUsersAndMessageToChat(data, e) {
  // console.log('--- Запустилась функция: addUsersAndMessageToChat.js');
  // console.log(data);
  e.preventDefault();
  // console.log(window.api.usersAreConnected.length);
  const { usersAreConnected } = window.api; // console.log(usersAreConnected);

  if (!Array.isArray(data)) {
    // console.log('data - не массив, значит сообщение в чат!!!');
    // window.api.usersAreConnected = []; // обнуляем список сохранённых подключенных пользователей
    // console.log(window.api.usersAreConnected);
    messageToChat(data); // добавляем сообщение в чат
    addUsersFromApi(usersAreConnected); // нужно обновить список пользователе
  } else if (Array.isArray(data)) {
    // console.log(data.length);
    // console.log('--- если Data - массив, значит добавляем пользователей');
    if (data.length === 0) {
      console.log('--- подключенных пользователей пока нет, массив пуст');
      return;
    }
    addUsers(data);
  }
  // console.log(data);
}
