// TODO: write code here

(async () => {
  const request = fetch('http://localhost:3000');

  const result = await request;

  console.log(result);

  // const text = await result.text();

  // console.log(text);
})();
