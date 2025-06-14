import React from 'react'
import propInt from '@/interfaces/homepageInterfaces';
import "./styles.css"

function Listitem(props : propInt) {
  return (
    <div className="listitemStyle">
        {props.no}. {props.task}
        <input type="checkbox" className="checkBoxStyle"/>
    </div>
  )
}

export default Listitem;
