import { useState } from 'react';
import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';



let Update= function(){
  let {counter, setcounter}= useState(10)
        setcounter(counter + 1);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <App/>

   </>
   
);


