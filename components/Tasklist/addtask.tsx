'use client'

import React from 'react'
import './styles.css';

function Addtask() {
  const addTask = () => {
    var val = document.getElementsByClassName("inputStyle")[0].innerHTML;
    console.log("even : ", val);
  }

  return (
    <div className="addtaskStyle">
        <input className="inputStyle" type="text"/>
        <div className="buttonStyle" onClick={addTask}>Add</div>
    </div>
  )
}

export default Addtask;
