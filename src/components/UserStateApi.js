export default class UserStateApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.you = null;
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

      const result = await request;
      const json = await result.json();

      const { status } = json;
      const { user } = json;
      this.you = user;

      // console.log(user);

      if (status === 'ok') {
        // Создан новый пользователь
        console.log(status);
        console.log(`Создан новый пользователь: ${user.name}`);
      }
      //  else {
      //   console.log(status);
      // }
    } catch (err) {
      console.error('Ошибка:', err);
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
