import DP from "../src/assets/4480087.jpg";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="lg:flex lg:mt-20 lg:gap-28 lg:ml-16 items-center content-center text-center mb-12 ">
      <div className="text-left  lg:pr-3 ">
        <h1 className="text-3xl lg:text-7xl mb-5 pl-6">
          Hello, I’m <br />
          <span className="text-orange-500">Al Mamun Talukder</span>
        </h1>

        <h1 className="text-sm lg:text-3xl pl-6">
          I am a{" "}
          <span className="font-serif text-green-500 font-bold">
            <Typewriter
              words={[
                "Fontend Web Developer",
                "REACT Developer",
                "MERN Stack Web Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <div className="flex items-center lg:items-left">
          <a
            href="../src/assets/Al_Mamun_Talukder_CV.pdf"
            download="Al_Mamun_Talukder_CV.pdf"
          >
            <button className="btn btn-outline btn-success my-5 text-xs ml-14 lg:text-lg ">
              Download Resume
              <FaDownload />
            </button>
          </a>
        </div>
      </div>
      <div className="w-56 pl-20 lg:w-72">
        <img src={DP} alt="Talukder" />
      </div>
    </div>
  );
};

export default Header;
