/* eslint-disable */
import { useEffect, useState } from "react";
import "./App.css";
import LoveDice from "./component/LoveDice";
import { TypeAnimation } from "react-type-animation";
function App() {
  const [whatScreen, setWhatScreen] = useState("0");
  const [cursorEnd, setCursorEnd] = useState([])
  const [isTyping, setIsTyping] = useState(true)
  const mainKeyup = (e) => {
    console.log(e.key);
    if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "0") {
      // app.removeChild(template1)
      setWhatScreen(e.key);
    }
  };
  const items = [
    "Xin chào bạn iu của mình!!!",
    "Sau đây là 1 chiếc web mình viết tặng bạn",
    "Có 4 giao diện khác nhau",
    "Có thể nhấn phím 1 đến 4 để xem",
    "Ký tên: người iu của bạn",
  ];
  const template0 = () => {
    return items.map((item, i) => {
      return <div className="item-typing " key={i}>
        <TypeAnimation sequence={[item, () => { i === items.length - 1 ? setIsTyping(false) : console.log(i); }]}
          wrapper='h1' cursor={false}
          omitDeletionAnimation={true}
          className='typing-div'
          onKeyDown={mainKeyup} />
        {i === items.length - 1 && whatScreen === "0" && !isTyping && <span style={{ color: "red", fontSize: '2em' }}>♥</span>}
      </div>
    })
  }
  const template1 = () => {
    return <LoveDice />
  };
  const template2 = () => {
    return <h1>đây là template2</h1>;
  };
  const template3 = () => {
    return <h1>đây là template3</h1>;
  };
  const template4 = () => {
    return <h1>đây là template4</h1>;
  };

  useEffect(() => {
    document.addEventListener("keydown", mainKeyup, true);
  }, []);


  return <div id="main-div"
    // style={whatScreen === "0" ? { paddingTop: "calc(50vh - 92px)" } : {}}
  >
    {whatScreen === "0" && template0()}
    {whatScreen === "1" && template1()}
    {whatScreen === "2" && template2()}
    {whatScreen === "3" && template3()}
    {whatScreen === "4" && template4()}
  </div >;
}

export default App;
