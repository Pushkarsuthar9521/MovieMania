import Link from "next/link";
import React from "react";

const userLogin = async (e) => {
  
  e.preventDefault();
 
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  
  console.log("user data", email, password)

  const body = {email, password};
    
  if (body.email === "" || body.password === "") {
    return alert("Enter valid data");
  } else {
    try {
      const res = await fetch("http://localhost:3007/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.status === 200) {
        if (res.status === 200) {
          const data = await res.json(); 
  
          if (data === null) {
            alert("User does not exist or password is incorrect");
          } else {
           
            console.log("Login successful");
            alert("Login successful");
            
          }
        } else {
          console.error("Login failed with status: " + res.status);
        }
        console.log("api request successful");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.log(error);
    }
  }
};


const login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
        <h1 className="font-bold text-2xl">Welcome Back :)</h1>
        <form
          className="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
          onSubmit={userLogin}
        >
          <label className="font-semibold text-xs" for="usernameField" >
             Email
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="text"
            id="email"
            name="email"
          />
          <label className="font-semibold text-xs mt-3" for="passwordField">
            Password
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
            type="password"
            id="password"
            name="password"
          />
          <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">
            Login
          </button>
          <div className="flex mt-6 justify-center text-xs">
            <a className="text-blue-400 hover:text-blue-500" href="#">
              Forgot Password
            </a>
            <span className="mx-2 text-gray-300">/</span>
            <Link className="text-blue-400 hover:text-blue-500" href="/Signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default login;
