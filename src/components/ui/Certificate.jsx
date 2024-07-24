import React from "react";

const Certificate = ({ name, link }) => {
  return (
    <figure className="flex justify-between items-center px-4 text-start py-4 border border-borderColor rounded-xl bg-backgroundColor">
      <h2 className="text-textColor font-semibold cursor-default">{name}</h2>
      <a target="_blank" href={link} className="button-86">
        View Certification
      </a>
    </figure>
  );
};

export default Certificate;
