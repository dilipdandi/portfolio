import { data } from "../data.js";


const Skills = () => {
  const {skills} = data;
  const {interpersonalSkills}=data;
  return (
    <article className="w-full flex flex-col gap-6 bg-highlightBg border border-borderColor px-4 py-4 rounded-lg">
      <h2 className="text-xl font-bold text-textColor">Technical Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap w-fit bg-highlightBg px-4 py-2 border rounded-xl gap-2 items-center  border-borderColor"
            >
              <p className="text-textColor cursor-default">{skill.name}</p>
            </div>
          );
        })}
      </div>
      <hr className="border-borderColor border"/>
      <h2 className="text-xl font-bold text-textColor">
        Interpersonal Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {interpersonalSkills.map((skill, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap w-fit bg-highlightBg px-4 py-2 border border-borderColor rounded-xl gap-2 items-center"
            >
              <p className="text-textColor cursor-default">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Skills;
