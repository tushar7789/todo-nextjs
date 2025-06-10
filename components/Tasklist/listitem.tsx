import React from 'react'
import styleList from "./styles";
import propInt from '@/interfaces/homepageInterfaces';

function Listitem(props : propInt) {
  return (
    <div style={styleList.listitemStyle}>
        {props.no}. This is sample task.
        <input type="checkbox"/>
    </div>
  )
}

export default Listitem;