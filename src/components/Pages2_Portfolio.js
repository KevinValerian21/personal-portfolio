import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar2_PortfolioPages } from "./NavBar2_PortfolioPages";
import { Projects } from "./Projects";
import { Footer } from './Footer';
import { Contact } from "./Contact";



function Pages2_Portfolio() {
  return (
    <div className="App">
      <NavBar2_PortfolioPages />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default Pages2_Portfolio;