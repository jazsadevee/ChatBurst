import React from 'react'
import avatar from '../img/avatar.ico'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">ChatBurst</span>
        <span className="Title">Register</span>
        <form>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Sign In</button>
        </form>
        <p>Need an account? Register</p>
      </div>
    </div>
  )
}

export default Login
