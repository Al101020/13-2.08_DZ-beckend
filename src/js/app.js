// TODO: write code here
import '../components/chat/chat';
import '../components/modal/modal';

(async () => {
  const request = fetch('http://localhost:3000');

  const result = await request;

  console.log(result);

  // const text = await result.text();

  // console.log(text);
})();
