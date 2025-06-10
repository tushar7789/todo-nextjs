import React from 'react'
import styleList from './styles';

function Addtask() {
  return (
    <div style={styleList.addtaskStyle}>
        <input style={styleList.inputStyle} type="text" id="id" name="name"/>
        <button type="submit">Add</button>
    </div>
  )
}

export default Addtask;