
import React from "react";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import LoginInput from "./LoginInput";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import NavigationItem from "./NavigationItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Sign in successfully!");
    } catch (error) {
      console.error("Error Sign in with Google", error);
    }
  };

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
        <button id="login__btn">Sign Up</button>
        <p id="login_para">Or Sign Up Using</p>
        <button id="login_google" onClick={handleGoogleSignUp}>
          Sign Up With Google
        </button>
        <div className="signup_link">
          <p>Already have an account?</p>
          <NavigationItem path="/login-page" text="Login" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
