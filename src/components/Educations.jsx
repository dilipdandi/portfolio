import Education from "./ui/Education";

import { data } from "../data.js";

const Educations = () => {
  const { education } = data;
  return (
    <section className="w-full py-4 px-4 bg-backgroundColor border border-borderColor rounded-xl">
      <h1 className="text-2xl font-bold mb-6 text-textColor">Education</h1>
      {education.map((edu, index) => (
        <figure key={index} className="mb-6">
          <Education
            institution={edu.institution}
            degree={edu.degree}
            year={edu.year}
            percentage={edu.percentage}
          />
        </figure>
      ))}
    </section>
  );
};

export default Educations;
