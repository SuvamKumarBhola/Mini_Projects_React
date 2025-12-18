import React from 'react'
import MenuList from './MenuList'

function SideMenu({menues =[]}) {
  return (
    <div className='SideMenuContainer'>
        <MenuList list={menues}/>
    </div>
  )
}

export default SideMenu