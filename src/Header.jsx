import DP from "../src/assets/dp.png";

import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="md:flex md:mt-20 md:gap-28 md:mx-16 lg:flex lg:mt-20 lg:gap-28 lg:mx-16 items-center content-center text-center py-10 gap-6">
      <div className="text-left  lg:pr-14 ">
        <h1 className="text-3xl lg:text-7xl mb-5 pl-6">
          Hello, I’m <br />
          <span className="text-orange-500 md:text-4xl lg:text-6xl">
            Al Mamun Talukder
          </span>
        </h1>

        <h1 className="text-sm lg:text-2xl px-6">
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

        <div className="flex items-center lg:items-left">
          <a
            href="https://drive.google.com/file/d/1tkhqYwbrXNRBS5jdff28NfqI3Q-DuncK/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-success my-5 text-xs ml-14 lg:text-lg"
          >
            My Resume
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
