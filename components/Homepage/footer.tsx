import React from 'react'
import Listitem from "../Tasklist/listitem"
import propInt from '@/interfaces/homepageInterfaces'
import Addtask from '../Tasklist/addtask'
import "./styles.css"
import myStore from '@/store/myStore'

const taskList = [
  "This the first sample task",
  "Get your adhar card",
  "cars cylinders",
  "bring groceries",
  "workout at 5:30pm"
]

function Footer() {
  const {list, addIntoStoreList, removeFromStoreList} = myStore();

  return (
    <div className="font-mono footerStyle">
      <div className = "div1Style">
        {

          taskList.map((item, index)=>{
            const prop : propInt = {
              "no" : index + 1,
              "task" : item
            }
            return (
              <Listitem key={index} {...prop}/>
            )
          })
        }
      </div>
      <div className="div2Style">
        <Addtask/>
      </div>
    </div>
  )
}

export default Footer;
