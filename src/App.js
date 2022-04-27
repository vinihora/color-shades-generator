import "./App.css";
import Values from "values.js";
import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#f15025");
  const [isError, setIsError] = useState(false);
  const [teste, setTeste] = useState(new Values("#f15025").all(10));

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleClick = () => {
    const valor = document.getElementById("color").value;
    console.log(valor);
    try {
      setTeste(new Values(valor).all(10));
      setColor(valor);
      console.log("cheguei");
    } catch {
      setIsError(true);
    }
  };

  return (
    <>
      <section className="header">
        <div className="title-header">
          <h1>Color Generator</h1>
        </div>
        <div className="form">
          <input
            type="text"
            placeholder="#f15025"
            id="color"
            value={color}
            onChange={handleChange}
          />
          <button className="btn" onClick={() => handleClick()}>
            <h3>Submit</h3>
          </button>
        </div>
      </section>
      <section className="colors">
        {teste.map((color) => {
          const cor = "#" + color.hex;
          return (
            <div className="color" style={{ background: cor }}>
              <h4>{color.weight + "%"}</h4>
              <h4>{"#" + color.hex}</h4>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default App;
