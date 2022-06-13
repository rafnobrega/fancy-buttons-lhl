import { useState } from "react";

function CounterButton() {
 const [clickAmount, setClickAmount] = useState(0);

 const handleClick = () => setClickAmount(clickAmount + 1);

  return (
    <button onClick={handleClick} className="CounterButton">You clicked me {clickAmount} times</button>
  );
}

export default CounterButton;
