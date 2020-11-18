import React,{ useState } from 'react';
import KeyPad from './KeyPad';
import KeyResult from './KeyResult';

const Calculator = (props)=>{

  const [result, setResult]=useState("0");


      const cal=()=>
      {fetch(`http://api.mathjs.org/v4/?expr=${encodeURIComponent(result)}`)


        .then((response)=>{return response.json()})
         .then((data)=>{
          setResult(data)


        }).catch((error)=>{console.log(error)})
      }

      // setResult(eval(result)) looked up and eval can be harmful. what to use?



  const reset = ()=>{
    setResult("0")
  }

  const backspace = ()=>{
    setResult(result.slice(0,-1))//bug
  }

  const handleClick=(event)=>{
    if(event.target.name==="="){
      cal()
    }else if(event.target.name==="C"){
      reset()
    }else if(event.target.name==="CE"){
      backspace()
    }else
    {setResult(`${result}${event.target.name}`)}

    console.log(event.target.name)
  };


  return(
    <div className="calculator-container">


    <div className="calculator shadow">
    <KeyResult result={result} />
    <KeyPad handleClick={handleClick} />
    </div>

</div>
  )
}


export default Calculator
