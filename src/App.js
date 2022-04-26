import "./App.css";
import Values from "values.js";
import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("#f15025");

  let teste = new Values(color).all(10);

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  console.log(teste);
  return (
    <>
      <section className="header">
        <h1>Color Generator</h1>
        <input
          type="text"
          placeholder="#f15025"
          id="color"
          value={color}
          onChange={handleChange}
        />
      </section>
    </>
  );
};

export default App;
