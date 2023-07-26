import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logoName'>
        ChatBurst
      </span>
      <div className='user'>
        <img src="" alt="" />
        <span>Jas</span>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar