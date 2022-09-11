import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className="logo">My chat app</span>
      <div className="user">
        <img src="" alt="" />
        <span>Krzychu</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar