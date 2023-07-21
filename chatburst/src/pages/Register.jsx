import React from 'react'
import avatar from '../img/avatar.ico'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">ChatBurst</span>
        <span className="Title">Register</span>
        <form>
          <input type='text' placeholder='Username' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={avatar} alt="" height={60} weight={60} />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
