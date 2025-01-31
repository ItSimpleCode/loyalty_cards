import { Navigate, NavLink } from "react-router-dom";
import Logo from "../../../assets/broken-solar-bolt.svg";

import "../../../scss/dashboard/layouts/aside.scss";

export default function Aside() {
  const links = [
    {
      to: "branches",
      label: "branches",
    },
    {
      to: "cards",
      label: "cards",
    },
    {
      to: "employees",
      label: "employees",
    },
  ];

  return (
    <>
      <aside>
        <div className="aside-brand">
          ItSimpleCode <img src={Logo} alt="" />
        </div>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <NavLink to={link.to}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
