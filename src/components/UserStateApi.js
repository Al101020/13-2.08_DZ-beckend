// export let status;

export default class UserStateApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.yuo = null;
  }

  async add(name) {
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
    this.yuo = user;

    console.log(user);
    console.log(status);
  }

  // как получить список зарегистрированных пользователей?
  async get() {
    const request = fetch(this.apiUrl, {
      method: 'GET',
    });
    const result = await request;

    console.log(result);
  }
}
