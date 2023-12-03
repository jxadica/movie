import React from 'react'
import './Side.css'
function Side() {
  return (
    <div className='side'>
        <h3 className="sideH3">Your basket</h3>
        <input type="text" className='listName'/>
        <button className='save'>save</button>
    </div>
  )
}

export default Side