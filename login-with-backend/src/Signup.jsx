import React from 'react'

const Signup = () => {
  return (
    <div>
      <div>
        <h1> Signup Page </h1>
      </div>
      <div>
        <form action="">
            <label htmlFor="userName">User name :</label>
            <input type="text" id="userName" name="userName" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" />
            <button type="submit">Sign up</button>
        </form>
        <button type='submit'>Already registered ? Click here to login</button>
      </div>
    </div>
  )
}

export default Signup
