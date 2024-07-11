import Certificate from "./ui/Certificate.jsx";

import { data } from "../data.js";

const Certification = () => {
  const { certificates } = data;
  return (
    <article className="w-full flex flex-col gap-2 bg-backgroundColor px-4 py-4 border border-borderColor rounded-xl">
      <h1 className="text-xl font-bold text-textColor">Certificates</h1>
      {certificates.map((item, index) => (
        <Certificate key={index} name={item.name} link={item.link} />
      ))}
    </article>
  );
};

export default Certification;
