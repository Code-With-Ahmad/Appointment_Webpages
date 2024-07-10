import React from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import LoginInput from "./LoginInput";
import NavigationItem from "./NavigationItem";

const Login = () => {
  return (
    <div className="home_main_conatiner">
      <div id="login___container">
        <h1>Sign Up</h1>
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
        <LoginInput
          label="Confirm Password"
          type="password"
          placeholder="Enter Your Password"
          icon={faLock}
        />

        <button id="login__btn">Sign In</button>

        <p id="signup_para">Or Signup Using</p>
        <button id="login_google">Login With Google</button>

        <div className="signup_link">
          <p>Already Have An Account? Login!</p>
          <NavigationItem path="/login-page" text="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
