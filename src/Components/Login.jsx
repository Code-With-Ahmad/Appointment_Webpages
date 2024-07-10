import React from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import LoginInput from "./LoginInput";
import NavigationItem from "./NavigationItem";

const Login = () => {
  return (
    <div className="home_main_conatiner">
      <div id="login___container">
        <h1>Login</h1>
        <LoginInput
          label="UserName"
          type="text"
          placeholder="Enter Your Username"
          icon={faUser}
        />
        <LoginInput
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          icon={faLock}
        />
        <a href="#" className="forget_password">
          Forget Password
        </a>
        <button id="login__btn">Login</button>
        <p id="signup_para">Or Login Using</p>
        <button id="login_google">Login With Google</button>
        <div className="signup_link">
          <p>New User ? Create and Account!</p>
          <NavigationItem path="/sign-up-form" text="Sign Up" />
        </div>
      </div>
    </div>
  );
};

export default Login;
