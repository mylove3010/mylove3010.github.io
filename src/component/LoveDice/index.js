import React, { useState } from 'react'
import "./LoveDice.css"

export default function LoveDice() {
    // js only creates and insert parts + click events adds classes
    const [lastDice, setlastDice] = useState([])
    const numOfPieces = 6 * 6;

    var frag = document.createDocumentFragment();

    function insertInnerPieces($el, innerPieces) {
        for (var i = 0; i < innerPieces; i++) {
            var $inner = document.createElement('div');
            $inner.classList.add('popup__piece-inner');
            $el.appendChild($inner);
        }
    };

    for (var i = 1; i <= numOfPieces; i++) {
        var $piece = document.createElement('div');
        $piece.classList.add('popup__piece');

        insertInnerPieces($piece, 3);
        frag.appendChild($piece);
    }

    document.querySelector('.popup__pieces')?.appendChild(frag);

    function closeHandler() {
        let $popupsCont = document.querySelector('.popups-cont');
        let $popup = document.querySelector('.popup');
        const popupAT = 900;
        $popupsCont.classList.remove('s--popup-active');
        $popup.classList.remove('s--active');
        $popup.classList.add('s--closed');

        setTimeout(function () {
            $popup?.classList.remove('s--closed');
        }, popupAT);
    }

    // Dice Roll

    // Come Out Roll Function
    function comeOutRoll() {
        let $popupsCont = document.querySelector('.popups-cont');
        let $popup = document.querySelector('.popup');
        const elDiceOne = document.getElementById('dice1');
        // Initial dice variables
        var diceOne = Math.floor((Math.random() * 6) + 1);
        var rollTotal = diceOne;

        if (!lastDice.includes(diceOne)) {
            lastDice.push(diceOne)
            if (lastDice.length === 6) {
                setlastDice([]);
                comeOutRoll();
                return;
            }
        }
        else {
            setlastDice([]);
            comeOutRoll();
            return;
        }

        console.log(rollTotal + ' ' + diceOne + '  ' + lastDice);
        elDiceOne.classList.toggle('animate');

        //Dice reset and display
        for (var i = 1; i <= 6; i++) {
            elDiceOne.classList.remove('show-' + i);
            if (diceOne === i) {
                elDiceOne.classList.add('show-' + i);
            }
        }
        if (rollTotal === 1) {
            setTimeout(() => {
                $popupsCont.classList.add('s--popup-active');
                $popup.classList.add('s--active');
                document.querySelector("#txt-noiDung").innerHTML = "Em biết nhiều về Thuốc Mê không? <br/>Còn anh gói gọn lại đó là em.🧡";
            }, 1000);

        }

        if (rollTotal === 2) {
            setTimeout(() => {
                $popupsCont.classList.add('s--popup-active');
                $popup.classList.add('s--active');
                document.querySelector("#txt-noiDung").innerHTML = "Muốn bình yên thì lên chùa cầu phúc. <br/>Muốn hạnh phúc thì đến bên anh.";
            }, 1000);

        }

        if (rollTotal === 3) {
            setTimeout(() => {
                $popupsCont.classList.add('s--popup-active');
                $popup.classList.add('s--active');
                document.querySelector("#txt-noiDung").innerHTML = "Chẳng cần Tinder, anh chỉ tin em.";
            }, 1000);

        }
        if (rollTotal === 4) {
            setTimeout(() => {
                $popupsCont.classList.add('s--popup-active');
                $popup.classList.add('s--active');
                document.querySelector("#txt-noiDung").innerHTML = "Dự báo thời tiết nói hôm nay anh phải ở cận em";
            }, 1000);

        }

        if (rollTotal === 5) {
            setTimeout(() => {
                $popupsCont.classList.add('s--popup-active');
                $popup.classList.add('s--active');
                document.querySelector("#txt-noiDung").innerHTML = "Khi anh yêu em, trái tim em trở nên ấm áp. <br/> Hãy để tình yêu ngọt ngào của chúng ta lớn lên theo từng ngày";
            }, 1000);

        }

        if (rollTotal === 6) {
            setTimeout(() => {
                $popupsCont.classList.add('s--popup-active');
                $popup.classList.add('s--active');
                document.querySelector("#txt-noiDung").innerHTML = "Gọi tình yêu của anh là biển cả <br/> Vì nó luôn bao la";
            }, 1000);

        }

        // setTimeout(winLossCount(), 1500);
    }
    // END Come out roll function

    return (
        <div className='test'>
            <div className="dice-board">
                <div className="container-dice">
                    <div className='test2'>
                        <div id='dice1' onClick={() => comeOutRoll()} className="dice dice-one">
                            <div id="dice-one-side-one" className='side one'>
                                <img alt="# " width="100%"
                                    src={require("./hh.png")} />
                            </div>
                            <div id="dice-one-side-two" className='side two'>
                                <div className="divot two-1">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />

                                </div>
                                <div className="divot two-2">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />

                                </div>
                            </div>
                            <div id="dice-one-side-three" className='side three'>
                                <div className="divot three-1">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot three-2">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot three-3">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                            </div>
                            <div id="dice-one-side-four" className='side four'>
                                <div className="divot four-1">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot four-2">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot four-3">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot four-4">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                            </div>
                            <div id="dice-one-side-five" className='side five'>
                                <div className="divot five-1">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot five-2">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot five-3">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot five-4">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot five-5">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                            </div>
                            <div id="dice-one-side-six" className='side six'>
                                <div className="divot six-1">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot six-2"> <img alt="# " width="100%"
                                    src={require("./hh.png")} />
                                </div>
                                <div className="divot six-3">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot six-4">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot six-5">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                                <div className="divot six-6">
                                    <img alt="# " width="100%"
                                        src={require("./hh.png")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-rollbtn'>
                        <button id='comeOutButton' onClick={() => comeOutRoll()} className='roll-button'>ROLL ME NOW</button>
                    </div>
                </div>
            </div>

            <div style={{ justifyContent: "center", alignItems: 'baseline' }} className="popups-cont">
                <div className="popups-cont__overlay" onClick={() => closeHandler()}></div>
                <div className="popup">
                    <div className="popup__pieces"></div>
                    <div className="popup__content">
                        <div className="popup__close" onClick={() => closeHandler()}></div>
                        <p className="popup__text" id="txt-noiDung"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
