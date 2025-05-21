import React, { useState } from "react";
import DoctorProfile from "./components/DoctorProfile";
import Tabs from "./components/Tabs";
import ClinicCard from "./components/ClinicCard";
import clinicData from "./components/json-object-data/ClinicData";
import doctorData from "./components/json-object-data/DoctorData";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("Info"); // Initial tab is "Info"

  return (
    <div className="container mx-auto p-6">
      {" "}
      {/* Container with padding and centered content */}
      {/* Pass doctor data to DoctorProfile component */}
      <DoctorProfile data={doctorData} />
      {/* Tabs to navigate between different sections */}
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      {/* Conditional rendering based on active tab */}
      {activeTab === "Info" && (
        <>
          {/* Render each clinic card based on clinicData */}
          {clinicData.map((clinic, index) => (
            <ClinicCard key={index} {...clinic} />
          ))}
        </>
      )}
      {/* Feedback tab content */}
      {activeTab === "Feedback" && (
        <div className="feedback-message mt-4 p-6 bg-green-50 text-green-700 rounded-lg shadow-md max-w-2xl mx-auto">
          {/* Display feedback message */}
          <p className="text-lg font-semibold">
            👍 Patients say the doctor is friendly and listens carefully.
          </p>
        </div>
      )}
      {/* Consult Q&A tab content */}
      {activeTab === "Consult Q&A" && (
        <div className="qna-message mt-4 p-6 bg-blue-50 text-blue-700 rounded-lg shadow-md max-w-2xl mx-auto">
          {/* Display Q&A message */}
          <p className="text-lg font-semibold">
            ❓ Ask health questions and get answers from the doctor.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
