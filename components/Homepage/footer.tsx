import React from 'react'
import styleList from "./styles"
import Listitem from "../Tasklist/listitem"
import propInt from '@/interfaces/homepageInterfaces'
import Addtask from '../Tasklist/addtask'

function Footer() {
  const prop : propInt = {
    "no" : 1,
    "task" : "This is the first task mfs"
  }

  return (
    <div style={styleList.footerStyle} className="font-mono">
      <div style={styleList.div1Style}>
        <Listitem {...prop}/>
      </div>
      <div style={styleList.div2Style}>
        <Addtask/>
      </div>
    </div>
  )
}

export default Footer;