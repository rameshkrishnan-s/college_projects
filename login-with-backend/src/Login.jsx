import React from 'react'

const Login = () => {
  return (
    <div className='container mx-auto'>
      <div>
        <h1> Login Page </h1>
      </div>
      <div>
        <form action="">
            <label htmlFor="userName">User name :</label>
            <input type="text" id="userName" name="userName" />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" />
            <button type="submit">Login</button>
        </form>
        <button type='submit'>New user? Register here</button>
      </div>
    </div>
  )
}

export default Login
