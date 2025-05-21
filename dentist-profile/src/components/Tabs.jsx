import React from "react";

// Tabs component receives `activeTab` (currently active tab) and `onTabChange` (function to change the active tab) as props
const Tabs = ({ activeTab, onTabChange }) => {
  // Array of tabs with their name and optional count (for Feedback and Consult Q&A)
  const tabs = [
    { name: "Info", count: "" }, // Info tab, no count
    { name: "Feedback", count: "(87)" }, // Feedback tab, showing 87 count
    { name: "Consult Q&A", count: "(10)" }, // Consult Q&A tab, showing 10 count
  ];

  return (
    // Container for tabs, using flex to display them horizontally
    <div className="flex justify-left space-x-6 border-b pb-4 mx-auto max-w-4xl">
      {/* Map through each tab and create a button */}
      {tabs.map((tab) => (
        <button
          key={tab.name} // Each button is identified by tab name
          className={`py-2 px-4 text-lg font-medium cursor-pointer transition-all duration-200 ease-in-out ${
            activeTab === tab.name // If this tab is active, apply the active styles
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500 hover:bg-blue-50" // If not active, apply default styles with hover effect
          }`}
          onClick={() => onTabChange(tab.name)} // When a tab is clicked, set it as the active tab
        >
          {tab.name} {/* Display the tab's name */}
          {/* If the tab has a count (Feedback or Consult Q&A), display it */}
          {tab.count && (
            <span className="text-sm text-gray-500">{tab.count}</span> // Display count in smaller text with a gray color
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
