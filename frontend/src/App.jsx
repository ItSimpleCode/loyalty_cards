/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { AuthContext } from "./context/AuthContext.jsx";

import Authentication from "./components/authentication/Authentication.jsx";
import LogIn from "./components/authentication/LogIn.jsx";
import SignUp from "./components/authentication/SignUp.jsx";

import Branch from "./components/dashboard/Branch.jsx";
import Card from "./components/dashboard/Card.jsx";
import Employee from "./components/dashboard/Employee.jsx";

import Dashboard from "./components/dashboard/Dashboard.jsx";

import "./scss/App.scss";

function App() {
  let [auth, setAuth] = useState(null);

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <BrowserRouter>
          <Routes>
            <Route path="/authentication" element={<Authentication />}>
              <Route path="login" element={<LogIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="branches" element={<Branch />} />
              <Route path="cards" element={<Card />} />
              <Route path="employees" element={<Employee />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
