import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-red-950 text-white justify-evenly">
        <ul className="flex flex-row p-4 gap-16">
          <li>Home</li>
          <li>Login</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
