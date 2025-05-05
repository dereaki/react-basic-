import React from "react";

const Handler = () => {
  const click = () => {
    console.log("click here");
  };
  return (
    <div>
      <button
        onClick={click}
        className="w-56 p-3 font-bold text-white bg-blue-500 rounded-lg size-16"
      >
        click
      </button>
    </div>
  );
};

export default Handler;
