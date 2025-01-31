import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { SignUp as SignUpAxios } from "../../config/axios";

import { AuthContext } from "../../context/AuthContext.jsx";

import Select from "../form/select";

import "../../scss/authentication/SignUp.scss";

export default function SignUp() {
  let { setAuth } = useContext(AuthContext);

  let [user, setUser] = useState({});

  const genders = ["male", "female"];

  const moroccoCities = [
    "Casablanca",
    "Rabat",
    "Marrakech",
    "Fes",
    "Tangier",
    "Agadir",
    "Meknes",
    "Oujda",
    "Kenitra",
    "Tetouan",
    "Safi",
    "Mohammedia",
    "El Jadida",
    "Beni Mellal",
    "Nador",
    "Khemisset",
    "Settat",
    "Larache",
    "Khouribga",
    "Essaouira",
  ];

  const handleChanges = (key, value) => setUser((prev) => ({ ...prev, [key]: value }));

  const genderOptions = genders.map((gender, index) => (
    <div key={index} className="radio-button">
      <input type="radio" name="gender" id={`gender-${gender}`} onChange={() => handleChanges("gender", gender)} />
      <label htmlFor={`gender-${gender}`}>{gender}</label>
    </div>
  ));

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSubmission = async (e) => {
    e.preventDefault();

    try {
      // await CSRFToken.get("/sanctum/csrf-cookie");
      const request = await SignUpAxios.post("/authentication/signup", user);
      setAuth(request.data.user);

      // 422 unprocessable content => not match with the request rules
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="authentication-header">Create your account to get started</div>
      <div className="sign-up-form">
        <form action="" method="post" onSubmit={handleSubmission}>
          <div className="form-group">
            <div className="title">profile</div>
            <div className="inputs">
              <div className="text-input">
                <input type="text" name="first_name" placeholder="First name" onChange={(e) => handleChanges("first_name", e.target.value)} />
              </div>
              <div className="text-input">
                <input type="text" name="last_name" placeholder="Last name" onChange={(e) => handleChanges("last_name", e.target.value)} />
              </div>
              <div className="radio-group">{genderOptions}</div>
              <Select selected={user.location ?? "Location"} options={moroccoCities} onChange={(value) => setUser((prev) => ({ ...prev, location: value }))} />
            </div>
          </div>

          <div className="form-group">
            <div className="title">contact</div>
            <div className="inputs">
              <div className="email-input">
                <input type="email" name="email" placeholder="Email" onChange={(e) => handleChanges("email", e.target.value)} />
              </div>
              <div className="phone-input">
                <input type="phone" name="phone" placeholder="Phone" onChange={(e) => handleChanges("phone", e.target.value)} />
              </div>
            </div>
          </div>

          <div className="form-group">
            <div className="title">security</div>
            <div className="inputs">
              <div className="password-input">
                <input type="password" name="password" placeholder="Password" onChange={(e) => handleChanges("password", e.target.value)} />
              </div>
              <div className="password-input">
                <input type="password" name="password_confirmation" placeholder="Password confirmation" onChange={(e) => handleChanges("password_confirmation", e.target.value)} />
              </div>
              <div className="checkbox-input">
                <input type="checkbox" name="remember_me" id="remember_me" onChange={(e) => handleChanges("remember_me", e.target.checked)} />
                <label htmlFor="remember_me">remember me</label>
              </div>
            </div>
          </div>
          <div className="submit-button">
            <button type="submit">sign up</button>
          </div>
        </form>
      </div>
      <hr />
      <div className="offer-link">
        <span>Already have an account?</span>
        <Link to="/authentication/login">Log in now</Link>
      </div>
    </>
  );
}
