import React, { useState } from 'react'
import MenuList from './MenuList'

function MenuItem({item}) {
    // console.log(item);
    const [displayCurrent ,setDispalycurrent] = useState({})

    function handleToggleChildren(getId){
        setDispalycurrent({
            ...displayCurrent,
            [getId]: !displayCurrent[getId]
        })
    }
    
  return (
    <li>
        <div>
              <p>{item.label}</p>
              {
                item && item.children && item.children.length ?
                <span onClick={()=>handleToggleChildren(item.id)}>+</span>
                : null
              }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrent[item.id] ?
            <MenuList list={item.children}/>
            : null 
        }
    </li>
  )
}

export default MenuItem