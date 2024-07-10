import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import PageNotFound from "./Components/PageNotFound";
import PaymentHistory from "./Components/PaymentHistory";
import Appointments from "./Components/Appointments";
import MyNotifications from "./Components/MyNotifications";
import UpdateInformation from "./Components/UpdateInformation";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="payment-history" element={<PaymentHistory />} />
      <Route path="appointments" element={<Appointments />} />
      <Route path="my-notifications" element={<MyNotifications />} />
      <Route path="update-information" element={<UpdateInformation />} />
      <Route path="login-page" element={<Login />} />
      <Route path="sign-up-form" element={<SignUp />} />

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
