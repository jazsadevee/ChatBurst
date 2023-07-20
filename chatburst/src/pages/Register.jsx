import React from 'react'


const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">ChatBurst</span>
        <span className="Title">Register</span>
        <form>
          <input type='text' placeholder='Username' />
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input type="file" />
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
