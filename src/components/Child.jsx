import { useState } from "react";
const Child = ({ count, setCount }) => {


  const handleMinusClick = () => {
    setCount(count - 1);
  };

  const handlePlusClick = () => {
    setCount(count + 1);
    console.log(count);
  };

 

  return (
    <div>
      <button type="button" className="btn" onClick={handleMinusClick}>
        -
      </button>
      <button type="button" className="btn" onClick={handlePlusClick}>
        +
      </button>
    </div>
  );
};

export default Child;
