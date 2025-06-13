import React from 'react'
import './styles.css';

function Addtask() {
  return (
    <div className="addTaskStyle">
        <input className="inputStyle" type="text" id="id" name="name"/>
        <button style = {{fontSize:"20px"}} type="submit">Add</button>
    </div>
  )
}

export default Addtask;

// style={styleList.addtaskStyle}
//  style={styleList.inputStyle}