import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn as LogInAxios, CSRFToken, Test } from "../../config/axios";
import { AuthContext } from "../../context/AuthContext.jsx";

import "../../scss/authentication/LogIn.scss";
import axios from "axios";

export default function LogIn() {
  let { auth, setAuth } = useContext(AuthContext);
  let [user, setUser] = useState({ email: "elqayedycontact@gmail.com", password: "12345678" });

  const handleChanges = (property, value) => setUser((prev) => ({ ...prev, [property]: value }));

  const handleSubmission = async (e) => {
    console.clear();
    e.preventDefault();

    try {
      await CSRFToken.get("/sanctum/csrf-cookie");
    } catch (error) {
      console.log(error);
    }

    try {
      // const token = document.cookie
      //   .split("; ")
      //   .find((row) => row.startsWith("XSRF-TOKEN="))
      //   ?.split("=")[1];

      const response = await LogInAxios.post("/login", user);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <div className="authentication-header">Nice to see you again</div>
      <div className="log-in-form">
        <form action="" method="post" onSubmit={handleSubmission}>
          <div className="form-group">
            <div className="inputs">
              <div className="email-input">
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={(e) => handleChanges("email", e.target.value)} />
              </div>
              <div className="password-input">
                <input type="password" name="password" placeholder="Password" value={user.password} onChange={(e) => handleChanges("password", e.target.value)} />
              </div>
              <div className="checkbox-input">
                <input type="checkbox" name="remember_me" id="remember_me" onChange={(e) => handleChanges("remember_me", e.target.checked)} />
                <label htmlFor="remember_me">remember me</label>
              </div>
            </div>
          </div>
          <div className="submit-button">
            <button type="submit">log in</button>
          </div>
        </form>
      </div>
      <hr />
      <div className="offer-link">
        <span>don&apos;t have an account?</span>
        <Link to="/authentication/signup">Sign up now</Link>
      </div>
    </>
  );
}
