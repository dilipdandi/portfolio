import React from "react";

const Project = ({ name, gitLink, link }) => {
  return (
    <figure className="flex justify-between items-center text-center bg-firstPrimary rounded-sm bg-highlightBg border border-backgroundColor px-2 py-1">
      <h2 className="text-[#d4d4d4] uppercase decoration-secondary font-semibold cursor-default">
        {name}
      </h2>
     <div className="flex gap-4">
      <a
        target="_blank"
        href={gitLink}
        className="button-86"
      >
        Github Link
      </a>
     </div>
    </figure>
  );
};

export default Project;
