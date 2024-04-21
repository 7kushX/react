
import { useState } from 'react';
function App() {
  let [counter, setcounter]= useState(10)
  let Update= function(){
          if(counter===20){
            setcounter(counter=20)
          }else
          setcounter(counter + 1);
  }
  let Reduce=function(){
    if(counter===0){
      setcounter(counter=0)
    }else
    setcounter(counter-1)
  }
  return (
   <>
   <button onClick={Update}> add:{counter} </button>
    <button onClick={Reduce}> reduce:{counter} </button>
    </> 
  );
}

export default App;
