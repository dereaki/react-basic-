import React, { useState } from "react";

const Exersise1 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="border-blue-900 1px">
      <h1>{text}</h1>
      <div>
        <textarea
          className="mt-4 font-mono ml-60"
          style={{
            border: "1px solid black",
          }}
          onChange={changeText}
        ></textarea>
      </div>
    </div>
  );
};

export default Exersise1;
