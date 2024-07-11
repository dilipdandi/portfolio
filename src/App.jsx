import Introduction from "./components/Introduction.jsx";
import Educations from "./components/Educations.jsx";
import Certification from "./components/Certification.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Links from "./components/ui/Links.jsx";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import img from './assets/img.jpg'

function App() {
  return (
    
      <div className="flex gap-2 max-sm:flex-col max-sm:py-4 max-sm:px-2 items-start justify-around h-screen max-sm:h-auto w-full bg-[#181818]">
        {/* <ToastContainer /> */}
        <div className="w-[50%] max-sm:w-full flex flex-col gap-4 px-2 py-2">
          <Introduction />
          <Links />
          {/* <div className="flex flex-col w-full max-sm:w-full border border-activeColor bg-highlightBg rounded-sm px-3 py-2">
          <img src={img} alt="" className="w-full" />
        </div> */}
        </div>
        <div className="h-screen w-[50%] max-sm:w-full overflow-y-auto flex flex-col items-start justify-start gap-4 py-4">
          <Educations />
          <Certification />
          <Projects />
          <Skills />
          <Contact />
          
        </div>
      </div>
  );
}

export default App;
