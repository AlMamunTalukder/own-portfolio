import AboutMe from "../AboutMe";
import Header from "../Header";
import Navbar from "../Navbar";
import ProgrammingLanguage from "../ProgrammingLanguage";
import Projects from "../Projects";
import WorkProcess from "../WorkProcess";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <WorkProcess />
      <ProgrammingLanguage />
      <AboutMe />
    </div>
  );
};
export default Home;
