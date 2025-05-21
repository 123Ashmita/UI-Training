import React, { useState } from "react";

// DoctorProfile component receives the `data` prop containing doctor's details.
const DoctorProfile = ({ data }) => {
  // State to toggle between showing short and long description text
  const [showMore, setShowMore] = useState(false);

  return (
    // Container div with flex layout to display profile image and details side by side
    <div className="flex max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      {/* Doctor's Profile Picture */}
      <img
        src={data.imageUrl} // Image URL from the passed data
        alt="Doctor" // Alt text for image
        className="w-24 h-24 rounded-full object-cover mr-6" // Styling: 24x24 size, rounded, object cover
      />

      {/* Doctor's Details */}
      <div className="flex-1">
        {/* Doctor's Name */}
        <h2 className="text-2xl font-semibold text-black">{data.name}</h2>

        {/* Doctor's Qualifications (Degree) */}
        <p className="text-sm text-gray-600">{data.degree}</p>

        {/* Doctor's Experience */}
        <p className="text-sm text-gray-600">{data.experience}</p>

        {/* Doctor's Specialties */}
        <p className="text-sm text-gray-600">{data.specialties}</p>

        {/* Doctor's Rating */}
        <p className="text-sm text-green-500 font-semibold">{data.rating}</p>

        {/* Short or long description of the doctor */}
        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          {showMore ? data.longText : data.shortText}{" "}
          {/* Toggle between shortText and longText based on state */}
          {/* Button to toggle the text */}
          <button
            onClick={() => setShowMore(!showMore)} // Toggle `showMore` state on click
            className="text-blue-500 font-semibold ml-2" // Styling: Blue color, font weight, left margin
          >
            {showMore ? "Show less" : "Read more"}{" "}
            {/* Display "Show less" if longText is visible, else "Read more" */}
          </button>
        </p>
      </div>
    </div>
  );
};

export default DoctorProfile;
