import React from 'react'

const SignUp = () => {
  return (
    <div>
        <h1>Sign up</h1>
      <form action="">
        <label htmlFor="name">Username : </label>
        <input type="text" id="name" placeholder='Enter username '/>
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" placeholder='Enter your email '/>
        <label htmlFor="pass">Password : </label>
        <input type="text" id="pass" placeholder='Enter a password'/>
        <label htmlFor="cPass">Confirm Password : </label>
        <input type="text" id="cPass" placeholder='Enter password again '/>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp;
