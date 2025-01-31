import "@fontsource/poppins/latin.css";
import "../../scss/authentication/Authentication.scss";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

import Logo from "../../assets/broken-solar-bolt.svg";
import AuthenticationImg from "../../assets/pay_with_nfc.jpg";

export default function Authentication() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (Object.keys(auth ?? {}).length) navigate("/dashboard");
  }, [auth]);

  useEffect(() => {
    if (pathname === "/authentication") navigate("login");
  }, [pathname]);

  return (
    <div className="authentication">
      <div className="authentication-picture">{<img src={AuthenticationImg} alt="" />}</div>
      <div className="authentication-form">
        <div className="authentication-brand">
          ItSimpleCode <img src={Logo} alt="" />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
