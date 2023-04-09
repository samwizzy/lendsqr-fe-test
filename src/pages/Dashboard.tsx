import React from "react";
import AppTable from "../components/AppTable";
import CardStats from "../components/CardStats";

function Dashboard() {
  return (
    <div className="py-8 sm:py-16">
      <header className="mb-4 sm:mb-8">
        <h1 className="text-xl font-medium text-secondary">Dashboard</h1>
      </header>

      <CardStats />

      <AppTable />
    </div>
  );
}

export default Dashboard;
