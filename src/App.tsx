import { useState } from "react";
import "./App.css";

export function App() {
  const [input, setInput] = useState("");
const [boolean,setBoolean]=useState(true);


  const handleClick = (value: string) => {
    setBoolean(true);
    if(boolean){
            setInput((prevInput) => prevInput + value);
        
    }else{
     setInput('');
    }
   
  };

  const calculate = () => {
    const result = eval(input);
    setInput(result.toString());
     setBoolean(false);
  };
  const clear=()=>{
    setInput('');
  }



  return (
    <div className="calculator_div">
      <div className="box" onClick={() => handleClick("1")}>1</div>
      <div className="box" onClick={() => handleClick("2")}>2</div>
      <div className="box" onClick={() => handleClick("3")}>3</div>
      <div className="box" onClick={() => handleClick("4")}>4</div>
      <div className="box" onClick={() => handleClick("5")}>5</div>
      <div className="box" onClick={() => handleClick("6")}>6</div>
      <div className="box" onClick={() => handleClick("7")}>7</div>
      <div className="box" onClick={() => handleClick("8")}>8</div>
      <div className="box" onClick={() => handleClick("9")}>9</div>
      <div className="plus" onClick={()=>{input && boolean ? setInput((input)=>input +'+'):null}}>+</div>
      <div className="equal" onClick={calculate}>=</div>
      <div className="multiply" onClick={()=>{{input && boolean? setInput((input)=>input +'*'):null}}}>x</div>
      <div className="minus" onClick={()=>{input && boolean? setInput((input)=>input +'-'):null}}>-</div>
      <div className="clear" onClick={clear}>C</div>

      <Result input={input} />
    </div>
  );
}

const Result = (props: { input: string }) => {
  return (
    <div className="search">
      <div className="results">{props.input}</div>
    </div>
  );
};
