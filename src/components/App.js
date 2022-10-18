import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 

  const onkeyHandler=(event)=>{
    if(event.keyCode === 13){
      let input = document.getElementById("timeCount").value;
      if(!isNaN(input)){
        console.log(input);
      }


    }

  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={onkeyHandler} /> sec.
        </h1>
      </div>
      <div id="current-time">{/* remaining time */}</div>
    </div>
  )
}


export default App;
