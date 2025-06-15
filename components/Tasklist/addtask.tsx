'use client'

import React from 'react'
import './styles.css';
import { useState } from 'react';

function Addtask() {
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    console.log("even : ", newTask);
  }

  return (
    <div className="addtaskStyle">
        <input className="inputStyle" type="text" onChange={(e) => setNewTask(e.target.value)}/>
        <div className="buttonStyle" onClick={addTask}>Add</div>
    </div>
  )
}

export default Addtask;
