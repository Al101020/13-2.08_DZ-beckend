export const infoError = [];

export default class UserStateApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.you = null;
    this.usersAreConnected = [];
  }

  // async function fetchData(url) {  // Пример из интернета
  //   try {
  //     const response = await fetch(url);
  //     if(!response.ok) {
  //       throw new Error(response.statusText);  // Если статус не OK, генерируем исключение
  //     }
  //     const data = await response.json();
  //     return data;
  //   }
  //   catch (error) {
  //     console.error('Fetch завершился с ошибкой:', error);
  //   }
  // }

  // async add(name) { // второй вариант, тоже ошибка такая же.
  //   try {
  //     const response = await fetch(this.apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(name),
  //     });

  //     console.log(response);

  //     if(!response.ok) {
  //       throw new Error(response.statusText);  // Если статус не OK, генерируем исключение
  //     }

  //     // const result = await request;

  //     const json = await response.json();
  //     console.log(json);

  //     infoError.splice(0, 1, json.message); // infoError = json.message;

  //     const { status } = json;
  //     const { user } = json;
  //     this.you = user; // console.log(this.you);       // console.log(user);
  //     console.log(status); // а здесь уже статус "OK"

  //     if (status === 'ok') {
  //       // Создан новый пользователь        // console.log(status);
  //       // console.log(`Создан новый пользователь: ${user.name}`);
  //     } //  else {      //   console.log(status);      // }
  //   } catch (error) {
  //     // console.error('Ошибка:', error); // Ошибка: TypeError: Assignment to constant variable.
  //     console.log('Ошибка:', error);
  //     // console.error('Fetch завершился с ошибкой:', error);
  //   }
  // }

  async add(name) {
    // первый вариант, работает но ошибка 409(не перехватывается, не смог)
    try {
      const request = fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
      });

      const result = await request;

      const json = await result.json(); // console.log(json);

      infoError.splice(0, 1, json.message); // infoError = json.message;
      // console.log(infoError[0]);
      // console.log(infoError);

      const { status } = json;
      const { user } = json;
      this.you = user; // console.log(this.you);       // console.log(user);
      console.log(`${status} - status(Создание нового пользователя)`); // а здесь уже статус "OK" или "error"

      if (status === 'ok') {
        // Создан новый пользователь        // console.log(status);
        // console.log(`Создан новый пользователь: ${user.name}`);
      } //  else {      //   console.log(status);      // }
    } catch (error) {
      console.error('Ошибка:', error); // Ошибка: TypeError: Assignment to constant variable.
      console.log('Ошибка:');
    }
  }

  async remove(user) {
    const query = `/user=${user}`;

    const request = fetch(this.apiUrl + query, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await request;
    console.log(result);

    if (!result.ok) {
      console.error('ошибка!');

      return;
    }

    const json = await result.json();
    const { status } = json;

    console.log(status);
  }
}
