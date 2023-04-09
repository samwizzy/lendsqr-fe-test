import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openDrawer = () => setSidebarOpen((open: boolean) => !open);

  return (
    <div className="flex h-screen overflow-hidden">
      <Drawer sidebarOpen={sidebarOpen} openDrawer={openDrawer} />
      <Sidebar sidebarOpen={sidebarOpen} openDrawer={openDrawer} />

      <div className="relativ flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} openDrawer={openDrawer} />

        <main className="px-4 sm:px-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
