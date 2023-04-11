import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../config/routes";
import briefcaseIcon from "/assets/icons/briefcase.svg";
import homeIcon from "/assets/icons/home.svg";
import { HiOutlineChevronDown } from "react-icons/hi";

type IProps = {
  sidebarOpen: boolean;
  openDrawer: (arg: any) => void;
};

function Sidebar(props: IProps) {
  return (
    <aside className="h-screen sidebar overflow-auto">
      <div className="logo-header">
        <Link to="/">
          <img src="/assets/logo.svg" width={144} alt="" />
        </Link>
      </div>
      <nav className="navigation">
        <ul className="">
          <li>
            <a href="" className="justify-between">
              <div className="flex items-center">
                <img src={briefcaseIcon} width={14} alt="org" />
                <span>Switch Organization</span>
              </div>
              <HiOutlineChevronDown />
            </a>
          </li>
          <li>
            <Link to="/dashboard">
              <img src={homeIcon} width={14} alt="home" />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>

        <ul>
          {routes.map((route) => (
            <React.Fragment key={route.title}>
              <li>
                <h3>{route.title}</h3>
              </li>
              {route.data.map((item, i) => (
                <li key={item.name + i}>
                  <Link to={item.path}>
                    <img src={item.icon} width={14} alt="" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
