import React from 'react'
import { useState } from 'react';
import './style.css'


const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result + e.target.name);
  };

  const handleClear = () => {
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(result);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };


  return (
    <>
      <div className="bg-dark m-auto container-fluid rounded-3 main-box ">

        <div className="my-2">
          <h5 className="text-center heading p-2"><u>Calculator</u></h5>
        </div>


        <div className="display input-field" >
         
         {result}
        </div>
        <hr color="#e54611" />


        <div className="text-center">
          <button className="btn-all p-2 rounded-circle" name="7" onClick={handleClick}>7</button>
          <button className="btn-all p-2 rounded-circle" name="8" onClick={handleClick}>8</button>
          <button className="btn-all p-2 rounded-circle" name="9" onClick={handleClick}>9</button>
          <button className="btn-all p-2 rounded-circle dark-grey" name="/" onClick={handleClick}>/</button>
        </div>

        <div className="text-center my-3">
          <button className="btn-all p-2 rounded-circle" name="4" onClick={handleClick}>4</button>
          <button className="btn-all p-2 rounded-circle" name="5" onClick={handleClick}>5</button>
          <button className="btn-all p-2 rounded-circle" name="6" onClick={handleClick}>6</button>
          <button className="btn-all p-2 rounded-circle dark-grey" name="*" onClick={handleClick}>*</button>
        </div>

        <div className="text-center my-3">
          <button className="btn-all p-2 rounded-circle " name="1" onClick={handleClick}>1</button>
          <button className="btn-all p-2 rounded-circle" name="2" onClick={handleClick}>2</button>
          <button className="btn-all p-2 rounded-circle" name="3" onClick={handleClick}>3</button>
          <button className="btn-all p-2 rounded-circle dark-grey" name="+" onClick={handleClick}>+</button>
        </div>


        <div className="text-center my-3">
          <button className="btn-all p-2 rounded-circle dark-grey" name="." onClick={handleClick}>.</button>
          <button className="btn-all p-2 rounded-circle" name="0" onClick={handleClick}>0</button>
          <button className="btn-all p-2 rounded-circle btn-orange"onClick={handleCalculate}>=</button>
          <button className="btn-all p-2 rounded-circle dark-grey" name="-" onClick={handleClick}>-</button>
        </div>


        <div className="text-xl-center">
          <button className=" btn-clear" onClick={handleClear}>clear</button>
        </div>




      </div>
    </>
  );
};


export default Calculator;
