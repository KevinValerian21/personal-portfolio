import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar1_HomePages } from "./NavBar1_HomePages";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Footer } from './Footer';
import { Contact } from "./Contact";



function Pages1_Home() {
  return (
    <div className="App">
      <NavBar1_HomePages />
      <Banner />
      <Skills />
      <Contact />
      <Footer />

    </div>
  );
}

export default Pages1_Home;