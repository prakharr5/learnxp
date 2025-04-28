import React from "react";
import Sidebar from "../components/Sidebar";
import LevelCard from "../components/LevelCard";
import { levels } from "../utils/data";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Your Learning Levels</h2>
        <div className="levels-grid">
          {levels.map((level) => (
            <LevelCard key={level.id} title={level.title} completed={level.completed} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
