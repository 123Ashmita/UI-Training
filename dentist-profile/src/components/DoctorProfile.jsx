import React, { useState } from "react";

const DoctorProfile = () => {
  const [showMore, setShowMore] = useState(false);

  const shortText =
    "Dr. Satheesh B is a senior dentist with experience in cosmetic and aesthetic dentistry.He specializes in cosmetic/aesthetic dentistry and has treated over 10,000 patients.";
  const longText = `Dr. Satheesh B is a senior dentist with over 16 years of experience. 
    He specializes in cosmetic/aesthetic dentistry and has treated over 10,000 patients. 
    He believes in painless treatment and modern dental techniques.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

  return (
    <div className="profile-card">
      <img
        src="https://t4.ftcdn.net/jpg/03/10/37/43/360_F_310374365_fiIJLNqEeYVbXO0PpyUauQvZRreCMEdr.jpg"
        alt="Doctor"
      />
      <div className="profile-card-info">
        <h2 className="doctor-name">Dr. Satheesh B</h2>
        <p className="doctor-degree">BDS, Doctor of Dental Surgery (DDS)</p>
        <p className="doctor-experience">🗓️ 16 years experience overall</p>
        <p className="doctor-specialties">
          Cosmetic/Aesthetic Dentist, Dentist, Dental Surgeon
        </p>
        <p className="doctor-rating">👍 73% (1285 votes)</p>

        <p className="doctor-description">
          {showMore ? longText : shortText}
          <button
            onClick={() => setShowMore(!showMore)}
            className="read-more-btn"
          >
            {showMore ? " Show less" : " Read more"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default DoctorProfile;
