import React from "react";
import AppTable from "../components/AppTable";
import CardStats from "../components/CardStats";

function Dashboard() {
  return (
    <div className="py-24">
      <header className="mb-24">
        <h1 className="text-xl font-medium text-secondary">Dashboard</h1>
      </header>

      <CardStats />

      <AppTable />
    </div>
  );
}

export default Dashboard;
