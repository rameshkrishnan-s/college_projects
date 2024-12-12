

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
      <form action="">
        <label htmlFor="name">Email : </label>
        <input type="text" id="name" placeholder="Enter your email " />
        <label htmlFor="pass">Password : </label>
        <input type="text" id="pass" placeholder="Enter a password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
