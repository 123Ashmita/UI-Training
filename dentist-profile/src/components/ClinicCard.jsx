import React from "react";

// ClinicCard component receives various props like location, name, addressLines, days, time, fee, and mapLink
const ClinicCard = ({
  location,
  name,
  addressLines = [], // Default to an empty array if addressLines is not provided
  days,
  time,
  fee,
  mapLink,
}) => (
  // Main container for the clinic card, styled with Tailwind CSS
  <div className="bg-white pb-20 pt-6 pl-6 pr-8 rounded-lg shadow-md max-w-4xl mx-auto mb-6 relative">
    {/* Clinic location */}
    <h4 className="text-xl font-semibold text-black mb-3">{location}</h4>

    {/* Clinic name with a bold cyan color */}
    <p className="text-sm font-bold text-cyan-500 mb-4">{name}</p>

    {/* Address lines rendering dynamically */}
    <div className="mt-4 mb-4">
      {addressLines.map((line, index) => (
        // Render each address line in gray color
        <p key={index} className="text-sm text-gray-600">
          {line}
        </p>
      ))}

      {/* Link to view the clinic on a map */}
      <a
        href={mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        View on Map
      </a>
    </div>

    {/* Clinic hours and consultation fee */}
    <div className="flex justify-between items-center -mt-28 mb-4">
      <div className="flex-1 text-center">
        {/* Days of operation */}
        <p className="text-sm">{days}</p>
        {/* Clinic working hours */}
        <p className="text-sm">{time}</p>
      </div>

      <div className="text-right">
        {/* Consultation fee */}
        <p className="text-sm">₹{fee} for consultation</p>
      </div>
    </div>

    {/* Button to book an appointment, positioned at the bottom-right */}
    <button className="absolute bottom-4 right-4 bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 mt-40">
      Book Appointment
    </button>
  </div>
);

export default ClinicCard;
