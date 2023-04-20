import './App.css';
import LoveDice from './component/LoveDice'
function App() {
  const items = [
    "Xin chào bạn iu của mình!!!",
    "Sau đây là 1 chiếc web mình viết tặng bạn",
    // "Có 4 giao diện khác nhau",
    // "có thể nhấn phím 1 đến 4 để xem",
    // "Ký tên: người iu của bạn ♥",
  ];
  const app = document.getElementById("app");
  //id hàng, count số ký tự của từng hàng
  let count = 0;
  let id = 0;
  let typingEffect = () => {
    // console.log(id, items.length, count);
    let text = items[id];
    if (app) {
      if (count < text.length) {
        if (id === items.length - 1) {
          // app.attributes += "style";
          // app.setAttribute("style", "color: red;outline: none;");
          app.style += "color: red;outline: none;"
        }
        setTimeout(() => {
          app.innerHTML += text[count];
          count++;
          typingEffect();
        }, Math.floor(Math.random(10) * 100));
      } else {
        if (id === items.length - 1) return;
        count = 0;
        id = id + 1 < items.length ? id + 1 : 0;
        setTimeout(() => {
          app.innerHTML = "";
          typingEffect();
        }, 1000);
      }
    }
  };
  typingEffect();
  // app?.focus();
  document.querySelector("#app")?.addEventListener("keyup", function (e) {
    if (e.key === 1) template1();
    if (e.key === 2) template2();
    if (e.key === 3) template3();
    if (e.key === 4) template4();
  });
  const template1 = () => { }
  const template2 = () => { }
  const template3 = () => { }
  const template4 = () => { }

  return (
    <>
      < LoveDice />
      {/* <div
        className="container typing-demo"
        style={{ color: "black", outline: "none!important" }}
        tabIndex="0"
        id="app"
      ></div> */}</>

  );
}

export default App;
