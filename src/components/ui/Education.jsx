import React from "react";

const Education = ({ institution, degree, year, percentage }) => {
  return (
    <article className="px-4 text-start py-4 border border-borderColor border-orange-300 bg-backgroundColor rounded-xl">
      <h2 className="text-[15px] text-textColor">{institution}</h2>
      <p className="text-[12px] text-black-600 text-textColor">{year}</p>
      <h3 className="text-[15px] text-textColor">{degree}</h3>
      <p className="text-[12px] text-textColor font-bold">{percentage}</p>
    </article>
  );
};

export default Education;
