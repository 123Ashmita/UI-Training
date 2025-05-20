import React from "react";

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = ["Info", "Feedback(87)", "Consult Q&A(10)"];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? "active" : ""}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
