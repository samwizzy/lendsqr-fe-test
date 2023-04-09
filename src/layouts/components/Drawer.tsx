import React, { useRef } from "react";
import clsx from "clsx";
import { routes } from "../../config/routes";
import briefcaseIcon from "/assets/icons/briefcase.svg";
import homeIcon from "/assets/icons/home.svg";
import { MdArrowBack } from "react-icons/md";

type IProps = {
  sidebarOpen: boolean;
  openDrawer: (arg: any) => void;
};

function Drawer(props: IProps) {
  const { sidebarOpen, openDrawer } = props;

  const drawerRef = useRef<null | HTMLElement>(null);

  return (
    <aside className={clsx("drawer", { "open-drawer": sidebarOpen })} ref={drawerRef}>
      <div className="logo-header">
        <img src="/assets/logo.svg" alt="" />
        <span className="hamburger" onClick={openDrawer}>
          <MdArrowBack />
        </span>
      </div>
      <nav className="navigation">
        <ul className="">
          <li>
            <a href="">
              <img src={briefcaseIcon} width={14} alt="org" />
              <span>Switch Organization</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src={homeIcon} width={14} alt="home" />
              <span>Dashboard</span>
            </a>
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
                  <a href="">
                    <img src={item.icon} width={14} alt="" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Drawer;
