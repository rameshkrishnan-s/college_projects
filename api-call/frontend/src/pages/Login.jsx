

const Login = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex-col">
        <h1 className="text-center text-xl">Login</h1>
        <form action="" className="flex flex-col items-center">
          <label htmlFor="name">Email : </label>
          <input type="text" id="name" placeholder="Enter your email " />
          <label htmlFor="pass">Password : </label>
          <input type="text" id="pass" placeholder="Enter a password" />
          <button className="bg-blue-300 rounded-md text-white font-bold p-2 mt-3 w-20">Login</button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
