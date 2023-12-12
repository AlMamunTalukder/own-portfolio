import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import ProgrammingLanguage from "../ProgrammingLanguage";
import Projects from "../Projects";
import WorkProcess from "../WorkProcess";

const Home = () => {
  return (
    <div className="space-y-12">
      <Navbar />
      <Header />
      <Projects />
      <WorkProcess />
      <ProgrammingLanguage />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
};
export default Home;
