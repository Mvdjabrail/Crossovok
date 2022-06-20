import "./App.css";
import img from "../src/img/Photo.png";
import { useState } from "react";
function App() {
  const [button, setButton] = useState(true);
  const [disabled, setDisabled] = useState(false)
  const [detal, setDetal] = useState(true)

  const handleAdd = () => {
    if (button) {
      setButton(false)
      setDisabled(true)
    }
  };

  const handleCor = () => {
    if (!button) {
      setButton(true)
      setDisabled(false)
    }
  }

  const handleDetal = () => {
    if(detal) {
      setDetal(false)
    }
  }

  const handleX = () => {
    if(!detal) {
      setDetal(true)
    }
  }


  return (
    <div className="app">
      <div className="image">
        <img className="img" src={img} alt="" />
      </div>
      <div className="midle">
        <div className="nike">
          <h1>Nike Sneaker</h1>
          <h1>120$</h1>
        </div>
        <div className="btnDiv">
          <button className="btn"
            onClick={handleDetal}
          >Детали</button>

        {!detal && (
          <div className="qwe">

        <div className="btnDivLorem">Lorem ipsum dolor,
          sit amet consectetur adipisicing elit.</div>
          
            <button className="btn5" onClick={handleX}>x</button>
          </div>
      )}
      </div>
        </div>
      <hr />
      <div className="corzina">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae et
          cum, perferendis magni ipsam quaerat.
        </p>
        <div className="divButton">
          <button className={disabled ? 'btn4' : 'btn2'} disabled={disabled} onClick={handleAdd} >
            {button ? "Добавить в корзину" : "Уже в корзине"}
          </button>
          {!button && (
            <button className="btn3" onClick={handleCor} >Удалить из корзины</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
