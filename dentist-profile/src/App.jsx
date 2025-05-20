import React, { useState } from "react";
import DoctorProfile from "./components/DoctorProfile";
import Tabs from "./components/Tabs";
import ClinicCard from "./components/ClinicCard";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState("Info");

  return (
    <div className="container">
      <DoctorProfile />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "Info" && (
        <>
          <ClinicCard
            location="Marathahalli, Bangalore"
            name="New Surabhi Dental Care"
            addressLines={[
              "243, Sri Ram Temple Rd",
              "Near Vignananagar Bus Stop",
              "Kundalahalli Gate",
              "Bangalore - 560037",
            ]}
            mapLink="https://maps.google.com/?q=243,+Sri+Ram+Temple+Rd"
            days="Mon - Sat"
            time="11:00 AM - 8:00 PM"
            fee={200}
          />

          <ClinicCard
            location="Indiranagar, Bangalore"
            name="New Surabhi Dental Care"
            addressLines={[
              "12, 2nd Cross",
              "CMH Road",
              "Near Metro Station",
              "Bangalore - 560038",
            ]}
            mapLink="https://maps.google.com/?q=12,+2nd+Cross,+CMH+Road"
            fee={250}
          />
        </>
      )}

      {activeTab === "Feedback" && (
        <p>👍 Patients say the doctor is friendly and listens carefully.</p>
      )}

      {activeTab === "Consult Q&A" && (
        <p>❓ Ask health questions and get answers from the doctor.</p>
      )}
    </div>
  );
}

export default App;
