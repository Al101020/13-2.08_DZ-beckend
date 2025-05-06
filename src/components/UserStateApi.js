export default class UserStateApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.you = null;
    this.usersAreConnected = [];
  }

  async add(name) {
    try {
      const request = fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
      });

      //   if (!response.ok) {
      //     throw new Error(response.statusText);  // Если статус не OK, генерируем исключение
      // }

      // --- добавляем 06.05.2025
      // console.log(`request: ${request.status}`); // эта строка предложенная преподователем не работает
      // --- конец добавки 06.05.2025

      const result = await request;
      if (!result.ok) {
        console.log('!result.ok');
      } else {
        console.log('result.ok');
      }
      console.log(result);
      console.log(result.status); // код ошибки, но почему её не перехватывает блок "catch"
      console.log(result.statusText);

      const json = await result.json();
      console.log(json);

      const { status } = json;
      const { user } = json;
      this.you = user; // console.log(this.you);       // console.log(user);
      console.log(status); // а здесь уже статус "OK"

      if (status === 'ok') {
        // Создан новый пользователь        // console.log(status);
        // console.log(`Создан новый пользователь: ${user.name}`);
      }
      //  else {
      //   console.log(status);
      // }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  // async removeE(user) { // -- пробный метод можно(нужно) удалить
  //   const query = `/user=${user}`;
  //   // console.log(query);

  //   console.log(window.api.you.name);
  // }

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
