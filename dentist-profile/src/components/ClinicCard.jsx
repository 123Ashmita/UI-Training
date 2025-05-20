import React from "react";

const ClinicCard = ({
  location,
  name,
  addressLines = [],
  days,
  time,
  fee,
  mapLink,
}) => (
  <div className="clinic-card">
    <div className="clinic-card-content">
      <h4 className="clinic-location">{location}</h4>
      <p className="clinic-name">{name}</p>

      {/* Address block */}
      <div className="clinic-address-lines">
        {addressLines.map((line, index) => (
          <p key={index} className="clinic-address-line">
            {line}
          </p>
        ))}
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          View on Map
        </a>
      </div>

      {/* Info Row: Days/Time + Fee */}
      <div className="clinic-info-row">
        <div className="clinic-days-time">
          <p className="clinic-days">{days}</p>
          <p className="clinic-time">{time}</p>
        </div>
        <div className="clinic-fee">
          <p>₹{fee} for consultation</p>
        </div>
      </div>

      {/* Book Appointment Button */}
      <button className="book-button">Book Appointment</button>
    </div>
  </div>
);

export default ClinicCard;
