import DP from "../src/assets/dp.png";

import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="md:flex md:mt-20 md:gap-28 md:mx-16 lg:flex lg:mt-20 lg:gap-28 items-center content-center text-center lg:items-center lg:content-center lg:text-center md:py-10 lg:py-10 gap-6">
      <div className="  items-center content-center text-center lg:items-center lg:content-center lg:text-left">
        <h1 className="text-3xl lg:text-7xl lg:mb-5 ">
          Hello, I’m <br />
          <span className="text-orange-500 md:text-4xl lg:text-6xl">
            Al Mamun Talukder
          </span>
        </h1>

        <h1 className="text-sm lg:text-2xl mt-2">
          I am a{" "}
          <span className="font-serif text-green-500 font-bold">
            <Typewriter
              words={[
                "MERN Stack Web Developer",
                "Frontend Web Developer",
                "REACT Developer",
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

        <div className=" items-center content-center text-center lg:items-center lg:content-center lg:text-left">
          <a
            href="https://drive.google.com/file/d/1tkhqYwbrXNRBS5jdff28NfqI3Q-DuncK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-success my-5 text-xs   lg:text-lg"
          >
            My Resume
          </a>
        </div>
      </div>
      <div className="w-52 lg:pl-20 lg:w-72 ml-16 md:ml-0 lg:ml-0">
        <img src={DP} alt="Talukder" />
      </div>
    </div>
  );
};

export default Header;
