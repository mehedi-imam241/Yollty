import { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Route, Routes } from "react-router-dom";
import Done from "./pages/Done/done";
import EditProfile from "./pages/editProfile/editProfile";

import ForgotPassword from "./pages/forgotPassword/forgotPassword";
import Login from "./pages/login/login";
import NewPassword from "./pages/newPassword/newPassword";
import ProfileDetails from "./pages/profileDetails/profileDetails";
import Register from "./pages/register/register";
import SplashScreen from "./pages/SplashScreen/SplashScreen";
import VerifyAccount from "./pages/verifyAccount/verifyAccount";
import Rewords from "./pages/Rewords/rewords";
import Home from "./pages/Home/home";
import ScanningQR from "./pages/scanningQR/scanningQR";
import ScanCollect from "./pages/scanCollect/scanCollect";

export default function App() {
  // const [timeOut, setTimeOut] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeOut(true);
  //   }, 3000);
  // }, []);

  // if (!timeOut) {
  //   return <SplashScreen />;
  // }

  return (
    <>
      <BrowserView>
        <h1>Please enter from a mobile</h1>
      </BrowserView>
      <MobileView>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route path="/profile-details" element={<ProfileDetails />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/rewords" element={<Rewords />} />
          <Route path="/done" element={<Done />} />
          <Route path="/scanQR" element={<ScanningQR />} />
          <Route path="/scan-collect" element={<ScanCollect />} />
        </Routes>
      </MobileView>
    </>
  );
}
