import React from "react";

function LevelCard({ title, completed }) {
  return (
    <div className="level-card">
      <h4>{title}</h4>
      <p>Status: {completed ? "Completed" : "Incomplete"}</p>
    </div>
  );
}

export default LevelCard;
