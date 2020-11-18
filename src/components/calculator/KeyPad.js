import React from 'react';

const KeyPad = (props)=>{
const {
  handleClick

}=props


  return(
    <div className="m-auto">
      <button className="button-c" name="(" onClick={handleClick}>(</button>
      <button className="button-c" name="CE" onClick={handleClick}>CE</button>
      <button className="button-c" name=")" onClick={handleClick}>)</button>
      <button className="button-c" name="C" onClick={handleClick}>C</button>
        <br/>
      <button className="button-c" name="1" onClick={handleClick}>1</button>
      <button className="button-c" name="2" onClick={handleClick}>2</button>
      <button className="button-c" name="3" onClick={handleClick}>3</button>
      <button className="button-c" name="+" onClick={handleClick}>+</button>
        <br/>
      <button className="button-c" name="4" onClick={handleClick}>4</button>
      <button className="button-c" name="5" onClick={handleClick}>5</button>
      <button className="button-c" name="6" onClick={handleClick}>6</button>
      <button className="button-c" name="-" onClick={handleClick}>-</button>
        <br/>
      <button className="button-c" name="7" onClick={handleClick}>7</button>
      <button className="button-c" name="8" onClick={handleClick}>8</button>
      <button className="button-c" name="9" onClick={handleClick}>9</button>
      <button className="button-c" name="*" onClick={handleClick}>*</button>
        <br/>
      <button className="button-c" name="." onClick={handleClick}>.</button>
      <button className="button-c" name="0" onClick={handleClick}>0</button>
      <button className="button-c" name="=" onClick={handleClick}>=</button>
      <button className="button-c" name="/" onClick={handleClick}>/</button>

    </div>

  )
}


export default KeyPad
