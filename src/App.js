/* eslint-disable */
import { useEffect, useState, useRef } from "react";
import "./App.css";
import LoveDice from "./component/LoveDice";
import { TypeAnimation } from "react-type-animation";
function App() {
  const [whatScreen, setWhatScreen] = useState("0");
  const [cursorEnd, setCursorEnd] = useState([])
  const [isTyping, setIsTyping] = useState(true)
  const [isClick, setIsClick] = useState(false)
  const clickCount = useRef(0)
  const widthScreen = window.innerWidth;
  const heightScreen = window.innerHeight;
  useEffect(() => {
    if (isClick) {
      setTimeout(() => {
        setWhatScreen(clickCount.current)
        clickCount.current = 0
        setIsClick(false)
      }, 1500);
    }
  }, [isClick])

  const mainDivClick = () => {
    //code for mobile browser
    if ((widthScreen < 800 || heightScreen < 800) && whatScreen === "0") {
      setIsClick(true)
      if (clickCount.current <= 3)
        clickCount.current = clickCount.current + 1
      else
        clickCount.current = 4
    }
  }

  const mainKeyup = (e) => {
    //code for web browser
    if (e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "0") {
      setWhatScreen(e.key);
    }
  };
  const items = [
    "Xin chào bạn iu của mình!!!",
    // "Sau đây là 1 chiếc web mình viết tặng bạn",
    // "Có 4 giao diện khác nhau",
    // "Có thể nhấn phím 1 đến 4 để xem",
    // "Ký tên: người iu của bạn",
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


  return <div id="main-div" onClick={() => mainDivClick()}
  // style={whatScreen === "0" ? { paddingTop: "calc(50vh - 92px)" } : {}}
  >
    <button type="button" className="btn btn-primary btn-lg btn-block btn-reset">
      <i className="fa-solid fa-user"></i>
    </button>
    {whatScreen === "0" && template0()}
    {whatScreen === "1" && template1()}
    {whatScreen === "2" && template2()}
    {whatScreen === "3" && template3()}
    {whatScreen === "4" && template4()}
  </div >;
}

export default App;
