import Aside from "./layouts/aside";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import "../../scss/dashboard/dashboard.scss";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Aside />
        <div className="view">
          <Outlet />
        </div>
      </div>
    </>
  );
}
